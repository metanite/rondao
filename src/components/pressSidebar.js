import React from 'react';
import {graphql, StaticQuery} from "gatsby"
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
const PressSidebar = ({data}) => {
    return (
        <>
            <div className="press-sidebar">
                <p className="text-blender-pro press-sidebar-title h3">PRESS CONTACT</p>
                <div className="divider" style={{margin: '20px 0'}}></div>
                <p className="blog-sidebar-item-category text-roboto text-magenta mb-0">GET IN TOUCH</p>
                <a href="mailto: press@tron.network">
                    <p className="mt-1 mb-3 text-white">press@tron.network</p>
                </a>
                <p className="blog-sidebar-item-category text-roboto text-magenta mb-0 mt-4">FOLLOW US</p>
                <div className="press-icon">
                    <a id="footer-social-twitter" href="https://twitter.com/trondao" className="social-icon"
                       target="_blank" rel="noopener noreferrer">
                        <FaTwitter/>
                    </a>
                    <a id="footer-social-fb" href="https://www.facebook.com/trondaoofficial"
                       className="social-icon ml-4" target="_blank" rel="noopener noreferrer">
                        <FaFacebook/>
                    </a>
                    <a id="footer-social-linkedin" href="https://www.linkedin.com/company/trondao"
                       className="social-icon ml-4" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>

                <p className="text-blender-pro press-sidebar-title h3" style={{margin: '100px 0 0 0'}}>RECENT</p>
                {
                    data.allWpArticle.edges.map(({node}, index) => {
                        console.log(node)
                        return (
                            <>
                                <div className="divider" style={{margin: '20px 0'}}></div>
                                <PressSidebarItem node={node} key={node.id}/>
                            </>
                        )
                    })
                }

                <div className="divider" style={{margin: '20px 0'}}></div>
                <p className="text-blender-pro press-sidebar-title h3" style={{margin: '100px 0 0 0'}}>PRESS KIT </p>
                <div className="divider" style={{margin: '20px 0'}}></div>
                <p className="blog-sidebar-item-category text-roboto text-magenta mb-0">BRAND ASSETS</p>
                <p className="mt-1 mb-3 text-white">This kit is for using the TRON logo in conjunction with our brand
                    guidelines</p>
                <div className="tron-logo-button mt-4">
                    <p className="d-inline-block">Tron logo</p>
                    <button className="press-download-button ml-3"
                            onClick={() => openInNewTab('https://s3.amazonaws.com/tron.network/TRON+LOGO_ICON+GUIDELINES+COPY.zip')}>DOWNLOAD
                    </button>
                </div>
                <div className="tron-visual-guideline-button">
                    <p className="d-inline-block">TRON Visual Guideline</p>
                    <button className="press-download-button ml-3"
                            onClick={() => openInNewTab('https://s3.amazonaws.com/tron.network/VISUAL+IDENTITY+GUIDE.pdf')}>DOWNLOAD
                    </button>
                </div>
            </div>
        </>
    )
}

const PressSidebarItem = ({node: {title, categories, articleInfo}}) => {
    let publishDate = new Date(articleInfo.publishDate);
    return (
        <div className="px-0 text-roboto">
            {
                categories.nodes.length > 0 &&
                <p className="blog-sidebar-item-category text-roboto text-magenta mb-0">{categories.nodes[0].name}</p>
            }
            <a href={articleInfo.articleUrl} className="text-white" target="_blank" rel="noopener noreferrer">
                <p className="mt-1 mb-2">{title}</p>
            </a>
            {/* <p className="text-blue">{date} - {author.node.name}</p> */}
            <p className="text-blue">{months[publishDate.getMonth()] + ' ' + publishDate.getDate() + ", " + publishDate.getFullYear()}</p>
        </div>
    )
}

export default (props) => {
    return (
        <StaticQuery
            query={graphql`
        query {
          allWpArticle (limit: 3, sort: {order: DESC, fields: articleInfo___publishDate}){
            edges {
              node {
                id
                title
                categories {
                  nodes {
                    name
                  }
                }
                articleInfo {
                    articleUrl
                    publishDate
                }
              }
            }
          }
        }
      `}
            render={data => <PressSidebar data={data} {...props} />}
        />
    )
}
