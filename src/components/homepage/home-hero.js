import React from "react"
import background from "../../images/home/cities.mp4";

const HomeHero = () => {
    return (
        <>
            <h1 className="w-100 text-center homepage-hero-title px-3 text-uppercase">
                Powering the Decentralized Web
            </h1>
            <section className="homepage-hero">
                <video autoPlay muted loop playsInline className="homepage-hero-background">
                    <source src={background} type="video/mp4"/>
                </video>
                <div className="homepage-hero-background-overlay">
                    <div
                        className="row no-gutters text-center align-items-center homepage-hero-top homepage-hero-city-text">
                        <div className="col-4 offset-1">
                            <p>Number of Accounts</p>
                            <span>115.64+ Million</span>
                        </div>
                        <div className="col-4 offset-2">
                            <p>Transaction Count</p>
                            <span>4.02+ Billion</span>
                        </div>
                    </div>
                    <div
                        className="row no-gutters text-center align-items-center homepage-hero-bottom homepage-hero-city-text">
                        <div className="col-4 offset-1">
                            <p>Transfer Amount of Core Tokens</p>
                            <span>$ 5.58+ Trillion</span>
                        </div>

                        <div className="col-4 offset-2">
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

