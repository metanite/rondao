import React from "react";
import community from "../images/grants/community.svg"
import influencers from "../images/grants/influencers.svg"
import developers from "../images/grants/developers.svg"
import {Helmet} from "react-helmet";

const grants = () => {

    return (
        <div className="grants">
            <Helmet>
                <title>Grants for the Blockchain Community | TRONDAO</title>
                <meta name="description" content="TRON DAO grants support communities, developers and influencers. We connect the TRON team with community ambassadors, core devs and influencers. Learn more."/>
                <meta property="og:description" content="TRON DAO grants support communities, developers and influencers. We connect the TRON team with community ambassadors, core devs and influencers. Learn more."/>
                <meta property="og:title" content="Grants for the Blockchain Community | TRONDAO"/>
            </Helmet>
            <div
                className="pb-5 d-flex justify-content-center hero-padding bg-gradient text-decoration-none text-white">
                <h1 className="mt-5">GRANTS FOR THE BLOCKCHAIN COMMUNITY</h1>
            </div>
            <div className="container-fluid">
                <div className="grants">
                    <div className="row my-5 py-5 align-items-center">
                        <div className="col-md-5 offset-md-1 col-sm-12">
                            <h1 className="grants-title">TRON DAO GRANTS OVERVIEW</h1>
                            <p className="text-white">The TRON DAO Grant Program provides support to Communities,
                                Developers, and Influencers that are building on the TRON network.</p>
                        </div>
                        <div className="col-md-5 offset-md-1 col-sm-12 mt-5 grants-anchors">
                            <a href="#grants-community"><h3 className="pl-4 text-white">Community</h3></a>
                            <div className="grants-spacer-ball"/>
                            <div className="grants-spacer"/>
                            <a href="#grants-developers"><h3 className="pt-2 pl-4 text-white">Developers</h3></a>
                            <div className="grants-spacer-ball"/>
                            <div className="grants-spacer"/>
                            <a href="#grants-influencers"><h3 className="pt-2 pl-4 text-white">Influencers</h3></a>
                        </div>
                    </div>


                    <div className="row grants-section align-items-center">
                        <div className="col-md-5 offset-md-1 col-sm-12 my-5 order-1 order-md-0 grants-section-inner">
                            <h3 className="mb-3" id="grants-community">COMMUNITY AMBASSADOR</h3>
                            <p className="grants-second-title">GRANT PROGRAM</p>
                            <p>The Community Ambassador Grant Program will promote an incentivized gateway between the
                                internal TRON team and multiple “Community Ambassadors” to expand the TRON Ecosystem.
                                This program will be accomplished by cultivating relationships between the TRON DAO team
                                and established Community Ambassadors that are actively engaged in the TRON DAO
                                Community.</p>
                            <div className="text-center pt-3">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScSdXeAoPr4WQX7QMXmIxtVyZUgJoUcJ0zkWNB4D59mCT5FhA/viewform?usp=sf_link"
                                   target="_blank" rel="noopener noreferrer">
                                    <button className="btn grants-apply-button" id="grants-community-btn">Apply Now</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 my-5 text-center order-0 order-md-1 grants-section-inner px-5 px-md-0">
                            <img src={community} className="img-fluid pt-3" alt="community"/>
                        </div>
                    </div>

                    <div className="row grants-section align-items-center">
                        <div className="col-md-5 offset-md-1 col-sm-12 my-5 text-center grants-section-inner px-5 px-md-0">
                            <img src={developers} className="img-fluid" alt="developers"/>
                        </div>
                        <div className="col-md-5 col-sm-12 my-5 grants-section-inner">
                            <h3 className="mb-3 mt-3" id="grants-developers">DEVELOPERS</h3>
                            <p className="grants-second-title">GRANT PROGRAM</p>
                            <p>The Developer Grant Program will promote an incentivized gateway between the internal
                                TRON team and multiple CORE DEVs to expand the TRON network. This program will be
                                accomplished by cultivating numerous incubation spaces intentionally designed to engage
                                and empower leaders to promote the TRON ecosystem.
                                <br/><br/>
                                In addition to the Developer Grant Program, we have a Bug Bounty Program that will
                                incentivize developers to search for vulnerabilities and bugs. The program will help to
                                make our ecosystem more safe, robust, and functional. Grants will be awarded depending
                                on the severity of the bug or vulnerability found, and only after the description and
                                steps to recreate the bug (Proof-of-Concept) have been evaluated by the TRON DAO team.
                            </p>
                            <div className="text-center pt-3">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7-kMeuXIyuL_cXCbVz64gK4dArUzaPkeBUr2oc0uPNavwcg/viewform"
                                   target="_blank" rel="noopener noreferrer">
                                    <button className="btn grants-apply-button" id="grants-developers-btn">Apply Now</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row grants-section align-items-center">
                        <div className="col-md-5 offset-md-1 col-sm-12 my-5 order-1 order-md-0 grants-section-inner">
                            <h3 className="b-3" id="grants-influencers">INFLUENCER</h3>
                            <p className="grants-second-title">GRANT PROGRAM</p>
                            <p>In an effort to support and grow the TRON influencer ecosystem, TRON DAO has launched a
                                program to provide strategic grants to support influencer growth. Grants will be awarded
                                to influencers working on TRON DAO related projects and outreach. The influencer
                                projects will target specific channels of social media to amplify the influencer message
                                and create an authentic buzz throughout the entire ecosystem. </p>
                            <div className="text-center pt-3">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdc34jIUn9tPIeQWUjHco1WaUVGTGWnaJEE-wPPaJ7GGjx95A/viewform"
                                   target="_blank" rel="noopener noreferrer">
                                    <button className="btn grants-apply-button" id="grants-influencers-btn">Apply Now</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 my-5 text-center order-0 order-md-1 grants-section-inner px-5 px-md-0">
                            <img src={influencers} className="img-fluid pt-3" alt="Influencers"/>
                        </div>
                    </div>

                    <div className="row mt-5 py-5">
                        <div className="col-md-11 offset-md-1">
                            <h3 className="h3 grants-title pt-5">CRITERIA</h3>
                        </div>
                    </div>

                    <div className="row grants-criteria pt-5 mt-5">
                        <div className="grants-border-bottom col-lg-4 col-md-5 offset-md-1 col-12 order-1 order-lg-0">
                            <h4 className="grants-blue">Community Grant Criteria</h4>
                        </div>
                        <div className="col-lg-1 col-md-12 align-items-center order-md-0 order-lg-1 pb-5 pb-md-0 text-center">
                            <img className="grants-criteria-icon mx-auto" src={community}  alt="community"/>
                            <div className="grants-criteria-vertical-line d-none d-lg-block mt-2" />
                        </div>
                        <div className="col-lg-4 col-md-5 col-12 order-2 align-items-center grants-border-bottom">
                            <ul>
                                <li>Established Community on a Social Network (ie: Discord, Telegram, or Twitter)</li><br/>
                                <li>History of regular engagement within the community</li><br/>
                                <li>Support for the TRON DAO Community and its community objectives</li><br/>
                                <li>Understanding of the TRON Ecosystem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row grants-criteria pt-5 mt-5">
                        <div className="grants-border-bottom col-lg-4 col-md-5 offset-md-1 col-12 order-1 order-lg-0">
                            <h4 className="grants-blue">Developer Grant Criteria</h4>
                        </div>
                        <div className="col-lg-1 col-md-12 align-items-center order-md-0 order-lg-1 pb-5 pb-md-0 text-center">
                            <img className="grants-criteria-icon mx-auto" src={developers}  alt="developers"/>
                            <div className="grants-criteria-vertical-line d-none d-lg-block mt-2" />
                        </div>
                        <div className="col-lg-4 col-md-5 col-12 order-2 align-items-center grants-border-bottom">
                            <ul>
                                <li>Established project with proof of concept (ie: Github Repository)</li><br/>
                                <li>History of consistent development efforts</li><br/>
                                <li>Support for the TRON DAO Community and its community objectives</li><br/>
                                <li>Understanding of the TRON Ecosystem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row grants-criteria pt-5 mt-5">
                        <div className="grants-border-bottom col-lg-4 col-md-5 offset-md-1 col-12 order-1 order-lg-0">
                            <h4 className="grants-blue">Influencer Grant Criteria</h4>
                        </div>
                        <div className="col-lg-1 col-md-12 align-items-center order-md-0 order-lg-1 pb-5 pb-md-0 text-center">
                            <img className="grants-criteria-icon mx-auto" src={influencers}  alt="influencers"/>
                            <div className="grants-criteria-vertical-line d-none d-lg-block mt-2" />
                        </div>
                        <div className="col-lg-4 col-md-5 col-12 order-2 align-items-center grants-border-bottom">
                            <ul>
                                <li>Established social channels with crypto relevant content</li><br/>
                                <li>History of consistent quality content creation</li><br/>
                                <li>Support for the TRON DAO Community and its community objectives</li><br/>
                                <li>Understanding of the TRON Ecosystem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-11 offset-md-1">
                            <h3 className="h3 grants-title pt-5">Alternative Funding Sources</h3>
                        </div>
                    </div>

                    <div className="row grants-alternative pt-5 mt-5">
                        <div className="grants-alternative-container col-md-6 col-12 align-items-center order-0 order-md-1 pb-5 pb-md-0 mx-sm-auto">
                            <div className="grants-alternative-container-content">
                                <div className="grants-alternative-container-content-header">TRON Grand Hackathon 2022</div>
                                <div className="grants-alternative-container-content-paragraph py-5">TRON DAO is thrilled to launch the 2022 Grand Hackathon.
                                    The future is not far from widespread decentralized storage, decentralized applications, 
                                    digital assets, and cryptocurrency wallets. With the increasing use of decentralized, 
                                    peer-to-peer, and secure networks, blockchain is becoming the backbone of Web 3.0 — the decentralized web. 
                                    The TRON Grand Hackathon 2022 creates opportunities for unheard talents to make their marks and accelerate 
                                    the development of Web 3.0 while promoting the growth of the blockchain ecosystem at the same time.
                                </div>
                                <a href="https://trons3.devpost.com//" target="_blank" rel="noreferrer">
                                    <div className="grants-alternative-container-content-apply">
                                        > Apply Now
                                    </div>
                                 </a>
                            </div>
                        </div>

                        <div className="grants-alternative-container col-md-6 col-12 align-items-center order-0 order-md-1 pb-5 pb-md-0 mx-sm-auto">
                            <div className="grants-alternative-container-content">
                                <div className="grants-alternative-container-content-header">APENFT Marketplace TRON101 Project</div>
                                <div className="grants-alternative-container-content-paragraph py-5">As the world’s first art fund that realizes cross-collecting and 
                                    provides access for traditional artists to the NFT market, APENFT aspires to establish a better NFT market 
                                    through funding and supporting ecosystems, in a bid to encourage more outstanding,
                                    innovative NFT development teams to deploy their projects on TRON for wider adoption.
                                </div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScU8fmcDHRfSjuCPWQ0W2oMmlPNCG4RXYY1LiCQHZeS7j7EOw/viewform" target="_blank" rel="noreferrer">
                                    <div className="grants-alternative-container-content-apply pt-5" style={{margin: '40px 0 0 0'}}>
                                        > Apply Now
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row grants-alternative pt-5 mt-5">
                        <div className="grants-alternative-container col-md-6 col-12 align-items-center order-0 order-md-1 pb-5 pb-md-0 mx-sm-auto">
                            <div className="grants-alternative-container-content">
                                <div className="grants-alternative-container-content-header">TRON $1B Ecosystem Fund</div>
                                <div className="grants-alternative-container-content-paragraph py-5">
                                    TRON has announced the allocation for the $1,111,111,111 ecosystem fund they revealed in November 2021. 
                                    The fund was established to foster the growth and development of the TRON ecosystem over 10 years.
                                </div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZRYCkMA5LiQ1ZF6b0sHH3z7EiFbgOzDsehaDljmSwT-i9tQ/viewform" target="_blank" rel="noreferrer">
                                    <div className="grants-alternative-container-content-apply" style={{margin: '146px 0 0 0'}}>
                                        > Apply Now
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 align-items-center order-0 order-md-1 pb-5 pb-md-0 mx-sm-auto grants-alternative-fields">
                            <div className="grants-alternative-container-content">
                                <div className="grants-alternative-container-content-header">Fields of Interest</div>
                                <div className="grants-alternative-container-content-lastParagraph py-5" >Below are a few categories
                                    of projects we are currently interested in funding: 
                                </div>
                                <div className="grants-alternative-container-content-listpt-5">
                                    <li>Decentralized Finance</li>
                                    <li>Developer Tooling</li>
                                    <li>GameFi</li>
                                    <li>NFT Projects</li>
                                    <li>Education</li>
                                    <li>Community Building Tools</li>
                                    <li>Social Impact</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-11 offset-md-1">
                            <h3 className="h3 grants-title pt-5">Process Overview</h3>
                        </div>
                    </div>

                    <div className="row grants-process pt-5 mt-5">
                        <div className="grants-process col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 py-5 pb-xl-0 text-center text-xl-left">
                            <div className="grants-process-circle align-items-center mx-auto pb-5">
                                <div className="grants-process-circle-number">1</div>
                                <div className="grants-process-vertical-line d-none d-xl-block py-5"/>
                            </div>
                        </div>

                        <div className="col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 py-5 pb-xl-0">
                            <div className="grants-process-header text-center text-xl-left">Application</div>
                            <div className="grants-process-paragraph py-5">                  
                                    In your application, be sure to clarify how your project creates a public good for the TRON network,
                                    typically through furthering decentralization, open sourcing code, or helping to secure the TRON network.<br/><br/>
                                    Grants are milestone-based. Thoughtful applications include suggested milestones for funding.           
                            </div>
                        </div>
                    </div>

                    <div className="row grants-process pt-1">
                        <div className="grants-process col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 py-5 py-xl-0 text-center text-xl-left">
                            <div className="grants-process-circle align-items-center mx-auto">
                                <div className="grants-process-circle-number">2</div>
                                <div className="grants-process-vertical-line d-none d-xl-block py-5"/>
                            </div>
                        </div>

                        <div className="col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 py-5 pb-xl-0">
                            <div className="grants-process-header text-center text-xl-left mt-xl-2">Application Review</div>
                            <div className="grants-process-paragraph py-5">                  
                                Our team will review all applications on a rolling basis, determine if more information is required, and then schedule a call with the team if necessary. 
                                At that point, we may contact you with additional questions or ideas.<br/><br/>
                                We receive applications frequently and work as quickly as we can to process them. We’ll get back to you as soon as possible with next steps, typically within 1 week.
                            </div>
                        </div>
                    </div>

                    <div className="row grants-process pt-5 pt-xl-0">
                        <div className="grants-process col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 pb-5 py-xl-0 text-center text-xl-left">
                            <div className="grants-process-circle align-items-center mx-auto">
                                <div className="grants-process-circle-number">3</div> 
                            </div>
                        </div>

                        <div className="col-xl-5 offset-xl-1 col-12 align-items-center order-0 order-xl-1 pb-5 pb-xl-0">
                            <div className="grants-process-header text-center text-xl-left mt-xl-5">Decision</div>
                            <div className="grants-process-paragraph py-5">                  
                                Applicants will be notified via email whether their proposal has been accepted or denied.       
                            </div>
                        </div>
                    </div>

                    <div className="row py-5 mt-5">
                        <div className="grants-apply col-md-4  col-12 text-center ">
                            <a href="#grants-community"><img src={community} className="grants-apply-img" alt="community"/></a>
                            <div className="grants-apply-text d-md-block">
                                <span className="grants-apply-text-header">COMMUNITY</span><br/>
                                <span className="grants-apply-text-subheader">GRANT PROGRAM</span>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScSdXeAoPr4WQX7QMXmIxtVyZUgJoUcJ0zkWNB4D59mCT5FhA/viewform" target="_blank" rel="noreferrer">
                                <button className="grants-apply-button mt-5">Apply</button>
                            </a>
                        </div>

                        <div className="grants-apply col-md-4  col-12 text-center grants-apply-left-border" >
                        <a href="#grants-developers"><img src={developers} className="grants-apply-img" alt="developers"/></a>
                            <div className="grants-apply-text d-md-block">
                                <span className="grants-apply-text-header">DEVELOPER</span><br/>
                                <span className="grants-apply-text-subheader">GRANT PROGRAM</span>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7-kMeuXIyuL_cXCbVz64gK4dArUzaPkeBUr2oc0uPNavwcg/viewform" target="_blank" rel="noreferrer">
                                <button className="grants-apply-button mt-5">Apply</button>
                            </a>
                        </div>

                        <div className="grants-apply col-md-4 col-12 text-center grants-apply-left-border" >
                            <a href="#grants-influencers"><img src={influencers} className="grants-apply-img" alt="influencers"/></a>
                            <div className="grants-apply-text d-md-block">
                                <span className="grants-apply-text-header">INFLUENCER</span><br/>
                                <span className="grants-apply-text-subheader">GRANT PROGRAM</span>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdc34jIUn9tPIeQWUjHco1WaUVGTGWnaJEE-wPPaJ7GGjx95A/viewform" target="_blank" rel="noreferrer">
                                <button className="grants-apply-button mt-5">Apply</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default grants;