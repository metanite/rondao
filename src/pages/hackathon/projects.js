import React  from 'react';
import { graphql } from "gatsby"
import Web3Img from '../../images/tracks/icon-track-web3.svg'
import nft from "../../images/tracks/icon-track-nft.svg"
import defi from "../../images/tracks/icon-track-defi.svg"
import gamefi from "../../images/tracks/icon-track-gamefi.svg"
import WinnersList from '../../components/winnersList';
import { normalizeTrackWinners } from '../../utils/utils'
import {Helmet} from "react-helmet";

const Projects = ({ data: { defi:{edges: defiWinners}, gamefi:{edges: gamefiWinners}, nft:{edges: nftWinners}, web3:{edges: web3Winners} } }) => {
  const normalizedWeb3Winners = normalizeTrackWinners(web3Winners)
  const normalizedNftWinners = normalizeTrackWinners(nftWinners)
  const normalizedDefiWinners = normalizeTrackWinners(defiWinners)
  const normalizedGamefiWinners = normalizeTrackWinners(gamefiWinners)

  return (

    <div>
        <Helmet>
            <title>Hackathon Season Winners | TRONDAO</title>
            <meta name="description" content="See who the winners are for Web3, NFT, DeFi and GameFi from TRON DAO’s Grand Hackathon. "/>
            <meta property="og:description" content="See who the winners are for Web3, NFT, DeFi and GameFi from TRON DAO’s Grand Hackathon. "/>
            <meta property="og:title" content="Hackathon Season Winners | TRONDAO"/>
        </Helmet>
      <div className="pb-5 d-flex justify-content-center hero-padding bg-gradient text-decoration-none text-white">
        <h1 className="mt-5 transform-uppercase">SEASON 2 WINNERS</h1>
      </div>
      <div className="bg-gradient py-5">
        <div className="container">
          <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
            <img src={Web3Img} className="img-fluid" alt="web3"/> <span className="ml-4 track-header-type">Web3</span>
          </div>
          <WinnersList className="my-5" trackWinners = {normalizedWeb3Winners}/>
        </div>
      </div>
      <div className="bg-gradient py-5">
        <div className="container">
          <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
            <img src={nft} className="img-fluid" alt="nft"/> <span className="ml-4 track-header-type">NFT</span>
          </div>
          <WinnersList className="my-5" trackWinners = {normalizedNftWinners}/>
        </div>
      </div>
      <div className="bg-gradient py-5">
        <div className="container">
          <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
            <img src={defi} className="img-fluid" alt="defi"/> <span className="ml-4 track-header-type">DeFi</span>
          </div>
          <WinnersList className="my-5" trackWinners = {normalizedDefiWinners}/>
        </div>
      </div>
      <div className="bg-gradient py-5">
        <div className="container">
          <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
            <img src={gamefi} className="img-fluid" alt="gamefi"/> <span className="ml-4 track-header-type">GameFi</span>
          </div>
          <WinnersList className="my-5" trackWinners = {normalizedGamefiWinners}/>
        </div>
      </div>
    </div>
  )
}

export default Projects

export const pageQuery = graphql`
query {
  defi:allWpProject(
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
  gamefi:allWpProject(
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
  nft:allWpProject(
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
  web3:allWpProject(
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