import React from "react"
import {Helmet} from "react-helmet"
import Collapsible from "../components/collapsible"
import academyIcon from "../images/ventures/academy-icon.svg"
import climateIcon from "../images/ventures/climate-icon.svg"
import grantsIcon from "../images/ventures/grants-icon.svg"
import reliefIcon from "../images/ventures/relief-icon.svg"
import ventureIcon from "../images/ventures/venture-icon.svg"
import tronGraphs from "../images/ventures/tron-graphs.png"

const TrondaoVentures = () => {

	const programs = [
		{"title": "Academy", "icon": academyIcon},
		{"title": "Climate", "icon": climateIcon},
		{"title": "Relief Fund", "icon": reliefIcon}, 
		{"title": "Grants", "icon": grantsIcon}, 
		{"title": "Hackathon", "icon": ventureIcon} 
	]

	const info = [
		{"title": "STORY", "detail": "clearly articulate and educate about decentralized finance and blockchain technology"},
		{"title": "DISCOVER", "detail": "actively search for the creatives and developers with proven future-shaping abilities"},
		{"title": "INVEST", "detail": "profoundly support early stage blockchain based startups who believe in the decentralized future"},
		{"title": "MAXIMIZE", "detail": "strategically collaborate with those teams to empower their entrepreneurialism and make the most of what they are building"},
		{"title": "UNLEASH", "detail": "intentionally release those investments to change the world as they define decentralization, with TDV exiting ownership via token or equity sale in good timing"},
	]

	return (
    	<div className="trondao-ventures">
            <Helmet>
                <title>TRON Ventures | TRONDAO</title>
                <meta name="description"
                        content="No description yet"/>
                <meta property="og:description" content="No description yet"/>
                <meta property="og:title" content="TRON Ventures | TRONDAO"/>
            </Helmet>

            <div className="ventures">
            	<div className="ventures-header">
            		<div className="ventures-header-title d-flex flex-column flex-md-row align-items-start">
                        <div className="col-11 mx-auto col-lg-8 mx-lg-0">
    				        <h1 className="text-uppercase">Tron Dao Ventures will <span>define decentralization</span></h1>
                            <p>
                            TRON DAO is determined to discover web3 projects in alignment with our 
                            vision to decentralize the internet. As one of the Premier Layer-1 blockchains, 
                            with the third most Total Value Locked (TVL) among all blockchains, 
                            we are positioned to do more than just strengthen our own ecosystem. That’s why we launched TRON DAO Ventures.
                            </p>
                            <a href="/" className=""><button className="ventures-button">Submit Your Project</button></a>  
                        </div>
                    </div>
            	</div>

            	<div className="ventures-sections col-11 col-lg-9 mx-auto">
            		<div className="ventures-program">
            			<h2>Programs</h2>
            			<div className="ventures-program-cards">
            				{
            					programs.map((program, i) => {
            						return (
            							<div key={i} className="ventures-program-card">
	            							<div className="d-flex flex-column justify-content-between align-items-center">
	            								<img src={program.icon} alt={program.title+" icon"} className="img-fluid ventures-program-card-icon" />
	            								<h3>{program.title} Program</h3>
	            							</div>
	            						</div>
            						)
            					})
            				}
            			</div>
            		</div>

            		<div className="ventures-help">	
            			<h2 className="text-uppercase text-center">How TDV will help?</h2>
            			<div className="ventures-help-collapsibles d-flex flex-column">
            				{
            					info.map((i) => {
            						return (
            							<Collapsible title={i.title} info={i.detail} />
            						)
            					})
            				}
            			</div>		
            		</div>

            		<div className="ventures-last d-flex flex-column flex-md-row justify-content-between">
            			<div className="order-2 order-md-1 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0">
            				<h1>A “perfect fit” for TRON DAO Ventures is a project:</h1>
            				<div className="mt-2 mt-md-4">
            					<ul>
	            					<li>Built on a trusted Layer1 (including but not limited to TRON)</li>
	            					<li>With a MVP, Testnet, or Beta ready </li>
	            					<li>Past pre-seed funding, already with $500K+ raises</li>
	            					<li>With committed investors dedicated to success</li>
	            					<li>Synergistic with the dApps and tech in the TRON ecosystem</li>
	            				</ul>
	            				<p>Does this sound like you? Let us know.</p>
            				</div>
            				<a href="/" className="mt-3 mt-md-0"><button className="ventures-button">Submit Your Project</button></a>
            			</div>
            			<div className="order-1 order-md-2 d-flex align-items-center justify-content-center">
            				<img src={tronGraphs} alt="tron logo and different types of graphs" className="img-fluid" />
            			</div>
            		</div>
            	</div>
            </div>
        </div>
   	)
}

export default TrondaoVentures