import React, { useState } from "react"
import {Helmet} from "react-helmet"
import EmailCapture from "../../../../components/EmailCapture"
import TronpediaArticle from "../../../../components/tronpedia/articles"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import web3_bg from "../../../../images/tronpedia/web3-bg.svg"

const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '')

    const web3 = [
        {
            "title": "What is Web3?",
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
            "description": "You may have heard the term 'decentralized application' or 'dApp' used in relation to web3 technology, but what does it actually mean? This article covers the basics of decentralized applications, the most common forms of dApps, and more",
            "image" : web3_bg,
            "alt": "web3 icon"
        },
        {
            "title": "What are Smart Contract?",
            "description": "Smart contracts are all about trust and security. This article will tech you how they work, how they differ from traditional contracts, why they're so revolutionary, and more!",
            "image" : web3_bg,
            "alt": "web3 icon"
        },
    ]

	return (
        <div className="trondao-tronpedia-search">
            <Helmet>
                <title>TRONPEDIA SEARCH | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia search"/>
                <meta property="og:description" content="Tronpedia search"/>
                <meta property="og:title" content="TRONPEDIA SEARCH | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-search col-11 col-lg-9 mx-auto">
            	<div className="tronpedia-search-query d-flex flex-column">
            		<div>
            			<h1>Search: "{searchQuery}"</h1>
            		</div>
            		<div>
            			<p>
            			TRONPEDIA includes articles that provide a foundational understanding 
            			for multiple components of cybersecurity
            			</p>
            		</div>
            	</div>

            	<div className="tronpedia-search-form">
            		<TronpediaSearch />
            	</div>

            	<div className="tronpedia-search-popular-topics">
            		<h2>Popular Topics</h2>
            		<TronpediaTopics limit={5} />
            	</div>

                <div className="tronpedia-search-results">
                    <h2>Results</h2>
                    <TronpediaArticle articles={web3} />
                </div>

                <div className="tronpedia-search-featured">
                    <TronpediaFeatured />
                </div>
            </div>
            <div className="tronpedia-search-email">
                <EmailCapture />
            </div>
        </div>
   	)
}

export default Search