import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullDefi from "../../../../images/tronpedia/defi-tronbull.png"
import defi_bg from "../../../../images/tronpedia/defi-bg.svg"

const TronpediaDefi = () => {

	const articles = [
		{
			"title": "What is Decentralized Finance (DeFi)?",
			"description": "Breaking down the leading DeFi projects. Find out what kinds of dApps are being built today–lending platforms, marketplaces, games and more.",
			"image" : defi_bg,
			"alt": "defi icon"
		},
		{
			"title": "DeFi vs. CeFi",
			"description": "Wondering what the difference between DeFi and CeFi is? This article breaks it down for you, as well as highlighting the advantages of DeFi over CeFi.",
			"image" : defi_bg,
			"alt": "defi icon"
		},
		{
			"title": "DeFi Apps & Projects",
			"description": "Breaking down the leading DeFi projects. Find out what kinds of dApps are being built today–lending platforms, marketplaces, games and more.", 
			"image" : defi_bg,
			"alt": "defi icon"
		},
		{
			"title": "How do DeFi Tokens Work?",
			"description": "Intereseted in what all the hype around DeFi tokens is about? Our guide breaks down everything you need to know, from what they are to how they work.",
			"image" : defi_bg,
			"alt": "defi icon"
		},
	]

	return (
		<div className="trondao-tronpedia-defi">
            <Helmet>
                <title>TRONPEDIA DEFI | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia defi"/>
                <meta property="og:description" content="Tronpedia defi"/>
                <meta property="og:title" content="TRONPEDIA DEFI | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">DEFI</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
            				So… I can bank without a bank? Check out our articles to learn about 
            				how trust-free finance works and some of the biggest protocols in the 
            				space now.  
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > Defi</h2>
            			</div>
            			<div>
            				<img src={TronbullDefi} alt="defi tronbull" className="img-fluid" />
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
            		<h2>DEFI</h2>
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

export default TronpediaDefi