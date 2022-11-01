import React from "react";
import { Link, graphql } from "gatsby";
import BlogLayout from "../components/blogLayout";
import PodcastItem2 from "../components/podcastItem2";
import atbLogo from "../images/podcast/atb.svg";
import { getYoutubeVideoId } from '../utils/utils'
import {Helmet} from "react-helmet";

const Podcasts = ({ data }) => {
  let allPodcasts = data.allWpPodcast.edges;
  var latestPodcast = allPodcasts[0];
  
  const checkIfVideoExists = () => {
    let latestVideoId = getYoutubeVideoId(latestPodcast.node.podcastInfo.podcastUrl)
    //check if the youtube video is available yet (video is not available if it is not streamed)
    // if it is not available, then don't show the upcoming video thumbnail on the directory page
    if(allPodcasts.length > 0) {
      if(latestVideoId === null || latestVideoId == undefined) {
        allPodcasts.shift();
        latestPodcast = allPodcasts[0]
      }
    }
  }

  checkIfVideoExists();

  return (
    <div className="atb-podcasts">
      <Helmet>
        <title>Around The Block Podcasts | TRONDAO</title>
        <meta name="description" content="Hear from experts in the blockchain/crypto arena. Listen to TRON’s current episode or one from the past. Check out Around The Block now."/>
        <meta property="og:description" content="Hear from experts in the blockchain/crypto arena. Listen to TRON’s current episode or one from the past. Check out Around The Block now."/>
        <meta property="og:title" content="Around The Block Podcasts | TRONDAO"/>
      </Helmet>
      <div className="atb-podcasts-hero">
        <div className="atb-podcasts-container">
          <img src={atbLogo} alt="Around The Block" className="mx-auto d-block img-fluid" />
          <p className="atb-description">“Bringing experts together.”</p>
        </div>
      </div>
      <BlogLayout>
        <div className="atb-podcasts-directory">
          <div className="header d-flex flex-column text-center mb-5">
            <h1>Hear from the experts</h1>
            <h2>Tune into our new livestream series for interviews with the experts shaping the game</h2>
          </div>
          {latestPodcast &&
            <Link key={latestPodcast.node.id} to={`${latestPodcast.node.uri}`}  className="text-decoration-none text-white">
              <PodcastItem2 data={latestPodcast.node} size={"lg"}/>
            </Link>
          }
          <div className="d-flex flex-wrap atb-podcasts-lists w-100">
            {
              allPodcasts.length > 0 && allPodcasts.slice(1).map((podcast) => {
                return (
                  <Link key={podcast.node.id} to={`${podcast.node.uri}`}  className="atb-podcasts-lists-item text-decoration-none text-white">
                    <PodcastItem2 data={podcast.node} size={"sm"}/>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </BlogLayout>
    </div>
  );
};


export default Podcasts;

export const pageQuery = graphql`
query {
  allWpPodcast(sort: {order: DESC, fields: podcastInfo___podcastDate}) {
    edges {
      node {
        podcastInfo {
          podcastDate
          podcastGuests {
            ... on WpJudge {
              title
            }
            ... on WpParticipant {
              id
            }
          }
          podcastSynopsis
          podcastTime
          podcastUrl
          podcastHeader
          podcastImage {
            sourceUrl
          }
        }
        uri
        title
        id
      }
      next {
        title
        uri
        slug
      }
      previous {
        slug
        title
        uri
      }
    }
  }
}
`
