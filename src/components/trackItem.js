import React  from 'react';

const TrackItem = (props) => {

	const backgroundImg = (props.logo) ? `url(${props.logo})` : 'black';

	return (
		<div className="track-item">
			<div
				className="track-item-logo-container d-flex justify-content-center align-items-center">
				<div className="track-item-logo" style={{backgroundImage: backgroundImg}}/>
			</div>
			<div className="track-item-title my-3">
				{props.title}
			</div>
			<div className="track-item-description my-3" dangerouslySetInnerHTML={{__html: props.description}}>
				
			</div>
		</div>
	)
}

export default TrackItem

