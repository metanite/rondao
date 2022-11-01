import React, {useState}  from "react"
import { Link, graphql } from "gatsby"
import { getYoutubeVideoId } from '../utils/utils'

const Video = ({ data, pageContext: {next, previous} }) => {
    const video = data.allWpVideo.edges[0].node;
    const [isExpanded, toggleReadMore ] = useState(false);

    let youtubeUrl = 'https://www.youtube.com/embed/' + getYoutubeVideoId(video.videoInfo.url) + '?rel=0'

    const toggle = () => toggleReadMore(!isExpanded);

    return (
        <div className="bg-gradient hero-padding pb-5">
            <div className="judge-width m-auto">
                <div className="container">
                    <div className="selected-podcast w-100">
                        <div className="embed-responsive">
                            <iframe src={youtubeUrl} title={video.title} className="embed-responsive-item" allowFullScreen></iframe>
                        </div>
                        <div className="podcast-details text-roboto-light my-5">
                            <h3 dangerouslySetInnerHTML={{ __html: video.title }} />
                            <p className={`mt-3 podcast-desc ${!isExpanded ? "truncated-text" : ""}`} dangerouslySetInnerHTML={{ __html: video.videoInfo.description }} />
                            <button className="read-more-btn" onClick={toggle}>Read {!isExpanded ? "More" : "Less"} ></button>
                        </div>
                        <div className="d-flex justify-content-between pt-5">
                            <div>
                                {previous && <Link to={`${previous.uri}`} className="next-link"> {"< Previous"}</Link>}
                            </div>
                            <div>
                                {next && <Link to={`${next.uri}`} className="next-link" > {"Next >"}</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video

export const query = graphql`
  query($slug: String!) {
  allWpVideo(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        videoInfo {
          description
          fieldGroupName
          title
          url
        }
      }
    }
  }
  }
`