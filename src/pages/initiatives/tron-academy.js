import React from "react"
import {Helmet} from "react-helmet"
import tronbullMagnifyingGlass from "../../images/academy/tronbull-magnifying-glass.png"
import texasUniLogo from "../../images/academy/texas-uni-logo.svg"
import chicagoUniLogo from "../../images/academy/chicago-uni-logo.svg"
import line from "../../images/academy/line.png"

const TronAcademy = ({data}) => {
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
		           	<div className="col-lg-6 text-center mx-auto d-flex flex-column">
		           		<h1>Partnered Schools</h1>
		           		<div className="tron-academy-partner-schools d-flex justify-content-center">
		           			<div className="tron-academy-partner-school d-flex justify-content-center">
		           				<img src={texasUniLogo} alt="texas university logo" />
		           			</div>
		           			<div className="tron-academy-partner-school d-flex justify-content-center">
		           				<img src={chicagoUniLogo} alt="chicago university logo" />
		           			</div>
		           		</div>
		           		<p className="mt-4">More to come!</p>
		           	</div>
	           	</div>

	           	<div className="tron-academy-research d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-10 mx-auto">
	           		<div className="d-flex flex-column col-12 col-lg-6 mt-5 mt-lg-0 order-2 order-lg-0">
	           			<div className="position-relative">
	           				<h1 className="text-uppercase text-center text-lg-left">Tron Research</h1>
	           			</div>
	           			<p className="text-center text-lg-left">
	           			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
	           			euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
	           			enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
	           			nisl ut aliquip ex ea commodo consequat. 	
	           			</p>
	           			<a href="/" className="d-flex justify-content-center justify-content-lg-start my-5">
	           				<button type="button" className="cta-button">Call To Action</button>
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