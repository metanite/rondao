import React from "react"
import BlogLayout from "../components/blogLayout"
import Pagination from "../components/pagination"
import { graphql } from "gatsby"

const Partner = ({ data, pageContext:{next, previous} }) => {
  const partner = data.allWpPartner.edges[0].node
  
  return (
    <div className="mb-5 pb-5 bg-gradient hero-padding">
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="p-5 col-12 col-md-10 ">
            <div className="col-12 mb-4">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <img src={partner.partnerInfo.partnerLogo.sourceUrl} alt={partner.title} style={{width: 160}} />
                </div>
                <div className="col-12 col-lg-9 d-flex flex-column justify-content-center align-items-start">
                  {/*<p className="winner-prize">{partner.hackathonSeasonsAndTracks.hackathonTrack} - {partner.hackathonSeasonsAndTracks.hackathonSeason}  </p>*/}
                  <h1 dangerouslySetInnerHTML={{ __html: partner.title }} />
                </div>
             </div>
          </div>
       
          <div dangerouslySetInnerHTML={{ __html: partner.partnerInfo.partnerBio}} />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="col-12 col-md-10 ">
            <Pagination previous={previous} next={next} basePath="/hackathon"/>
        </div>
      </div>
    </div>
  )
}

export default Partner

export const query = graphql`
  query($slug: String!) {
    allWpPartner(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          hackathonSeasonsAndTracks {
            hackathonSeason
            hackathonTrack
          }
          partnerInfo {
            partnerUrl
            partnerBio
            partnerLogo {
              sourceUrl
            }
          }
        }
      }
    }
  }
`