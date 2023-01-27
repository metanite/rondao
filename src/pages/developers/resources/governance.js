import React from "react"
import {Helmet} from "react-helmet"
import governanceBackground from "../../../images/governance/background.mp4"
import tronbullBallot from "../../../images/governance/tronbull-ballot.png"
import tronCommunities from "../../../images/governance/communities.png"
import tronbullCircuit from "../../../images/governance/tronbull-circuit.svg"
import tronbullVoting from "../../../images/governance/tronbull-vote.svg"
import tronbullLink from "../../../images/governance/tronbull-link.svg"
import EmailCapture from "../../../components/EmailCapture"

const Governance = () => {
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
                    <div className="governance-main-header col-5 col-lg-4 d-flex flex-column justify-content-center align-items-start">
                        <h1 className="text-uppercase">Efficient Governance</h1>
                        <p className="my-lg-4">
                        Some description about this section will go here 
                        </p>
                        <a 
                            href="/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="governance-call-to-action-button"
                        >
                            <button className="cta-button mt-md-3">
                                CTA Button
                            </button>
                        </a>
                    </div>
                </div>

                <div className="governance-body">
                    <div className="governance-body-metrics d-flex flex-column col-12 col-lg-10 mx-auto">
                        <div className="col-12">
                            <h1 className="governance-body-metrics-title text-uppercase">
                            Important Metrics
                            </h1>  
                        </div>
                        <div className="d-flex flex-column justify-content-between flex-md-row mt-md-5">
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
                                With TRON's Delegated Proof of Stake consensus method, token holders get to make a real difference. 
                                They can vote for "super representatives" who are tasked with keeping the network secure - and are 
                                incentivized through rewards in tokens which they can choose to use on running their own node or 
                                reinvesting back into the system.
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
                                The TRON network has implemented a unique system that ensures everyone - no matter their status or background - 
                                gets to have an impact on the decisions made within the community. By opening polls and giving each vote equal 
                                weight, all voices are heard in order to reach collective consensus based on what truly reflects majority opinion 
                                and promotes fairness for all.
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
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-5">
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
                                <a 
                                    href="/#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="governance-start-building-button"
                                >
                                    <button className="cta-button mt-md-3">
                                        Start Building
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                    </div>  

                    <div className="governance-body-email-capture col-11 col-md-12 col-lg-9 col-xxl-8 mx-auto">
                        <EmailCapture />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governance