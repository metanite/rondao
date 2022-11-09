import React from "react"
import {Helmet} from "react-helmet"
import borderCircle from "../images/community/border-circle.svg"
import checkCircle from "../images/community/check-circle.svg"
import avatar from "../images/community/avatar.png"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Community = ({data}) => {
    return (
    	<div className="trondao-community">
            <Helmet>
                <title>TRON Community | TRONDAO</title>
                <meta name="description"
                        content="Not Yet"/>
                <meta property="og:description" content="Not Yet"/>
                <meta property="og:title" content="TRON Community | TRONDAO"/>
            </Helmet>

            <div className="community gaming-dark-color">
                <div className="community-main">
                    <div className="community-title flex-column d-flex flex-md-row align-items-center justify-content-center col-md-12">
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="text-uppercase">Become a <span>#Tronic</span></h1>
                            <p className="col-8 mx-auto text-center mt-4">Looking to help build the future of the internet? Well... what are you waiting for? Become a TRONIC now!</p>
                            <a href="/" className=""><button className="gaming-title-start-button">Call To Action</button></a>
                        </div>
                    </div>                
                </div>

                <div className="community-trait d-flex flex-column align-items-center justify-content-center">
                	<div>
                   		<h1 className="community-headline">Reliable Community</h1>
                    </div>

                    <div className="community-row d-flex flex-column flex-md-row">
                    	<div className="col-12 col-md-6">
                    		<div className="community-features d-flex flex-column align-items-center col-12"> 
                            <img src={checkCircle} alt="check circle with rotating arrow icon" className="mb-2 mb-lg-0"></img>
                            <h1 className="text-uppercase my-4">Adaptive</h1>
                            <p className="col-12 mx-auto text-center">
                            If you're passionate about TRON, blockchain technology, or more, TRONICS have likely built a community just for you.
                            </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="community-features d-flex flex-column align-items-center col-12">
                            <img src={borderCircle} alt="circle with outside border icon" className="mb-2 mb-lg-0"></img>
                            <h1 className="text-uppercase my-4">Strong</h1>
                            <p className="col-12 mx-auto text-center">
                            TRONICS act as the backbone of the network, providing computational power and support for the various dApps and features that make up the TRON ecosystem.
                            </p>
                            </div>
                        </div>
                    </div>
              	</div>

              	<div className="community-grants d-flex flex-column mx-auto">
              		<div className="community-grants-header d-flex flex-column align-items-center justify-content-center col-12">
              			<h1 className="text-uppercase text-center">Grants</h1>
              			<p className="col-7 mx-auto text-center">
              			We recognize that TRONICS are the heart of TRON and represent its future. Understanding that, we find it imperative to provide the tools to turn your brilliant ideas into realities. 
              			</p>
              		</div>

              		<div className="community-grants-subheader d-flex flex-column flex-md-row col-12">
              			<div className="col-12 col-md-4 d-flex flex-column justify-content-between text-center">
              				<h1 className="text-uppercase">Community</h1>
              				<p>
              				TRON provides valuable funding and resources to creators who are building projects within its ecosystem.
              				</p>
              				<a href="/" className=""><button className="community-grants-subheader-button">Call To Action</button></a>
              			</div>
              			<div className="col-12 col-md-4 d-flex flex-column justify-content-between text-center">
              				<h1 className="text-uppercase">Influencer</h1>
              				<p>
              				TRON is looking to support TRON eco-educators and influencers who are working on DAO-related projects and outreach.
              				</p>
              				<a href="/" className=""><button className="community-grants-button">Call To Action</button></a>
              			</div>
              			<div className="col-12 col-md-4 d-flex flex-column justify-content-between text-center">
              				<h1 className="text-uppercase">Developer</h1>
              				<p>
              				TRON is looking to help developers that are making this network more secure through discovery of bugs and vulnerabilties 
              				</p>
              				<a href="/" className=""><button className="community-grants-button">Call To Action</button></a>
              			</div>
              		</div>
              	</div>

              	<div className="community-team d-flex flex-column justify-content-center">
              		<div>
                   		<h1 className="community-headline text-center">Responsive Team</h1>
                    </div>

                    <div className="community-team-members community-trait d-flex flex-column flex-md-row justify-content-center mx-auto">
                    	<div className="col-12 col-md-4">
                    		<div className="community-team-member d-flex flex-column text-center justify-content-between col-12">
                    			<img src={avatar} alt="avatar" className="img-fluid d-block mx-auto"></img>
                    			<h1>Member Name</h1>
                    			<p>
                    			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, adipiscing tincidunt tempor tellus. Ridiculus habitasse in hendrerit urna.
                    			</p>
                    			<div className="community-team-member-socials d-flex flex-row align-items-center justify-content-between col-8 mx-auto">
                    				<a id="email-capture-social-facebook"
		                           aria-label="social-icon-facebook"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaFacebook size={20}/></a>
                    				<a id="email-capture-social-twitter"
		                           aria-label="social-icon-twitter"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
		                           <a id="email-capture-social-instagram"
		                           aria-label="social-icon-instagram"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
		                           <a id="email-capture-social-linkedin"
		                           aria-label="social-icon-linkedin"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
                    			</div>
                    		</div>
                    	</div>
                    	<div className="col-12 col-md-4">
                    		<div className="community-team-member d-flex flex-column text-center justify-content-between col-12">
                    			<img src={avatar} alt="avatar" className="img-fluid d-block mx-auto"></img>
                    			<h1>Member Name</h1>
                    			<p>
                    			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, adipiscing tincidunt tempor tellus. Ridiculus habitasse in hendrerit urna.
                    			</p>
                    			<div className="community-team-member-socials d-flex flex-row align-items-center justify-content-between col-8 mx-auto">
                    				<a id="email-capture-social-facebook"
		                           aria-label="social-icon-facebook"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaFacebook size={20}/></a>
                    				<a id="email-capture-social-twitter"
		                           aria-label="social-icon-twitter"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
		                           <a id="email-capture-social-instagram"
		                           aria-label="social-icon-instagram"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
		                           <a id="email-capture-social-linkedin"
		                           aria-label="social-icon-linkedin"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
                    			</div>
                    		</div>
                    	</div>
                    	<div className="col-12 col-md-4">
                    		<div className="community-team-member d-flex flex-column text-center justify-content-between col-12">
                    			<img src={avatar} alt="avatar" className="img-fluid d-block mx-auto"></img>
                    			<h1>Member Name</h1>
                    			<p>
                    			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, adipiscing tincidunt tempor tellus. Ridiculus habitasse in hendrerit urna.
                    			</p>
                    			<div className="community-team-member-socials d-flex flex-row align-items-center justify-content-between col-8 mx-auto">
                    				<a id="email-capture-social-facebook"
		                           aria-label="social-icon-facebook"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaFacebook size={20}/></a>
                    				<a id="email-capture-social-twitter"
		                           aria-label="social-icon-twitter"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
		                           <a id="email-capture-social-instagram"
		                           aria-label="social-icon-instagram"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
		                           <a id="email-capture-social-linkedin"
		                           aria-label="social-icon-linkedin"
		                           href="/"
		                           target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
                    			</div>
                    		</div>
                    	</div>
                    </div>
              	</div>
            </div>
       	</div>
    )
}

export default Community