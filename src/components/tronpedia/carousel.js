import React, { useState } from "react"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import { FaCircle } from "react-icons/fa"

const TronpediaCarousel = ({topics}) => {
    const [frontTopic, setFrontTopic] = useState(Math.round((topics.length - 1) / 2))
 
    const moveRight = () => {
        if(frontTopic < 1) {
            return
        }

        setFrontTopic((frontTopic) => frontTopic - 1)  
    }

    const moveLeft = () => {
        if(frontTopic > topics.length - 2) {
            return
        }

        setFrontTopic((frontTopic) => frontTopic + 1)         
    }

    const clickCard = (topicNumber) => {
        if (topicNumber < frontTopic) {
            moveRight()
        }else {
            moveLeft()
        }
    }

    const clickDot = (topicNumber) => {
        if(topicNumber === frontTopic) {
            return
        }

        setFrontTopic(topicNumber)
    }

    return (
        <>
        <div className="tronpedia-carousel-cards d-flex align-items-center justify-content-center">
            <button onClick={moveRight} className="tronpedia-carousel-left-arrow">
                <GoTriangleLeft alt="angle left icon" />
            </button>
            <button onClick={moveLeft} className="tronpedia-carousel-right-arrow">
                <GoTriangleRight alt="angle right icon" />
            </button>
            {
                topics.map((topic, index) => {
                    if(index === frontTopic) {
                        return  <div key={index} className="tronpedia-carousel-card tronpedia-carousel-card-front d-flex 
                        flex-column justify-content-start align-items-start" style={{zIndex: 1}}>
                            <div className="d-flex align-items-center">
                                <img src={topic.image_bg} alt={topic.alt} className="mr-4" />
                                <h2>{topic.title}</h2> 
                            </div> 
                            <div>
                                <p>
                                    {topic.description}
                                </p>
                            </div>
                            <div>
                                <ul>
                                    {
                                        topic.subTopics.map((sub, i) => {
                                            return (
                                                <li key={i}>
                                                    <a
                                                        href="/#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        id={"tronpedia-carousel-subtopic-"+{sub}}
                                                    >
                                                        {sub}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    }else {
                        return  <div key={index} onClick={() => clickCard(index)} onKeyPress={() => clickCard(index)} className={"tronpedia-carousel-card tronpedia-carousel-card-back d-flex align-items-center " 
                        + (index < frontTopic ? "tronpedia-carousel-card-left" : "tronpedia-carousel-card-right") }
                        style={{zIndex: index < frontTopic ? index - frontTopic : frontTopic - index}} role="presentation">
                            <img src={topic.image_bg} alt={topic.alt} className="img-fluid" />
                        </div>
                    }
                })
            }
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
        {
            [...Array(topics.length).keys()].map(i => {
                return (
                    <div 
                        key={i} 
                        onClick={() => clickDot(i)} 
                        onKeyPress={() => clickDot(i)} 
                        className={"ml-3 mini-carousel-dot " + (i === frontTopic ? 'active' : '')} 
                        role="presentation"
                        style={{cursor: "pointer"}}
                    >
                        <FaCircle size={15} alt="circle icon" />
                    </div>
                )
            })
        }
        </div>
        </>
    )

} 

export default TronpediaCarousel