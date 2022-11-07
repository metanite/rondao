import React from "react";
import {Helmet} from "react-helmet";
import tronbullChart from "../images/finance/tronbull-chart.svg"

const Finance = ({data}) => {
    return (
    	<div className="trondao-finance">
    		<Helmet>
                <title>TRON Finance | TRONDAO</title>
                <meta name="description"
                        content="Experience finance as it was always intended: a free space where censorship and control are less apparent."/>
                <meta property="og:description" content="Experience finance as it was always intended: a free space where censorship and control are less apparent"/>
                <meta property="og:title" content="TRON Finance | TRONDAO"/>
            </Helmet>
    		<div className="finance">
    			<div className="finance-main">
                    <div className="finance-title d-flex flex-column flex-md-row align-items-start justify-content-center col-12">
                        <div className="col-lg-6">
    				        <h1 className="text-uppercase">Democratizing Finance</h1>
                            <p>
                            Experience finance as it was always intended: a free space where censorship and control are less apparent. 
                            </p>
                            <a href="/" className=""><button className="gaming-title-start-button">Start Build</button></a>  
                        </div>
                        <div className="col-lg-6">
                           <img src={tronbullChart} alt="tron bull chart" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>

                    <div className="finance-stats">
                        <div className="d-flex flex-row align-items-center justify-content-between p-1 p-lg-3 col-12 text-center">
                            <div className="col-4 mt-3">
                                <h1>$1.5M</h1>
                                <p className="text-uppercase">TVL of our stablecoins</p>
                            </div>
                            <div className="col-4 mt-3">
                                <h1>100K+</h1>
                                <p className="text-uppercase">Active Daily Counts</p>
                            </div>
                            <div className="col-4 mt-2 mt-lg-3">
                                <h1>$0</h1>
                                <p className="text-uppercase">Transaction Fees</p>
                            </div>
                        </div>
                    </div>
    			</div>
    		</div>
    	</div>
   	)
}

export default Finance