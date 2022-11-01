import React, {useState}  from "react"
import { graphql } from "gatsby"
import { getYoutubeVideoId } from '../utils/utils'
import {Helmet} from "react-helmet";
import { Carousel } from 'react-responsive-carousel';
import {getDateFromYYYYMMDD} from "../utils/utils";
import defaultImg from "../images/tron_logo_full.svg";
import {VideoCarousel} from "../components/videoCarousel";

const Event = ({ data }) => {
    const event = data.allWpEvent.edges[0].node;
    const [isExpanded, toggleReadMore ] = useState(false);
    let img = event.featuredImage != null ? event.featuredImage.node.sourceUrl : defaultImg;
    let youtubeUrl = 'https://www.youtube.com/embed/' + getYoutubeVideoId(event.eventinfo.video) + '?rel=0'


    const toggle = () => toggleReadMore(!isExpanded);

    return (
        <div className="bg-gradient hero-padding pb-5">
            <Helmet>
                <meta property="og:image" content={img} data-react-helmet="true"/>
                <meta name="twitter:image:src" content={img} data-react-helmet="true"/>
            </Helmet>
            <div className="pb-5 justify-content-center hero-padding bg-gradient text-decoration-none text-white">
                <div className="events-header m-auto container">{event.title}</div>
                <div className="events-header events-subheader container mt-2">{event.eventinfo.introduction}</div>          
            </div> 
            <div className="judge-width m-auto">
                <div className="container">
                    <div className="selected-podcast w-100">
                        <div>
                            <h3 className="selected-podcast-events-date mt-3">{getDateFromYYYYMMDD(event.eventinfo.date)} - {event.eventinfo.location}
                                <div className="selected-podcast-events-spacer" />
                            </h3>    
                        </div>
                        <div className="embed-responsive selected-podcast-events-video my-5">
                            <iframe src={youtubeUrl} title={event.title} className="embed-responsive-item" allowFullScreen/>
                        </div>

                        <div className="row pt-5 mt-5">
                            <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0">
                                <h1 className="selected-podcast-events-summary-title">Summary</h1>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 order-2 align-items-center">
                                <div className="podcast-details text-roboto-light my-5 selected-podcast-events-summary-content">
                                    <p className={`mt-3 podcast-desc ${!isExpanded ? "truncated-text" : ""}`} dangerouslySetInnerHTML={{ __html: event.eventinfo.summary }} />
                                    <button className="read-more-btn" onClick={toggle}>Read {!isExpanded ? "More" : "Less"} ></button>
                                </div>
                            </div>
                        </div>

                        <Carousel showStatus={false} showIndicators={false} centerMode showThumbs={false} autoPlay={true} infiniteLoop={true} className="text-align-center selected-podcast-events-carousel my-5">
                        {
                            event.eventinfo.images != null && event.eventinfo.images.map((image) => {
                                return (
                                    <div className="text-align-center d-flex flex-wrap align-items-center h-100 mx-2">
                                        <img src={image.sourceUrl} className="img-fluid" />
                                    </div>
                                );

                            })
                        }
                        </Carousel>

                        {
                            event.eventinfo.speeches !== null &&
                            <VideoCarousel videos={event.eventinfo.speeches}/>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event



export const query = graphql`
  query($slug: String!) {
  allWpEvent(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        uri
        title
        slug  
        featuredImage {
            node {
                sourceUrl
            }
        }     
        eventinfo {
          date
          video
          summary
          introduction
          location
          images {
            sourceUrl
          }
          speeches {
            ... on WpVideo {
                videoInfo {
                    url
                    title
                    description
                }
            }
          }
        }
      }
    }
  }
  }
`