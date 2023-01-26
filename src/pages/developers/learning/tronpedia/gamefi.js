import React from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import TronbullGamefi from "../../../../images/tronpedia/gamefi-tronbull.png"
import gamefi_bg from "../../../../images/tronpedia/gamefi-bg.svg"

const TronpediaGameFi = () => {

	const articles = [
		{
			"title": "What is GameFi?",
			"description": "Learn what GameFI is, how it compares to traditional games, and some of the exciting use cases for this product in the future.",
			"image" : gamefi_bg,
			"alt": "gamefi icon"
		},
		{
			"title": "How do P2E Games Work?",
			"description": "Ever wondered what a 'Play to Earn' game is and how they make money? This article breaks down the concept, explains how some of today's best P2E games work, and provides insight into tax implications.",
			"image" : gamefi_bg,
			"alt": "gamefi icon"
		},
		{
			"title": "The GameFi Industry",
			"description": "The GameFi industry is one that's been getting a lot of attention from investors, organizations and companies. This article discusses the history, biggest players, and organizations focused on funding and building the GameFi industry.", 
			"image" : gamefi_bg,
			"alt": "gamefi icon"
		},
		{
			"title": "What is a GameFi Project?",
			"description": "GameFi combines fun with finance. Developed on blockchain tech, GameFi Projects are set to become the foremost revenue generating sector of the web3 future.",
			"image" : gamefi_bg,
			"alt": "gamefi icon"
		},
	]

	return (
		<div className="trondao-tronpedia-gamefi">
            <Helmet>
                <title>TRONPEDIA GAMEFI | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia gamefi"/>
                <meta property="og:description" content="Tronpedia gamefi"/>
                <meta property="og:title" content="TRONPEDIA GAMEFI | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-topic-page col-10 col-lg-9 col-xxl-7 mx-auto">
            	<div className="d-flex flex-column">
            		<div className="tronpedia-topic-page-header order-2 order-md-1">
            			<div>
            				<h1 className="tronpedia-topic-page-header-title">GAMEFI</h1>
            			</div>
            			<div>
            				<p className="tronpedia-topic-page-header-description">
                            Play-to-earn? Yeah… really. This section covers how GameFi makes this a possibility, and what it is likely to become the future of video games. 
            				</p>
            			</div>
            			<div className="d-none d-md-flex">
            				<h2 className="tronpedia-topic-page-header-subtitle">TRONPEDIA > GameFi</h2>
            			</div>
            			<div>
            				<img src={TronbullGamefi} alt="gamefi tronbull" className="img-fluid" />
            			</div>
            		</div>
            		<div className="mt-5 order-1 order-md-2">
            			<TronpediaSearch />
            		</div>	
            	</div>

            	<div className="tronpedia-topic-page-topics">
            		<h2 className="text-uppercase mb-4 mb-md-5">Popular Topics</h2>
            		<TronpediaTopics limit={5} />
            	</div>

            	<div className="tronpedia-topic-page-articles">
            		<h2>GAMEFI</h2>
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

export default TronpediaGameFi