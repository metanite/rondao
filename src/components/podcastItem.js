import React  from 'react';
import youtubeLogo from '../images/podcast/yt_logo.png';
import dliveLogo from '../images/podcast/dlive_logo.png';
import twitterLogo from '../images/podcast/twitter_logo.png'
const PodcastItem = ({data: {podcastInfo, title}}) => {
	let coverImg = 'gray';
	if(podcastInfo.podcastImage && podcastInfo.podcastImage.sourceUrl) {
		coverImg = `url('${podcastInfo.podcastImage.sourceUrl}')`
	}
	const dateTime = new Date(`${podcastInfo.podcastDate} ${podcastInfo.podcastTime}`)
	const formattedDate = formatDate(dateTime)
	const formattedTimeString = formatTimeString(dateTime)
	// const guests = retrieveGuests(podcastInfo)
	return (
		<div className="podcast-item w-100">
			
			<div className="podcast-item-section podcast-item-middle-section d-md-flex text-center">
				<div className="d-inline-flex flex-column justify-content-center podcast-item-middle-section-content">
					<p className="podcast-item-middle-section-header">
						{podcastInfo.podcastHeader}
					</p>
					<div className="podcast-item-middle-section-description" dangerouslySetInnerHTML={{ __html: podcastInfo.podcastSynopsis }}>
					</div>
					<p className="font-weight-bold mb-0" style={{fontFamily: 'Blender Pro Bold'}}>
						Watch LIVE on Dlive Protocol, YouTube or Twitter Space
					</p>
				</div>
			</div>
			<div className="podcast-item-section podcast-item-bottom-section">
				<div className="podcast-item-bottom-section-1">{formattedDate}</div>
				<div className="podcast-item-bottom-section-2">{formattedTimeString}</div>
			</div>
			<div className="d-md-flex justify-content-center podcast-stream">
				<div className="media d-inline-block">
					<div className="header">
						<a id="podcast-media-dlive-icon" href="https://dlive.org/" className="text-decoration-none text-white" target="_blank">
							<img src={dliveLogo} className=""/>
						</a>
					</div>
					<div className="description">
						<a id="podcast-media-dlive" href="https://dlive.org/"
						   className="social-icon" target="_blank"
						   rel="noopener noreferrer">Watch on Dlive</a>
						   <br/>
						   <a id="podcast-media-dlive-magnet" href="magnet:?xt=urn:btlive:157f6f58ecec90b3e554f76b817b2b27bfd5c8c5b42a2a06d77f57b2028ce6c1&tr=54.189.185.216"
						   className="social-icon" target="_blank"
						   rel="noopener noreferrer">Get the magnet link here</a>
					</div>
				</div>
				<div className="media d-inline-block pt-1">
					<div className="header">
						<img src={youtubeLogo} className="pr-2 mb-1"/>TRON DAO</div>
					<div className="description pt-3">
						<a id="podcast-media-youtube" href="https://www.youtube.com/playlist?list=PLkEgrjDa646bX87h8D9TWP-EL75XK2gv4"
						   className="social-icon" target="_blank"
						   rel="noopener noreferrer">Stream live on YouTube</a>
					</div>
				</div>
				<div className="media d-inline-block pt-1">
					<div className="header">
						<img src={twitterLogo} className="pr-2 mb-1"/>TRON DAO</div>
					<div className="description pt-3">
						<a id="podcast-media-twitter" href="https://twitter.com/trondao"
						   className="social-icon" target="_blank"
						   rel="noopener noreferrer">Listen on Twitter Space</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PodcastItem

function formatDate(dateTime){
	return dateTime.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
}

function formatTimeString(dateTime) {
	let pst = dateTime.toLocaleTimeString('en-US', {timeZone: 'America/Los_Angeles'}).toLowerCase()
	let est = dateTime.toLocaleTimeString('en-US', {timeZone: 'America/New_York'}).toLowerCase()
	let gmt8 = dateTime.toLocaleTimeString('en-US', {timeZone: 'Asia/Hong_Kong'}).toLowerCase()
	let timeZones = [pst, est, gmt8]
	let timeZonesString = [' PT · ', ' ET · ', ' GMT+8']
	let outputString = ''
	timeZones.forEach((timeZone, i) => {
		// different slice ranges to handle single digit hours
		// ie 3:00:00 vs 12:00:00
		let sliceRanges = (timeZone.length === 10) ? [0,4,8,11] : [0,5,9,12]
		let timeString = timeZone.slice(sliceRanges[0],sliceRanges[1]) + timeZone.slice(sliceRanges[2],sliceRanges[3])
		outputString += `${timeString}${timeZonesString[i]}`
	})

	return outputString
}

function retrieveGuests(podcastInfo) {
	let guests = ''
	if (podcastInfo === undefined || podcastInfo.podcastGuests === undefined) return guests;
	let atleastTwoGuests = podcastInfo.podcastGuests.length > 1;
	let atleastThreeGuests = podcastInfo.podcastGuests.length > 2;

	for (let i = 0; i < podcastInfo.podcastGuests.length; i++) {
		let isLastGuest = i === podcastInfo.podcastGuests.length - 1;
		let isFirstGuest =  i === 0;

		if (!isFirstGuest && !isLastGuest ) {
			guests += ', ';
		}
		if (isLastGuest && atleastTwoGuests) {
			if(atleastThreeGuests) {
				guests += ','
			}
			guests += ' & ';
		}
		guests += podcastInfo.podcastGuests[i].title;
	}
	return guests;
}