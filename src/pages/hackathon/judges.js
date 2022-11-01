import React  from 'react';
import { Link, graphql } from "gatsby"
import BlogLayout from "../../components/blogLayout"
import {Helmet} from "react-helmet";

const Judges = ({ data }) => {
  return (
    <div>
        <Helmet>
            <title>Hackathon Judges | TRONDAO</title>
            <meta name="description" content="Blockchain experts evaluate the Hackathon projects as only they know how. See who is providing expertise evaluating the blockchain projects."/>
            <meta property="og:description" content="Blockchain experts evaluate the Hackathon projects as only they know how. See who is providing expertise evaluating the blockchain projects."/>
            <meta property="og:title" content="Hackathon Judges | TRONDAO"/>
        </Helmet>
        <div className="pb-5 d-flex justify-content-center hero-padding bg-gradient text-decoration-none text-white">
          <h1 className="mt-5">JUDGES</h1>
        </div>

      <BlogLayout>
        <div className="judge-intro text-center">
              Experts from across the Blockchain industry bring multi-perspective thought leadership in evaluating the wide range of Hackathon projects
        </div>
          <div className="row mt-5">
            {
              data.allWpJudge.edges.map(({ node }) => {
                return (
                  <div className="col-6 col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center" key={node.id}>
                    
                    <Link to={`/hackathon${node.uri}`}  id="homepage-textlink-sample" className="d-flex flex-column justify-content-center align-items-center">
                        <div className="judges-border rounded-circle">
                            <img src={node.judgeInfo.judgePic.sourceUrl} className="rounded-circle judges-square-pic" height="175" alt="" />
                        </div>
                      <div className='judges-name'> { node.title } </div>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: node.judgeInfo.judgeCompany }} />
                  </div>
                )

              })
            }
          </div>
      </BlogLayout>
    </div>
  )
}

export default Judges

export const pageQuery = graphql`
query {
  allWpJudge (sort: {order: ASC, fields: menuOrder}){
    edges {
      node {
        id
        uri
        menuOrder
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