import React, {useState} from 'react';
import { getYoutubeVideoId } from '../utils/utils';

const PodcastItem2 = ({data: {podcastInfo, title}, size}) => {
  const [thumbImgQuality, setThumbImgQuality] = useState("");
  const date = new Date(podcastInfo.podcastDate);
  const formattedDate = formatDate(date);
  let episode = "";

  const parseTitle = (titleStr) => {
    if(titleStr.startsWith('Episode')) {
      episode = titleStr.slice(0, titleStr.indexOf(':'));
      title = titleStr.slice(titleStr.indexOf(':') + 1);
    }
  }
  parseTitle(title);

  const getHighResImg = (id) => {
    if (typeof window !== "undefined") {
  		var img = new Image();
  		img.src = "http://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
  		img.onload = function () {
  			checkThumbQuality(this.width);
  		}
    }
	}
  getHighResImg(getYoutubeVideoId(podcastInfo.podcastUrl));

  // Some thumbnails from youtube doesn't have the max resolution images, 
  // so we need to check the width of the thumbnail img to find the
  // next highest resolution that youtube has available
	const checkThumbQuality = (width) => {
    if (width > 640) {
      setThumbImgQuality('maxresdefault');
    } else if (width >= 480) {
        setThumbImgQuality('sddefault');
    } else if (width >= 320) {
        setThumbImgQuality('hqdefault');
    } else if (width >= 120) {
        setThumbImgQuality('mqdefault');
    } else if (width == 0) { // sometimes it still might fail on fluid layout
        setThumbImgQuality('hqdefault');
    } else {
        setThumbImgQuality('default');
    }
	}

  return (
		<div className={`podcast-list-item w-100 ${size === "sm" ? "sm-thumb" : "lg-thumb"}`}>
			<img className="w-100" src={`https://img.youtube.com/vi/${getYoutubeVideoId(podcastInfo.podcastUrl)}/${thumbImgQuality}.jpg`} alt="Around the Block Thumbnail Image" />
			<div className="my-4">
				<p className="episode">{episode}</p>
				<p className="title mt-2">{title}</p>
				<p className="date mt-3">{formattedDate}</p>
			</div>
		</div>
	);
} 

export default PodcastItem2

function formatDate(dateTime){
	return dateTime.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})
}
