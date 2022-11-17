import React from "react"
import {Helmet} from "react-helmet"
import {FaArrowRight} from "react-icons/fa"
import GridCarousel from "../../../components/gridCarousel"
import tronResearchBackground from "../../../images/research/tron-research.mp4"

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
                        <a href="/#"><button className="cta-button mt-md-3">CTA Button</button></a>
                    </div>
                </div>

                <div className="research-body col-lg-8 mx-auto">
                    <div className="research-body-tabs d-flex flex-wrap" role="tablist">
                        <a href="/#" className="research-body-tabs-item active">Project Studies</a>
                        <a href="/#" className="research-body-tabs-item">Reports</a>
                    </div>

                    <div className="research-body-article">
                        <div className="d-flex flex-column justify-content-between">
                            <div>
                                <div className="research-background"></div>
                                <h1 className="text-uppercase">Month 2022</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper. 
                                </p>
                            </div>
                            <div className="arrow-icon d-flex align-items-center justify-content-center mt-3">
                                <a href="/#"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between">
                            <div>
                                <div className="research-background"></div>
                                <h1 className="text-uppercase">Month 2022</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. 
                                </p>
                            </div>
                            <div className="arrow-icon d-flex align-items-center justify-content-center mt-3">
                                <a href="/#"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="research-projects">
                        <h1 className="text-uppercase">Project Studies</h1>
                        
                        {/*<GridCarousel />*/}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Research