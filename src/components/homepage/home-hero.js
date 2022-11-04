import React from "react"
import background from "../../images/home/cities.mp4";

const HomeHero = () => {
    return (
        <>
            <section className="homepage-hero">
                <h1 className="w-100 text-center homepage-hero-title px-3 text-uppercase">
                    Powering the <br/> Decentralized Web
                </h1>
                <video autoPlay muted loop playsInline className="homepage-hero-background d-block mx-auto">
                    <source src={background} type="video/mp4"/>
                </video>
                <div className="homepage-hero-background-overlay">
                    <div
                        className="d-flex align-items-center justify-content-between homepage-hero-top homepage-hero-city-text">
                        <div className="homepage-hero-city-text-first">
                            <p>Total Number of Accounts</p>
                            <span className="">108,376,306</span>
                        </div>
                        <div className="homepage-hero-city-text-second">
                            <p>Transaction Count</p>
                            <span className="">3,751,469,056</span>
                        </div>
                    </div>
                    <div
                        className="row no-gutters text-center align-items-center homepage-hero-bottom homepage-hero-city-text">
                        <div className="col-5 col-xl-6 offset-xl-1 pl-xl-2">
                            <p>Transfer Amount of Core Tokens</p>
                            <span>$ 5,174.63 B</span>
                        </div>

                        <div className="col-5 offset-2 offset-xl-0 text-center text-xl-left">
                            <p>Token Value Locked</p>
                            <span>$ 5.46+ Billion</span>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default HomeHero

