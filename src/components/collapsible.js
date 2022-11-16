import React, {useState} from 'react'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"


const Collapsible = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<div className="collapsible d-flex flex-column">
			<div onClick={toggle} onKeyDown={toggle} role="presentation" className="collapsible-header d-flex align-items-center justify-content-between">
				<div className="col-10">
					<p className="collapsible-title">
					This is the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
					</p>
				</div>
				<div className="arrow-icon d-flex align-items-center justify-content-center">
					{
						isOpen ? 
							<FaArrowUp role="button" aria-label="arrow up icon" /> :
							<FaArrowDown role="button" aria-label="arrow down icon" /> 
					}
				</div>
			</div>
			{isOpen &&
				<> 
				<hr className="w-100 my-4" />
				<div>
					<p className="collapsible-detail">
					Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Etiam eu turpis molestie, dictum est a, mattis 
					tellus. Sed dignissim, metus nec fringilla accumsan, 
					risus sem sollicitudin lacus, ut interdum tellus elit 
					sed risus. Maecenas eget condimentum velit, sit amet 
					feugiat lectus.
					</p>
				</div>
				</> 
			}
		</div>
	)
}

export default Collapsible


