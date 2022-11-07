import React from "react";
import {Helmet} from "react-helmet";

const Multimedia = ({data}) => {
    return (
    	<div className="trondao-multimedia">
    		<Helmet>
                <title>TRON Multimedia | TRONDAO</title>
                <meta name="description"
                        content="Throw the popcorn in the microwave and get streaming now"/>
                <meta property="og:description" content="Throw the popcorn in the microwave and get streaming now"/>
                <meta property="og:title" content="TRON Multimedia | TRONDAO"/>
            </Helmet>
    		<div className="multimedia">
    			<div className="multimedia-main d-flex align-items-start justify-content-center col-12 offset-lg-1 pt-5">
    				<h1 className="text-uppercase">Multimedia At Scale</h1>
    			</div>
    		</div>
    	</div>
   	)
}

export default Multimedia