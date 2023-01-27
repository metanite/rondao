import React from "react"
import defi_red from "../../images/tronpedia/defi-red.svg"
import nft_red from "../../images/tronpedia/nft-red.svg"
import gamefi_red from "../../images/tronpedia/gamefi-red.svg"
import web3_red from "../../images/tronpedia/web3-red.svg"
import stablecoin_red from "../../images/tronpedia/stablecoin-red.svg"
import blockchain_red from "../../images/tronpedia/blockchain-red.svg"
import crypto_red from "../../images/tronpedia/crypto-red.svg"

const Topics = ({limit}) => {

	const topics = [
		{
			"title": 
			"DEFI", 
			"image": defi_red,
			"url": "/developers/learning/tronpedia/defi/",
		},
		{
			"title": 
			"GAME-FI", 
			"image": gamefi_red,
			"url": "/developers/learning/tronpedia/gamefi/",
		},
		{
			"title": "NFT", 
			"image": nft_red,
			"url": "/developers/learning/tronpedia/nft/",
		},
		{
			"title": "WEB3", 
			"image": web3_red,
			"url": "/developers/learning/tronpedia/web3",
		},
		{
			"title": "STABLECOIN", 
			"image": stablecoin_red,
			"url": "/developers/learning/tronpedia/stablecoin/",
		},
		{
			"title": "CRYPTO", 
			"image": crypto_red,
			"url": "/developers/learning/tronpedia/crypto/",
		},
		{
			"title": "BLOCKCHAIN", 
			"image": blockchain_red,
			"url": "/developers/learning/tronpedia/blockchain/",
		}
	]

	const filteredTopics = (limit) ? topics.slice(0,limit) : topics

	return (
		<div className="tronpedia-topics-buttons">
		{
			filteredTopics.map((topic, i) => {
	            return (
	                <a 
	                	href={topic.url}
	                	rel="noopener noreferrer" 
	                	type="button" 
	                	className="tronpedia-topics-button flex-xl-fill"
	                	id={"tronpedia-topics-button-"+topic.title}
	                	key={i}
	                >
	                	<img src={topic.image} alt={topic.title} />    
	                	{topic.title}
	                </a>
	            )
	        })
		}
		</div>
	)
}

export default Topics