import React, {useState, useEffect} from "react"
import {Helmet} from "react-helmet"
import chips  from "../../images/events/chips.png"
import tronAstronaut from "../../images/events/tron-astronaut.png"
import tronball from "../../images/events/tronball.png"
import tronBalloon from "../../images/events/tron-balloon.png"
import tronbullPhoto  from "../../images/events/tronbull-photo.png"
import tronBunny from "../../images/events/tron-bunny.png"
import tronEvent from "../../images/events/tron-event.png"
import tronLogo from "../../images/events/tron-logo.png"
import tronSpeaker from "../../images/events/tron-speaker.png"
import videoCover1 from "../../images/events/video-cover1.png"
import videoCover2 from "../../images/events/video-cover2.png"
import videoCover3 from "../../images/events/video-cover3.png"


const Events = ({data}) => {
    const tags = [
        'all',
        'conference',
        'hackathon',
        'other'
    ];

    const coverImage = [
        videoCover1,
        videoCover2,
        videoCover3,
        videoCover3
    ]

    const events = [
        {
            "title": "Concensus",
            "image": chips,
            "alt"  : "different variety of casino chips",
            "tag"  : "hackathon"
        },
        {
            "title": "Concensus",
            "image": tronAstronaut,
            "alt"  : "picture taking with an astronaut in the middle",
            "tag"  : "other"
        },
        {
            "title": "Concensus",
            "image": tronball,
            "alt"  : "woman holding a red ball with tron logo",
            "tag"  : "conference"
        },
        {
            "title": "Concensus",
            "image": tronBalloon,
            "alt"  : "tron balloon on the ground",
            "tag"  : "hackathon"
        },
        {
            "title": "Concensus",
            "image": tronbullPhoto,
            "alt"  : "picture taking with an tronbull maskot",
            "tag"  : "conference"
        },
        {
            "title": "Concensus",
            "image": tronBunny,
            "alt"  : "random picture with a bunny costume",
            "tag"  : "hackathon"
        },
        {
            "title": "Concensus",
            "image": tronEvent,
            "alt"  : "a tron event",
            "tag"  : "other"
        },
        {
            "title": "Concensus",
            "image": tronLogo,
            "alt"  : "tron logo in a cyberspace theme room",
            "tag"  : "conference"
        },
        {
            "title": "Concensus",
            "image": tronSpeaker,
            "alt"  : "speaker presenting in a tron event",
            "tag"  : "other"
        },
    ]

    const [currentTag, setCurrentTag] = useState("all")
    const [open, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("")
    const [filteredTags, setFilterTags] = useState(events)

    useEffect(() => {
        document.body.style.overflow = (open) ? "hidden" : "auto"
    }, [open])

    const openLightbox = (event) => {
        setIsOpen(!open)
        setSelected(event)
    }

    const filterTags = (tag) => {
        setCurrentTag(tag)
        setFilterTags(() => {
            return (tag === "all") ? events : events.filter(event => event.tag === tag)
        })
    }

    const clickLightbox = (e) => {
        if (!e.target.closest(".events-lightbox-box")) {
            setIsOpen(!open)
        }
    }

    return (
        <div className="trondao-events">
            <Helmet>
                <title>TRON Events | TRONDAO</title>
                <meta name="description"
                        content="What is happening in the world of TRON"/>
                <meta property="og:description" content="What is happening in the world of TRON"/>
                <meta property="og:title" content="TRON Events | TRONDAO"/>
            </Helmet>
            <div className="events">
            	<div className="events-main">
            		<div className="events-main-title d-flex align-items-center justify-content-center col-lg-8 mx-auto">
            			<h1 className="text-uppercase text-center">What is happening in the world of TRON</h1>
            		</div>

                    <div className="events-main-tags col-md-6 d-flex justify-content-between mx-auto">
                        {
            				tags.map((tag) => {
            					return (
            						<button type="button" className={tag === currentTag ? 'active' : ''} onClick={() => filterTags(tag)}>{tag}</button>
            					)	
            				})
            			}
                    </div>
            	</div>

                <div className="events-body col-lg-10 mx-auto">
                    {
                        filteredTags.map((event, key) => {
                            return (
                                <div key={key} onClick={() => openLightbox(event)} role="presentation"  className="events-body-card">
                                    <div>
                                        <img src={event.image} alt={event.alt} className="img-fluid" />
                                    </div>
                                    <div className="p-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <h1>{event.title}</h1>
                                            <p>
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui .
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4">
                                            <div className="events-body-card-date">
                                            August 10, 2022 • NYC
                                            </div>
                                            <div className="events-body-card-tag">
                                            {event.tag}
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            )
                        })
                    }
                </div>

                {
                    open ? 
                    <div onClick={(e)=> clickLightbox(e)} className="events-lightbox" id="events-lightbox">
                        <div className="events-lightbox-box">
                            <div>
                                <img src={selected.image} alt={selected.alt} className="img-fluid" />
                            </div>
                            <div className="px-5 py-4 d-flex flex-column justify-content-between">
                                <div className="events-lightbox-details d-flex flex-column">
                                    <div>
                                        <h1>{selected.title}</h1>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="events-body-card-date mr-3">
                                            August 10, 2022 • NYC
                                        </div>
                                        <div className="events-body-card-tag">
                                            {selected.tag}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>
                                        The TRON team was on the ground at @NFT NYC 2022 in NYC from June 21 to June 23, 2022. The team had a great time interacting with the #NFT community and making new friends and connections. It was an exciting opportunity to educate the community about the newly launched APENFT marketplace, the leading NFT marketplace on TRON. We look forward to seeing the community at the next conference we attend.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <div>
                                    <h6 className="text-uppercase">Videos</h6>
                                    </div>
                                    <div className="events-lightbox-cover d-flex">
                                    {
                                        coverImage.map(image => {
                                            return (
                                                <img src={image} alt="video cover" />
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button type="button" className="events-lightbox-prev">Previous</button>
                                <button type="button" className="events-lightbox-next">Next</button>
                            </div>
                        </div>
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default Events