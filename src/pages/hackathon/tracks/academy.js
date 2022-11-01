import React from 'react';
import background from "../../../images/tracks/animatedHero.mp4";
import tronBullHackerHouse from '../../../images/tracks/TRON Bull Hacker House.png'
import tronBullMissionRocket from '../../../images/tracks/TRON Bull Mission Rocket.svg'
import {Helmet} from "react-helmet";

const Academy = () => {

    return (
        <div className="academy">
            <Helmet>
                <title>Academy Hackathon Track | TRONDAO</title>
                <meta name="description" content="The Hackathon Academy Track. See the winners of the latest hackathon who transition this technology to new levels."/>
                <meta property="og:description" content="The Hackathon Academy Track. See the winners of the latest hackathon who transition this technology to new levels."/>
                <meta property="og:title" content="Academy Hackathon Track | TRONDAO"/>
            </Helmet>
            <div className="academy-top my-5">
                <h1>
                    <div className="academy-top-header">
                        TRON ACADEMY
                    </div>
                    <div className="academy-top-subheader my-2">
                        MINI HACKATHON
                    </div>
                </h1>
                <video autoPlay muted loop playsInline className="homepage-hero-background">
                    <source src={background} type="video/mp4"/>
                </video>
            </div>
            <div className="academy-prizes row no-gutters my-5">
                <div className="academy-prizes-header col-12 my-5">
                    <h2>PRIZES</h2>
                    <h2>$100,000</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                    <div className="academy-prizes-card px-3 m-3">
                        <div className='row my-5 academy-prizes-card-first'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">1st Prize</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$15,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">2nd Prize</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$10,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">3rd Prize</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$9,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">4th Prize</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$8,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">5th Prize</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$7,000</div>
                        </div>
                    </div>
                    <div className="academy-prizes-card px-3 m-3">
                        <div className='row my-5 academy-prizes-card-first'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">1st Runner Up</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$5,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">2nd Runner Up</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$5,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">3rd Runner Up</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$5,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">4th Runner Up</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$5,000</div>
                        </div>
                        <div className='row my-5'>
                            <div className="col-lg-6 academy-prizes-card-content-rank">5th Runner Up</div>
                            <div className="col-lg-6 academy-prizes-card-content-amount">$5,000</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="academy-mission">
                {/* Mission */}
                <div className='row no-gutters'>
                    <div className='academy-mission-text col-lg-6 col-12'>
                        <div className="mb-5">
                            <h2>MISSION</h2>
                        </div>
                        <p className="px-3 px-md-0">The TRON Grand Hackathon mission is simple: to find the most creative and innovative ways to use the
                        TRON network and blockchain technology. From building new decentralized applications (dApps)
                        to creating novel protocols, we’re looking for developers who can push the envelope and show us
                        what’s possible.TRON is a fast, scalable, and user-friendly blockchain platform that supports
                        high-performance dApp development. With our robust toolset and supportive community,
                            there’s no limit to what you can build on TRON. So get hacking and show us what you’ve got!</p>
                    </div>
                    <div className="d-flex justify-content-center text-center w-100 mb-5 col-lg-6">
                        <img src={tronBullMissionRocket} alt="tron Bull Mission Rocket"
                             className="img-fluid academy-mission-img"/>
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                {/* How it works*/}
                <div className="col-12">
                    <h2 className="text-center">HOW THIS WORKS</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                    <div className="academy-how-card academy-how-card-red px-3 m-3">
                        <h3 className="text-center pt-5">JUDGES</h3>
                        <p className="my-5 px-2">The judges for the TRON Grand Hackathon come from a wide range of backgrounds
                            and bring with them a
                            diverse experience. They will be evaluating your entry based on creativity, originality,
                            feasibility as well as impact to determine which ones are most worthy!</p>
                    </div>
                    <div className="academy-how-card academy-how-card-blue px-3 m-3">
                        <h3 className="text-center pt-5">BOUNTIES</h3>
                        <p className="my-5 px-2">Calling all developers! The opportunity to make some extra cash while helping improve TRON's open-source blockchain is finally here. Now is your chance to earn some extra cash. So what are you waiting for? Get started now!</p>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                    <div className="academy-how-card academy-how-card-purple px-3 m-3">
                        <h3 className="text-center pt-5">WHY WE'RE DOING THIS</h3>
                        <p className="my-5 px-2">The TRON Grand Hackathon is a chance for developers, designers and
                            programmers from all over the world to showcase their talents. As hosts, we hope to advance
                            the development of next-generation projects and dApps built on TRON's blockchain.
                        </p>
                    </div>
                    <div className="academy-how-card academy-how-card-yellow px-3 m-3">
                        <h3 className="text-center pt-5">PROJECTS</h3>
                        <p className="my-5 px-2">Projects can range from games and apps to tools and services. No matter
                            what your idea is, the TRON Grand Hackathon is an excellent opportunity to get involved in the
                            blockchain community and make your mark on the future of cryptocurrency and web3.</p>
                    </div>
                </div>
            </div>
            <div className="academy-offline">
                {/* offline hackathon*/}
                <div className="mb-5">
                    <h2>OFFLINE HACKATHON</h2>
                </div>
                <div className="academy-offline-text">
                    <p>Calling all TRONICs! We are thrilled to announce the TRON Academy Offline Hackathon. This event will be a great opportunity for all talented individuals to showcase their skills and compete for a cash prize. If you think you have what it takes to compete, we encourage you to apply today. We hope to see you all very soon!</p>
                    {/*<a href="#" id="track-academy-offline-apply-btn" target="_blank" rel="noopener noreferrer" className="my-5">*/}
                    {/*    <button>Apply</button>*/}
                    {/*</a>*/}
                    <div>
                        <div className="d-flex flex-lg-column d-inline-flex my-5 justify-content-center w-100">
                            <div className="academy-offline-date p-3 mr-2 mr-lg-0 academy-offline-datetime">
                                <h4>DATE:</h4>
                                <p className="mt-3">TBD</p>
                            </div>
                            <div
                                className="academy-offline-time mt-lg-3 mt-0 p-3 ml-2 ml-lg-0 academy-offline-datetime">
                                <h4>TIME:</h4>
                                <p className="mt-3">TBD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-lg-none d-flex justify-content-center text-center w-100 mb-5">
                <img src={tronBullHackerHouse} alt="Tron Bull Hacker House" className="img-fluid"/>
            </div>
        </div>
    )
}

export default Academy

