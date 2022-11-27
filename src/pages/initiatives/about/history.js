import React from "react"
import {Helmet} from "react-helmet"
import {FaArrowDown} from "react-icons/fa"

const History = ({data}) => {
    const timelines = [
        {
            "year": "2017",
            "date": 1 
        },
        {
            "year": "2018",
            "date": 4 
        },
        {
            "year": "2019",
            "date": 8 
        },
    ]


    return (
        <div className="trondao-history">
            <Helmet>
                <title>TRON History | TRONDAO</title>
                <meta name="description"
                        content="No Description"/>
                <meta property="og:description" content="No Description"/>
                <meta property="og:title" content="TRON History | TRONDAO"/>
            </Helmet>

            <div className="history">
            	<div className="history-main">
					<div className="history-main-title col-4 col-lg-3 d-flex flex-column align-items-start">
	                    <h1 className="text-uppercase">Tron History</h1>
	                    <p>
	                    Sub-header placeholder here
	                    </p>
	                </div>
				</div>
				<div className="history-body">
					<div className="history-body-line col-lg-8 mx-auto d-flex flex-column">
                        {
                            timelines.map((timeline, key) => {
                                return (
                                    <div key={key} className="history-body-timeline">
                                        <div className="history-body-timeline-year">
                                            <h5>{timeline.year}</h5>
                                        </div>
                                        {
                                            [...Array(timeline.date).keys()].map(i => {
                                                return (
                                                    <div key={i} className="history-body-timeline-details d-flex">
                                                        <div className="history-body-timeline-date d-flex flex-column justify-content-center align-items-center">
                                                            <div>
                                                                <h2>Date Here</h2>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                        <div>
                                                            <a href="/#">
                                                                <div className="history-body-timeline-info d-flex">
                                                                    <div className="history-body-timeline-info-bg"></div>
                                                                    <div className="history-body-timeline-info-details d-flex flex-column align-items-start justify-content-center px-4 py-2">
                                                                        <h2>Event Title</h2>
                                                                        <hr/>
                                                                        <p>
                                                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui .    
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>  
                                )
                            })
                        }
                        <a href="/#" className="mx-auto">
                            <button type="button" className="cta-button text-uppercase vertical-middle">More Events <span className="ml-1"><FaArrowDown /></span></button>
                        </a>
					</div>
				</div>
           	</div>
        </div>
    )
}

export default History
