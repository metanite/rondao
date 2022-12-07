import React, {useState} from 'react'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"


const Collapsible = ({title, info}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<div className="collapsible d-flex flex-column">
			<div onClick={toggle} onKeyDown={toggle} role="presentation" className="collapsible-header d-flex align-items-center justify-content-between">
				<div className="col-10">
					<p className="collapsible-title">
					{title}
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
					{info}
					</p>
				</div>
				</> 
			}
		</div>
	)
}

export default Collapsible


