import React from 'react';
import blogDefaultCover from '../images/blog/blog-default-cover.png'
import BlogSidebar from '../components/blogSidebar'
import { Link, graphql } from "gatsby"
import {Helmet} from "react-helmet";

const BlogDirectory = ({data, pageContext: { next, previous }}) => {
  return (
    <div>
        <Helmet>
            <title>Tron DAO Blog | TRONDAO</title>
        </Helmet>
      <div className="blog-directory-header bg-gradient">
        <div className="container">
          <h1 className="blog-directory-header-title">TRON DAO Blog</h1>
          <h2 className="blog-directory-header-description">The world’s largest Decentralized Autonomous Organization.</h2>
        </div>
      </div>
      <div className="bg-gradient">
        <div className="container">
          <div className="blog-wrap py-5">
            <div className="blog-directory">
              {
                data.allWpPost.edges.map(({ node }, index) => {
                  console.log(node)
                  return (
                    <>
                      <BlogItem node={node} key={node.id}/>
                      {
                        index !== data.allWpPost.edges.length - 1 &&
                        <div className="divider" style={{margin: '40px 0 80px 0'}}></div>
                      }
                    </>
                  )
                })
              }
            </div>
            <div>
              <BlogSidebar/>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="blog-post-pagination position-relative pb-5">
            {
              previous &&
              <Link to={`${previous}`} className="blog-post-pagination-previous ml-0 ml-md-3">{'< Previous'}</Link>
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

const BlogItem = ({node: {title, uri, date, author, excerpt, featuredImage}}) => {
  let coverImg = (featuredImage) ? featuredImage.node.sourceUrl : blogDefaultCover;
  return (
    <div className="px-0 col-12 blog-item text-roboto">
      <div className="blog-img-wrap">
        <div className="w-100 h-100 blog-img" style={{backgroundImage: `url(${coverImg})`}}/>
      </div>
      <h3 className="blog-item-title">{ title }</h3>
      {/* <p className="text-blue">{date} - {author.node.name}</p> */}
      <p className="text-blue">{date}</p>
      <div className="mt-3 blog-item-excerpt text-roboto-light" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link to={`/blog${uri}`}  className="text-magenta">
        Read more >
      </Link>
    </div>
  )
}

export default BlogDirectory

export const pageQuery = graphql`
query ($limit: Int!, $skip: Int!) {
  allWpPost(limit: $limit, skip: $skip, sort: {order: DESC, fields: date}) {
    edges {
      node {
        id
        uri
        title
        content
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
}
`