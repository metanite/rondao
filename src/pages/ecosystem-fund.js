import React from "react"
import {Helmet} from "react-helmet"
import academyIcon from "../images/ecosystem/fund/academy-icon.svg"
import climateIcon from "../images/ecosystem/fund/climate-icon.svg"
import grantsIcon from "../images/ecosystem/fund/grants-icon.svg"
import hackatronIcon from "../images/ecosystem/fund/hackatron-icon.svg"
import ventureIcon from "../images/ecosystem/fund/ventures-icon.svg"
import terraIcon from "../images/ecosystem/fund/terra-icon.svg"
import integrationIcon from "../images/ecosystem/fund/integration-icon.svg"
import tronGraphs from "../images/ecosystem/fund/tron-graphs.png"
import defineCentralization from "../images/ecosystem/fund/define-centralization.png"
import background from "../images/ecosystem/fund/background.mp4"

const TrondaoVentures = () => {

	const programs = [
        {
            "title": "HackaTRON", 
            "icon": hackatronIcon, 
            "description": "Equipping, coaching, and rewarding forward-thinking, future-shaping teams developing for the TRON ecosystem."
        },
        {
            "title": "TRON/BTTC Integration Fund", 
            "icon": integrationIcon, 
            "description": "Providing incentives for projects to utilize the BTTC Chain functionalities to bridge to the TRON ecosystem."
        },
        {
            "title": "TRON DAO Ventures", 
            "icon": ventureIcon, 
            "description": "Discovering elite early-stage startups, investing profoundly, maximizing strategically, then exiting at an empowering moment."
        },
        {
            "title": "Ambassador Grants", 
            "icon": grantsIcon, 
            "description": "Providing support to the communities, developers, and influencers of the TRON network."
        },
		{
            "title": "TRON Academy Program", 
            "icon": academyIcon, 
            "description": "Partnering with top tier university blockchain clubs to equip the brightest and best next gen innovators and creators."
        },
		{
            "title": "TRON Climate Program", 
            "icon": climateIcon, 
            "description": "Caring about how much energy we use and how our environment is cared for."
        },
		{
            "title": "Terra Developer Incentive Fund", 
            "icon": terraIcon, 
            "description": "Providing support and sympathy to the ones who were affected in the UST crash"
        }
	]

	return (
    	<div className="trondao-ventures">
            <Helmet>
                <title>TRON Ecosystem Fund | TRONDAO</title>
                <meta name="description"
                        content="TRON DAO Ecosystem Fund Will Define Decentralization"/>
                <meta property="og:description" content="TRON DAO Ecosystem Fund Will Define Decentralization"/>
                <meta property="og:title" content="TRON Ecosystem Fund | TRONDAO"/>
            </Helmet>

            <div className="ecosystem-fund">
            	<div className="ecosystem-fund-header">
                    <video autoPlay muted loop playsInline className="d-block mx-auto">
                        <source src={background} type="video/mp4"/>
                    </video>
            		<div className="ecosystem-fund-header-title d-flex flex-column flex-md-row align-items-start">
                        <div className="col-11 mx-auto col-lg-8 mx-lg-0">
    				        <h1 className="text-uppercase">Tron Dao Ecosystem Fund will <span>define decentralization</span></h1>
                            <p>
                            The TRON DAO Ecosystem Fund aims at innovating web3. It has a variety of options, including HackaTron, TRON/BTTC integration Fund, TRON DAO ventures, a relief fund, grants offering, academy program, and climate initiative and upcoming programs. All of these make up the $1 billion allocated to empower the best and brightest building on TRON.
                            </p>
                            <a href="/" className=""><button className="ecosystem-fund-button">Submit Your Project</button></a>  
                        </div>
                    </div>
            	</div>

            	<div className="ecosystem-fund-sections col-11 col-lg-9 mx-auto">

                    <div className="ecosystem-fund-define d-flex flex-column flex-lg-row align-items-center justify-content-between">
                        <div>
                            <img src={defineCentralization} alt="globe with interconnected people" className="img-fluid" />
                        </div>
                        <div className="mt-5 mt-lg-0">
                            <h1>Define Decentralization</h1>
                            <p>
                            We believe the decentralized web3 future will be collaboratively multi-chain with seamless interoperability, offering essential tools for life-giving participation in the global economy and the global community. We want to enable and empower that future, along with fun applications and enjoyable experiences, too.   
                            </p>
                        </div>
                    </div>

            		<div className="ecosystem-fund-program">
            			<h2>Programs</h2>
            			<div className="ecosystem-fund-program-squares">
            				{
            					programs.map((program, i) => {
            						return (
            							<div key={i} className="ecosystem-fund-program-square d-flex flex-column justify-content-between align-items-center">
                                            <div>
                                                <img src={program.icon} alt={program.title+" icon"} className="img-fluid d-block mx-auto" />
                                                <h3 className="mt-5">{program.title}</h3>
                                                <p className="mt-3">{program.description}</p>
                                            </div>
                                            <div>
                                                <a href="/#" className="mt-4">Apply</a>
                                            </div>
	            						</div>
            						)
            					})
            				}
            			</div>
            		</div>

            		<div className="ecosystem-fund-last d-flex flex-column flex-lg-row justify-content-between">
            			<div className="order-2 order-lg-1 d-flex flex-column align-items-start align-items-md-center align-items-lg-start mt-5 mt-lg-0">
            				<h1>A Perfect Fit</h1>
            				<div className="mt-2 mt-md-4">
            					<ul>
	            					<li>Building on a trusted Layer1 (including but not limited to TRON)</li>
	            					<li>Working toward or already possessing a MVP, Testnet, or Beta</li>
	            					<li>Leveraging their own resources while stewarding outside funding</li>
	            					<li>Uniting a team of innovators and investors who are dedicated to success</li>
	            					<li>Synergizing for a multi-chain, interoperable, decentralized future</li>
	            				</ul>
	            				<p>Does this sound like you? We'd like to hear from you.</p>
            				</div>
            				<a href="/" className="mt-3 mt-md-0"><button className="ecosystem-fund-button">Submit Your Project</button></a>
            			</div>
            			<div className="order-1 order-lg-2 d-flex align-items-center justify-content-center">
            				<img src={tronGraphs} alt="tron logo and different types of graphs" className="img-fluid" />
            			</div>
            		</div>
            	</div>
            </div>
        </div>
   	)
}

export default TrondaoVentures