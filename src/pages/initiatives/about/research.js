import React from "react"
import {Helmet} from "react-helmet"
import {FaArrowRight} from "react-icons/fa"
import GridCarousel from "../../../components/gridCarousel"
import tronResearchBackground from "../../../images/research/tron-research.mp4"
import EmailCapture from "../../../components/EmailCapture"

const Research = ({data}) => {
    return (
        <div className="trondao-research">
            <Helmet>
                <title>TRON Research | TRONDAO</title>
                <meta name="description"
                        content="No Description"/>
                <meta property="og:description" content="No Description"/>
                <meta property="og:title" content="TRON Research | TRONDAO"/>
            </Helmet>

            <div className="research">
                <div className="research-main">
                    <video autoPlay muted loop playsInline className="d-block mx-auto">
                            <source src={tronResearchBackground} type="video/mp4"/>
                    </video>
                    <div className="research-main-header col-4 col-lg-3 d-flex flex-column">
                        <h1 className="text-uppercase"><span>Tron</span> Research</h1>
                        <p className="my-lg-4">
                        Some description about this section will go here 
                        </p>
                        <a 
                            href="/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="research-cta-button"
                        >
                            <button className="cta-button mt-md-3">
                                CTA Button
                            </button>
                        </a>
                    </div>
                </div>

                <div className="research-body col-11 col-lg-8 mx-auto">
                    <div className="research-body-tabs d-flex flex-wrap" role="tablist">
                        <a 
                            href="/#" 
                            className="research-body-tabs-item active"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="research-project-studies-button"
                        >
                            Project Studies
                        </a>
                        <a 
                            href="/#" 
                            className="research-body-tabs-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="research-reports-button"
                        >
                            Reports
                        </a>
                    </div>

                    <div className="research-body-article">
                        <div className="research-body-article-card">
                            <div className="research-background"></div>
                            <div className="mt-lg-2">
                                <h1 className="text-uppercase">Month 2022</h1>
                            </div>
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper.
                                Ut wisi enim ad minim veniam,
                                </p>
                            </div>
                            <div className="">
                                <a href="/#" className="arrow-icon d-flex align-items-center justify-content-center"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                            </div>
                        </div>
                        <div className="research-body-article-card">
                            <div className="research-background"></div>
                            <div className="mt-lg-2">
                                <h1 className="text-uppercase">Month 2022</h1>
                            </div>
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. 
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                </p>
                            </div>
                            <div className="">
                                <a href="/#" className="arrow-icon d-flex align-items-center justify-content-center"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="research-projects">
                        <h1 className="research-projects-title">Project Studies</h1>
            
                        <GridCarousel />
                    </div>
                    <div className="research-reports">
                        <h1 className="research-reports-title">Reports</h1>
            
                        <GridCarousel />
                    </div>
                </div>  

                <div className="research-email-capture col-11 col-lg-9 col-xxl-8 mx-auto">
                    <EmailCapture />
                </div>
            </div>
        </div>
    )
}

export default Research