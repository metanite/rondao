const unlocalizedPages = ["blog", "sr", "legal"]

const regexFirstPathElement = /^\/([^\/]*)/

function getFirstPathElement(path){
	return path.match(regexFirstPathElement)[1]
}

function unlocalizedPageCheck(path){
	if(!path || path.includes("/blog/pressroom")){ return false }

	let firstPathEl = getFirstPathElement(path)
	
	return unlocalizedPages.includes(firstPathEl)
}

exports.unlocalizedPages = unlocalizedPages
exports.regexFirstPathElement = regexFirstPathElement
exports.getFirstPathElement = getFirstPathElement
exports.unlocalizedPageCheck = unlocalizedPageCheck