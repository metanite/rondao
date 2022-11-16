import React from "react"
import {Helmet} from "react-helmet"
import governanceBackground from "../../../images/governance/background.mp4"
import tronbullBallot from "../../../images/governance/tronbull-ballot.png"
import tronCommunities from "../../../images/governance/communities.png"
import tronbullCircuit from "../../../images/governance/tronbull-circuit.svg"
import tronbullVoting from "../../../images/governance/tronbull-vote.svg"
import tronbullLink from "../../../images/governance/tronbull-link.svg"
import EmailCapture from "../../../components/EmailCapture"

const Governance = ({data}) => {
    return (
        <div className="trondao-governance">
            <Helmet>
                <title>TRON Governance | TRONDAO</title>
                <meta name="description"
                        content="Efficient Governance"/>
                <meta property="og:description" content="Efficient Governance"/>
                <meta property="og:title" content="TRON Governance | TRONDAO"/>
            </Helmet>
            <div className="governance">
                <div className="governance-main">
                    <video autoPlay muted loop playsInline className="d-block mx-auto">
                            <source src={governanceBackground} type="video/mp4"/>
                    </video>
                    <div className="governance-main-header col-5 col-lg-4 d-flex flex-column justify-content-center align-items-start offset-md-1">
                        <h1 className="text-uppercase">Efficient Governance</h1>
                        <p className="my-lg-4">
                        Some description about this section will go here 
                        </p>
                        <a href="/"><button className="cta-button mt-md-3">CTA Button</button></a>
                    </div>
                </div>

                <div className="governance-body">
                    <div className="governance-body-metrics d-flex flex-column col-12 col-lg-9 mx-auto">
                        <div className="col-12">
                            <h1 className="governance-body-metrics-title text-uppercase">
                            Important Metrics
                            </h1>  
                        </div>
                        <div className="d-flex flex-column flex-md-row mt-md-5">
                            <div className="col-12 col-md-6">
                                <div className="governance-body-metrics-section col-12 text-center d-flex flex-column justify-content-center">
                                    <h1>145,000</h1>
                                    <p>DAO's created</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-5 mt-md-0">
                                <div className="governance-body-metrics-section col-12 text-center d-flex flex-column justify-content-center">
                                    <h1>1,225,000</h1>
                                    <p>Total Treasury of DAO's</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="governance-body-section">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center col-11 col-md-12 col-lg-10 mx-auto">
                            <div className="col-md-6 col-lg-5 mx-auto order-2 order-md-1">
                                <h1 className="text-uppercase">Proper Voting</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i
                                </p>
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-2">
                            <img src={tronbullBallot} alt="trons putting their vote in the ballot box" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                        </div>
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center col-11 col-md-12 col-lg-10 mx-auto">
                            <div className="col-md-6 col-lg-5 mx-auto order-2 order-md-2">
                                <h1 className="text-uppercase">Scalable Communities</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i] 
                                </p>
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-1">
                            <img src={tronCommunities} alt="different communites" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                        </div>
                        <div className="governance-body-section-byd d-flex flex-column col-11 col-md-12 col-lg-10 mx-auto">
                            <div>
                                <h1>
                                    Build Your DAO
                                </h1>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="governance-body-section-circle-big d-flex justify-content-center position-relative">
                                    <div className="governance-body-section-circle-small d-flex justify-content-center align-items-center">
                                    <div><h1>1</h1></div>
                                    </div>
                                    <img src={tronbullCircuit} alt="tronbull with a circuit body" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                                    </div>
                                    <div className="mt-5">
                                        <p className=" text-center ">Structure</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="governance-body-section-circle-big d-flex justify-content-center position-relative">
                                    <div className="governance-body-section-circle-small d-flex justify-content-center align-items-center">
                                    <div><h1>2</h1></div>
                                    </div>
                                    <img src={tronbullVoting} alt="tronbull voting" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                                    </div>
                                    <div className="mt-5">
                                        <p className=" text-center ">Voting</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="governance-body-section-circle-big d-flex justify-content-center position-relative">
                                    <div className="governance-body-section-circle-small d-flex justify-content-center align-items-center">
                                    <div><h1>3</h1></div>
                                    </div>
                                    <img src={tronbullLink} alt="tronbull link" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                                    </div>
                                    <div className="mt-5">
                                        <p className=" text-center ">Community</p>
                                    </div>
                                </div>
                            </div>
                                <div className="d-flex justify-content-center justify-content-md-end col-12 mt-5">
                                <a href="/"><button className="cta-button mt-md-3">Start Building</button></a>
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

export default Governance