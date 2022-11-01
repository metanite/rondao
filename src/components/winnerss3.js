import React, {useState} from "react"
import web3 from "../images/tracks/icon-track-web3-dark.svg"
import nft from "../images/tracks/icon-track-nft-dark.svg"
import defi from "../images/tracks/icon-track-defi-dark.svg"
import gamefi from "../images/tracks/icon-track-gamefi-dark.svg"
import testImg from "../images/trondao-logo-white.svg"
import {CgClose} from "react-icons/all";
import HackerText from "./hackerText";
import tronbullHype from "../images/hackathons3/TRON Bull Hype.png";

const Winnerss3 = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const displayModal = () => {
        return isOpen ? ' d-block' : ' ';
    }

    const selectTrack = (arrayOfWinners) => {
        setIsOpen(true);
        setSelectedTrackAndSeason(arrayOfWinners.reverse());
    }

    const [selectedTrackAndSeason, setSelectedTrackAndSeason] = useState([]);

    let web3Season1Winners = [];
    let web3Season2Winners = [];
    let web3Season3Winners = [];

    let defiSeason1Winners = [];
    let defiSeason2Winners = [];
    let defiSeason3Winners = [];

    let nftSeason1Winners = [];
    let nftSeason2Winners = [];
    let nftSeason3Winners = [];

    let gamefiSeason1Winners = [];
    let gamefiSeason2Winners = [];
    let gamefiSeason3Winners = [];

    let bonusPrizeSeason2Winners = [];
    let bonusPrizeSeason3Winners = [];


    for (let i = 0; i < data.nodes.length; i++) {
        let node = data.nodes[i];
        let season = node.hackathonSeasonsAndTracks.hackathonSeason;
        let track = node.hackathonSeasonsAndTracks.hackathonTrack;

        if (season.includes("Season 1")) {
            if (track.includes("Web3")) {
                web3Season1Winners.push(node);
            } else if (track.includes("DeFi")) {
                defiSeason1Winners.push(node);
            } else if (track.includes("NFT")) {
                nftSeason1Winners.push(node);
            } else if (track.includes("GameFi")) {
                gamefiSeason1Winners.push(node);
            }

        } else if (season.includes("Season 2")) {
            if (track.includes("Web3")) {
                web3Season2Winners.push(node);
            } else if (track.includes("DeFi")) {
                defiSeason2Winners.push(node);
            } else if (track.includes("NFT")) {
                nftSeason2Winners.push(node);
            } else if (track.includes("GameFi")) {
                gamefiSeason2Winners.push(node);
            } else {
                bonusPrizeSeason2Winners.push(node);
            }
        }
    }


    return (
        <>
            <div className="text-center row no-gutters winners-s3-lower hackathon-border-right-fix">
                <HackerText text='Winners' id="winners" className="text-uppercase section-header font-weight-bold w-100 mt-5"
                            tag="h2" triggerStart="bottom 95%" speed="50"/>
                <p className="w-100 winners-s3-subheading"><span>&lt;p&gt;</span>Congratulations to our Season Two
                    Winners<span>&lt;/p&gt;</span></p>
                <div className="winners-s3-bull"><img src={tronbullHype} alt="Tronbull Hype" className="img-fluid"/></div>
            </div>
            <div className="text-center row  no-gutters mx-lg-0 mx-0 winners-s3">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="">
                        <div className="d-flex align-items-center justify-content-center winners-s3-image"><img
                            src={web3}/></div>
                        <h3 className="mb-5">Web3</h3>
                        <p className="w-75 mx-auto winners-s3-description">The future of the Web is in your hands. The
                            judges are looking to developers for a contribution that will help transition this new
                            technology and bring it to fruition.</p>
                        <div className="w-75 mx-auto">
                            <button className="w-100" id="hackathon-view-winners-web3-season1"
                                    onClick={function () {
                                selectTrack(web3Season1Winners);
                            }}>Season 1
                            </button>
                            <button className="w-100" id="hackathon-view-winners-web3-season2"
                                    onClick={function () {
                                selectTrack(web3Season2Winners);
                            }}>Season 2
                            </button>
                            <button className="w-100" disabled>Season 3</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="">
                        <div className="d-flex align-items-center justify-content-center winners-s3-image"><img
                            src={defi}/></div>
                        <h3 className="mb-5">DeFi</h3>
                        <p className="w-75 mx-auto winners-s3-description">DeFi continues to be a crucial movement for
                            the crypto space as it enables financial services to operate in an open, accessible, and
                            transparent digital form. Looking for the next innovative DeFi solution that could provide
                            accessible financial services to billions of people.</p>
                        <div className="w-75 mx-auto">
                            <button className="w-100" id="hackathon-view-winners-defi-season1"
                                    onClick={function () {
                                selectTrack(defiSeason1Winners);
                            }}>Season 1
                            </button>
                            <button className="w-100" id="hackathon-view-winners-defi-season2"
                                    onClick={function () {
                                selectTrack(defiSeason2Winners);
                            }}>Season 2
                            </button>
                            <button className="w-100" disabled>Season 3</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="">
                        <div className="d-flex align-items-center justify-content-center winners-s3-image"><img
                            src={nft}/></div>
                        <h3 className="mb-5">NFT</h3>
                        <p className="w-75 mx-auto winners-s3-description">We are embracing creator economies by working
                            to empower developers who create novel NFT applications. By giving them both financial
                            benefits and technical support so that their work can reach its full potential.</p>
                        <div className="w-75 mx-auto">
                            <button className="w-100" id="hackathon-view-winners-nft-season1"
                                    onClick={function () {
                                selectTrack(nftSeason1Winners);
                            }}>Season 1
                            </button>
                            <button className="w-100" id="hackathon-view-winners-nft-season2"
                                    onClick={function () {
                                selectTrack(nftSeason2Winners);
                            }}>Season 2
                            </button>
                            <button className="w-100" disabled>Season 3</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="">
                        <div className="d-flex align-items-center justify-content-center winners-s3-image"><img
                            src={gamefi}/></div>
                        <h3 className="mb-5">GameFi</h3>
                        <p className="w-75 mx-auto winners-s3-description">There’s nothing like feeling the victory when
                            your game comes out on top. This track is all about developing the next big game idea. With
                            the next generation of game, entertainment meets blockchain.</p>
                        <div className="w-75 mx-auto">
                            <button className="w-100" id="hackathon-view-winners-gamefi-season1"
                                    onClick={function () {
                                selectTrack(gamefiSeason1Winners);
                            }}>Season 1
                            </button>
                            <button className="w-100" id="hackathon-view-winners-gamefi-season2"
                                    onClick={function () {
                                selectTrack(gamefiSeason2Winners);
                            }}>Season 2
                            </button>
                            <button className="w-100" disabled>Season 3</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="winners-s3 text-center w-100 my-5">
                <h3 className="my-5">Bonus Prizes</h3>
            </div>

            <div className="text-center row  no-gutters mx-lg-0 mx-0 winners-s3">
                <div className="col-md-6 col-lg-3 offset-0 offset-lg-3 col-12">
                    <div>
                        <div className="w-75 mx-auto">
                            <button className="w-100" id="hackathon-view-winners-bonus-season2"
                                    onClick={function () {
                                selectTrack(bonusPrizeSeason2Winners);
                            }}>Season 2
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 mb-5 pb-5">
                    <div>
                        <div className="w-75 mx-auto">
                            <button className="w-100" disabled>Season 3</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'winners-s3-modal' + displayModal()}>
                <div className="row no-gutters h-100 align-items-center justify-content-center">
                    <div className="w-75 winners-s3-modal-container">
                        <div className="float-right mr-3 mt-2 cursor-pointer" onClick={function () {
                            setIsOpen(false)
                        }}><CgClose size="45px"/></div>
                        <div className="my-5 winners-s3-modal-content-wrapper text-center row no-gutters w-100">

                            {selectedTrackAndSeason.length > 0 && selectedTrackAndSeason.map((track) => {
                                let project = track.title.split(':')[1].split(" by ")[0];
                                let teamName = track.title.split(':')[1].split(" by ")[1];
                                let teamImg = track.hackathonProjectInfo.hackathonTeamPic != null ? track.hackathonProjectInfo.hackathonTeamPic.sourceUrl : testImg;
                                return (
                                    <div key={'key-winner-modal-' + track.title}
                                         className="mx-5 row no-gutters winners-s3-modal-content align-items-center py-5 py-md-0 w-100">
                                        <div
                                            className="col-md-3  col-12 offset-0 winners-s3-modal-content-prize">
                                            <span>{track.hackathonProjectInfo.winnersPrize}</span>
                                        </div>
                                        <div className="col-md-1 col-12 align-items-center">
                                            <img className="winners-s3-modal-content-project-img" src={teamImg}
                                                 alt={track.title}/>
                                        </div>
                                        <div
                                            className="col-md-7 offset-0 offset-md-1 col-12 winners-s3-modal-content-team text-md-left text-center ">
                                            <span
                                                className="winners-s3-modal-content-project ">{project}</span> by <span>{teamName}</span>
                                        </div>
                                    </div>
                                )
                            })
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Winnerss3