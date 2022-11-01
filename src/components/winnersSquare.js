import React  from 'react';
import LocalizedLink from "./localizedLink";

const WinnersSquare = (props) => {

	const backgroundImg = (props.logo) ? `url(${props.logo})` : 'black';

	return (
		<LocalizedLink to={`/hackathon/projects/${props.slug}`}>
			<div className="winners-square">
				<div
					className="winners-square-logo-container d-flex justify-content-center align-items-center">
					<div className="winners-square-logo" style={{backgroundImage: backgroundImg}}/>
				</div>
				<div className="winners-square-type">
					1st Prize Winner {props.trackType}
				</div>
				<div className="winners-square-project-name">
					{props.projectName}
				</div>
				<div className="winners-square-team-name">
					{props.teamName}
				</div>
			</div>
		</LocalizedLink>
	)
}

export default WinnersSquare

