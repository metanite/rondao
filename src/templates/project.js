import React from "react"
import Pagination from "../components/pagination"
import { graphql } from "gatsby"

const Project = ({ data, pageContext:{next, previous} }) => {
  const project = data.allWpProject.edges[0].node
  console.log(data.allWpProject);
  return (
    <div className="bg-gradient hero-padding">
      <div className="container d-flex flex-column p-0 pb-5 p-md-5 mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mb-5 col-12 col-md-10 ">
              <div className="col-12 mb-4">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    {
                        project.hackathonProjectInfo.hackathonTeamPic &&
                        <img src={project.hackathonProjectInfo.hackathonTeamPic.sourceUrl} alt={project.title} style={{width: 160}} />
                    }
                  </div>
                  <div className="col-12 col-lg-9 d-flex flex-column justify-content-center align-items-start">
                    {
                        project.hackathonProjectInfo.winnersPrize &&
                        <p className="winner-prize">{project.hackathonSeasonsAndTracks.hackathonTrack} {project.hackathonProjectInfo.winnersPrize} </p>
                    }
                    <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
                  </div>
               </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: project.hackathonProjectInfo.projectDescription }} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-md-10">
            <Pagination previous={previous} next={next} basePath="/hackathon"/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    allWpProject(filter: {slug: { eq: $slug }} ) {
      edges {
        node {
          id
          uri
          title
          slug
          hackathonSeasonsAndTracks {
            hackathonSeason
            hackathonTrack
          }
          hackathonProjectInfo {
            projectAWinner
            projectDescription
            winnersPrize
            hackathonTeamPic {
              sourceUrl
            }
            groupMembers {
              groupMember
              groupMemberUrl
            }
          }
        }
      }
    }
  }
`