import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullWeb3 from "../../../../images/tronpedia/web3-tronbull.png"
import web3_bg from "../../../../images/tronpedia/web3-bg.svg"

const TronpediaWeb3 = () => {

	const articles = [
		{
			"title": "What is WEB3",
			"description": "Web 3.0 is the next evolution of the internet, where users are in control of their own data and online activity is more secure and efficient. Web3 has the potential to revolutionize the way we interact with the internet, and we believe that everyone should be informed about its advantages. So what are you waiting for? Check it out now!",
			"image" : web3_bg,
			"alt": "web3 icon"
		},
		{
			"title": "Developing in Web3",
			"description": "Find out how you can use TRON's testnet to develop better applications, and learn about the role of sidechains in building a Web 3.0 ecosystem.",
			"image" : web3_bg,
			"alt": "web3 icon"
		},
		{
			"title": "What are Decentralized Apps (dApps)?",
			"description": "You may have heard the term 'decentralized application' or 'dApp' used in relation to web3 technology, but what does it actually mean? This article covers the basics of decentralized applications, the most common forms of dApps, and more.",
			"image" : web3_bg,
			"alt": "web3 icon"
		},
		{
			"title": "What is a Smart Contract?",
			"description": "Smart contracts are all about trust and security. This article will tech you how they work, how they differ from traditional contracts, why they're so revolutionary, and more!",
			"image" : web3_bg,
			"alt": "web3 icon"
		},
	]

	return (
		<div className="trondao-tronpedia-web3">
            <Helmet>
                <title>TRONPEDIA WEB3 | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia web3"/>
                <meta property="og:description" content="Tronpedia web3"/>
                <meta property="og:title" content="TRONPEDIA WEB3 | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">WEB3</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
            				Welcome to the future. These articles cover how we have and 
            				potentially will be acting with the internet. They also talk 
            				about some of the biggest names in the game trying to move it 
            				forward. 
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > Web3</h2>
            			</div>
            			<div>
            				<img src={TronbullWeb3} alt="web3 tronbull" className="img-fluid" />
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
            		<h2>WEB3</h2>
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

export default TronpediaWeb3