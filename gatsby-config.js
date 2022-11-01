require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')
//siteUrl defaults to http://staging.bittorrent.com if env variable not specified
//instead of `gatsby develop` or `gatsby build`
//use `SITEURL=https://www.bittorrent.com npm run develop` or `SITEURL=https://www.bittorrent.com npm run build`
const siteUrl = (process.env.SITEURL) ? process.env.SITEURL : 'https://dev.trondao.org'
const siteAddress = new URL(siteUrl);

module.exports = {
  siteMetadata: {
      siteUrl: siteUrl,
      title: `blog`,
    },
  plugins: [
    `gatsby-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
    resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/*/404*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
              pageContext
            }
          }

          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                absolutePath
              }
            }
          }
        }`,
        resolveSiteUrl: ({site}) => {
          return site.siteMetadata.siteUrl
        },
        resolvePages: ({
          site: { siteMetadata: { siteUrl }},
          allSitePage: { nodes: allPages },
          allFile
        }) => {
          allPages.forEach((page, i) => {

            allFile.edges.forEach(({ node }) => {

              let unpath = page.pageContext.unlocalizedPath
              unpath = unpath.slice(0, -1)
              var abspath = node.absolutePath
              var re = new RegExp(unpath, 'g');

              if (abspath.match(re)) {
                if(node.fields){
                  lastmod = node.fields.gitLogLatestDate
                  page.pageContext.lastmod = lastmod
                }
              }

              page.pageContext.url = siteUrl + page.path

            })
          })
          return allPages
        },
        serialize: ({ path, pageContext }) => {
          var priority = 0.7
          let lastmod = pageContext.modifiedTime
          if(path === "/" || path === "/hackathon/"){
            priority = 1
          }

          return {
            url: pageContext.url,
            lastmod: pageContext.lastmod,
            changefreq: `daily`,
            priority: priority,
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl+'/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', disallow: [''] }]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://cms.trondao.org/graphql`,
        type: {
          MediaItem: {
            createFileNodes: false,
          },
        },
        html: {
          useGatsbyImage: false,
          createStaticFiles: false,
        },
        excludedRoutes: [
          "/MediaItem",
            ]
      },
    },
    {
      resolve: `gatsby-transformer-gitinfo`,
      options: {
        include: /\.js$/i, // Only .js files
      },
    },
    {
     resolve: `gatsby-plugin-s3`,
     options: {
        bucketName: siteAddress.hostname,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        acl: null
     },
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: 'G-DF7RM59J97',
        },
        tagmanager: {
          id: 'GTM-W7BGN35',
        },
        analytics: {
          id: 'G-DF7RM59J97',
          config: {
            anonymize_ip: true,
          }
        },
        optimize: {
          id: 'OPT-53FSQXB',
          activateOn: 'observer',
          timeout: 4000
        },
        includeInDevelopment: true
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      }
    },
  ],
}
