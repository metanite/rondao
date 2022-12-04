import React from "react"
import whatDefi from "../../images/tronpedia/what-defi.jpg"
import whatCrypto from "../../images/tronpedia/what-crypto.png"
import whatNFT from "../../images/tronpedia/what-nft.png"
import whatStablecoin from "../../images/tronpedia/what-stablecoin.png"
import whatWeb3 from "../../images/tronpedia/what-web3.png"
import whatBlockchain from "../../images/tronpedia/what-blockchain.png"
import p2eWork from "../../images/tronpedia/p2e-work.png"

const Featured = () => {
    const featuredTopics = [
        {"question": "What is DEFI?", "image": whatDefi},
        {"question": "What is Crypto?", "image": whatCrypto},
        {"question": "What is NFT?", "image": whatNFT},
        {"question": "What is Stablecoin?", "image": whatStablecoin},
        {"question": "What is Web3?", "image": whatWeb3},
        {"question": "What is Blockchain?", "image": whatBlockchain},
        {"question": "How do P2E games work?", "image": p2eWork}
    ]

    return (
        <>
        <h2 className="mb-5 text-uppercase">Featured</h2>
        <div className="tronpedia-featured">
            {
                featuredTopics.sort(() => Math.random() - 0.5).slice(0,4).map(topic => {
                    return (
                        <a href="/#">
                            <div className="d-flex flex-column align-items-start">
                                <div>
                                    <img src={topic.image} alt={topic.question} className="img-fluid" />
                                </div>
                                <div className="mt-3">
                                    <h2>{topic.question}</h2>
                                </div>
                            </div>
                        </a>    
                    )
                })
            }
        </div>
        </>
    )
}

export default Featured