import React from "react";
import { Link, graphql } from "gatsby";
import BlogLayout from "../components/blogLayout";
import VideoItem from "../components/videoItem";
import {Helmet} from "react-helmet";

const Videos = ({ data }) => {
    let allVideos = data.allWpVideo.edges;

    return (
        <div>
            <Helmet>
                <title>Tron DAO Videos | TRONDAO</title>
                <meta name="description" content="TRON DAO community videos. Industry enthusiasts explore our ecosystem in the TRON Network. Watch the latest videos."/>
                <meta property="og:description" content="TRON DAO community videos. Industry enthusiasts explore our ecosystem in the TRON Network. Watch the latest videos."/>
                <meta property="og:title" content="Tron DAO Videos | TRONDAO"/>
            </Helmet>
            <div className="pb-5 d-flex justify-content-center hero-padding bg-gradient text-decoration-none text-white">
                <h1 className="mt-5">TRON DAO Community Videos</h1>
            </div>
            <BlogLayout>
                <div className="atb-podcasts-directory">
                    <div className="header d-flex flex-column text-center mb-5">
                        <div className="atb-podcasts-directory-subheader">Catch Up On The Latest</div>
                        <h2>Stay up to date with the latest content from the TRON DAO community. Learn about our ecosystem and dive deep with industry enthusiasts and professionals surrounding the TRON Network.</h2>
                    </div>
                    <div className="d-flex flex-wrap atb-podcasts-lists w-100">
                        {
                            allVideos.length > 0 && allVideos.map((podcast) => {
                                return (
                                    <Link key={podcast.node.videoInfo.title} to={`${podcast.node.uri}`}  className="atb-podcasts-lists-item text-decoration-none text-white">
                                        <VideoItem data={podcast.node} size={"sm"}/>
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


export default Videos;

export const pageQuery = graphql`
query {
allWpVideo (sort: {order: ASC, fields: menuOrder}) {
    edges {
      node {
        uri
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
