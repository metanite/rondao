import React, { useState } from "react"
import {Helmet} from "react-helmet"
import TronpediaCarousel from "../../../components/tronpedia/tronpediaCarousel"
import TronpediaFeatured from "../../../components/tronpedia/featured"
import EmailCapture from "../../../components/EmailCapture"
import defi from "../../../images/home/defi_normal.svg"
import defi_red from "../../../images/tronpedia/defi-red.svg"
import defi_bg from "../../../images/tronpedia/defi-bg.svg"
import nft from "../../../images/home/nft_normal.svg"
import nft_red from "../../../images/tronpedia/nft-red.svg"
import nft_bg from "../../../images/tronpedia/nft-bg.svg"
import gamefi from "../../../images/home/gamefi_normal.svg"
import gamefi_red from "../../../images/tronpedia/gamefi-red.svg"
import gamefi_bg from "../../../images/tronpedia/gamefi-bg.svg"
import web3 from "../../../images/home/web3_normal.svg"
import web3_red from "../../../images/tronpedia/web3-red.svg"
import web3_bg from "../../../images/tronpedia/web3-bg.svg"
import stablecoin from "../../../images/home/coins.svg"
import stablecoin_red from "../../../images/tronpedia/stablecoin-red.svg"
import stablecoin_bg from "../../../images/tronpedia/stablecoin-bg.svg"
import crypto_red from "../../../images/tronpedia/crypto-red.svg"
import crypto_bg from "../../../images/tronpedia/crypto-bg.svg"
import blockchain from "../../../images/home/blockchain.svg"
import blockchain_red from "../../../images/tronpedia/blockchain-red.svg"
import blockchain_bg from "../../../images/tronpedia/blockchain-bg.svg"
import tronbullHi from "../../../images/tronpedia/tronbull-hi.png"
import {FaSearch} from "react-icons/fa"

const Tronpedia = ({data}) => {

    const topics = [
        {
            "title": 'DEFI',
            "image1": defi_red,
            "image2": defi,
            "image_bg": defi_bg,
            "alt": "trondao defi",
            "description": "This is the place to be for everything related to Decentralized Finance and the new coming age of the internet. Here you'll find articles on all sorts of concepts and topics, so be sure to check them out!",
            "subTopics": [
                "What is DEFI?",
                "DEFI vs. CEFI",
                "Defi Apps & Projects"
            ]
        },
        {
            "title": 'GAME-FI',
            "image1": gamefi_red,
            "image2": gamefi,
            "image_bg": gamefi_bg,
            "alt": "trondao gamefi",
            "description": "If you're looking for information on the latest and greatest games, or want to learn about the cutting-edge technologies that are shaping the future of gaming, you have found your destination",
            "subTopics": [
                "What is GAMEFI?",
                "How do P2E Games Work?",
                "The GameFi Industry"
            ],
        },
        {
            "title": 'NFT',
            "image1": nft_red,
            "image2": nft,
            "image_bg": nft_bg,
            "alt": "trondao nft",
            "description": "NFTs provide a sense of community and access to perks that can't be found anywhere else. Discover why many think NFT’s will revolutionize the world",
            "subTopics": [
                "What is NFT?",
                "History of NFTS",
                "Types of NFTs"
            ],
        },
        {
            "title": 'WEB3',
            "image1": web3_red,
            "image2": web3,
            "image_bg": web3_bg,
            "alt": "trondao web3",
            "description": "Web3 is a movement that's all about giving people control of their data and letting them enjoy its potential. Seize that control back by gaining an understanding of the basics of Web3.",
            "subTopics": [
                "What is WEB3?",
                "Developing in WEB3",
                "What are dApps?"
            ],
        },
        {
            "title": 'STABLECOIN',
            "image1": stablecoin_red,
            "image2": stablecoin,
            "image_bg": stablecoin_bg,
            "alt": "trondao stablecoin",
            "description": "The digital landscape is volatile. That's why it pays to know about stablecoins. You might think that these coins don't seem all too exciting at first glance, but looks can be deceiving",
            "subTopics": [
                "What is Stablecoin?",
                "What do Stablecoins offer?",
                "Commodity Backed Stablecoins"
            ],
        },
        {
            "title": 'CRYPTO',
            "image1": crypto_red,
            "image2": crypto,
            "image_bg": crypto_bg,
            "alt": "trondao crypto",
            "description": "Crypto is a new and exciting way to transact business online. Their use cases are so impressive  that it's hard not be drawn in by their potential! But where do you start? Right here!",
            "subTopics": [
                "What is Crypto?",
                "What is Cryptography?",
                "What is Staking?"
            ],
        },
        {
            "title": 'BLOCKCHAIN',
            "image1": blockchain_red,
            "image2": blockchain,
            "image_bg": blockchain_bg,
            "alt": "trondao blockchain",
            "description": "Let us be the first block in your blockchain journey. This section is packed full of useful information, whether you're a complete newcomer or you're already familiar with the basics and looking to learn more",
            "subTopics": [
                "What is Blockchain?",
                "What is Node?",
                "What are Distributed Networks?"
            ],
        }
    ]

    return (
        <div className="trondao-tronpedia">
            <Helmet>
                <title>TRON TRONPEDIA | TRONDAO</title>
                <meta name="description"
                        content="Welcome to TRONPEDIA"/>
                <meta property="og:description" content="Welcome to TRONPEDIA"/>
                <meta property="og:title" content="TRON TRONPEDIA | TRONDAO"/>
            </Helmet>

            <div className="tronpedia">
                <div className="tronpedia-main col-8 mx-auto">
                    <div className="tronpedia-header">
                        <div>
                            <h1>Tronpedia</h1>
                        </div>
                        <div>
                            <p>
                            Overwhelmed by the new age of the Internet and unsure where you should even begin? Look no further. TRONPedia is the place for you to start dissecting all the complex jargon that spawned with the creation of web3. TRONPedia was created to act as the first block in your blockchain journey so you can get involved & even lead all the new web3-driven conversations. 
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            {
                                topics.filter(topic => {
                                    return !["CRYPTO", "BLOCKCHAIN"].includes(topic.title)
                                }).map(i => {
                                    return (
                                        <img src={i.image2} className="tronpedia-header-icons" alt={i.alt} />
                                    )
                                })
                            }
                        </div>
                        <div>
                            <img src={tronbullHi} alt="tronbull doing a hi gesture" className="img-fluid" />
                        </div>
                    </div>

                    <div className="tronpedia-search">
                        <h2>Tronpedia</h2>
                        <div className="d-flex tronpedia-search-section">
                            <div>
                                <FaSearch size={30} />
                                <input type="text" className="tronpedia-search-input" placeholder="topic or article" />
                            </div>
                            <div>
                                <button type="button" className="tronpedia-search-button">Search Database</button>
                            </div>
                        </div>
                    </div>

                    <div className="tronpedia-topics">
                        <h2>Topics</h2>
                        <div className="tronpedia-topics-buttons d-flex justify-content-between">
                        {
                            topics.map(topic => {
                                return (
                                    <button type="button" className="tronpedia-topics-button">
                                    <img src={topic.image1} alt="button image" />    
                                    {topic.title}
                                    </button>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className="tronpedia-carousel">
                        <TronpediaCarousel topics={topics} />
                    </div>
                    
                    <div>
                        <TronpediaFeatured />
                    </div>
                </div>
                <EmailCapture />
            </div>
        </div>
    )
}

export default Tronpedia