import React  from 'react';
import { graphql } from "gatsby"
import TrackHeader from '../../../components/trackHeader';
import WinnersList from '../../../components/winnersList';
import trackImg from '../../../images/tracks/icon-track-defi.svg'
import { normalizeTrackWinners } from '../../../utils/utils'
import { Helmet } from "react-helmet"

const HackathonTracksDeFi = ({ data: { allWpProject : { edges : trackWinners } } }) => {
  let normalizedTrackWinners = normalizeTrackWinners(trackWinners)

  return (
    <div>
        <Helmet>
            <title>DeFi Hackathon Track | TRONDAO</title>
            <meta name="description" content="The DeFi track is for innovative solutions to be open, accessible and transparent so financial services can be available for everyone. See season winners here."/>
            <meta property="og:description" content="The DeFi track is for innovative solutions to be open, accessible and transparent so financial services can be available for everyone. See season winners here."/>
            <meta property="og:title" content="DeFi Hackathon Track | TRONDAO"/>
        </Helmet>
      <div className="d-block hero-padding bg-gradient text-decoration-none text-white">
        <div className="container">
          <TrackHeader
            trackImg = {trackImg}
            trackType = "DeFi"
            trackTypeTag = "h2"
            titleTag = "h1"
            description = "DeFi continues to be a crucial movement for the crypto space as it enables financial services to operate in an open, accessible, and transparent digital form. Looking for the next innovative DeFi solution that could provide accessible financial services to billions of people."
          />
        </div>
      </div>
      <div>
        <p className="tracks-detail-section-header text-center">
          Season Two Winners
        </p>
      </div>
      <div className="container position-relative" style={{marginBottom: '100px'}}>
        <WinnersList trackWinners = {normalizedTrackWinners} grandPrizeBorder/>
      </div>
    </div>
  )
}

export default HackathonTracksDeFi

export const pageQuery = graphql`
query {
  allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 2"}, hackathonTrack: {eq: "DeFi"}}}
  ) {
    edges {
      node {
        title
        hackathonSeasonsAndTracks {
          hackathonSeason
          hackathonTrack
        }
        hackathonProjectInfo {
          winnersPrize
          hackathonTeamPic {
            sourceUrl
          }
        }
        slug
      }
    }
  }
}
`