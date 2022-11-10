import React from "react";
import {Helmet} from "react-helmet";
import cryptoCoin from "../../images/art/cryptocoin.png"
import tronbullPainting from "../../images/art/tronbull-painting.png"
import tronbullNft from "../../images/art/tronbull-nft.png"
import tronbullRainbow from "../../images/art/tronbull-rainbow.png"
import tronbullGuardCoins from "../../images/art/tronbull-guard-coins.png"

const Art = ({data}) => {
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
                        <div className="col-lg-6">
    				        <h1 className="text-uppercase">Power Back To The Artists</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et orem ipsum dolor sit amet 
                            </p>
                            <a href="/" className=""><button className="gaming-title-start-button">Call To Action</button></a>  
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
	    					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
	    					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
	    					ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i]
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
	    					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
	    					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
	    					ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i]
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
	    					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
	    					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
	    					ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i]
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
                        <div className="art-market-xxl col-11 col-md-5 my-5 mt-md-0">
                            <h1>APENFT</h1>
                            <p className="text-justify my-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i]
                            </p>
                            <a href="/" className=""><button className="gaming-title-start-button">Call To Action</button></a>
                        </div>
                    </div>
                </div>
    		</div>
        </div>
    )
}

export default Art