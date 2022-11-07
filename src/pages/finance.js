import React from "react";
import {Helmet} from "react-helmet";
import tronbullChart from "../images/finance/tronbull-chart.svg"
import hexagon from "../images/finance/hexagon.svg"
import pantheon from "../images/finance/pantheon.svg"
import gift from "../images/finance/gift.svg"
import gear from "../images/finance/gear.svg"
import dollar from "../images/finance/dollar.svg"
import chats from "../images/finance/chats.svg"

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

                <div className="finance-body d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-colum flex-lg-row align-items-center justify-content-between">
                        <div className="finance-body-row-one text-center ">
                            <img src={hexagon} alt="hexagon with circle in each side icon" className="image-fluid"></img>
                            <h1 className="text-uppercase">Defi Revolutionized</h1>
                            <p className="col-7 mx-auto">
                            TRON is at the forefront of redefining how the world interacts with and experiences the financial world.
                            </p>
                        </div>
                        <div className="finance-body-row-one text-center ">
                            <img src={pantheon} alt="pantheon icon" className="image-fluid"></img>
                            <h1 className="text-uppercase">Cefi Innovated</h1>
                            <p className="col-7 mx-auto">
                            TRON has altered several structures to create the truly open and cooperative financial network that you deserve. 
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 d-flex flex-colum flex-lg-row align-items-center justify-content-around flex-wrap">
                        <div className="col-6">
                            <div className="finance-body-row-two d-flex flex-column align-items-center justify-content-center col-12">
                                <img src={dollar} alt="dollar icon"></img>
                                <h1 className="text-uppercase">No Fees</h1>
                                <p>
                                TRON is here to help you make the smartest decisions with your money by providing you with a fee free solution for all your financial needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="finance-body-row-two d-flex flex-column align-items-center justify-content-center col-12">
                                <img src={chats} alt="chat icon"></img>
                                <h1 className="text-uppercase">Transparent relationships</h1>
                                <p>
                                At TRON, we are actively pursuing a new way of doing business in the financial industry, with high standards of transparency and trust.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 d-flex flex-colum flex-lg-row align-items-center justify-content-around flex-wrap finance-body-end">
                        <div className="col-6">
                            <div className="finance-body-row-two d-flex flex-column align-items-center justify-content-center col-12">
                                <img src={gear} alt="gear icon"></img>
                                <h1 className="text-uppercase">Frictionless Finance </h1>
                                <p>
                                Although we believe the future of finance is digital, we don’t think it should be complicated or time-consuming. 
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="finance-body-row-two d-flex flex-column align-items-center justify-content-center col-12">
                                <img src={gift} alt="gift icon"></img>
                                <h1 className="text-uppercase">User Incentives</h1>
                                <p>
                                This project was developed to provide a real alternative to the current global lending market . Our approach lets you do good in the world and make money for yourself at the same time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    		</div>
    	</div>
   	)
}

export default Finance