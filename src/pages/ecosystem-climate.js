import React from "react"
import {Helmet} from "react-helmet"
import Partnership from "../images/ecosystem/climate/partnership.png"
import Earth from "../images/ecosystem/climate/earth.png"

const EcosystemClimate = () => {
	return (
    	<div className="trondao-ecosystem-climate">
            <Helmet>
                <title>TRON Ecosystem Climate Program | TRONDAO</title>
                <meta name="description"
                        content="TRON Climate initiative leading the charge for a sustainable future in blockchain "/>
                <meta property="og:description" content="TRON Climate initiative leading the charge for a sustainable future in blockchain"/>
                <meta property="og:title" content="TRON Ecosystem Climate Program | TRONDAO"/>
            </Helmet>

            <div className="ecosystem-climate">
            	<div className="ecosystem-climate-header d-flex flex-column justify-content-center align-items-start">
            		<h1>
            			TRON Climate initiative leading the charge for a 
            			<span> sustainable future in blockchain</span>
            		</h1>
            		<a 
            			href="/#"
						target="_blank"
            			rel="noopener noreferrer" 
            			id="ecosystem-climate-submit-project-button" 
            		>
            			<button className="ecosystem-climate-button mt-5">
                        	Submit Your Project
                        </button>
                    </a>
            	</div>

            	<div className="col-11 col-md-10 col-xxl-8 mx-auto">
            		<div className="ecosystem-climate-partnership d-flex flex-column flex-lg-row align-items-center justify-content-between">
	            		<div>
	            			<img src={Partnership} alt="tronbull with calculator and webpage" className="img-fluid"  />
	            		</div>
	            		<div>
	            			<h2>Sustainable Partnerships</h2>
	            			<p>
	            				We invite blockchain companies, organizations, and individuals to join 
	            				us in our mission to drive the blockchain industry toward sustainability 
	            				and environmental stewardship. By joining the TCI, you will join a global 
	            				coalition of like-minded individuals and businesses working to reduce the 
	            				environmental impact of the blockchain industry.
	            			</p>
	            			<p className="mt-4">
	            				Together, we can educate and support our members in 
								pursuing sustainable and responsible blockchain-related operations.
	            			</p>
	            		</div>
	            	</div>

	            	<div className="ecosystem-climate-greener-world">
	            		<h2 className="ecosystem-climate-greener-world-header">Building a greener world</h2>
	            	
	            		<div className="ecosystem-climate-greener-world-list">
	            			<div className="d-flex flex-column justify-content-between">
                                <div>
                                    <div>
                                        <h3>Industry Partners</h3>
                                        <ul>
                                            <li>Support renewable energy sources for blockchain operations</li>
                                            <li>Co-Fund the TRON Climate Initiative Grant or Pledge Funds Towards Carbon Removal</li>
                                            <li>Co-sponsor events, conferences and workshops to promote sustainability</li>
                                            <li>Support research and development of sustainable blockchain technologies</li>
                                            <li>Track and report environmental data transparently</li>
                                        </ul>
                                    </div>
                                    <div className="mt-5">
                                        <a 
                                            href="/#" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            id="ecosystem-climate-program-apply-button"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                </div>
	            			</div>
	            			<div className="d-flex flex-column justify-content-between">
	            				<div>
	            					<h3>Individuals & Projects</h3>
	            					<ul>
		            					<li>Apply for grants to reduce climate impact from blockchain technology</li>
		            					<li>Participate in online training and educational resources</li>
		            					<li>Network and learn about sustainable blockchain technologies</li>
		            					<li>Seek mentorships in the blockchain industry focused on sustainability</li>
		            					<li>Take part in the TRON Climate Initiative community</li>
		            				</ul>
	            				</div>
	            				<div className="mt-5">
	            					<a 
		            					href="/#" 
		            					target="_blank" 
		            					rel="noopener noreferrer" 
		            					id="ecosystem-climate-program-apply-button"
		            				>
		            					Apply
		            				</a>
	            				</div>
	            			</div>
	            		</div>
	            	</div>

	            	<div className="ecosystem-climate-sustainability d-flex flex-column flex-lg-row align-items-center justify-content-between">
	            		<div className="d-flex flex-column justify-content-between order-2 order-lg-1 mt-5 mt-lg-0">	
	            			<div>
	            				<h2>First Steps Towards Sustainability</h2>
	            			</div>
	            			<div>
	            				<h5>Industy Partner</h5>
	            				<p>
	            					One of the best actions an organization can take is to 
	            					commission an energy efficiency report. This report can 
	            					provide an in-depth analysis of where energy is being consumed 
	            					and how it can be reduced.
	            				</p>
	            			</div>
	            			<div className="mt-2">
	            				<h5>Carbon Removal</h5>
	            				<p>
	            					Organizations can pledge money towards purchasing carbon credits, 
	            					which will help to offset their carbon emissions and support 
	            					projects that reduce emissions.
	            				</p>
	            			</div>
	            			<div>
	            				<a
	            					href="/#"
	            					target="_blank"
	            					rel="noopener noreferrer"
	            					id="ecosystem-climate-program-learn-more-button"
	            				>
	            					<button className="ecosystem-climate-button">
	            					Learn More
	            					</button>
	            				</a>
	            			</div>
	            		</div>
	            		<div className="order-1 order-lg-2">
	            			<img src={Earth} alt="hand holding earth" className="img-fluid"  />
	            		</div>
	            	</div>
            	</div>
            </div>
        </div>
    )
}

export default EcosystemClimate