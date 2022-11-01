import React  from 'react';
import TrackHeader from '../../components/trackHeader';
import DefiImg from '../../images/tracks/icon-track-defi.svg'
import GamefiImg from '../../images/tracks/icon-track-gamefi.svg'
import NFTImg from '../../images/tracks/icon-track-nft.svg'
import Web3Img from '../../images/tracks/icon-track-web3.svg'
import LocalizedLink from "../../components/localizedLink"
import {Helmet} from "react-helmet";


const HackathonTracks = ({ data }) => {
  console.log(data)
  return (
    <div>
        <Helmet>
            <title>Hackathon Tracks | TRONDAO</title>
        </Helmet>
      <LocalizedLink to="/hackathon/tracks/web3" className="d-block hero-padding bg-gradient text-decoration-none text-white">
        <TrackHeader
          trackImg = {Web3Img}
          trackType = "Web3"
          trackTypeTag = "h2"
          titleTag = "h1"
          description = "The future of the Web is in your hands. The judges are looking to developers for a contribution that will help transition this new technology and bring it to fruition."
        />
      </LocalizedLink>
      <LocalizedLink to="/hackathon/tracks/nft" className="d-block text-decoration-none text-white">
        <TrackHeader
          className = "bg-gradient"
          trackImg = {NFTImg}
          trackType = "NFT"
          trackTypeTag = "h2"
          description = "We are embracing creator economies by working to empower developers who create novel NFT applications. By giving them both financial benefits and technical support so that their work can reach its full potential."
        />
      </LocalizedLink>
      <LocalizedLink to="/hackathon/tracks/defi" className="d-block text-decoration-none text-white">
        <TrackHeader
          className = "bg-gradient"
          trackImg = {DefiImg}
          trackType = "DeFi"
          trackTypeTag = "h2"
          description = "DeFi continues to be a crucial movement for the crypto space as it enables financial services to operate in an open, accessible, and transparent digital form. Looking for the next innovative DeFi solution that could provide accessible financial services to billions of people."
        />
      </LocalizedLink>

      <LocalizedLink to="/hackathon/tracks/gamefi" className="d-block text-decoration-none text-white">
        <TrackHeader
          className = "bg-gradient"
          trackImg = {GamefiImg}
          trackType = "GameFi"
          trackTypeTag = "h2"
          description = "There’s nothing like feeling the victory when your game comes out on top. This track is all about developing the next big game idea. With the next generation of game, entertainment meets blockchain."
        />
      </LocalizedLink>

    </div>
  )
}

export default HackathonTracks

