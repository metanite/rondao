const getProjectAndTeamName = (projectTitle) => {
	const [projectName, teamName] = projectTitle.split(':')[1].split(' by ')
	return [projectName.trim(), teamName.trim()]
}

const normalizeTrackWinners = (trackWinners) => {
	let trackWinnersNormalized = Array(5)
	const placeOrder = ['Grand Prize', '2nd Place', '3rd Place', '4th Place', '5th Place', 'Runner Up1', 'Runner Up2', 'Runner Up3']
	trackWinners.forEach(({node: project}) => {
		const [projectName, teamName] = getProjectAndTeamName(project.title)
		let index = placeOrder.indexOf(project.hackathonProjectInfo.winnersPrize)
		trackWinnersNormalized[index] = {
		  projectName,
		  teamName,
		  teamImg: project.hackathonProjectInfo.hackathonTeamPic.sourceUrl,
		  placement: project.hackathonProjectInfo.winnersPrize,
		  slug: project.slug
		}
	})
	return trackWinnersNormalized
}

const getYoutubeVideoId = (url) => {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
  }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDateFromYYYYMMDD = (dateString) => {
	const year = +dateString.substring(0, 4);
	const month = +dateString.substring(4, 6);
	const day = +dateString.substring(6, 8);
	let dateObj = new Date(year, month - 1, day);
	return months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ", " + dateObj.getFullYear();
}

exports.getDateFromYYYYMMDD = getDateFromYYYYMMDD
exports.getProjectAndTeamName = getProjectAndTeamName
exports.normalizeTrackWinners = normalizeTrackWinners
exports.getYoutubeVideoId = getYoutubeVideoId