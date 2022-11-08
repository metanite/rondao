import React from "react";
import {Helmet} from "react-helmet";
import tronbullPainting from "../images/art/tronbull-painting.png"
import tronbullNft from "../images/art/tronbull-nft.png"
import tronbullRainbow from "../images/art/tronbull-rainbow.png"
import tronbullGuardCoins from "../images/art/tronbull-guard-coins.png"

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
                        <div className="col-lg-6">
                           <img src={tronbullPainting} alt="tron bull painting" className="gaming-tronbull-chart img-fluid d-lg-block mx-lg-auto"></img>
                        </div>
                    </div>
    			</div>

    			<div className="art-body d-flex flex-column align-items-center justify-content-center">
    				<div className="d-flex flex-column flex-md-row align-items-center justify-content-between col-10">
    					<div className="col-12 col-lg-5 offset-lg-1">
	    					<h1 className="text-uppercase">
	    						NFT Standard
	    					</h1>
	    					<p>
	    					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
	    					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
	    					ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor i]
	    					</p>
    					</div>
    					<div className="col-6">
    						<img src={tronbullNft} alt="tronbull nft" className="img-fluid d-lg-block mx-lg-auto"></img>
    					</div>
    				</div>
    			</div>
    		</div>
        </div>
    )
}

export default Art