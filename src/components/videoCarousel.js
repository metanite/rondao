import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getYoutubeVideoId } from '../utils/utils'

export const VideoCarousel = ({videos}) => {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {

            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId.slice(0, -6))} />;
        });
    const YoutubeSlide = ({ url, title }) => (
        <div className="embed-responsive my-5">
            <iframe src={url} title={title} className="embed-responsive-item" allowFullScreen/>
        </div>
    );
    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb} showStatus={false}>
            { videos !== false && videos.map((video) => {
                let url = "https://www.youtube.com/embed/" + getYoutubeVideoId(video.videoInfo.url) + '?rel=0';
                    return (
                        <YoutubeSlide key={video.videoInfo.title} url={url} title={video.videoInfo.title}/>
                    )
                })
            }
        </Carousel>
    );
};