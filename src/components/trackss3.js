import React from "react"
import web3 from "../images/tracks/icon-track-web3-dark.svg"
import nft from "../images/tracks/icon-track-nft-dark.svg"
import defi from "../images/tracks/icon-track-defi-dark.svg"
import gamefi from "../images/tracks/icon-track-gamefi-dark.svg"
import ecosystem from "../images/tracks/icon-track-ecosystem-dark.png"
import academy from "../images/tracks/icon-track-academy-dark.svg"
import apenft from "../images/tracks/apenft-icon.svg"
import {Link} from "gatsby";
const track = "tracks";
const prize = "prizes";
const header = "<div class=“";
const headerRestPart = "”>"
const divEnd = "</div>"
const Trackss3 = () => {

    return (
        <>
           <div className="tracks-s3 text-center">
               <div className="tracks-s3-header text-center">{header}<span>{track}</span>{headerRestPart}</div>
               <div className="justify-content-center text-center">
                   <div className="d-flex flex-wrap justify-content-center">
                       <div className="col-12 col-md-6 col-lg-4">
                            <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={web3} alt="web3" /></div>
                                <h2>Web3</h2>
                            </div>
                       </div>
                       <div className="col-12 col-md-6 col-lg-4">                 
                            <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={defi} alt="defi"/></div>
                                <h2>DeFi</h2>
                            </div>
                        </div> 
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={nft} alt="nft"/></div>
                                <h2>NFT</h2>
                            </div>   
                        </div> 
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={gamefi} alt="gamefi"/></div>
                                <h2>GameFi</h2>
                            </div>                           
                       </div>
                       <div className="col-12 col-md-6 col-lg-4">
                            <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                <div className="tracks-s3-card-header">$100,000 Dedicated Prizes</div>
                                <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={ecosystem} alt="ecosystem"/></div>
                                <h2>Ecosystem</h2>
                                <div className="mt-1 tracks-s3-card-header">Ethereum Track</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <Link to={`/hackathon/tracks/academy/`}>
                                <div className="tracks-s3-card offset-0 offset-lg-0 m-1 m-md-3">
                                    <div className="d-flex align-items-center justify-content-center"><img className="tracks-s3-img" src={academy} alt="academy"/></div>
                                    <h2>TRON Academy</h2>
                                    <div className="mt-1 tracks-s3-card-header">Mini Hackathon</div>
                                </div>  
                            </Link>
                        </div> 
                        
                        
                   </div>
                   <div className="tracks-s3-header text-center">{divEnd}</div>
                   <div className="tracks-s3-header text-center my-5">{header}<span>{prize}</span>{headerRestPart}</div>
                   <div className="tracks-s3-prize-card align-items-center justify-content-center">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-lg-6">
                                <div>
                                    <div className="tracks-s3-prize-card-rank">1st Prize <span className="tracks-s3-prize-card-amount">$60,000</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div>
                                    <div className="tracks-s3-prize-card-rank">2nd Prize <span className="tracks-s3-prize-card-amount">$50,000</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 tracks-s3-prize-card-spacing">
                                <div>
                                    <div className="tracks-s3-prize-card-rank">3rd Prize <span className="tracks-s3-prize-card-amount">$40,000</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 tracks-s3-prize-card-spacing">
                                <div>
                                    <div className="tracks-s3-prize-card-rank">4th Prize <span className="tracks-s3-prize-card-amount">$30,000</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6  tracks-s3-prize-card-rank tracks-s3-prize-card-spacing">5th Prize <span className="tracks-s3-prize-card-amount">$20,000</span></div>
                        </div>
                    </div>
                        
                        
               </div>

               <div className="apenft justify-content-center tracks-s3-prize-apenft-card d-flex flex-wrap mx-sm-auto mx-3">
                    <p>NFT Track supported by</p>
                    <a href="https://apenft.io/" target="_blank" rel="noopener noreferrer">
                        <img className="apenft-img" src={apenft} alt="APENFT MARKETPLACE Logo" />
                    </a>
                </div>

                <div className="tracks-s3-header text-center mt-3">{divEnd}</div>
                
            </div> 
        </>
    )
}

export default Trackss3

