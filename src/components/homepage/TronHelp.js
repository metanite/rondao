import React from "react"
import tronbullCoins from "../../images/home/tronbull-coins.svg"

const TronHelp = () => {
    return (
        <>
        <div className="d-none d-lg-flex row no-gutters p-4 p-md-5 my-5">
            <div className="col-lg-4 offset-lg-2 offset-0 col-md-6 align-items-center order-2 order-md-1">
                <div className="">
                    <div className="homepage-introduction-header order-1 order-md-0">TRON is Here to Help</div>
                    <div className="d-flex d-lg-none col-md-6 col-12 order-2">
                        <img src={tronbullCoins} className="homepage-introduction-icon pt-3 img-fluid" alt="TRON Bull Decentralizing the Web"/>
                    </div>
                    <div className="homepage-introduction-content mt-4 text-justify order-3 order-md-0">TRON is the protocol dedicated to accelerating the decentralization of the Internet via blockchain technology and decentralized applications (DApps). Since its inception in 2017, the TRON network has focused on two ideals: empowering developers and putting the power in the hands of the people. TRON network completed full decentralization in Dec 2021 and is now a purely community-governed DAO focused on creating an internet for all.</div>
                </div>
                
                <div className="py-5 text-center float-md-left order-4 order-md-0">
                    <a href="https://forms.gle/U5VH818cRvWNeXsHA" target="_blank" rel="noopener noreferrer" id="homepage-buttons-apply-funding">
                        <button className="homepage-apply-funding-button">> Apply for funding</button>
                    </a>
                </div>
            </div>
            <div className="d-none d-lg-block col-lg-6 col-md-6 col-12 align-items-center text-center order-1 order-md-2 mb-md-5">
                <img src={tronbullCoins} className="homepage-introduction-icon pt-3 img-fluid" alt="TRON Bull Decentralizing the Web"/>
            </div>
        </div>
        <div className="d-flex d-lg-none align-items-center no-gutters col-12 flex-wrap mb-5 mx-md-4" style={{marginTop: "10rem"}}>
            <div className="homepage-introduction-header col-6 col-md-12 mb-md-5 order-md-1">TRON is Here to Help</div>
            <div className="col-6 col-md-6 order-md-3">
                <img src={tronbullCoins} className="homepage-introduction-icon pt-3 img-fluid" alt="TRON Bull Decentralizing the Web"/>
            </div>
            <div className="homepage-introduction-content text-justify col-12 col-md-6 order-md-2">TRON is the protocol dedicated to accelerating the decentralization of the Internet via blockchain technology and decentralized applications (DApps). Since its inception in 2017, the TRON network has focused on two ideals: empowering developers and putting the power in the hands of the people. TRON network completed full decentralization in Dec 2021 and is now a purely community-governed DAO focused on creating an internet for all.</div>
            <div className="py-5 text-center w-100 col-md-10 offset-md-1 order-md-4">
                <a href="https://forms.gle/U5VH818cRvWNeXsHA" target="_blank" rel="noopener noreferrer" id="homepage-buttons-apply-funding">
                    <button className="homepage-apply-funding-button float-md-right">> Apply for funding</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default TronHelp