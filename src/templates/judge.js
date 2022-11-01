import React from "react"
import BlogLayout from "../components/blogLayout"
import Pagination from "../components/pagination"
import { graphql } from "gatsby"

const Judge = ({ data, pageContext:{next, previous} }) => {
  const page = data.allWpJudge.edges[0].node
  const previousUrl = (previous) ? `/hackathon${previous.uri}` : undefined;
  const nextUrl = (next) ? `/hackathon${next.uri}` : undefined;
  return (
    <div className="bg-gradient hero-padding pb-5">
        <div className="judge-width m-auto">
          <div className="container">
            <div className="d-block d-flex align-items-center mt-5">
              <div className="judges-border rounded-circle">
                <img src={page.judgeInfo.judgePic.sourceUrl} className="rounded-circle judge-img judges-square-pic" height="150px" alt="" />
              </div>
              <div className="ml-3">
                <div className="judges-name mb-3"><b>{page.judgeInfo.judgeCompany}</b></div>
                <h3 dangerouslySetInnerHTML={{ __html: page.title }} />
                <div className="judge-title"><b dangerouslySetInnerHTML={{ __html: page.judgeInfo.judgeTitle }}></b></div>
              </div>
            </div>
            <div className="mt-5 judge-bio" dangerouslySetInnerHTML={{ __html: page.judgeInfo.judgeBio }} />
            <div className="mt-5">
              <Pagination previous={previous} next={next} basePath="/hackathon"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Judge

export const query = graphql`
  query($slug: String!) {
    allWpJudge(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          judgeInfo {
            judgeAlsoAPartner
            judgeBio
            judgeCompany
            judgeTitle
            judgeUrl
            judgePic {
              sourceUrl
            }
          }
          title
          hackathonSeasonsAndTracks {
            hackathonSeason
            hackathonTrack
          }
        }
      }
    }
  }
`