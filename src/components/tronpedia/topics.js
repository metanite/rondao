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
		{"title": "DEFI", "image": defi_red},
		{"title": "GAME-FI", "image": gamefi_red},
		{"title": "NFT", "image": nft_red},
		{"title": "WEB3", "image": web3_red},
		{"title": "STABLECOIN", "image": stablecoin_red},
		{"title": "CRYPTO", "image": crypto_red},
		{"title": "BLOCKCHAIN", "image": blockchain_red}
	]

	const filteredTopics = (limit) ? topics.slice(0,limit) : topics

	return (
		<div className="tronpedia-topics-buttons">
		{
			filteredTopics.map(topic => {
	            return (
	                <button type="button" className="tronpedia-topics-button">
	                <img src={topic.image} alt={topic.title} />    
	                {topic.title}
	                </button>
	            )
	        })
		}
		</div>
	)
}

export default Topics