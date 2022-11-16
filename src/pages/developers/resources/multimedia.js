import React from "react"
import {Helmet} from "react-helmet"
import tronBullWatching from "../../../images/multimedia/watching.mp4";
import tronbullDirector from "../../../images/multimedia/tronbull-director.png"
import tronbullGraph from "../../../images/multimedia/tronbull-graph.png"
import tronTv from "../../../images/multimedia/tron-tv.png"
import EmailCapture from "../../../components/EmailCapture"

const Multimedia = ({data}) => {
    return (
    	<div className="trondao-multimedia">
    		<Helmet>
                <title>TRON Multimedia | TRONDAO</title>
                <meta name="description"
                        content="Throw the popcorn in the microwave and get streaming now"/>
                <meta property="og:description" content="Throw the popcorn in the microwave and get streaming now"/>
                <meta property="og:title" content="TRON Multimedia | TRONDAO"/>
            </Helmet>
    		<div className="multimedia">
                <div className="multimedia-main">
                    <video autoPlay muted loop playsInline className="d-block mx-auto">
                            <source src={tronBullWatching} type="video/mp4"/>
                    </video>
                    <div className="multimedia-main-header col-5 col-lg-4">
                        <h1 className="text-uppercase">Multimedia At <span>Scale</span></h1>
                        <p>
                        Throw the popcorn in the microwave and get streaming now!
                        </p>
                        <a href="/" className=""><button className="cta-button">Get Started</button></a>
                    </div>
                </div>

                <div className="multimedia-container">
                    <div className="multimedia-body d-flex flex-column flex-md-row align-items-center justify-content-center col-11 col-md-12 col-lg-8 mx-auto">
                        <div className="col-md-6 col-lg-5 mx-auto order-2 order-md-1">
    				        <h1 className="text-uppercase">Frictionless TV</h1>
                            <p>
                            TRON is putting the entertainment industry on a decentralized, borderless and sustainable blockchain. Our new protocol allows each user to publish, store and own data-- all at your own discretion. Finally decide the distribution, subscription and push of your own content. Streaming your favorite shows and movies is about to get easier and faster than ever!
                            </p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                           <img src={tronTv} alt="tron tv" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>
                    <div className="multimedia-body d-flex flex-column flex-md-row align-items-center justify-content-center col-11 col-md-12 col-lg-8 mx-auto">
                        <div className="col-md-6 col-lg-5 mx-auto order-2 order-md-2">
    				        <h1 className="text-uppercase">Unlimited Scalability</h1>
                            <p>
                            Yes, we really mean that. As more users join and contribute to the community, the library of content we have to offer will continue to grow. As the community and content library grows, so too will the protocol that is  powering the future of entertainment. 
                            </p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-1">
                           <img src={tronbullGraph} alt="tronbull standing at one the the bar graphs" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>

                    <div className="multimedia-body d-flex flex-column flex-md-row align-items-center justify-content-center col-11 col-md-12 col-lg-8 mx-auto">
                        <div className="col-md-6 col-lg-5 mx-auto order-2 order-md-1">
    				        <h1 className="text-uppercase">Own The Movie</h1>
                            <p>
                            With TRON, you own the TV shows and movies you watch, decide what content to see and how much to pay. TRON is looking to build a community that inspires healthy debate on everything entertainment.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                           <img src={tronbullDirector} alt="tronbull directing" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>

                    <div className="multimedia-ecosystem">
                        <div className="d-flex flex-column flex-md-row">
                            <div className="col-12 col-md-6 col-lg-5">
                                <h1 className="text-uppercase">Ecosystem</h1>
                                <p>
                                TRON is empowering developers to create P2E games across each of its platforms. TRON will be vital for bringing P2E games to the masses, and work every day with developers to scale, and more importantly, perfect their games.
                                </p>
                            </div>
                            <div className="d-flex flex-column col-12 col-md-6 col-lg-5 offset-lg-2">
                                <div className="">
                                    <div className="d-flex justify-content-between">
                                        <div className=" multimedia-ecosystem-circle">Finance</div>
                                        <div className=" multimedia-ecosystem-circle">Governance</div>
                                        <div className=" multimedia-ecosystem-circle">Art</div>
                                    </div>
                                    <div className="d-flex justify-content-around mt-3 mx-4">
                                        <div className=" multimedia-ecosystem-circle multimedia-ecosystem-circle-active">Gaming</div>
                                        <div className=" multimedia-ecosystem-circle">Multimedia</div>
                                    </div>
                                </div>
                                <div className="mt-5 col-12">
                                    <a href="/ecosystem/"><button className="multimedia-ecosystem-button w-100">> Visit Ecosystem</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <EmailCapture />
                    </div>
                </div>
    		</div>
    	</div>
   	)
}

export default Multimedia