import CustomLayout from "./wrapPageElement"
import "./src/bootstrap.min.css"
import "./src/global.scss"
import "./src/font-awesome.min.css"

export const wrapPageElement = CustomLayout

export const onClientEntry = () => {
  let ua = window.navigator.userAgent.toLowerCase()

  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(ua);

  let isAndroid = /(android|kindle|silk)/g.test(ua);
  let isMac = /macintosh/.test(ua);
  let isCatalina = (/mac os x 10_15/.test(ua) || /mac os x 10.15/.test(ua));
  let isLinux = !isAndroid && /linux/.test(ua);

  let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);;

  // Internet Explorer 6-11
  let isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;

  window.gatsbyIsMobile = isMobile 
  window.gatsbyIsAndroid = isAndroid 
  window.gatsbyIsChrome = isChrome
  window.gatsbyIsEdgeIE = isEdge || isIE
  window.gatsbyIsMac = isMac
  window.gatsbyIsCatalina = isCatalina
  window.gatsbyIsLinux = isLinux

}