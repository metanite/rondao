import React  from 'react';
import { graphql } from "gatsby"
import TrackHeader from '../../../components/trackHeader';
import WinnersList from '../../../components/winnersList';
import trackImg from '../../../images/tracks/icon-track-web3.svg'
import { normalizeTrackWinners } from '../../../utils/utils'
import {Helmet} from "react-helmet";

const HackathonTracksWeb3 = ({ data: { allWpProject : { edges : trackWinners } } }) => {
  let normalizedTrackWinners = normalizeTrackWinners(trackWinners)

  return (
    <div>
        <Helmet>
            <title>Web3 Hackathon Track | TRONDAO</title>
            <meta name="description" content="The Hackathon Web3 Track. See the winners of the latest hackathon who transition this technology to new levels."/>
            <meta property="og:description" content="The Hackathon Web3 Track. See the winners of the latest hackathon who transition this technology to new levels."/>
            <meta property="og:title" content="Web3 Hackathon Track | TRONDAO"/>
        </Helmet>
      <div className="d-block hero-padding bg-gradient text-decoration-none text-white">
        <div className="container">
          <TrackHeader
            trackImg = {trackImg}
            trackType = "Web3"
            trackTypeTag = "h2"
            titleTag = "h1"
            description = "The future of the Web is in your hands. The judges are looking to developers for a contribution that will help transition this new technology and bring it to fruition."
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

export default HackathonTracksWeb3

export const pageQuery = graphql`
query {
  allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 2"}, hackathonTrack: {eq: "Web3"}}}
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