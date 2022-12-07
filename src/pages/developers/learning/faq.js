import React, { useState } from "react"
import {Helmet} from "react-helmet"
import Collapsible from "../../../components/collapsible"
import community from "../../../images/home/community.svg"
import developer from "../../../images/home/developer.svg"
import influencer from "../../../images/home/influencer.svg"
import {FaSearch} from "react-icons/fa"

const Faq = ({data}) => {
	const [currentTopic, setTopic] = useState("USDD");

	const topics = [
		'USDD',
		'GRANTS',
		'TRON DAO',
		'ABOUT US',
		'DEVELOPERS',
		'ETC'
	];

    return (
    	<div className="trondao-faq">
            <Helmet>
                <title>TRON FAQ | TRONDAO</title>
                <meta name="description"
                        content="Your Frequently Asked Questions Answered"/>
                <meta property="og:description" content="Your Frequently Asked Questions Answered"/>
                <meta property="og:title" content="TRON FAQ | TRONDAO"/>
            </Helmet>

            <div className="faq">
            	<div className="faq-main">
            		<div className="faq-main-title d-flex flex-column align-items-start justify-content-center col-11 col-lg-8 mx-auto h-100">
            			<h1 className="text-uppercase">Your frequently Asked Questions <span>Answered</span></h1>
            			<p>
            			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et orem ipsum dolor sit amet
            			</p>

            			<div className="d-flex flex-row justify-content-between w-100">
            				<img src={developer} alt="tron bull developer" />
            				<img src={community} alt="tron bull community ambassadors" />
            				<img src={influencer} alt="tron bull influencer" />
            			</div>
            		</div>
            	</div>

            	<div className="faq-body col-12 col-lg-8 mx-auto">
            		<div className="faq-search d-flex">
            			<div className="col-lg-10 col-8 position-relative">
            				<FaSearch alt="search icon" size={25} className="faq-search-icon" />
            				<input type="text" className="faq-search-input" placeholder="Search topics" />
            			</div>
            			<div className="col-lg-2">
            				<button type="button" className="text-uppercase">Search</button> 
            			</div>
            		</div>

            		<div className="faq-topics d-flex align-items-center flex-wrap col-12 mt-4">
            			<div className="order-1 order-lg-0">Topics:</div>
            			<div className="order-2 order-lg-0 d-flex flex-wrap">
            			{
            				topics.map((topic) => {
            					return (
            						<button type="button" className={topic === currentTopic ? 'active' : ''} onClick={() => setTopic(topic)}>{topic}</button>
            					)	
            				})
            			}
            			</div>
            		</div>

            		<div className="faq-topic">
            			<h1>{currentTopic}</h1>
            		</div>

            		<div className="faq-collapsible">
            			{
            				[...Array(5).keys()].map(i => {
            					return (
            						<div className="mb-4">
										<Collapsible title="This is the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
										info="Lorem ipsum dolor sit amet, consectetur adipiscing 
										elit. Etiam eu turpis molestie, dictum est a, mattis 
										tellus. Sed dignissim, metus nec fringilla accumsan, 
										risus sem sollicitudin lacus, ut interdum tellus elit 
										sed risus. Maecenas eget condimentum velit, sit amet 
										feugiat lectus." />
									</div>
            					)
            				})
            			}
            		</div>	
            	</div>
            </div>
        </div>
    )
}

export default Faq