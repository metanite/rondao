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
                            Welcome to the TRON blockchain! We are glad that you are interested in 
                            joining our decentralized platform and participating in the growing 
                            ecosystem of dApps and smart contracts. Many resources are available to 
                            help you get started, including documentation, tools, and a vibrant 
                            community of developers and users who are always happy to help.
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
                					<div className="d-flex flex-column justify-content-between">
	                					<h1>DApp Development Tools</h1>
	                					<p>
	                					TRON provides a suite of dApp development tools, including the TRON Virtual Machine and 
	                					TRON Studio, to enable developers to build and deploy decentralized applications on the 
	                					TRON network quickly.
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
	                					TRON offers tools to help developers build and deploy smart contracts on its network. 
	                					These tools have various features and functionality to make it easy for developers to create 
	                					high-quality smart contracts.
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
	                					TRON Link is a browser extension that enables developers to seamlessly integrate their 
	                					dApps with the TRON network and improve interoperability between TRON protocols and the 
	                					dApp ecosystem, resulting in a better user experience.
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
                					<div className="d-flex flex-column justify-content-between">
	                					<div>
	                						<h1>Account</h1>
	                					</div>
	                					<div>
		                					<p>
		                					Creating a TRON account is straightforward and easy, with various TRON wallets 
		                					available and clear instructions to help users set up their accounts and manage 
		                					their private keys and addresses.
		                					</p>
	                					</div>
                					</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div className="d-flex flex-column justify-content-between">
		                				<div>
		                					<h1>Resource Model</h1>
		                				</div>
		                				<div>
		                					<p>
		                					TRON’s resource model helps to create a more predictable and transparent gas 
		                					fee structure by allocating a fixed amount of energy and bandwidth to every 
		                					transaction. This makes it easier for users to budget for their transactions.
		                					</p>
		                				</div>
	                				</div>
                					<div className="get-started-body-section-card-icon d-flex align-self-end justify-content-center">
                						<a href="/"><FaArrowRight role="button" aria-label="redirect link" /></a>
                					</div>
                				</div>
                				<div className="get-started-body-section-card d-flex flex-column justify-content-between col-12">
                					<div className="d-flex flex-column justify-content-between">
		                				<div>
		                					<h1>Super Representatives</h1>
		                				</div>
		                				<div>
		                					<p>
		                					These digital delegates are responsible for verifying transactions on the 
		                					blockchain, and as a reward they earn back some of what it costs them to operate. 
		                					</p>
		                				</div>
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
	                					TRON makes deploying a node on its network easy by providing comprehensive documentation 
	                					and tools, such as the TRON QuickStart Guide and the TRON Deployment Scripts, to help 
	                					users set up and configure their nodes to their wishes.  
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
	                					To help ensure the integrity and security of the network, TRON regularly takes mainnet 
	                					database snapshots, which are backups of the state of the blockchain at a specific point in time.
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
	                					TRON's technology makes it easy to create and use a private chain, with tools such as the TRON 
	                					Private Chain Kit and TRON Box providing a simple and user-friendly way to set up and deploy a 
	                					private chain for testing or for use in a private network.
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
	                					TRON uses smart contracts to facilitate the creation and execution of complex agreements and 
	                					processes, allowing for the automation of a wide range of tasks and eliminating intermediaries.  
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
	                					TRON uses both Python and Solidity as programming languages to make it easier for developers to build 
	                					decentralized applications (dApps) and smart contracts on its platform.
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
	                					TRON makes it easy to deploy and invoke smart contracts on its network, with tools such as the TRON Virtual Machine, 
	                					TRON Studio, and TRON Box providing a solid foundation for creating, testing, and deploying high-quality smart contracts.
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
	                					TRON supports a wide variety of token standards that provide a set of rules and guidelines 
	                					for creating and managing tokens, helping to ensure compatibility and interoperability within 
	                						the TRON ecosystem.   
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
	                					TRON's native token, TRX, is a digital asset that is used to facilitate transactions and interactions 
	                					on the TRON network. It has a fixed total supply and can be bought, sold, and traded on cryptocurrency 
	                					exchanges. 
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
	                					The TRC-10 standard allows for the creation of tokens that can be used for various purposes, such as 
	                					representing a digital asset or serving as a means of exchange on the TRON network. 
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