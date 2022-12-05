import React, {useState} from "react"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import {FaCircle} from "react-icons/fa"

const TronpediaCard = ({topics}) => {

    const [frontTopicIndex, setFrontTopicIndex] = useState(1)
    const [rotate, setRotation] = useState("")

    const isClose = (num1, num2, tolerance) => {

        const diff = Math.abs(num1 - num2)

        return diff < tolerance
    }

    const zIndex = (number) => {
        switch(number) {
            case 1:
            case 2:
                return -1
            case 3:
            case 4:
                return -2
            case 5:
            case 6:
                return -3
        }
    }

    const next = () => {
        let allCards = document.querySelectorAll(".tronpedia-carousel-card")
        let lastFrontIndex = frontTopicIndex
        setFrontTopicIndex((frontTopicIndex) => frontTopicIndex - 1)
        
        allCards.forEach((card, index) => {
            if(index === frontTopicIndex) {
                card.classList.remove = "tronpedia-carousel-card-left"
                card.classList.add = "tronpedia-carousel-card-front"
                card.style.zIndex = 1
                return
            }else if(index === lastFrontIndex) {
                card.classList.remove = "tronpedia-carousel-card-front"
                card.classList.add = "tronpedia-carousel-card-right"
                card.style.zIndex = -1
                return
            }else if(card.parentElement.lastElementChild === card && card.classList.contains("tronpedia-carousel-card-right")) {
                card.classList.remove = "tronpedia-carousel-card-right"
                card.classList.add = "tronpedia-carousel-card-left"
                card.style.zIndex = -1
                return
            }else {
                if([5,6].includes(index)) {
                    card.style.zIndex = -3
                }else {
                    card.style.zIndex = -2
                }
            }
        })
    }

    return (
        <>
        <div className="tronpedia-carousel-cards d-flex align-items-center justify-content-center">
            <button className="tronpedia-carousel-left-arrow">
                <GoTriangleLeft size={60} alt="angle left icon" />
            </button>
            <button onClick={next} className="tronpedia-carousel-right-arrow">
                <GoTriangleRight size={60} alt="angle right icon" />
            </button>
            {
                topics.map((topic, index) => {
                    if(index === frontTopicIndex) {
                        return  <div className="tronpedia-carousel-card tronpedia-carousel-card-front d-flex flex-column justify-content-start align-items-start">
                            <div className="d-flex align-items-center">
                                <img src={topic.image} alt={topic.alt} className="mr-4" />
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
                                        topic.subTopics.map(sub => {
                                            return (
                                                <li>
                                                    {sub}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    }else {
                        return  <div className={"tronpedia-carousel-card tronpedia-carousel-card-back d-flex align-items-center " 
                        + ([0,3,5].includes(index) ? "tronpedia-carousel-card-left justify-content-start" : "tronpedia-carousel-card-right justify-content-end")}
                        style={{zIndex: zIndex(index)}}>
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
                    <div key={i} className={"ml-3 mini-carousel-dot " + (i === 3 ? 'active' : '')}>
                        <FaCircle size={15} alt="circle icon" />
                    </div>
                )
            })
        }
        </div>
        </>
    )

} 

export default TronpediaCard