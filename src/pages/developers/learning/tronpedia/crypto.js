import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullCrypto from "../../../../images/tronpedia/crypto-tronbull.png"
import crypto_bg from "../../../../images/tronpedia/crypto-bg.svg"

const TronpediaCrypto = () => {

	const articles = [
		{
			"title": "What is Cryptography?",
			"description": "Learn how cryptography is used to secure sensitive data in a digital world. Discover the history of cryptography and why it is still relevant today.",
			"image" : crypto_bg,
			"alt": "crypto icon"
		},
		{
			"title": "What is Crypto?",
			"description": "You've probably heard of cryptocurrency- even if you're not entirely sure what it is. Our article breaks down the basics of cryptocurrency so you can understand what it is and how it works.",
			"image" : crypto_bg,
			"alt": "crypto icon"
		},
		{
			"title": "What is Crypto Staking?",
			"description": "Explore staking crypto and learn what it means to stake cryptocurrency. Learn how to get started staking your own crypto today.", 
			"image" : crypto_bg,
			"alt": "crypto icon"
		},
		{
			"title": "What is Proof of Work?",
			"description": "Learn what proof-of-work is, its history, how it is used today, and the drawbacks and advantages of a proof-of-work system in the blockchain industry.",
			"image" : crypto_bg,
			"alt": "crypto icon"
		},
	]

	return (
		<div className="trondao-tronpedia-crypto">
            <Helmet>
                <title>TRONPEDIA CRYPTO | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia crypto"/>
                <meta property="og:description" content="Tronpedia crypto"/>
                <meta property="og:title" content="TRONPEDIA CRYPTO | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">CRYPTO</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
                            TRONPedia is your go-to source to learn about all things crypto. Here, we break down what cryptocurrencies are, how they’ve worked at such a massive scale, and the biggest names in the space.
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > Crypto</h2>
            			</div>
            			<div>
            				<img src={TronbullCrypto} alt="crypto tronbull" className="img-fluid" />
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
            		<h2>CRYPTO</h2>
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

export default TronpediaCrypto