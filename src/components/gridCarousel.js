import React, {useState} from 'react'
import {FaAngleLeft, FaAngleRight, FaArrowRight, FaCircle} from "react-icons/fa"

const GridCarousel = (data) => {

    const children = 6
    const show = (typeof window !== 'undefined' && window.gatsbyIsMobile) ? 1 : 3
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        if (currentIndex < (children - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
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
                        style={{ transform: `translateX(-${currentIndex * (100 * show)}%)` }}>
                            {
                                [...Array(children).keys()].map(i => {
                                    return (
                                        <div key={i} className="mb-4">
                                            <div className="research-background-second"></div>
                                            <div>
                                                <h1 className="text-uppercase">Month 2022</h1>
                                            </div>
                                            <div>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.  
                                                </p>
                                            </div>
                                            <div className="arrow-icon d-flex align-items-center justify-content-center mt-5">
                                                <a href="/#"><FaArrowRight size={20} role="button" aria-label="arrow right icon" /></a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    currentIndex < (Math.round(children / show) - 1) && 
                    <button onClick={next} className="mini-carousel-right-arrow">
                        <FaAngleRight size={50} alt="angle right icon" />
                    </button>
                }
			</div>
            <div className="d-flex align-items-center justify-content-center mt-5">
                {
                    [...Array(Math.round(children/show)).keys()].map(i => {
                        return (
                            <div key={i} className={"ml-3 mini-carousel-dot " + (i === currentIndex ? 'active' : '')}>
                                <FaCircle size={15} alt="circle icon" />
                            </div>
                        )
                    })
                }
            </div>
		</div>
	)
}

export default GridCarousel