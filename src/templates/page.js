import React from "react"
import { graphql } from "gatsby"

const Page = ({ data, pageContext:{next, previous} }) => {
  const page = data.allWpPage.edges[0].node
  let featuredImage = (page.featured_media) ? <img src={page.featured_media.source_url} alt="" className="img-fluid mb-4 w-100" /> : "";
  
  return (
        <div className="container hero-padding text-dark">
          {featuredImage}
          <div className="d-block mt-5">
            <div className="col-lg-10 m-auto">
              <h1 className="h3" dangerouslySetInnerHTML={{ __html: page.title }}></h1>
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: page.content }} style={{fontColor: '#FFF'}} />
            </div>
          </div>
        </div>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`