import React, {useState} from "react"
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
        {
            "year": "2020",
            "date": 8 
        },
        {
            "year": "2021",
            "date": 5 
        },
    ]

    const [filteredTimelines, setTimelines] = useState(timelines.slice(0, 3))
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const showRemaining = () => {
        setIsButtonClicked(!isButtonClicked)
        setTimelines(timelines)
    }


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
					<div className="history-main-title col-5 col-lg-3 d-flex flex-column align-items-start">
	                    <h1 className="text-uppercase">Tron History</h1>
	                    <p>
	                    Sub-header placeholder here
	                    </p>
	                </div>
				</div>
				<div className="history-body">
					<div className="history-body-line col-10 offset-2 col-lg-8 offset-lg-0 mx-lg-auto d-flex flex-column">
                        {
                            filteredTimelines.map((timeline, key) => {
                                return (
                                    <div key={key} className="history-body-timeline">
                                        <div className="history-body-timeline-year">
                                            <h5>{timeline.year}</h5>
                                        </div>
                                        {
                                            [...Array(timeline.date).keys()].map(i => {
                                                return (
                                                    <div key={i} className="history-body-timeline-details d-flex flex-column flex-lg-row flex-wrap flex-lg-nowrap">
                                                        <div className="history-body-timeline-date d-flex flex-row flex-lg-column justify-content-start justify-content-lg-center align-items-start align-items-lg-center">
                                                            <div className="ml-3 ml-lg-0">
                                                                <h2>Date Here</h2>
                                                            </div>
                                                            <hr className={key === 0 ? 'outline' : ''} />
                                                        </div>
                                                        <div>
                                                            <a href="/#">
                                                                <div className="history-body-timeline-info d-flex flex-column flex-lg-row">
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
                        {
                           !isButtonClicked &&
                            <button type="button" onClick={showRemaining} className="cta-button text-uppercase mx-auto">
                            More Events <span className="ml-1"><FaArrowDown /></span>
                            </button>
                        }
                        <div className="history-body-bottom-margin"></div>
					</div>
				</div>
           	</div>
        </div>
    )
}

export default History
