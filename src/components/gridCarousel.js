import React, {useState} from 'react'
import {FaAngleLeft, FaAngleRight, FaArrowRight, FaCircle} from "react-icons/fa"

const GridCarousel = (data) => {

    const children = [];
    for (var i = 0; i <= 6; i++) {
		children.push(
			<div key={i} className="mb-4">
				<div>
                    <div className="research-background"></div>
                    <h1 className="text-uppercase">Month 2022</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.  
                    </p>
                </div>
                <div className="arrow-icon d-flex align-items-center justify-content-center mt-5">
                    <a href="/#"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                </div>
			</div>
		)
	}

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        if (currentIndex < (children.length - 3)) {
            setCurrentIndex(prevState => prevState + 1)
            console.log(currentIndex)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
            console.log(currentIndex)
        }
    }

    const dots = []
    for (var j = 0; j <= children.length/3; j++) {
        dots.push(
            <div className={"ml-3 mini-carousel-dot " + (j === currentIndex ? 'active' : '')}>
                <FaCircle size={15} alt="circle icon" />
            </div>
        )
    }   

	return (
		<div className="mini-carousel">
			<div className="mini-carousel-wrapper">
                <button onClick={prev} className="mini-carousel-left-arrow">
                    <FaAngleLeft size={50} alt="angle left icon" />
                </button>
                <div className='mini-carousel-content-wrapper'>
                    <div>
                        <div className='mini-carousel-content mini-carousel-content-show-3'
                        style={{ transform: `translateX(-${currentIndex * 300}%)` }}>
                            {children}
                        </div>
                    </div>
                </div>
                {
                    currentIndex < (children.length / 4) && 
                    <button onClick={next} className="mini-carousel-right-arrow">
                        <FaAngleRight size={50} alt="angle right icon" />
                    </button>
                }
			</div>
            <div className="d-flex align-items-center justify-content-center mt-5">
                {dots}
            </div>
		</div>
	)
}

export default GridCarousel