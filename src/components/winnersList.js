import React  from 'react';
import LocalizedLink from "./localizedLink"

const WinnersList = ({className, trackWinners, trackType, grandPrizeBorder}) => {
	return (
		<div className="winners-list-wrap">
			<div className={`winners-list ${(className) ? className : ''}`}>
				{
					trackWinners[0] &&	
					<WinnersListItem winner={trackWinners[0]} prizeAmount="$60k" border={grandPrizeBorder}/>
				}
				{
					trackWinners[1] &&	
					<WinnersListItem winner={trackWinners[1]} prizeAmount="$40k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[2] &&	
					<WinnersListItem winner={trackWinners[2]} prizeAmount="$30k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[3] &&	
					<WinnersListItem winner={trackWinners[3]} prizeAmount="$25k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[4] &&	
					<WinnersListItem winner={trackWinners[4]} prizeAmount="$20k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[5] &&
					<WinnersListItem winner={trackWinners[5]} prizeAmount="$5k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[6] &&
					<WinnersListItem winner={trackWinners[6]} prizeAmount="$5k"/>
				}
				<div className="winners-list-spacer"/>
				{
					trackWinners[7] &&
					<WinnersListItem winner={trackWinners[7]} prizeAmount="$5k"/>
				}
			</div>
		</div>
	)
}



const WinnersListItem = ({winner: {projectName, teamName, teamImg, placement, slug}, prizeAmount, gpTitleTag, teamNameTag, border}) => {
	let CustomGpTitleTag = (gpTitleTag) ? gpTitleTag : 'p';
	let CustomTeamNameTag = (teamNameTag) ? teamNameTag : 'p';
	if(placement === "Grand Prize") {
		return (
			<LocalizedLink to={`/hackathon/projects/${slug}`} className={`winners-list-grand-prize text-decoration-none text-white ${(border) ? 'bordered' : ''}`}>
				<div className="winners-list-grand-prize-img-wrap">
					<img src={teamImg} />
				</div>
				<div className="">
					<CustomGpTitleTag className="winners-list-grand-prize-title mb-0">1st Place Winner - ({prizeAmount})</CustomGpTitleTag>
					<CustomTeamNameTag className="winners-list-grand-prize-project-name">{projectName}</CustomTeamNameTag>
					<p className="winners-list-grand-prize-team-name mb-0">by {teamName}</p>
				</div>
			</LocalizedLink>
		)
	}
	else{
		return (
			<LocalizedLink to={`/hackathon/projects/${slug}`} className="winners-list-item text-decoration-none text-white">
				<div className="flex-shrink-0">
					<span>{placement}</span>
					<span className="winners-list-item-prize-amount">({prizeAmount})</span>
					<span className="winners-list-item-dash">-</span>
				</div>
				<div>
					<span>{projectName} by {teamName}</span>
				</div>
			</LocalizedLink>
		)
	}
}

export default WinnersList

