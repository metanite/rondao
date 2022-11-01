import React from "react"
import web3 from "../images/tracks/icon-track-web3.svg"
import nft from "../images/tracks/icon-track-nft.svg"
import defi from "../images/tracks/icon-track-defi.svg"
import gamefi from "../images/tracks/icon-track-gamefi.svg"
import apenft from "../images/tracks/apenft-icon.svg"
import {Link} from "gatsby";

const Tracks = () => {

    return (
        <>
           <div className="tracks">
               <div className="d-flex flex-wrap justify-content-center text-center tracks-icon-row">
                   <Link to={`/hackathon/tracks/web3/`}>
                       <div className="tracks-icon-container">
                           <div className="d-flex align-items-center justify-content-center"><img src={web3}/></div>
                           <h2>Web3</h2>
                       </div>
                   </Link>
                   <Link to={`/hackathon/tracks/nft/`}>
                       <div className="tracks-icon-container">
                           <div className="d-flex align-items-center justify-content-center"><img src={nft}/></div>
                           <h2>NFT</h2>
                       </div>
                       </Link>
                   <Link to={`/hackathon/tracks/defi/`}>
                       <div className="tracks-icon-container">
                           <div className="d-flex align-items-center justify-content-center"><img src={defi}/></div>
                           <h2>DeFi</h2>
                       </div>
                   </Link>
                   <Link to={`/hackathon/tracks/gamefi/`}>
                       <div className="tracks-icon-container">
                           <div className="d-flex align-items-center justify-content-center"><img src={gamefi}/></div>
                           <h2>GameFi</h2>
                       </div>
                   </Link>
               </div>
               <div className="justify-content-center text-center prizes">
                 <h4>1st Prize - $60,000</h4><hr/>
                 <h4>2nd Prize - $40,000</h4><hr/>
                 <h4>3rd Prize - $30,000</h4><hr/>
                 <h4>4th Prize - $25,000</h4><hr/>
                 <h4>5th Prize - $20,000</h4><hr/>
                 <h4>1st Runner Up - $5,000</h4><hr/>
                 <h4>2nd Runner Up - $5,000</h4><hr/>
                 <h4>3rd Runner Up - $5,000</h4>
               </div>
               <hr/>
                <div className="apenft justify-content-center">   
                    <p>NFT Track supported by</p>                      
                    <a href="https://apenft.io/" target="_blank">
                        <img className="apenft-img" src={apenft} alt="APENFT MARKETPLACE Logo" />
                    </a>
                </div>
                <hr/>
            </div> 
        </>
    )
}

export default Tracks

