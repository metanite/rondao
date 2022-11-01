import React  from 'react';
import { graphql } from "gatsby"
import TrackHeader from '../../../components/trackHeader';
import WinnersList from '../../../components/winnersList';
import trackImg from '../../../images/tracks/icon-track-nft.svg'
import { normalizeTrackWinners } from '../../../utils/utils'
import apenft from "../../../images/tracks/apenft-icon.svg"
import {Helmet} from "react-helmet";

const HackathonTracksNFT = ({ data: { allWpProject : { edges : trackWinners } } }) => {
  let normalizedTrackWinners = normalizeTrackWinners(trackWinners)

  return (
    <div>
        <Helmet>
            <title>NFT Hackathon Track | TRONDAO</title>
            <meta name="description" content="The NFT track for the TRON Grand Hackathon where developers are empowered to create NFT applications. See who this season's winners are."/>
            <meta property="og:description" content="The NFT track for the TRON Grand Hackathon where developers are empowered to create NFT applications. See who this season's winners are."/>
            <meta property="og:title" content="NFT Hackathon Track | TRONDAO"/>
        </Helmet>
      <div className="d-block hero-padding bg-gradient text-decoration-none text-white">
        <div className="container">
          <TrackHeader
            trackImg = {trackImg}
            trackType = "NFT"
            trackTypeTag = "h2"
            titleTag = "h1"
            description = "We are embracing creator economies by working to empower developers who create novel NFT applications. By giving them both financial benefits and technical support so that their work can reach its full potential."
            support = "NFT Track supported by"
            supportIcon = {apenft}
            supportURL="https://apenft.io/"
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

export default HackathonTracksNFT

export const pageQuery = graphql`
query {
  allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 2"}, hackathonTrack: {eq: "NFT"}}}
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