import React from "react"
import tronbullCoins from "../../images/home/tronbull-coins2.png"

const TronHelp = () => {
    return (
        <>
        <div className="homepage-introduction col-12 col-lg-9 col-xxl-8 mx-auto">
            <div className="homepage-introduction-header">
                TRON is Here to Help
            </div>
            <div className="homepage-introduction-content">
                <p className="text-justify">
                TRON is the protocol dedicated to accelerating the decentralization of the Internet via blockchain technology and decentralized applications (DApps). Since its inception in 2017, the TRON network has focused on two ideals: empowering developers and putting the power in the hands of the people. TRON network completed full decentralization in Dec 2021 and is now a purely community-governed DAO focused on creating an internet for all.
                </p>
            </div>
            <div className="homepage-introduction-button">
                <a 
                    href="https://forms.gle/U5VH818cRvWNeXsHA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    id="homepage-buttons-apply-funding"
                >
                    <button className="homepage-apply-funding-button">> Apply for funding
                    </button>
                </a>
            </div>
            <div className="homepage-introduction-image">
                <img src={tronbullCoins} className="homepage-introduction-icon img-fluid d-md-block ml-md-auto" alt="TRON Bull Decentralizing the Web"/>
            </div>
        </div>
        </>
    )
}

export default TronHelp