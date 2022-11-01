import React  from 'react';

const TrackHeader = ({className, trackImg, trackType, trackTypeTag, titleTag, description, support, supportIcon,supportURL}) => {
	let CustomTitleTag = (titleTag) ? titleTag : 'p';
	let CustomTrackTypeTag = (trackTypeTag) ? trackTypeTag : 'p';

	return (
		<div className={`track-header ${(className) ? className : ''}`}>
			<div className="track-header-img-wrap">
				<img src={trackImg} />
			</div>
			<div className="px-3">
				<CustomTitleTag className="track-header-title mb-0">Tracks</CustomTitleTag>
				<CustomTrackTypeTag className="track-header-type">{trackType}</CustomTrackTypeTag>
				<p className="track-header-description mb-0">{description}</p>
				{(support !== undefined && supportIcon !== undefined) &&
					<div className="support">
						<p className="mb-0">{support} </p>
						<div>
							<a href={supportURL} target="_blank">
								<img className="supportImg" src={supportIcon} />
							</a>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default TrackHeader

