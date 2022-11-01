import React from "react";
import {graphql, Link} from "gatsby";
import BlogLayout from "../components/blogLayout";
import {Helmet} from "react-helmet";
import defaultImg from "../images/tron_logo_full.svg";
import {getDateFromYYYYMMDD} from "../utils/utils";

const Conferences = ({data, pageContext: {next, previous}}) => {
    let allEvents = data.allWpEvent.edges;
    return (
        <div>
            <Helmet>
                <title>Conferences | TRONDAO</title>
            </Helmet>
            <div className="blog-directory-header bg-gradient">
                <div className="container">
                    <h1 className="blog-directory-header-title">Conferences</h1>
                    <h2 className="blog-directory-header-description">Stay up-to-date on all upcoming events and browse
                        our recent event recaps</h2>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5 pb-5 mt-5">
                    <div className="col-10 offset-1 mt-5">
                        <p className="conference-header">Conferences</p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-wrap justify-content-center w-100">
                        {
                            allEvents.length > 0 && allEvents.map((event) => {
                                let img = event.node.featuredImage != null ? event.node.featuredImage.node.sourceUrl : defaultImg;
                                return (
                                    <Link key={event.node.title} to={`${event.node.uri}`}
                                          className="conference-card text-decoration-none text-white mx-auto">
                                        <div>
                                            <div className="justify-content-center">
                                                <div className="conference-img-wrapper d-flex flex-wrap align-items-center">
                                                    <img alt={event.node.title} className="conference-img" src={img}/>
                                                </div>
                                            </div>
                                            <h3 className="conference-title pt-3 pb-1 text-left">{event.node.title}</h3>
                                            <div className="conference-seperator"/>
                                            <p className="conference-info text-left pt-2">{getDateFromYYYYMMDD(event.node.eventinfo.date)} - {event.node.eventinfo.location}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="container pb-5">
                        <div className="blog-post-pagination position-relative pb-5">
                            {
                                previous &&
                                <Link to={`${previous}`}
                                      className="blog-post-pagination-previous ml-0 ml-md-3">{'< Previous'}</Link>
                            }
                            {
                                next &&
                                <Link to={`${next}`}
                                      className="blog-post-pagination-next mr-0 mr-lg-3">{'Next >'}</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Conferences;

export const pageQuery = graphql`
query ($limit: Int!, $skip: Int!) {
allWpEvent (filter: {eventinfo: {isconference: {eq: true}}}, limit: $limit, skip: $skip, sort: {order: DESC, fields: eventinfo___date}) {
    edges {
      node {
        uri
        title
        featuredImage {
            node {
                sourceUrl
            }
        }
        eventinfo {
          isconference
          date
          video
          location
          summary
          images {
            sourceUrl
          }
        }
      }
    }
  }
}

`
