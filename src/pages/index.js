import React from "react";
import { Link, graphql } from "gatsby";
import {Helmet} from "react-helmet";
import tronbullCoins from "../images/home/tronbull-coins.svg"
import community from "../images/home/community.svg"
import developer from "../images/home/developer.svg"
import influencer from "../images/home/influencer.svg"
import defi from "../images/home/defi.svg"
import nft from "../images/home/nft.svg"
import gamefi from "../images/home/gamefi.svg"
import web3 from "../images/home/web3.svg"
import coins from "../images/home/coins.svg"
import tronbullLearn from "../images/home/tronbull-learn.gif"
import tronbullVideo from "../images/home/tronbull-video.gif"
import tronbullExperiment from "../images/home/tronbull-puzzle.gif"
import tronbullPlay from "../images/home/tronbull-play.gif"
import tronbullWave from "../images/home/tronbull-wave.svg"
import HomeHero from "../components/homepage/home-hero";
import playButton from "../images/home/play-button.svg"
import HomepageHelps from "../components/homepage/HomepageHelps";
import EmailCapture from "../components/EmailCapture";
const Index = ({ data }) => {
    
    return (
        
        <div className="homepage pb-5">
            <Helmet>
                <meta name="description" content="Decentralized internet using blockchain technology and powering decentralized apps (DApps). TRON empowers developers to be creative. Build on TRON."/>
                <meta property="og:description" content="Decentralized internet using blockchain technology and powering decentralized apps (DApps). TRON empowers developers to be creative. Build on TRON."/>
                <meta property="og:title" content="Decentralized Autonomous Organization DAO | TRONDAO"/>
            </Helmet>
            <div className="homepage-hackathon-banner mb-5 d-flex flex-row align-items-center text-center row no-gutters">
                <div className="col-sm-7 col-12 homepage-hackathon-banner-one pt-3 pt-sm-0">
                    TRON Grand Hackathon 2022 Season 3
                </div>
                <div className="col-sm-2 col-12 homepage-hackathon-banner-two">
                    #HackaTRON
                </div>
                <div className="col-sm-3 col-12 pb-3 pb-sm-0">
                    <a href="/hackathon/" id="homepage-hackathon-banner-button">
                        <button className="homepage-hackathon-banner-btn">Learn More</button>
                    </a>
                </div>

            </div>
            <HomeHero/>
            <div className="row no-gutters p-5 my-5">
                <div className="col-lg-5 offset-lg-1 offset-0 col-md-6 col-12 align-items-center order-2 order-md-1">
                    <div className="order-2 order-md-0">
                        <div className="homepage-introduction-header">TRON is Here to Help</div>
                        <div className="homepage-introduction-content mt-4">TRON is the protocol dedicated to accelerating the decentralization of the Internet via blockchain technology and decentralized applications (DApps). Since its inception in 2017, the TRON network has focused on two ideals: empowering developers and putting the power in the hands of the people. TRON network completed full decentralization in Dec 2021 and is now a purely community-governed DAO focused on creating an internet for all.</div>
                    </div>
                    <div className="py-5 text-center">
                        <a href="https://forms.gle/U5VH818cRvWNeXsHA" target="_blank" rel="noopener noreferrer" id="homepage-buttons-apply-funding">
                            <button className="homepage-apply-funding-button">> Apply for funding</button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 align-items-center text-center order-1 order-md-2 mb-5">
                    <img src={tronbullCoins} className="homepage-introduction-icon pt-3 img-fluid" alt="TRON Bull Decentralizing the Web"/>
                </div>
            </div>
            <div className="homepage-rounded px-5">
                <div className="homepage-grants-header col-lg-5 offset-lg-1 offset-0">TRON DAO GRANTS</div>
                <div className="homepage-grants-subheader col-lg-5 offset-lg-1 offset-0 col-12">The TRON DAO Grant Program provides support to Communities, Developers, and Influencers that are building on the TRON network.
                </div>
                <div className="row no-gutters mt-5 text-center">
                    <div className="col-md-4 col-12 align-items-center mb-5">
                        <div className="homepage-grants-container-icons text-center">
                            <img src={developer} className="img-fluid" alt="TRON Bull Community Ambassador"/>
                        </div>
                        <div className="homepage-grants-container-header" >Community Ambassador</div>
                        <a href="/grants/#grants-community" id="homepage-button-grants-community">
                            <button className="homepage-grants-container-apply-button mt-5">> APPLY</button>
                        </a>
                    </div>
                    <div className="col-md-4 col-12 align-items-center mb-5">
                        <div className="homepage-grants-container-icons text-center">
                            <img src={community} className="img-fluid" alt="TRON Bull Developer"/>
                        </div>
                        <div className="homepage-grants-container-header" >Developer</div>
                        <a href="/grants/#grants-developers" id="homepage-button-grants-developer">
                            <button className="homepage-grants-container-apply-button mt-5">> APPLY</button>
                        </a>
                    </div>
                    <div className="col-md-4 col-12 align-items-center mb-5">
                        <div className="homepage-grants-container-icons text-center">
                            <img src={influencer} className="img-fluid" alt="TRON Bull Influencer"/>
                        </div>
                        <div className="homepage-grants-container-header homepage-grants-container-header-influencer" >INFLUENCER</div>
                        <a href="/grants/#grants-influencers" id="homepage-button-grants-influencer">
                            <button className="homepage-grants-container-apply-button homepage-grants-container-apply-button-influencer mt-5">> APPLY</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="homepage-helps py-5 my-5">

                <HomepageHelps/>


            </div>
            <div className="homepage-rounded">
                <div className="row no-gutters mt-5 p-5">
                    <div className="col-lg-5 offset-lg-1 offset-0 col-md-6 col-12 align-items-center py-5">
                        <div className="homepage-hackthon-header">HACKATHON</div>
                        <div className="homepage-introduction-content mt-4 mb-4">The future is not far from widespread decentralized storage, decentralized applications, digital assets, and cryptocurrency wallets. The TRON Grand Hackathon 2022 creates opportunities for you & all your undiscovered talents to make their marks and accelerate the development of Web 3.0 while promoting the growth of the blockchain ecosystem simultaneously.</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 align-items-center">
                        <div className="homepage-hackthon-details-content">$1.2M prize pool</div>
                        <div className="homepage-hackthon-details-spacer align-items-center" />
                        <div className="homepage-hackthon-details-content">30+ partners</div>
                        <div className="homepage-hackthon-details-spacer align-items-center" />
                        <div className="homepage-hackthon-details-content">90+ Judges</div>
                        <div className="homepage-hackthon-details-learn-more">
                            <a href="/hackathon/" id="homepage-button-hackathon-learn-more">
                                <button className="homepage-hackthon-details-learn-more-button">> LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters my-5 pb-5 text-center">
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                        <img src={defi} className="homepage-hackthon-icons" alt="TRON DAO DeFi"/>
                        <h4 className="pt-2">Defi</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                        <img src={nft} className="homepage-hackthon-icons" alt="TRON DAO NFT"/>
                        <h4 className="pt-2">NFT</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                        <img src={gamefi} className="homepage-hackthon-icons" alt="TRON DAO GameFi"/>
                        <h4 className="pt-2">GameFi</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                        <img src={web3} className="homepage-hackthon-icons" alt="TRON DAO Web3"/>
                        <h4 className="pt-2">Web3</h4>
                    </div>
                </div>
            </div>

            
            <div className="homepage-starting-header-start mt-5 px-5 text-center">
                <img src={playButton} className="homepage-starting-header-icon"/>
                Start
            </div>
            <div className="homepage-starting-header mt-5 px-5 text-center homepage-starting-header-building">Building with TRON</div>
            <div className="homepage-starting-wrapper">
                <div className="row no-gutters mt-5 px-5 homepage-starting-rows">
                    <div className="homepage-starting-leftangle" />
                    <div className="col-lg-5 offset-lg-1 offset-0 col-md-12 col-12 align-items-center text-center px-3">
                        <img src={tronbullLearn} className="homepage-starting-icons img-fluid" alt="TRON Bull Learn Development"/>
                        <div className="homepage-starting-container text-left">
                            <div className="homepage-starting-container-header">
                                Learn TRON development 
                            </div>
                            <div className="homepage-starting-container-content">Explore TRON’s unique architecture and core applications through the detailed guides written by devs for you--our future devs-- so you can embark on the Great Voyage of the TRON public chain. </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 align-items-center text-center px-3">
                        <img src={tronbullVideo} className="homepage-starting-icons img-fluid" alt="TRON Bull Learning Tutorials"/>
                        <div className="homepage-starting-container text-left">
                            <div className="homepage-starting-container-header">Learn through tutorials </div>
                            <div className="homepage-starting-container-content">TRON has multiple, in-depth tutorials that can help even the least knowledgeable newcomer accomplish their goals.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-starting-redline col-10 offset-1 d-none d-lg-block" />
                <div className="row no-gutters mt-5 px-5">
                    <div className="col-lg-5 offset-lg-1 offset-0 col-md-12 col-12 align-items-center text-center px-3">
                        <img src={tronbullExperiment} className="homepage-starting-icons img-fluid" alt="TRON Bull Experimenting"/>
                        <div className="homepage-starting-container text-left">
                            <div className="homepage-starting-container-header">Start experimenting with TRON</div>
                            <div className="homepage-starting-container-content">TRON's low barriers to entry makes it easy for everyone– yes, everyone– to interact with its blockchain, and thus, discover the powers that come with it. The best way to learn something new is by doing– so what are you waiting for?
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 align-items-center text-center px-3">
                        <img src={tronbullPlay} className="homepage-starting-icons img-fluid" alt="TRON Bull Set Up Local Environment"/>
                        <div className="homepage-starting-container text-left">
                            <div className="homepage-starting-container-header">Set up local environment </div>
                            <div className="homepage-starting-container-content">Thanks to TRON’s impressive ecosystem, we are thrilled to be able to provide you all with easy access to the TRON private test network. The best part? The test network is run by us, so you can dedicate your hardware to what matters most: creativity.</div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="row no-gutters mt-5 p-5">
                <div className="col-lg-5 offset-lg-1 offset-0 col-md-6 col-12 align-items-center">
                    <div className="homepage-tronpedia-header">TRONPEDIA</div>
                    <div className="homepage-tronpedia-content mt-3 w-75">Overwhelmed by the new age of the Internet and unsure where you should even begin? Look no further. TRONPedia is the place for you to start dissecting all the complex jargon that spawned with the creation of web3. TRONPedia was created to act as the first block in your blockchain journey so you can get involved & even lead all the new web3-driven conversations. </div>
                    <div className="w-100 my-5 d-flex flex-wrap justify-content-between">
                        <img src={defi} className="homepage-tronpedia-icons" alt="tron dao defi"/>
                        <img src={gamefi} className="homepage-tronpedia-icons" alt="tron dao web3"/>
                        <img src={web3} className="homepage-tronpedia-icons" alt="tron dao web3"/>
                        <img src={nft} className="homepage-tronpedia-icons" alt="tron dao nft"/>
                        <img src={coins} className="homepage-tronpedia-icons" alt="tron dao coins"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 align-items-center">
                    <div className="homepage-tronpedia-tronbull text-center">
                        <img src={tronbullWave} className="homepage-tronpedia-tronbull-icon img-fluid" alt="tron bull wave"/>
                    </div>
                    <div className="homepage-tronpedia-learn-more">
                        <button className="homepage-tronpedia-learn-more-button mt-3" disabled>
                            > LEARN MORE
                        </button>
                        <p>Coming Soon!</p>
                    </div>
                </div>
            </div>
            <EmailCapture/>
        </div>
    );
};


export default Index;
