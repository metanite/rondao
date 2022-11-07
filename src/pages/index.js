import React from "react";
import { Link, graphql } from "gatsby";
import {Helmet} from "react-helmet";
import community from "../images/home/community.svg"
import developer from "../images/home/developer.svg"
import influencer from "../images/home/influencer.svg"
import defi from "../images/home/defi.svg"
import nft from "../images/home/nft.svg"
import gamefi from "../images/home/gamefi.svg"
import web3_normal from "../images/home/web3.svg"
import defi_normal from "../images/home/defi_normal.svg"
import nft_normal from "../images/home/nft_normal.svg"
import gamefi_normal from "../images/home/gamefi_normal.svg"
import web_normal from "../images/home/web_normal.svg"
import coins from "../images/home/coins.svg"
import tronbullLearn from "../images/home/tronbull-learn.gif"
import tronbullVideo from "../images/home/tronbull-video.gif"
import tronbullExperiment from "../images/home/tronbull-puzzle.gif"
import tronbullPlay from "../images/home/tronbull-play.gif"
import tronbullWave from "../images/home/tronbull-wave.svg"
import tronbullButton from "../images/home/tronbull-button.svg"
import HomeHero from "../components/homepage/home-hero";
import playButton from "../images/home/play-button.svg"
import HomepageHelps from "../components/homepage/HomepageHelps";
import TronHelp from "../components/homepage/TronHelp";
import EmailCapture from "../components/EmailCapture";
const Index = ({ data }) => {
    
    return (
        
        <div className="homepage pb-5">
            <Helmet>
                <meta name="description" content="Decentralized internet using blockchain technology and powering decentralized apps (DApps). TRON empowers developers to be creative. Build on TRON."/>
                <meta property="og:description" content="Decentralized internet using blockchain technology and powering decentralized apps (DApps). TRON empowers developers to be creative. Build on TRON."/>
                <meta property="og:title" content="Decentralized Autonomous Organization DAO | TRONDAO"/>
            </Helmet>
            <div className="homepage-hackathon-banner d-flex flex-row align-items-center justify-content-center no-gutters">
                <div className="">
                    TRON Grand Hackathon 2022 Season 3
                    <span className="mx-md-5 ml-1 ml-sm-2">&#183;</span>
                    #HackaTRON
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <a href="/hackathon/" id="homepage-hackathon-banner-button">
                        <button className="homepage-hackathon-banner-btn">Learn More</button>
                    </a>
                </div>
            </div>
            <HomeHero/>
            <TronHelp/>
            <div className="homepage-border homepage-rounded px-1 px-md-5 mx-auto">
                <div className="homepage-grants-header col-lg-5 offset-lg-1 offset-0 text-left">TRON DAO GRANTS</div>
                <div className="homepage-grants-subheader col-lg-5 offset-lg-1 offset-0 col-12 text-justify mt-3 mt-md-0">The TRON DAO Grant Program provides support to Communities, Developers, and Influencers that are building on the TRON network.
                </div>
                <div className="row no-gutters mt-5 text-center position-relative">
                    <div className="d-block d-md-none homepage-grants-line-upper"></div>
                    <div className="col-md-4 col-12 align-items-center mb-5">
                        <div className="homepage-grants-container-icons text-center">
                            <img src={community} className="img-fluid" alt="TRON Bull Developer"/>
                        </div>
                        <div className="homepage-grants-container-header" >Developer</div>
                        <a href="/grants/#grants-developers" id="homepage-button-grants-developer">
                            <button className="homepage-grants-container-apply-button mt-5">> APPLY</button>
                        </a>
                    </div>
                    <div className="d-block d-md-none homepage-grants-line-lower ml-3"></div>
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
            <div className="homepage-border homepage-rounded mx-auto">
                <div className="d-flex row no-gutters mt-1 mt-lg-5 px-3 px-md-0">
                    <div className="homepage-rounded-banner col-lg-4 offset-lg-1 col-md-10 offset-md-1 offset-0 col-md-6 col-12 align-items-center py-lg-4 order-1 order-lg-0 mt-5 mt-lg-0">
                        <div className="homepage-hackthon-header">HACKATHON</div>
                        <div className="d-md-none homepage-rounded-icons row no-gutters text-center w-100 order-2 order-lg-0">
                            <div className="col-3 text-center">
                                <img src={defi} className="homepage-hackthon-icons" alt="TRON DAO DeFi"/>
                                <p className="homepage-hackthon-icons-title pt-2">Defi</p>
                            </div>
                            <div className="col-3 text-center">
                                <img src={nft} className="homepage-hackthon-icons" alt="TRON DAO NFT"/>
                                <p className="homepage-hackthon-icons-title pt-2">NFT</p>
                            </div>
                            <div className="col-3 text-center">
                                <img src={gamefi} className="homepage-hackthon-icons" alt="TRON DAO GameFi"/>
                                <p className="homepage-hackthon-icons-title pt-2">GameFi</p>
                            </div>
                            <div className="col-3 text-center">
                                <img src={web3_normal} className="homepage-hackthon-icons" alt="TRON DAO Web3"/>
                                <p className="homepage-hackthon-icons-title pt-2">Web3</p>
                            </div>
                        </div>
                        <div className="homepage-introduction-content mt-md-4 mb-4 text-justify">The future is not far from widespread decentralized storage, decentralized applications, digital assets, and cryptocurrency wallets. The TRON Grand Hackathon 2022 creates opportunities for you & all your undiscovered talents to make their marks and accelerate the development of Web 3.0 while promoting the growth of the blockchain ecosystem simultaneously.</div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-md-12 offset-md-1 col-12 text-center text-md-left order-3 order-lg-0">
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="d-flex justify-content-between flex-row flex-md-column col-12 col-md-5 col-lg-12 mt-4 mb-3 mt-md-0 mb-mb-0">
                                <div className="homepage-hackthon-details-content text-center text-md-right text-lg-left">$1.2M prize pool</div>
                                <div className="homepage-hackthon-details-spacer align-items-center" />
                                <div className="homepage-hackthon-details-content text-center text-md-right text-lg-left">30+ partners</div>
                                <div className="homepage-hackthon-details-spacer align-items-center" />
                                <div className="homepage-hackthon-details-content text-center text-md-right text-lg-left">90+ Judges</div>
                            </div>
                            <div className="homepage-hackthon-details-learn-more mt-lg-0 col-md-6 offset-md-1 col-lg-12">
                                <a href="/hackathon/" id="homepage-button-hackathon-learn-more">
                                    <button className="homepage-hackthon-details-learn-more-button ml-md-5 ml-lg-0">> LEARN MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex homepage-rounded-icons row no-gutters mb-md-5 mx-md-5 text-center w-100 order-2 order-lg-0">
                        <div className="col-3 text-center">
                            <img src={defi} className="homepage-hackthon-icons" alt="TRON DAO DeFi"/>
                            <p className="homepage-hackthon-icons-title pt-2">Defi</p>
                        </div>
                        <div className="col-3 text-center">
                            <img src={nft} className="homepage-hackthon-icons" alt="TRON DAO NFT"/>
                            <p className="homepage-hackthon-icons-title pt-2">NFT</p>
                        </div>
                        <div className="col-3 text-center">
                            <img src={gamefi} className="homepage-hackthon-icons" alt="TRON DAO GameFi"/>
                            <p className="homepage-hackthon-icons-title pt-2">GameFi</p>
                        </div>
                        <div className="col-3 text-center">
                            <img src={web3_normal} className="homepage-hackthon-icons" alt="TRON DAO Web3"/>
                            <p className="homepage-hackthon-icons-title pt-2">Web3</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="homepage-starting-header-start mt-5 px-md-5 text-center">
                <img src={playButton} className="homepage-starting-header-icon"/>
                Start
            </div>
            <div className="homepage-starting-header mt-5 px-md-5 text-center homepage-starting-header-building">Building with TRON</div>
            <div className="homepage-starting-wrapper">
                <div className="row no-gutters mt-5 px-md-5 homepage-starting-rows">
                    <div className="homepage-starting-leftangle" />
                    <div className="col-lg-5 offset-lg-1 offset-0 col-md-12 col-12 align-items-center text-center">
                        <img src={tronbullLearn} className="homepage-starting-icons img-fluid" alt="TRON Bull Learn Development"/>
                        <div className="homepage-starting-container text-left col-md-10 offset-md-1 col-xl-10 mx-xl-auto">
                            <div className="homepage-starting-container-header mt-xl-4 text-center text-md-left">
                                Learn TRON development 
                            </div>
                            <div className="homepage-starting-container-content">Explore TRON’s unique architecture and core applications through the detailed guides written by devs for you--our future devs-- so you can embark on the Great Voyage of the TRON public chain. </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 align-items-center text-center">
                        <img src={tronbullVideo} className="homepage-starting-icons img-fluid" alt="TRON Bull Learning Tutorials"/>
                        <div className="homepage-starting-container text-left col-md-10 offset-md-1 col-xl-10 mx-xl-auto">
                            <div className="homepage-starting-container-header mt-xl-4 text-center text-md-left">Learn through tutorials </div>
                            <div className="homepage-starting-container-content">TRON has multiple, in-depth tutorials that can help even the least knowledgeable newcomer accomplish their goals.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="homepage-starting-redline col-10 offset-1 d-none d-lg-block" /> */}
                <div className="row no-gutters mt-5 px-md-5">
                    <div className="col-lg-5 offset-lg-1 offset-0 col-md-12 col-12 align-items-center text-center">
                        <img src={tronbullExperiment} className="homepage-starting-icons img-fluid" alt="TRON Bull Experimenting"/>
                        <div className="homepage-starting-container text-left col-md-10 offset-md-1 col-xl-10 mx-xl-auto">
                            <div className="homepage-starting-container-header text-center text-md-left">Start experimenting with TRON</div>
                            <div className="homepage-starting-container-content">TRON's low barriers to entry makes it easy for everyone– yes, everyone– to interact with its blockchain, and thus, discover the powers that come with it. The best way to learn something new is by doing– so what are you waiting for?
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 align-items-center text-center">
                        <img src={tronbullPlay} className="homepage-starting-icons img-fluid" alt="TRON Bull Set Up Local Environment"/>
                        <div className="homepage-starting-container text-left col-md-10 offset-md-1 col-xl-10 mx-xl-auto">
                            <div className="homepage-starting-container-header text-center text-md-left">Set up local environment </div>
                            <div className="homepage-starting-container-content">Thanks to TRON’s impressive ecosystem, we are thrilled to be able to provide you all with easy access to the TRON private test network. The best part? The test network is run by us, so you can dedicate your hardware to what matters most: creativity.</div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="homepage-tronpedia-main row no-gutters p-md-5">
                <div className="homepage-tronpedia-main-div col-lg-5 offset-lg-1 pl-md-5 offset-0 col-md-9 offset-md-1 col-12 align-items-start d-flex flex-column">
                    <div className="homepage-tronpedia-header mb-2 order-1 order-lg-0">TRONPEDIA</div>
                    <div className="homepage-tronpedia-content mt-3 text-justify order-3 order-lg-0">Overwhelmed by the new age of the Internet and unsure where you should even begin? Look no further. TRONPedia is the place for you to start dissecting all the complex jargon that spawned with the creation of web3. TRONPedia was created to act as the first block in your blockchain journey so you can get involved & even lead all the new web3-driven conversations. </div>
                    <div className="my-3 my-lg-5 d-flex align-items-start justify-content-between w-100 order-2 order-lg-0">
                        <img src={defi_normal} className="homepage-tronpedia-icons" alt="tron dao defi"/>
                        <img src={gamefi_normal} className="homepage-tronpedia-icons" alt="tron dao web3"/>
                        <img src={web_normal} className="homepage-tronpedia-icons" alt="tron dao web3"/>
                        <img src={nft_normal} className="homepage-tronpedia-icons" alt="tron dao nft"/>
                        <img src={coins} className="homepage-tronpedia-icons" alt="tron dao coins"/>
                    </div>
                    <div className="homepage-tronpedia-lets-go d-flex align-items-end justify-content-end order-4 order-lg-0">
                        <div className="d-flex align-items-end justify-content-end position-relative">
                        <img className="homepage-tronpedia-tronbull-button image-fluid d-lg-none" src={tronbullButton} alt="tron bull button" />
                        <button className="homepage-tronpedia-lets-go-button mt-3">
                            > Let's Go
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 align-items-center mx-xl-auto d-none d-lg-block">
                    <div className="homepage-tronpedia-tronbull text-center text-center">
                        <img src={tronbullWave} className="homepage-tronpedia-tronbull-icon img-fluid" alt="tron bull wave"/>
                    </div>
                </div>
            </div>
            <EmailCapture/>
        </div>
    );
};


export default Index;
