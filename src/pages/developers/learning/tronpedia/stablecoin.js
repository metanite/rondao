import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullStablecoin from "../../../../images/tronpedia/stablecoin-tronbull.png"
import stablecoin_bg from "../../../../images/tronpedia/stablecoin-bg.svg"

const TronpediaStablecoin = () => {

	const articles = [
		{
			"title": "What is Stablecoin?",
			"description": "Discover everything you need to know about stablecoins--what they are, how they work, how they are backed, and the benefits they offer.",
			"image" : stablecoin_bg,
			"alt": "stablecoin icon"
		},
		{
			"title": "What do Stablecoins offer?",
			"description": "Find out the pros of using stablecoins. You'll understand how they work and what impact they may have on your business or industry.",
			"image" : stablecoin_bg,
			"alt": "stablecoin icon"
		},
		{
			"title": "Commodity Backed Stablecoins",
			"description": "Learn what a commodity backed stablecoin is, the different types of collateral that back them up and what the future may hold for stablecoins using this algorithim.", 
			"image" : stablecoin_bg,
			"alt": "stablecoin icon"
		},
		{
			"title": "Algorithmic Backed Stablecoins",
			"description": "Here we take a look at algorithmic backed stablecoins, what they are, how they work, how they differ from the other algorithims, and some of the most popular blockchains that are using this type of stablecoin.",
			"image" : stablecoin_bg,
			"alt": "stablecoin icon"
		},
	]

	return (
		<div className="trondao-tronpedia-stablecoin">
            <Helmet>
                <title>TRONPEDIA STABLECOIN | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia Stablecoin"/>
                <meta property="og:description" content="Tronpedia Stablecoin"/>
                <meta property="og:title" content="TRONPEDIA STABLECOIN | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">STABLECOIN</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
                            Stability… in crypto?? This section covers stablecoins, their importance in the digital landscape, and the biggest providers of them.
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > Stablecoin</h2>
            			</div>
            			<div>
            				<img src={TronbullStablecoin} alt="stablecoin tronbull" className="img-fluid" />
            			</div>
            		</div>
            		<div className="mt-5 order-1 order-lg-2">
            			<TronpediaSearch />
            		</div>	
            	</div>

            	<div className="tronpedia-topic-page-topics">
            		<h2 className="text-uppercase mb-4 mb-md-5">Popular Topics</h2>
            		<TronpediaTopics limit={5} />
            	</div>

            	<div className="tronpedia-topic-page-articles">
            		<h2>STABLECOIN</h2>
            		<TronpediaArticle articles={articles} />
            	</div>

            	<div className="tronpedia-topic-page-featured">
            		<TronpediaFeatured />
            	</div>

            	<div className="tronpedia-topic-page-email-capture">
            		<EmailCapture />
            	</div> 
            </div>
        </div>
	)
}

export default TronpediaStablecoin