import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullNft from "../../../../images/tronpedia/nft-tronbull.png"
import nft_bg from "../../../../images/tronpedia/nft-bg.svg"

const TronpediaNFT = () => {

	const articles = [
		{
			"title": "What is NFT?",
			"description": "If you're new to the world of NFTs, you might be feeling a little overwhelmed. There's a lot to learn, and it can all be a bit confusing at first. That's why we've put together this guide. It's designed to help you get to grips with the basics of NFTs, so that you can make informed decisions about whether or not they're right for you.",
			"image" : nft_bg,
			"alt": "nft icon"
		},
		{
			"title": "The History of NFTs",
			"description": "Ever wondered how NFTs came to be? From their inception to the biggest project to date, find out everything you need to know that lead to the current NFT phenomenon.",
			"image" : nft_bg,
			"alt": "nft icon"
		},
		{
			"title": "Types of NFTs",
			"description": "There are many different types of non fungible tokens (NFTs), each offering something unique. Check out the most popular types right here!", 
			"image" : nft_bg,
			"alt": "nft icon"
		},
		{
			"title": "What can NFTs be used for?",
			"description": "This article breaks down the applications of NFTs, and how their use cases have the potential to  transform the way traditional industries operate",
			"image" : nft_bg,
			"alt": "nft icon"
		},
	]

	return (
		<div className="trondao-tronpedia-nft">
            <Helmet>
                <title>TRONPEDIA NFT | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia NFT"/>
                <meta property="og:description" content="Tronpedia NFT"/>
                <meta property="og:title" content="TRONPEDIA NFT | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-lg-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">NFT</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
                            Non fungi-what!? Here, we break down NFTs and discuss what they are, their potential to revolutionize industries, and some of the most-hyped projects.
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > NFT</h2>
            			</div>
            			<div>
            				<img src={TronbullNft} alt="nft tronbull" className="img-fluid" />
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
            		<h2>NFT</h2>
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

export default TronpediaNFT