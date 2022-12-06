import React, {useState, useReducer} from "react"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import {FaCircle} from "react-icons/fa"

const reduce = (topics, action) => {
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

const TronpediaCard = ({topics}) => {

    const [frontTopic, setFrontTopic] = useState(3)
    const [initTopics, dispatch] = useReducer(reduce, topics)

    const right = () => {
        const n = frontTopic - 1
        if(n < 0) {
            return
        }

        setFrontTopic((frontTopic) => frontTopic - 1)
        dispatch({
            type: "move", 
            currentTopic: frontTopic, 
            nextTopic: n, 
            class: "tronpedia-carousel-card-right"
        })     
    }

    const left = () => {
        let n = frontTopic + 1
        if(n > 6) {
            return
        }

        setFrontTopic((frontTopic) => frontTopic + 1)
        dispatch({
            type: "move", 
            currentTopic: frontTopic, 
            nextTopic: n, 
            class: "tronpedia-carousel-card-left"
        })          
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
                    <div key={i} className={"ml-3 mini-carousel-dot " + (i === frontTopic ? 'active' : '')}>
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