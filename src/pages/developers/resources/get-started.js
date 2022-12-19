import React from "react"
import {Helmet} from "react-helmet"
import {FaArrowRight} from "react-icons/fa"
import researchBackGround from "../../../images/started/tronbull-lab.mp4"
import tronbullOpenarms from "../../../images/started/tronbull-openarms.png"
import tronbullSidewaving from "../../../images/started/tronbull-sidewaving.png"
import tronbullRocket from "../../../images/started/tronbull-rocket.png"
import tronbullFlask from "../../../images/started/tronbull-flask.png"
import EmailCapture from "../../../components/EmailCapture"

const GetStarted = ({data}) => {
    return (
        <div className="trondao-get-started">
            <Helmet>
                <title>TRON Get Started | TRONDAO</title>
                <meta name="description"
                        content="Get Started"/>
                <meta property="og:description" content="Get Started"/>
                <meta property="og:title" content="TRON Get Started | TRONDAO"/>
            </Helmet>

            <div className="get-started">
            	<div className="get-started-main">
                    <video autoPlay muted loop playsInline className="d-block mx-auto">
                            <source src={researchBackGround} type="video/mp4"/>
                    </video>
                    <div className="get-started-main-header col-5 d-flex flex-column justify-content-start align-items-start">
                        <h1 className="text-uppercase">Get Started</h1>
                        <p className="mt-lg-5 text-uppercase">
                        Become A <span>#Tronic</span>
                        </p>
                    </div>
                </div>

                <div className="get-started-body">
                	<div className="get-started-body-opening col-11 col-md-8 mx-auto">
                        <div className="">
                            <h1 className="text-uppercase mb-4">Get Started</h1>
                        </div>
                        <div>
                            <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="">
                        	<img src={tronbullFlask} alt="tronbull holding a flask" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                    	</div>
                    </div>

                    <div className="get-started-body-section d-flex flex-column">
                    	<div>
                			<div className="get-started-body-section-title d-flex">
                				<h1><span></span>dApp Development guide</h1>
                			</div>
                			<div className="get-started-body-section-cards col-11 col-md-10  col-lg-8 mx-auto mt-4 position-relative">
                                <img src={tronbullRocket} alt="tronbull riding a rocket" className="get-started-body-section-img1"></img>
            					<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>DApp Development Tools</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Smart Contract Development</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, asdasdasd Lorem ipsum dolor sit amet, asdasdasd Lorem ipsum dolor sit amet, asdasdasd asdi ajsid jaisjd aisjd aisjd iasjd aisj dasjdia j consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
	                					</p>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>DApp Integration with TronLink</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                			</div>
                		</div>

                		<div className="position-relative">
                			<div className="get-started-body-section-title d-flex">
                				<h1><span></span>TRON Protocol</h1>
                			</div>
                			<div className="get-started-body-section-cards col-11 col-md-10 col-lg-8 mx-auto mt-4">
            					<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Account</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	                					quis nostrud 
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Resource Model</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	                					quis nostrud
	                					</p>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Super Representatives</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	                					quis nostrud
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                			</div>
                		</div>

                		<div className="position-relative">
                			<div className="get-started-body-section-title d-flex">
                				<h1 className="text-uppercase"><span></span>Build Mode</h1>
                			</div>
                			<div className="get-started-body-section-cards col-11 col-md-10 col-lg-8 mx-auto mt-4 position-relative">
                            <img src={tronbullSidewaving} alt="tronbull waiving" className="d-none d-lg-block get-started-body-section-img2"></img>
            					<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Deploy A Node</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Main Net Database Snapshots</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
	                					</p>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Tron Private Chain</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                			</div>
                		</div>

                		<div>
                			<div className="get-started-body-section-title d-flex">
                				<h1 className="text-uppercase"><span></span>Smart Contracts</h1>
                			</div>
                			<div className="get-started-body-section-cards col-11 col-md-10 col-lg-8 mx-auto mt-4">
            					<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Introduction</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Programming Language</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
	                					</p>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Deployment and Invocation</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                			</div>
                		</div>
 
                		<div className="position-relative">
                			<div className="get-started-body-section-title d-flex">
                				<h1 className="text-uppercase"><span></span>Token Standards</h1>
                			</div>
                			<div className="get-started-body-section-cards col-11 col-md-10 col-lg-8 mx-auto mt-4 position-relative">
                            <img src={tronbullOpenarms} alt="tronbull waiving" className="get-started-body-section-img3"></img>
            					<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>Overview</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud   
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>TRX</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
	                					</p>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div>
	                					<h1>TRC-10</h1>
	                					<p>
	                					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
	                					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
	                					</p>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                			</div>
                		</div>
                		
                    </div>

                    <div className="get-started-email-capture col-11 col-md-8 col-lg-9 col-xxl-8 mx-auto">
                    	<EmailCapture />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted