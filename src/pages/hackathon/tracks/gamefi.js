import React  from 'react';
import { graphql } from "gatsby"
import TrackHeader from '../../../components/trackHeader';
import WinnersList from '../../../components/winnersList';
import trackImg from '../../../images/tracks/icon-track-gamefi.svg'
import { normalizeTrackWinners } from '../../../utils/utils'
import { Helmet } from "react-helmet"

const HackathonTracksGameFi = ({ data: { allWpProject : { edges : trackWinners } } }) => {
  let normalizedTrackWinners = normalizeTrackWinners(trackWinners)

  return (
    <div>
        <Helmet>
            <title>GameFi Hackathon Track | TRONDAO</title>
            <meta name="description" content="Blockchain and gaming makes GameFi. See season winners in TRON’s GameFi track. Check it out today."/>
            <meta property="og:description" content="Blockchain and gaming makes GameFi. See season winners in TRON’s GameFi track. Check it out today."/>
            <meta property="og:title" content="GameFi Hackathon Track | TRONDAO"/>
        </Helmet>
      <div className="d-block hero-padding bg-gradient text-decoration-none text-white">
        <div className="container">
          <TrackHeader
            trackImg = {trackImg}
            trackType = "GameFi"
            trackTypeTag = "h2"
            titleTag = "h1"
            description = "There’s nothing like feeling the victory when your game comes out on top. This track is all about developing the next big game idea. With the next generation of game, entertainment meets blockchain."
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

export default HackathonTracksGameFi

export const pageQuery = graphql`
query {
  allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 2"}, hackathonTrack: {eq: "GameFi"}}}
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