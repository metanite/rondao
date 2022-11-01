import React from "react"
import LocalizedLink from "../components/localizedLink"
import { Link } from "gatsby"


const reactStringReplace = require('react-string-replace');
const regex = /<\s*[^>]*>(.*?)<\s*[^>]*>/
const localizedLinkRegex = /<(?:LocalizedLink|Link)[^>]*>([^<]+)<\/(?:LocalizedLink|Link)>/g
const toRegex = /to\s*=\s*["']\s*(.*?)\s*["']/
const classRegex =/[class|className]\s*=\s*["']\s*(.*?)\s*["']/
const innerTextRegex = />\s*([^<]+)\s*</
const classNameRegex = /\b(className\s*=\s*")/
const linkTypeRegex = /<(?:LocalizedLink|Link)[^>]*>(?:[^<]+)<\/(LocalizedLink|Link)>/

function useTranslations(text) {

  //if not a pageText object, 
  //return function to process key-string 
  if(typeof text === "undefined"){
    return returnHTML
  }

  //return function to handle translated value-string
  //process key-string if value is undefined or empty
  //otherwise process value-string
  return function(key){
  	if(typeof text[key] === "undefined" || text[key] === ""){
      return returnHTML(key)
  	}
    let translatedString = text[key]
    return returnHTML(translatedString)
  }
}

export default useTranslations

/*
returnHTML processes strings to handle html tags and LocalizedLink tags 
*/

function returnHTML(string){

    //return translation if there are no html tags
    var hasTags = string.match(regex)
    if(!hasTags){ return string }

    var hasLinkTags = string.match(localizedLinkRegex)

    //If the string has html tags, convert classNames -> class
    if(!hasLinkTags){ 
      let classString = string.replace(classNameRegex, 'class="')
      var innerHTML = <span dangerouslySetInnerHTML={{__html: classString}} />
      return innerHTML
    }

    //If string contains LocalizedLink tags
    //parse string for LocalizedLink data
    //create localizedLink component
    //place component back into string
    var linkTags = []
    hasLinkTags.forEach((tag, i ) => {
      if(tag.match(toRegex) === null){
        throw new Error("missing 'to' prop in link tag")
      } 

      let to = tag.match(toRegex)[1]
      let innerText = tag.match(innerTextRegex)[1]

      if (tag.match(classRegex)){
        var className = tag.match(classRegex)[1]
      }

      let isLocalizedLinkTag = tag.match(linkTypeRegex)[1] === "LocalizedLink"
      let link = (isLocalizedLinkTag) ? 
        <LocalizedLink key={i} to={to} className={className}>{innerText}</LocalizedLink> :
        <Link key={i} to={to} className={className}>{innerText}</Link>
      linkTags.push(link)
    })

    var stringReplaced = ''
    var j = -1

    stringReplaced= reactStringReplace(string, localizedLinkRegex, (match, i) => {
      j+=1
      return linkTags[j]
    });

    stringReplaced.forEach((substring, i)=> {
      if(typeof substring === "string"){
        stringReplaced[i] = <span key={substring} dangerouslySetInnerHTML={{__html: substring}} />
      }
    })

    return stringReplaced
}

  /*

  TO ADD PAGE TRANSLATIONS

  -add translations json object to json files in ./config/translations
  -json object key must match the page's unique pageName which is 
  based on the UNLOCALIZED url path and the following rules:

    - remove preceding and trailing slashes
    - replace '/' with '_' 

  ie 

  url -> pageName

  http://0.0.0.0:8000/legal/copyright -> legal_copyright
  http://0.0.0.0:8000/de/products/win/bittorrent-web-free -> products_win_bitorrent-web-free

  *special pageName cases: index, nav, footer, other universal components...

  */
