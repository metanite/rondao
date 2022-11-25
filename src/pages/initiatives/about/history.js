import React from "react"
import {Helmet} from "react-helmet"

const History = ({data}) => {
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
					<div className="history-body-timeline col-lg-8 mx-auto">	

					</div>
				</div>
				{/*<div className="history-mountain-bg"></div>*/}
           	</div>
        </div>
    )
}

export default History
