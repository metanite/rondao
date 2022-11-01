import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import useTranslations from "../utils/useTranslations"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import faviconNew from "../images/favicon.png"

const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale, unlocalizedPath, pageName, meta, t} }) => {
  const translations = useTranslations(t)
  if(typeof children.props.children !== 'undefined') {
    children.props.children.props.pageContext.t = translations
  }

  let isHackathon = pageName === "hackathon";
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
      topOnEmptyHash:false,
      header:'.navbar'
    })
    require('date-time-format-timezone');

  }

  const { data } = useStaticQuery(query)
  const siteUrl = data.siteMetadata.siteUrl
  let localeStr = locale.replace('_','-')
  const ogUrl = (locale === 'en') ? siteUrl+unlocalizedPath : `${siteUrl}/${localeStr}${unlocalizedPath}`
  const description = stripHTML(meta.description)
  const socialImg = siteUrl + '/social/trondao-og2.jpg'




  const hrefLangs = <>
    {/* <link rel="alternate" hreflang="de" href={`${siteUrl}/de${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="es" href={`${siteUrl}/es${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="fr" href={`${siteUrl}/fr${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="hi" href={`${siteUrl}/hi${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="it" href={`${siteUrl}/it${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="ja" href={`${siteUrl}/ja${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="ko" href={`${siteUrl}/ko${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="nl" href={`${siteUrl}/nl${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="pl" href={`${siteUrl}/pl${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="pt" href={`${siteUrl}/pt${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="pt-br" href={`${siteUrl}/pt-br${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="ru" href={`${siteUrl}/ru${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="tl" href={`${siteUrl}/tl${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="tr" href={`${siteUrl}/tr${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="zh-cn" href={`${siteUrl}/zh-cn${unlocalizedPath}`} /> */}
    {/* <link rel="alternate" hreflang="zh-tw" href={`${siteUrl}/zh-tw${unlocalizedPath}`} /> */}
    <link href="/fonts/Roboto/roboto.css" rel="stylesheet"/>
  </> 


  return (
  <LocaleContext.Provider value={{ locale }}>
    <Helmet>
          <title>{meta.title}</title>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={meta.keywords}/>
          <meta name="author" content="Trondao.org"/>
          <meta property="og:url" content={ogUrl}/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={meta.title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={socialImg}/>
          <meta property="og:site_name" content="Tron DAO"/>
          <meta name="twitter:site" content="@trondao" />
          <meta name="twitter:image:src" content={socialImg} />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta http-equiv="content-language" content={ locale }/>
          <link href={faviconNew} rel="shortcut icon"/>
          <link rel="apple-touch-icon" href={faviconNew} />
          <link rel="alternate" hreflang="en" href={`${siteUrl}${unlocalizedPath}`} />
          <link rel="alternate" hreflang="x-default" href={`${siteUrl}${unlocalizedPath}`} />

          {hrefLangs.props.children}
          {/* declaring hrefLangs.props.children is a workaround to use fragment in helmet*/}
          
          <link rel="canonical" href={ogUrl} />
          <link href="/fonts/BlenderPro/blenderPro.css" rel="stylesheet"/>
          <link href="/fonts/pressstart2p/PressStart2p.css" rel="stylesheet"/>
          <link href="/fonts/SpaceMono/SpaceMono.css" rel="stylesheet"/>
          <script src="//cdn.bc0a.com/autopilot/f00000000287428/autopilot_sdk.js"></script>
    </Helmet>
    <div className="container-fluid px-0 mx-0 dark-bg">
        <header className="global-header">
          <Navigation/>
        </header>
        <main role="main" className={isHackathon === true ? 'main-hackathon': ''}>
          {children}
        </main>
        <Footer/>
    </div>
  </LocaleContext.Provider>
)}


export { Layout, LocaleContext }

const query = graphql`
query layout {
    data: site {
        siteMetadata {
          siteUrl
        }
      }
  }
`

function stripHTML(string){
  return string.replace(/<(.|\n)*?>/g, '');
}

