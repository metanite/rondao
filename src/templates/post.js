import React from 'react';
import blogDefaultCover from '../images/blog/blog-default-cover.png'
import BlogSidebar from '../components/blogSidebar'
import { Link, graphql } from "gatsby"
import {Helmet} from "react-helmet";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Blog = ({ data, pageContext: {previous, next}}) => {
  const node = data.allWpPost.edges[0].node
  const featureImage = node.featuredImage;
  return (
    <>
        {featureImage !== null &&
            <Helmet>
                <meta property="og:image" content={featureImage.node.sourceUrl} data-react-helmet="true"/>
                <meta name="twitter:image:src" content={featureImage.node.sourceUrl} data-react-helmet="true"/>
            </Helmet>
        }
      <div className="blog-post-wrap bg-gradient">
        <div className="container">
          <div className="blog-wrap">
            <div className="blog-directory">
              <BlogPost node={node} key={node.id} previous={previous} next={next}/>
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
              <Link to={`/blog${previous.uri}`} className="blog-post-pagination-previous ml-0 ml-md-3">{'< Previous'}</Link>
            }
            {
              next &&
              <Link to={`/blog${next.uri}`} className="blog-post-pagination-next mr-0 mr-lg-3">{'Next >'}</Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}

const BlogPost = ({node: {title, uri, date, author, content, featuredImage}}) => {
  let coverImg = (featuredImage) ? featuredImage.node.sourceUrl : blogDefaultCover;
  return (
      <SimpleReactLightbox>
          <SRLWrapper>
            <div className="px-0 col-12 blog-post text-roboto">
              <h3 className="blog-post-title">{ title }</h3>
              {/* <p className="text-blue mt-3 mb-5">{date} - {author.node.name}</p> */}
              <p className="text-blue mt-3 mb-5">{date}</p>
              <div className="blog-img-wrap mb-5">
                <div className="w-100 h-100 blog-img" style={{backgroundImage: `url(${coverImg})`}}/>
              </div>
              <div className="mt-3 text-roboto-light mb-5 pb-5 blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </SRLWrapper>
      </SimpleReactLightbox>
  )
}

export default Blog

export const pageQuery = graphql`
query($slug: String!) {
  allWpPost(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        id
        uri
        title
        content
        date(formatString: "MMMM DD, YYYY")
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
