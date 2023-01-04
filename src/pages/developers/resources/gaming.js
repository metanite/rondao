import React from "react";
import {Helmet} from "react-helmet";
import tronBullRocket from "../../../images/gaming/tronbull-rocket.svg"
import controller from "../../../images/gaming/controller.svg"
import arrowDown from "../../../images/gaming/arrow-down.svg"
import key from "../../../images/gaming/key.svg"
import tronbullGaming from "../../../images/gaming/tronbull-gaming.svg"

const Gaming = ({data}) => {
    return (
        <div className="trondao-gaming">
            <Helmet>
                <title>TRON Gaming | TRONDAO</title>
                <meta name="description"
                        content="Own the gaming experience. Welcome to the future of entertainment"/>
                <meta property="og:description" content="Own the gaming experience. Welcome to the future of entertainment."/>
                <meta property="og:title" content="TRON Gaming | TRONDAO"/>
            </Helmet>
            <div className="gaming">
                <div className="gaming-main">
                    <div className="gaming-title flex-column d-flex flex-md-row align-items-start align-items-md-center align-items-lg-start justify-content-lg-center col-md-12">
                        <div className="col-12 col-md-6 col-lg-5 offset-md-1 offset-lg-1">
                            <h1>Own the gaming experience</h1>
                            <p className="mb-lg-5">Welcome to the future of entertainment</p>
                            <a 
                                href="/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                id="gaming-start-build-button"
                            >
                                <button className="gaming-title-start-button">
                                    Start Build
                                </button>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 col-lg-6 mt-3 mt-md-0">
                           <img src={tronBullRocket} alt="tron bull riding a rocket" className="gaming-tronbull-rocket img-fluid"></img>
                        </div>  
                    </div>                
                </div>

                <div className="gaming-dark-color d-flex flex-column align-items-center justify-content-center">
                    <div className="gaming-motto">
                    Faster, Safer, Better
                    </div>
                    
                    <div className="gaming-row-one d-flex flex-column flex-md-row">
                        <div className="gaming-advantages d-flex flex-column align-items-center col-12 col-md-4">
                            <img src={controller} alt="nintendo controller icon" className="mb-2 mb-lg-0"></img>
                            <h3 className="text-uppercase my-4">Frictionless Video Game</h3>
                            <p className="">
                            Enter a new realm of high-speed entertainment where no limits are set and your imagination is free to soar.
                            </p>
                        </div>
                        <div className="gaming-advantages d-flex flex-column align-items-center col-12 col-md-4 mx-md-2 mx-lg-4">
                            <img src={arrowDown} alt="arrow down icon" className="mb-2 mb-lg-0"></img>
                            <h3 className="text-uppercase my-4">Low Fees</h3>
                            <p className="">
                            Blurb about web3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            </p>
                        </div>
                        <div className="gaming-advantages d-flex flex-column align-items-center col-12 col-md-4">
                            <img src={key} alt="key icon" className="mb-2 mb-lg-0"></img>
                            <h3 className="text-uppercase my-4">Own Your Experience</h3>
                            <p className="">
                            TRON aims to empower individuals to create and own their own games without fear of censorship or control from centralized authorities.
                            </p>
                        </div>
                    </div>

                    <div className="gaming-row-two d-flex flex-column flex-md-row">
                        <div className="gaming-steps d-flex flex-column justify-content-center col-12 col-md-5 offset-md-1">
                            <h1 className="text-uppercase">
                                Learn 
                                <span>|</span>
                                Grow 
                                <span>|</span> 
                                Build
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et orem ipsum dolor sit amet
                            </p>
                            <a 
                                href="/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                id="gaming-apply-for-funding-button"
                            >
                                <button className="gaming-title-start-button">
                                    Apply For Funding
                                </button>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <img src={tronbullGaming} alt="tronbull gaming hearts" className="gaming-bull-gaming d-block mx-auto"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Gaming