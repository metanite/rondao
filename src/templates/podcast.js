import React, {useState}  from "react"
import BlogLayout from "../components/blogLayout"
import { Link, graphql } from "gatsby"
import { getYoutubeVideoId } from '../utils/utils'

const Podcast = ({ data, pageContext: {next, previous} }) => {
  const podcast = data.allWpPodcast.edges[0].node;
  const [isExpanded, toggleReadMore ] = useState(false);

  let youtubeUrl = 'https://www.youtube.com/embed/' + getYoutubeVideoId(podcast.podcastInfo.podcastUrl) + '?rel=0'

  const toggle = () => toggleReadMore(!isExpanded);

  return (
      <div className="bg-gradient hero-padding pb-5">
        <div className="judge-width m-auto">
          <div className="container">
            <div className="selected-podcast w-100">
              <div className="embed-responsive">
                <iframe src={youtubeUrl} title={podcast.title} className="embed-responsive-item" allowFullScreen></iframe>
              </div>
              <div className="podcast-details text-roboto-light my-5">
                <h3 dangerouslySetInnerHTML={{ __html: podcast.title }} />
                <p className="mt-3 podcast-date">{podcast.podcastInfo.podcastDate}</p>
                <p className={`mt-3 podcast-desc ${!isExpanded ? "truncated-text" : ""}`} dangerouslySetInnerHTML={{ __html: podcast.podcastInfo.podcastSynopsis }} />
                <button className="read-more-btn" onClick={toggle}>Read {!isExpanded ? "More" : "Less"} ></button>
              </div>
              <div className="d-flex justify-content-between pt-5">
                <div>
                  {previous && <Link to={`/podcasts/${previous.slug}/`} className="next-link"> {"< Previous"}</Link>}
                </div>
                <div>
                  {next && <Link to={`/podcasts/${next.slug}/`} className="next-link" > {"Next >"}</Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Podcast

export const query = graphql`
  query($slug: String!) {
    allWpPodcast(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          podcastInfo {
            podcastDate
            podcastGuests {
              ... on WpJudge {
                title
              }
            }
            podcastSynopsis
            podcastTime
            podcastHeader
            podcastUrl
            podcastImage {
              sourceUrl
            }
          }
          title
          id
        }
      }
    }
  }
`