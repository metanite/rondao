import React from 'react';
import {graphql, Link} from "gatsby"
import PressSidebar from "../components/pressSidebar";
import blogDefaultCover from "../images/blog/blog-default-cover.png";
import {Helmet} from "react-helmet";


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Press = ({data, pageContext: {next, previous}}) => {
    return (
        <div>
            <Helmet>
                <title>Press Release | TRONDAO</title>
            </Helmet>
            <div className="blog-directory-header bg-gradient">
                <div className="container">
                    <h1 className="blog-directory-header-title">TRON DAO Press</h1>
                    <h2 className="blog-directory-header-description">Read our latest press releases, whitepapers, and
                        guides developing in the TRON DAO digital ecosystem. This is a digital space where everybody has
                        a say, our team will be glad to answer any questions you have. </h2>
                </div>
            </div>
            <div className="bg-gradient">
                <div className="container">
                    <div className="blog-wrap py-5">
                        <div className="blog-directory">
                            {data !== undefined &&
                                data.allWpArticle.edges.map(({node}, index) => {
                                    return (
                                        <>
                                            <PressItem node={node} key={node.id}/>
                                            {
                                                index !== data.allWpArticle.edges.length - 1 &&
                                                <div className="divider" style={{margin: '40px 0 80px 0'}}></div>
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <PressSidebar/>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="blog-post-pagination position-relative pb-5">
                        {
                            previous &&
                            <Link to={`${previous}`}
                                  className="blog-post-pagination-previous ml-0 ml-md-3">{'< Previous'}</Link>
                        }
                        {
                            next &&
                            <Link to={`${next}`} className="blog-post-pagination-next mr-0 mr-lg-3">{'Next >'}</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Press

const PressItem = ({node: {title, articleInfo}}) => {
    let coverImg = (articleInfo.articlePic) ? articleInfo.articlePic.sourceUrl : blogDefaultCover;
    let publishDate = new Date(articleInfo.publishDate);
    return (
        <div className="px-0 col-12 blog-item text-roboto">
            <div className="blog-img-wrap">
                <div className="w-100 h-100 blog-img" style={{backgroundImage: `url(${coverImg})`}}/>
            </div>
            <h3 className="blog-item-title">{title}</h3>
            <p className="text-blue">{months[publishDate.getMonth()] + ' ' + publishDate.getDate() + ", " + publishDate.getFullYear()}</p>
            <div className="mt-3 blog-item-excerpt text-roboto-light"
                 dangerouslySetInnerHTML={{__html: articleInfo.description}}/>
            <a target="_blank" rel="noopener noreferrer" href={articleInfo.articleUrl} className="text-magenta"
               id={'article-' + articleInfo.articleUrl}>
                Read more >
            </a>
        </div>
    )
}
export const pageQuery = graphql`
query ($limit: Int!, $skip: Int!) {
  allWpArticle( limit: $limit, skip: $skip, sort: {order: DESC, fields: articleInfo___publishDate}) {
    edges {
      node {
        id
        title
        hackathonSeasonsAndTracks {
          hackathonSeason
          hackathonTrack
        }
        articleInfo {
          articlePic {
            sourceUrl
          }
          articleUrl
          publishDate
          description
        }
      }
    }
  }
}
`