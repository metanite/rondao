import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullBlockchain from "../../../../images/tronpedia/blockchain-tronbull.png"
import blockchain_bg from "../../../../images/tronpedia/blockchain-bg.svg"

const TronpediaBlockchain = () => {

	const articles = [
		{
			"title": "What is a Blockchain?",
			"description": "Blockchain technology is the backbone of a new type of internet, one that's more secure and decentralized than ever before. See how it works today!",
			"image" : blockchain_bg,
			"alt": "blockchain icon"
		},
		{
			"title": "What is a Node?",
			"description": "The next generation of the internet will have millions of nodes. Find out what they are, how to set one up and why you might want to run your own node. This guide explains it all!",
			"image" : blockchain_bg,
			"alt": "blockchain icon"
		},
		{
			"title": "What are Distributed Networks?",
			"description": "Find out what distributed networks are, how they differ from traditional networks, their current use, and what the future holds for them.", 
			"image" : blockchain_bg,
			"alt": "blockchain icon"
		},
		{
			"title": "What is Concensus Mechanism?",
			"description": "In this article, we explore what a consensus mechanism is and discuss the different types of attacks that can be launched against them.",
			"image" : blockchain_bg,
			"alt": "blockchain icon"
		},
	]

	return (
		<div className="trondao-tronpedia-blockchain">
            <Helmet>
                <title>TRONPEDIA BLOCKCHAIN | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia blockchain"/>
                <meta property="og:description" content="Tronpedia blockchain"/>
                <meta property="og:title" content="TRONPEDIA BLOCKCHAIN | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">BLOCKCHAIN</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
                            TRONPedia is here to act as the first block in your blockchain expereince. This section covers how distributed ledger technology works, why many believe it will be the future of the internet, and how organizations are using it today.
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > Blockchain</h2>
            			</div>
            			<div>
            				<img src={TronbullBlockchain} alt="blockchain tronbull" className="img-fluid" />
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
            		<h2>BLOCKCHAIN</h2>
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

export default TronpediaBlockchain