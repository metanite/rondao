import React from "react"
import TronOops from "../../images/tronpedia/ooppss.png"

const Tronpedia404 = () => {
	return (
		<div className="tronpedia-404 d-flex flex-column align-items-center justify-content-end">
			<img src={TronOops} alt="tron mascot holding an ooppss sign" className="img-fluid mt-4 mt-lg-5 ml-2 ml-lg-5" />
			<h2>Please, Try Again</h2>
			<h3>Your search does not Match Our Records</h3>
		</div>
	)
}

export default Tronpedia404