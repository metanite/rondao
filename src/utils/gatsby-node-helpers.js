// Use a little helper function to remove trailing slashes from paths
exports.removeTrailingSlash = path =>
  path === `/` ? path : path

exports.localizedSlug = ({ isDefault, locale, slug }) =>
  isDefault ? `/${slug}` : `/${locale}/${slug}`

// From lodash:
// https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
exports.findKey = (object, predicate) => {
  let result
  if (object == null) {
    return result
  }
  Object.keys(object).some(key => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
    return false
  })
  return result
}

exports.createPageName = (path) => {
  if (path === '/'){
    return "index"
  }
  let pageName = path.substring(1, path.length - 1)
  pageName = pageName.replace(/\//g, "_")
  return pageName
}

exports.getPageTranslations = (locale , pageName, translations) => {
  let localeTranslation = translations[locale];
  let pageTranslation = localeTranslation[pageName]
  return pageTranslation
}

exports.getPageMetaData = (locale ,pageName, meta) => {
  let langMetaData = (locale in meta) ? meta[locale] : meta["en"]
  let pageMetaData = (pageName in langMetaData) ? langMetaData[pageName] : langMetaData["index"]
  return pageMetaData
}

exports.groupProjectsByTrack = (edges) => {
  let returnObj = {
    Web3: [],
    NFT: [],
    DeFi: [],
    GameFi: []
  }
  edges.forEach((edge) => {
    let track = edge.node.hackathonSeasonsAndTracks.hackathonTrack[0]
    returnObj[track].push(edge.node)
  })

  return returnObj
}

exports.getNextPreviousProject = (nodes, placement) => {
  let nextKey = undefined
  let previousKey = undefined
  switch(placement) {
    case 'Grand Prize':
      nextKey = '2nd Place'
      previousKey = undefined
      break;
    case '2nd Place':
      nextKey = '3rd Place'
      previousKey = 'Grand Prize'
      break;
    case '3rd Place':
      nextKey = '4th Place'
      previousKey = '2nd Place'
      break;
    case '4th Place':
      nextKey = '5th Place'
      previousKey = '3rd Place'
      break;
    case '5th Place':
      nextKey = undefined
      previousKey = '4th Place'
      break;
    default:
      break;
  }

  let next = undefined;
  let previous = undefined
  for(let i = 0; i < nodes.length; i++) {
    if(nodes[i].hackathonProjectInfo.winnersPrize === nextKey){
      next = nodes[i]
      continue
    }
    if(nodes[i].hackathonProjectInfo.winnersPrize === previousKey){
      previous = nodes[i]
      continue
    }
  }

  return [next, previous]
}

exports.setNextPreviousJudges = (edges) => {
  edges.forEach((edge, i) => {
    edge.previous = (edges[i-1]) ? edges[i-1].node : null
    edge.next = (edges[i+1]) ? edges[i+1].node : null
  })
}

exports.setNextPreviousVideos = (edges) => {
  edges.forEach((edge, i) => {
    edge.previous = (edges[i-1]) ? edges[i-1].node : null
    edge.next = (edges[i+1]) ? edges[i+1].node : null
  })
}

exports.setNextPreviousEvents= (edges) => {
  edges.forEach((edge, i) => {
    edge.previous = (edges[i-1]) ? edges[i-1].node : null
    edge.next = (edges[i+1]) ? edges[i+1].node : null
  })
}