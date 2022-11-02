const _ = require(`lodash`)
const Promise = require(`bluebird`)
const slash = require(`slash`)


const path = require(`path`)
const locales = require(`./config/i18n`)
const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
  createPageName,
  getPageTranslations,
  getPageMetaData,
  groupProjectsByTrack,
  getNextPreviousProject,
  setNextPreviousJudges,
  setNextPreviousVideos,
  setNextPreviousEvents
} = require(`./src/utils/gatsby-node-helpers`)
const DomParser = require('dom-parser');

const { unlocalizedPageCheck } = require('./src/utils/unlocalizedPageCheck')

const POSTS_PER_PAGE = 10;

// const de = require('./config/translations/de.json')
const en = require('./config/translations/en.json')
// const es = require('./config/translations/es.json')
// const fr = require('./config/translations/fr.json')
// const hi = require('./config/translations/hi.json')
// const it = require('./config/translations/it.json')
// const ja = require('./config/translations/ja.json')
// const ko = require('./config/translations/ko.json')
// const nl = require('./config/translations/nl.json')
// const pl = require('./config/translations/pl.json')
// const pt_br = require('./config/translations/pt_br.json')
// const pt = require('./config/translations/pt.json')
// const ru = require('./config/translations/ru.json')
// const tl = require('./config/translations/tl.json')
// const tr = require('./config/translations/tr.json')
// const zh_cn = require('./config/translations/zh_cn.json')
// const zh_tw = require('./config/translations/zh_tw.json')

const meta = require('./config/meta.json')

const translations = {
  // de:de,
  en:en,
  // es:es,
  // fr:fr,
  // hi:hi,
  // it:it,
  // ja:ja,
  // ko:ko,
  // nl:nl,
  // pl:pl,
  // pt_br:pt_br,
  // pt:pt,
  // ru:ru,
  // tl:tl,
  // tr:tr,
  // zh_cn:zh_cn,
  // zh_tw:zh_tw
}

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)


  // Grab the keys ('en','de',...) of locales and map over them
  Object.keys(locales).map(lang => {
    
    //prevent creation of localized blog pages
    if( unlocalizedPageCheck(page.path) && lang !== "en"){
      return 
    }

    //prevent creation of duplicate 404 pages
    if( page.path === "/404/"){
      return
    }

    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`

    let unlocalizedPath = (page.path)

    // PageName must match key name in .json translation
    let pageName = createPageName(page.path)
    if(localizedPath.includes('404.html')){
      pageName = "404"
      unlocalizedPath = page.path
    }
    let pageTranslation = getPageTranslations(lang, pageName, translations)
    let metaData = getPageMetaData(lang, pageName, meta)

    let createPageObj = {
        // Pass on everything from the original page
        ...page,
        // Since page.path returns with a trailing slash (e.g. "/de/")
        // We want to remove that
        path: removeTrailingSlash(localizedPath),
        // Pass in the locale as context to every page
        // This context also gets passed to the src/components/layout file
        // This should ensure that the locale is available on every page
        context: {
          ...page.context,
          locale: lang,
          dateFormat: locales[lang].dateFormat,
          unlocalizedPath: page.path,
          t: pageTranslation,
          meta: metaData,
          modifiedTime: dateTime,
          pageName:pageName
        },
      }

    return createPage(createPageObj)
  })
}

// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWpPage {
            edges {
              node {
                id
                content
                slug
                status
                title
                uri
                template {
                  ... on WpDefaultTemplate {
                    templateName
                  }
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWpPage.edges, edge => {

          let pageMeta = {
            "title": `${edge.node.title}`,
            "description":"TronDao Hackathon 2022",
            "keywords":"tron, crypto"
          }
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: edge.node.uri,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
              locale: 'en',
              unlocalizedPath: edge.node.uri,
              meta: pageMeta,
              slug: edge.node.slug,
              modifiedTime: dateTime,
            },
          })
        })
      })
      // ==== END PAGES ====

      // ==== Blog directory pages ====
      .then(() => {
        graphql(
          `
          {
            allWpPost (sort: { fields: [date] order: [DESC] }){
              totalCount
            }
          }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/blogDirectory.js")
          const numPosts = result.data.allWpPost.totalCount
          const numPages = Math.ceil(numPosts/POSTS_PER_PAGE)

          for(let i = 0; i < numPages; i++){

            let skip = i * POSTS_PER_PAGE
            let limit = POSTS_PER_PAGE
            let pageNum = i+1
            let nextPageNum = (pageNum + 1).toString();
            let previousPageNum = (pageNum -1).toString();

            nextPageNum = (nextPageNum > numPages) ? null : nextPageNum
            previousPageNum = (previousPageNum < 1 ) ? null : previousPageNum

            const nextPagePath = (nextPageNum) ?  '/blog/page/'+nextPageNum+'/' : null
            const previousPagePath = (previousPageNum) ?  ((previousPageNum === '1') ? "/blog/" : '/blog/page/'+previousPageNum+'/'): null

            let pageNumUrl = (i === 0) ? "/" : '/page/'+pageNum+'/'

            let path = '/blog' + pageNumUrl
            path = removeTrailingSlash(path)

            let postMeta = {
              title: `blog`,
              description: 'blog description',
              "keywords":"tron, crypto, trondao, blog"
            };

            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                locale: 'en',
                unlocalizedPath: path,
                meta: postMeta,
                modifiedTime: dateTime,
                previous: previousPagePath,
                next: nextPagePath,
                limit,
                skip
              },
            })
          }
          resolve()
        })
      })
    // ==== END Blog directory pages ====

        // ==== Conferences directory pages ====
        .then(() => {
          graphql(
          `
          {
            allWpEvent(filter: {eventinfo: {isconference: {eq: true}}}, sort: { fields: [date] order: [DESC] }) {
              totalCount
            }
          }
          `
          ).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }
            const POSTS_PER_PAGE_PRESS = 9;
            const postTemplate = path.resolve("./src/templates/conferences.js")
            const numPosts = result.data.allWpEvent.totalCount
            const numPages = Math.ceil(numPosts/POSTS_PER_PAGE_PRESS)

            for(let i = 0; i < numPages; i++){

              let skip = i * POSTS_PER_PAGE_PRESS
              let limit = POSTS_PER_PAGE_PRESS
              let pageNum = i+1
              let nextPageNum = (pageNum + 1).toString();
              let previousPageNum = (pageNum -1).toString();

              nextPageNum = (nextPageNum > numPages) ? null : nextPageNum
              previousPageNum = (previousPageNum < 1 ) ? null : previousPageNum

              const nextPagePath = (nextPageNum) ?  '/events/conferences/page/'+nextPageNum+'/' : null
              const previousPagePath = (previousPageNum) ?  ((previousPageNum === '1') ? "/events/conferences/" : '/events/conferences/page/'+previousPageNum+'/'): null

              let pageNumUrl = (i === 0) ? "/" : '/page/'+pageNum+'/'

              let path = '/events/conferences' + pageNumUrl
              path = removeTrailingSlash(path)

              let postMeta = {
                title: `conferences`,
                description: 'conferences description',
                "keywords":"tron, crypto, trondao, conferences, events"
              };

              createPage({
                path:path,
                component: slash(postTemplate),
                context: {
                  locale: 'en',
                  unlocalizedPath: path,
                  meta: postMeta,
                  modifiedTime: dateTime,
                  previous: previousPagePath,
                  next: nextPagePath,
                  limit,
                  skip
                },
              })
            }
            resolve()
          })
        })
        // ==== Conferences directory pages ====

        // ==== Press directory pages ====
        .then(() => {
          graphql(
              `
          {
            allWpArticle(sort: { fields: [date] order: [DESC] }) {
              totalCount
            }
          }
          `
          ).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }
            const POSTS_PER_PAGE_PRESS = 3;
            const postTemplate = path.resolve("./src/templates/press.js")
            const numPosts = result.data.allWpArticle.totalCount
            const numPages = Math.ceil(numPosts/POSTS_PER_PAGE_PRESS)

            for(let i = 0; i < numPages; i++){

              let skip = i * POSTS_PER_PAGE_PRESS
              let limit = POSTS_PER_PAGE_PRESS
              let pageNum = i+1
              let nextPageNum = (pageNum + 1).toString();
              let previousPageNum = (pageNum -1).toString();

              nextPageNum = (nextPageNum > numPages) ? null : nextPageNum
              previousPageNum = (previousPageNum < 1 ) ? null : previousPageNum

              const nextPagePath = (nextPageNum) ?  '/press/page/'+nextPageNum+'/' : null
              const previousPagePath = (previousPageNum) ?  ((previousPageNum === '1') ? "/press/" : '/press/page/'+previousPageNum+'/'): null

              let pageNumUrl = (i === 0) ? "/" : '/page/'+pageNum+'/'

              let path = '/press' + pageNumUrl
              path = removeTrailingSlash(path)

              let postMeta = {
                title: `press`,
                description: 'press description',
                "keywords":"tron, crypto, trondao, press"
              };

              createPage({
                path:path,
                component: slash(postTemplate),
                context: {
                  locale: 'en',
                  unlocalizedPath: path,
                  meta: postMeta,
                  modifiedTime: dateTime,
                  previous: previousPagePath,
                  next: nextPagePath,
                  limit,
                  skip
                },
              })
            }
            resolve()
          })
        })
        // ==== Press Blog directory pages ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWpPost (sort: {order: DESC, fields: date}){
                edges {
                  node {
                    id
                    title
                    excerpt
                    terms {
                      nodes {
                        name
                      }
                    }
                    uri
                    slug
                    status
                    template {
                      ... on WpDefaultTemplate {
                        templateName
                      }
                    }
                  }
                  previous {
                    uri
                  }
                  next {
                    uri
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWpPost.edges, edge => {
            // `description` content has an extra line feed in the end and <p> </p> tags
            let description = edge.node.excerpt
              .replace(/\n/gm, ``)
              .replace(`<p>`, ``)
              .replace(`</p>`, ``);
            let keywords = edge.node.terms.nodes
              .map(i => i.name.trim())
              .join(", ");

            let postMeta = {
              title: `${edge.node.title}`,
              description,
              keywords
            };

            let path = '/blog' + decodeURI(edge.node.uri)
            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                locale: 'en',
                unlocalizedPath: `/blog${edge.node.uri}`,
                meta: postMeta,
                slug: edge.node.slug,
                modifiedTime: dateTime,
                previous: edge.previous,
                next: edge.next,
              },
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====

     // ==== JUDGES (CPT AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWpJudge(sort: {order: ASC, fields: menuOrder}) {
                edges {
                  node {
                    id
                    uri
                    slug
                    title
                    menuOrder
                  }
                  next {
                    uri
                  }
                  previous {
                    uri
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          setNextPreviousJudges(result.data.allWpJudge.edges)

          const postTemplate = path.resolve("./src/templates/judge.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWpJudge.edges, edge => {

            let postMeta = {
              "title": `${edge.node.title}`,
              "description":"TronDao Hackathon 2022 Judge",
              "keywords":"tron, crypto, hackathon, judge"
            }

            let path = '/hackathon' + decodeURI(edge.node.uri)

            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                locale: 'en',
                unlocalizedPath: path,
                meta: postMeta,
                slug: edge.node.slug,
                modifiedTime: dateTime,
                next: edge.next,
                previous: edge.previous
              },
            })
          })
          resolve()
        })
      })
    // ==== END JUDGES ====

     // ==== PARTNERS (CPT AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWpPartner {
                edges {
                  node {
                    id
                    uri
                    slug
                    title
                  }
                  next {
                    uri
                  }
                  previous {
                    uri
                  }
                }
              }         
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/partner.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWpPartner.edges, edge => {

            let path = '/hackathon' + decodeURI(edge.node.uri)

            let postMeta = {
              "title": `${edge.node.title}`,
              "description":"TronDao Hackathon Partner 2022",
              "keywords":"tron, crypto, hackathon, partner"
            }

            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                locale: 'en',
                unlocalizedPath: path,
                meta: postMeta,
                slug: edge.node.slug,
                next: edge.next,
                previous: edge.previous
              },
            })
          })
          resolve()
        })
      })
    // ==== END PARTNERS ====

     // ==== PROJECTS (CPT AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWpProject {
                edges {
                  node {
                    id
                    uri
                    slug
                    title
                    hackathonSeasonsAndTracks {
                      hackathonSeason
                      hackathonTrack
                    }
                    hackathonProjectInfo {
                      projectAWinner
                      winnersPrize
                    }
                  }
                  next {
                    uri
                  }
                  previous {
                    uri
                  }
                }
              }       
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/project.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          // let groupedProjectsByTrack = groupProjectsByTrack(result.data.allWpProject.edges)
          _.each(result.data.allWpProject.edges, edge => {

            let path = '/hackathon' + decodeURI(edge.node.uri)
            let titleSplit = `${edge.node.title}`.split(" ");
            let metaTitle = titleSplit[0] + " Hackathon " + titleSplit[1] + " " + titleSplit[2] + " | TRONDAO";
            let postMeta = {
              "title": metaTitle,
              "description":"TronDao Hackathon Project 2022",
              "keywords":"tron, crypto, hackathon"
            }

            let placement = edge.node.hackathonProjectInfo.winnersPrize
            let track = edge.node.hackathonSeasonsAndTracks.hackathonTrack[0]

            // const [next, previous] = getNextPreviousProject(groupedProjectsByTrack[track], placement)
            const next = undefined;
            const previous = undefined;
            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                locale: 'en',
                unlocalizedPath: path,
                meta: postMeta,
                slug: edge.node.slug,
                next,
                previous
              },
            })
          })
          resolve()
        })
      })
    // ==== END PROJECTS ====

     // ==== PODCASTS (CPT AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWpPodcast(sort: { fields: [podcastInfo___podcastDate] order: [DESC] }) {
                edges {
                  node {
                    podcastInfo {
                      podcastDate
                      podcastGuests {
                        ... on WpJudge {
                          title
                        }
                      }
                      podcastSynopsis
                      podcastTime
                      podcastUrl
                      podcastImage {
                        sourceUrl
                      }
                    }
                    title
                    id
                    uri
                    slug
                    status
                  }
                  next {
                    title
                    uri
                    slug
                  }
                  previous {
                    slug
                    title
                    uri
                  }
                }
              }   
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/podcast.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWpPodcast.edges, (edge) => {

            let path = '' + decodeURI(edge.node.uri)

            let postMeta = {
              "title": `${edge.node.title}`,
              "description":"TronDao Hackathon Podcast 2022",
              "keywords":"tron, crypto, hackathon, podcast"
            }

            createPage({
              path:path,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                locale: 'en',
                unlocalizedPath: path,
                meta: postMeta,
                slug: edge.node.slug,
                next: edge.next, 
                previous: edge.previous,
              },
            })
          })
          resolve()
        })
      })
    // ==== END PODCASTS ====


        // ==== VIDEOS (CPT AND ACF) ====
        .then(() => {
          graphql(
           `
            {
              allWpVideo (sort: {order: ASC, fields: menuOrder}) {
                edges {
                  node {
                    id
                    uri
                    slug
                    title
                    videoInfo {
                      title
                      description
                      url
                    }
                  }
                  next {
                    uri
                  }
                  previous {
                    uri
                  }
                }
              }
            }
          `
          ).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }
            setNextPreviousVideos(result.data.allWpVideo.edges)

            const postTemplate = path.resolve("./src/templates/video.js")
            // We want to create a detailed page for each
            // post node. We'll just use the WordPress Slug for the slug.
            // The Post ID is prefixed with 'POST_'
            _.each(result.data.allWpVideo.edges, edge => {

              let postMeta = {
                "title": `${edge.node.title}`,
                "description":"TronDao Hackathon 2022 Video",
                "keywords":"tron, crypto, hackathon, video"
              }

              let path = decodeURI(edge.node.uri)

              createPage({
                path:path,
                component: slash(postTemplate),
                context: {
                  id: edge.node.id,
                  locale: 'en',
                  unlocalizedPath: path,
                  meta: postMeta,
                  slug: edge.node.slug,
                  modifiedTime: dateTime,
                  next: edge.next,
                  previous: edge.previous
                },
              })
            })
            resolve()
          })
        })
    // ==== END VIDEOS ====

        // ==== EVENTS (CPT AND ACF) ====
        .then(() => {
          graphql(
            `
            {
              allWpEvent(sort: {order: ASC, fields: eventinfo___date})  {
                edges {
                  node {
                    uri
                    title
                    slug
                    eventinfo {
                      date
                      video
                      summary
                      images {
                        sourceUrl
                      }
                    }
                  }
                  next {
                    uri
                  }
                  previous {
                    uri
                  }
                }
              }
            }
          `
          ).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }
            setNextPreviousEvents(result.data.allWpEvent.edges)

            const postTemplate = path.resolve("./src/templates/event.js")
            // We want to create a detailed page for each
            // post node. We'll just use the WordPress Slug for the slug.
            // The Post ID is prefixed with 'POST_'
            _.each(result.data.allWpEvent.edges, edge => {

              let postMeta = {
                "title": `${edge.node.title}` + " | TRONDAO",
                "description":"TronDao Hackathon 2022 Conferences Events",
                "keywords":"tron, crypto, hackathon, Conferences, Events"
              }

              let path = decodeURI(edge.node.uri)

              createPage({
                path:path,
                component: slash(postTemplate),
                context: {
                  id: edge.node.id,
                  locale: 'en',
                  unlocalizedPath: path,
                  meta: postMeta,
                  slug: edge.node.slug,
                  modifiedTime: dateTime,
                  next: edge.next,
                  previous: edge.previous
                },
              })
            })
            resolve()
          })
        })
    // ==== END EVENTS ====

  })
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//      resolve: {
//         fallback: {
//             stream: require.resolve("stream-browserify"),
//             process: require.resolve("process/browser"),
//         },
//       },
//     })
// }
