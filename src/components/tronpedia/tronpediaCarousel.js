import React, {useState} from "react"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import {FaCircle} from "react-icons/fa"

const TronpediaCard = ({topics}) => {

    const [frontTopicIndex, setFrontTopicIndex] = useState(1)
    const [rotate, setRotation] = useState("")

    const next = () => {
        setFrontTopicIndex((frontTopicIndex) => frontTopicIndex + 1)
    }

    const rotation = (motion) => {
        if(motion === 'right') {
            setRotation("")
        }
    }

    return (
        <>
        <div className="tronpedia-carousel-cards d-flex align-items-center justify-content-center">
            <button className="tronpedia-carousel-left-arrow">
                <GoTriangleLeft size={60} alt="angle left icon" />
            </button>
            <button className="tronpedia-carousel-right-arrow">
                <GoTriangleRight size={60} alt="angle right icon" />
            </button>
            {
                topics.map((topic, index) => {
                    if(index === frontTopicIndex) {
                        return  <div className="tronpedia-carousel-card tronpedia-carousel-card-front d-flex flex-column justify-content-start align-items-start">
                            <div className="d-flex align-items-center">
                                <img src={topic.image2} alt={topic.alt} className="mr-4" />
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
                        return  <div className={"tronpedia-carousel-card tronpedia-carousel-card-back d-flex align-items-center " + ([1,4,7].includes(index) ? "tronpedia-carousel-card-left justify-content-start" : "tronpedia-carousel-card-right justify-content-end")}>
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