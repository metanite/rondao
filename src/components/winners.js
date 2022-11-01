import React  from 'react';
import WinnersSquare from "./winnersSquare"
import HackerText from '../components/hackerText'

const Winners = (props) => {
	let seasonNum = props.seasonNum === 1 ? "One" : "Two";
	let trackItems = [
		{
			logo: "",
			title: "Web 3.0",
			trackType: "Web3",
			description: "Developers can build fully decentralized DApps with low decentralized storage"
		},
		{
			logo: "",
			title: "NFT",
			trackType: "NFT",
			description: "Non-fungible token is a non-interchangeable unit of data stored on a blockchain"
		},
		{
			logo: "",
			title: "DeFi",
			trackType: "DeFi",
			description: "Decentralized Finance opens a world of possibilities offering secure"
		},
		{
			logo: "",
			title: "GameFi",
			trackType: "GameFi",
			description: "Game Finance is a decentralized financial product"
		}
	]

	props.winners.forEach((winner) => {
		let trackType = winner.hackathonSeasonsAndTracks.hackathonTrack[0].toLowerCase()
		let trackItemIndex = trackItems.findIndex((item) => {
			return item.trackType.toLowerCase() === trackType
		})
		if(trackItemIndex !== -1) {
			trackItems[trackItemIndex].description = winner.hackathonProjectInfo.projectDescription
			trackItems[trackItemIndex].slug = winner.slug;
			if(winner.hackathonProjectInfo.hackathonTeamPic) {
				trackItems[trackItemIndex].logo = winner.hackathonProjectInfo.hackathonTeamPic.sourceUrl
			}
			const [projectName, teamName] = winner.title.split(':')[1].split(' by ')
			trackItems[trackItemIndex].projectName = projectName
			trackItems[trackItemIndex].teamName = teamName
		}
	})

	return (    
		<div className="text-center winners">
			<HackerText text='WINNERS' id="winners" className="text-uppercase section-header font-weight-bold" tag="h3" triggerStart="bottom 95%" speed="50" />
			<p className="section-description mx-auto">Congratulations to our Season {seasonNum} Winners</p>
			<div className="mt-5 winners-container">
				{
					trackItems.map(function(item, i){
				        return (
							<WinnersSquare
								logo={item.logo}
								trackType={item.trackType}
								description={item.description}
								projectName={item.projectName}
								teamName={item.teamName}
								slug={item.slug}
								key={`winner-track-item-${i}`}
							/>
			        	)
				    })
				}
			</div>
		</div>
	)
}

export default Winners

