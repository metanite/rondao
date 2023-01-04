import React from "react"
import {Helmet} from "react-helmet"
import tronbullMagnifyingGlass from "../../images/academy/tronbull-magnifying-glass.png"
import line from "../../images/academy/line.png"
import cornell from "../../images/academy/cornell.svg"
import princeton from "../../images/academy/princeton.svg"
import boston from "../../images/academy/boston.svg"
import michigan from "../../images/academy/michigan.svg"
import dartmouth from "../../images/academy/dartmouth.svg"
import texas from "../../images/academy/texas.svg"
import uci from "../../images/academy/uci.svg"

const TronAcademy = ({data}) => {

	const universities = [
		{
			"name": "Cornell Blockchain",
			"image": cornell,
		},
		{
			"name": "Princeton Blockchain Club",
			"image": princeton,
		},
		{
			"name": "Boston Hacks",
			"image": boston,
		},
		{
			"name": "Michigan Cryptocurrency Investment Club",
			"image": michigan,
		},
		{
			"name": "Dartmouth Blockchain",
			"image": dartmouth,
		},
		{
			"name": "Texas Blockchain",
			"image": texas,
		},
		{
			"name": "Blockchain at UCI",
			"image": uci,
		}
	]

    return (
    	<div className="trondao-academy">
            <Helmet>
                <title>TRON Academy | TRONDAO</title>
                <meta name="description"
                        content="Working with future minds for the future"/>
                <meta property="og:description" content="Working with future minds for the future."/>
                <meta property="og:title" content="TRON Academy | TRONDAO"/>
            </Helmet>
            <div className="tron-academy">
            	<div className="tron-academy-main">
            		<div className="d-flex flex-column align-items-center justify-content-md-center position-relative h-100 pt-5 pt-md-0">
            			<h1 className="text-uppercase">Tron Academy</h1>
            			<p>Working with future minds for the future</p>
            			<img src={line} alt="line" className="tron-academy-main-line"></img>
            		</div>
            	</div>

            	<div className="tron-academy-mission d-flex flex-column col-lg-6 text-center mx-auto">
	           		<h1 className="text-uppercase">Our Mission For Tron Academy</h1>
	           		<p className="">
	           		Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
	           		tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim 
	           		ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
	           		aliquip ex ea commodo consequat.
	           		</p>
	           	</div>

	           	<div className="tron-academy-partner w-100">
		           	<div className="col-10 text-center mx-auto d-flex flex-column">
		           		<h1>Partnered Schools</h1>
		           		<div className="tron-academy-partner-schools d-flex flex-wrap justify-content-between">
		           			{
		           				universities.map((university, i) => {
		           					return (
		           						<div className="tron-academy-partner-school d-flex flex-column">
			           						<div className="tron-academy-partner-school-image d-flex justify-content-center">
						           				<img src={university.image} alt={university.name +" logo"} />
						           			</div>
						           			<div className="d-flex justify-content-center">
						           				<h3>{university.name}</h3>
						           			</div>
					           			</div>
		           					)
		           				})
		           			}
		           		</div>
		           	</div>
	           	</div>
	           	<h5 className="mt-4 text-center">More to come!</h5>

	           	<div className="tron-academy-research d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-10 mx-auto">
	           		<div className="d-flex flex-column col-12 col-lg-6 mt-5 mt-lg-0 order-2 order-lg-0">
	           			<div className="position-relative">
	           				<h1 className="text-uppercase text-center text-lg-left">Tron Research</h1>
	           			</div>
	           			<p className="text-center text-lg-left mt-2">
	           			TRON Research is the place to submit your project studies and reports relating 
	           			to the decentralization of the internet via blockchain technology. TRON's large 
	           			community guarantees your work will be seen and interacted with others, and is 
	           			the place to make a name for yourself as a researcher. Our mission is to provide 
	           			an open platform for researchers to share their findings with the community, and 
	           			help further developement of a truly decentralized internet. 	
	           			</p>
	           			<a 
                            href="/" 
                            className="d-flex justify-content-center justify-content-lg-start"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="tron-academy-cta-button"
                        >
	           				<button type="button" className="cta-button">
                                Call To Action
                            </button>
	           			</a>
	           		</div>
	           		<div className="order-1 order-lg-0 d-flex align-items-center align-items-lg-start">
	           			<img src={tronbullMagnifyingGlass} alt="tronbull holding a magnifying glass" 
	           			className="img-fluid d-block mx-auto" />
	           		</div>
	           	</div>
           	</div>
        </div>
    )
}

export default TronAcademy