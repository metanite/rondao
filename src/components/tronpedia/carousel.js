import React, {useState, useReducer, useEffect} from "react"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import {FaCircle} from "react-icons/fa"

const cardMover = (topics, action) => {
    switch (action.type) {
        case "move":
            return topics.map((t, index) => {
                if(index === action.nextTopic) {
                    return {
                        ...t,
                        class: "tronpedia-carousel-card-front",
                        zIndex: 1
                    }
                } else if(index === action.currentTopic) {
                    return {
                        ...t,
                        class: action.class,
                        zIndex: -1
                    }
                } else if(t.class === action.class) {
                    return {
                        ...t,
                        zIndex: t.zIndex - 1 
                    }
                }else {
                    return t
                }
            })
        default:
            return topics
    }
}

const TronpediaCarousel = ({topics}) => {

    const [frontTopic, setFrontTopic] = useState({current: 3, direction: ""})
    const [initTopics, dispatch] = useReducer(cardMover, topics)

    useEffect(() => {
        const className = (frontTopic.direction === "right") ? "tronpedia-carousel-card-right" : "tronpedia-carousel-card-left"

        dispatch({
            type: "move", 
            currentTopic: (frontTopic.direction === "right") ? frontTopic.current + 1 : frontTopic.current - 1, 
            nextTopic: frontTopic.current, 
            class: className
        }) 

    }, [frontTopic])


    const right = () => {
        if(frontTopic.current < 1) {
            return
        }

        setFrontTopic({"current": frontTopic.current - 1, "direction": "right"})  
    }

    const left = () => {
        if(frontTopic.current > 5) {
            return
        }

        setFrontTopic({"current": frontTopic.current + 1, "direction": "left"})          
    }

    const clickTopic = (topicNumber) => {
        const direction = (topicNumber < frontTopic.current) ? "left" : "right"

        setFrontTopic({"current": topicNumber, "direction": direction})
    }

    return (
        <>
        <div className="tronpedia-carousel-cards d-flex align-items-center justify-content-center">
            <button onClick={left} className="tronpedia-carousel-left-arrow">
                <GoTriangleLeft size={60} alt="angle left icon" />
            </button>
            <button onClick={right} className="tronpedia-carousel-right-arrow">
                <GoTriangleRight size={60} alt="angle right icon" />
            </button>
            {
                initTopics.map((topic, index) => {
                    if(topic.zIndex === 1) {
                        return  <div key={index} className="tronpedia-carousel-card tronpedia-carousel-card-front d-flex 
                        flex-column justify-content-start align-items-start" style={{zIndex: 1}}>
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
                        return  <div key={index} className={"tronpedia-carousel-card tronpedia-carousel-card-back d-flex align-items-center " 
                        + topic.class}
                        style={{zIndex: topic.zIndex}}>
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
                    <div key={i} onClick={() => clickTopic(i)} className={"ml-3 mini-carousel-dot " + (i === frontTopic.current ? 'active' : '')}>
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