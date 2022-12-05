import React, { useState } from "react"
import {Helmet} from "react-helmet"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"

const Search = ({searchQuery}) => {
	return (
        <div className="trondao-tronpedia-search">
            <Helmet>
                <title>TRONPEDIA SEARCH | TRONDAO</title>
                <meta name="description"
                        content="Tronpedia search"/>
                <meta property="og:description" content="Tronpedia search"/>
                <meta property="og:title" content="TRONPEDIA SEARCH | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-search col-11 col-lg-8 mx-auto">
            	<div className="tronpedia-search-query d-flex flex-column">
            		<div>
            			<h1>Search: "How to make NFTs"</h1>
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
            </div>
        </div>
   	)
}

export default Search