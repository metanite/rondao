import React from "react";
import {Helmet} from "react-helmet";
import cryptoCoin from "../../../images/art/cryptocoin.png"
import tronbullPainting from "../../../images/art/tronbull-painting.png"
import tronbullNft from "../../../images/art/tronbull-nft.png"
import tronbullRainbow from "../../../images/art/tronbull-rainbow.png"
import tronbullGuardCoins from "../../../images/art/tronbull-guard-coins.png"

const Art = () => {
    return (
    	<div className="trondao-art">
    		<Helmet>
                <title>TRON Art | TRONDAO</title>
                <meta name="description"
                        content="None Yet"/>
                <meta property="og:description" content="None Yet"/>
                <meta property="og:title" content="TRON Art | TRONDAO"/>
            </Helmet>
            <div className="art">
    			<div className="art-main">
    				<div className="art-title d-flex flex-column flex-md-row align-items-start justify-content-center col-12">
                        <div className="col-lg-6 d-flex flex-column align-items-center align-items-md-start">
    				        <h1 className="text-uppercase">Power Back To The Artists</h1>
                            <p className="col-lg-10">
                            TRON is here to give artists what they should have had long ago: control and ownership of their artwork.
                            </p>
                            <a 
                                href="/#" 
                                target="_blank"
                                rel="noopener noreferrer"
                                id="art-call-to-action-button"
                            >
                                <button className="gaming-title-start-button">
                                    Call To Action
                                </button>
                            </a>  
                        </div>
                        <div className="col-lg-6 mt-4 mt-md-0">
                           <img src={tronbullPainting} alt="tron bull painting" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>
    			</div>

    			<div className="art-body d-flex flex-column align-items-center justify-content-center">
    				<div className="art-body-row d-flex flex-column flex-md-row align-items-center justify-content-between col-11 col-md-10">
    					<div className="art-body-row-col col-md-6 col-lg-4 mx-auto order-2 order-md-1">
	    					<h1 className="text-uppercase">
	    						NFT Standard
	    					</h1>
	    					<p className="text-justify">
	    					TRON Art is an innovative platform that allows artists to claim authority and reclaim their 
                            rightful ownership of artwork. Through its exclusive NFT standard, TRON enables lightning-fast 
                            transactions with minimal fees while ensuring creators receive royalty payments for every 
                            transaction - so art remains in the hands of those who truly deserve it.
	    					</p>
    					</div>
    					<div className="col-12 col-md-6 order-1 order-md-2">
    						<img src={tronbullNft} alt="tronbull nft" className="img-fluid d-lg-block mx-lg-auto"></img>
    					</div>
    				</div>
                    <div className="art-body-row d-flex flex-column flex-md-row align-items-center justify-content-between col-11 col-md-10">
                        <div className="art-body-row-col col-12 col-lg-4 col-md-5 mx-auto order-2">
	    					<h1 className="text-uppercase">
	    						Transparent Art
	    					</h1>
	    					<p className="text-justify">
	    					TRON is changing the art world! Thanks to blockchain technology, all data on this network is 
                            visible by anyone around the world which eliminates any room for fraud or deception – meaning 
                            that no duplicate artwork can exist and each piece of artwork has an accurate record of ownership 
                            stored in a secure distributed database. So take solace knowing your favorite masterpiece will be 
                            safe with TRON!
	    					</p>
    					</div>
                        <div className="col-md-6 order-1">
    						<img src={tronbullRainbow} alt="tronbull rainbow" className="img-fluid d-block mx-auto"></img>
    					</div>
    				</div>
                    <div className="art-body-row d-flex flex-column flex-md-row align-items-center justify-content-between col-11 col-md-10">
    					<div className="art-body-row-col col-lg-4 mx-auto order-2 order-md-1">
	    					<h1 className="text-uppercase">
	    						Reliability Utility
	    					</h1>
	    					<p className="text-justify">
	    					With the TRON Art platform, you can be sure that your digital art will continuously benefit its 
                            creator. If desired, royalties on future sales of your creation can easily be attached during minting 
                            onto their blockchain network - so no matter who buys it down the line, a percentage goes directly back 
                            to you!
	    					</p>
    					</div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
    						<img src={tronbullGuardCoins} alt="tronbull with shield and coins" className="img-fluid d-lg-block mx-lg-auto"></img>
    					</div>
    				</div>
    			</div>

                <div className="art-market">
                    <h1 className="art-market-title text-uppercase text-center">Check Our Secondary Markets</h1>

                    <div className="art-market-content d-flex flex-column flex-md-row align-items-center justify-content-center mx-auto">
                        <div className="col-12 col-md-6">
                            <img src={cryptoCoin} alt="cryto coin" className="img-fluid d-block mx-auto"></img>
                        </div>
                        <div className="art-market-xxl d-flex flex-column align-items-center align-items-md-start col-11 col-md-5 my-5 mt-md-0">
                            <h1>APENFT</h1>
                            <p className="text-justify my-4">
                            Go beyond the ordinary with TRON's APENFT marketplace. From decreased transaction 
                            costs to accelerated settlements, enjoy a variety of features that will take your 
                            business operations into high gear - learn more today!
                            </p>
                            <a 
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="art-call-to-action-button"
                            >
                                <button className="gaming-title-start-button mt-md-4">
                                    Call To Action
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
    		</div>
        </div>
    )
}

export default Art