import React, { useEffect } from "react"
import HackerText from '../components/hackerText'
import logo from "../images/tron_logo_full.svg"
import EllipseImage from "../images/homepage/ellipse.svg"
import SaturnImage from "../images/homepage/saturn.svg"
import SatelliteImage from "../images/homepage/satellite.svg"
import MarsImage from "../images/homepage/mars.svg"
import Mars2Image from "../images/homepage/mars2.svg"
import SpaceStationImage from "../images/homepage/space_station.svg"
import RocketImage from "../images/homepage/rocket.svg"
import CountdownTimer from '../components/countdownTimer'
import { gsap } from "gsap";

const Hero = () => {

  useEffect(() => {
    const element = document.body;

    gsap.fromTo(
      element.querySelector(".earth-img"),
      {
        y: 0,
        x: 0,
        scale: 1,
      },
      {
        y: -300,
        x: -300,
        scale: 0.9,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".satellite-img"),
      {
        y: 0,
        x: 0,
        scale: 1,
      },
      {
        y: -100,
        x: 200,
        scale: 0.7,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".saturn-img"),
      {
        x: 0,
        y: 0,
        scale: 1,
      },
      {
        x: 50,
        y: -25,
        scale: 0.9,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".ellipse-img"),
      {
        y: 0,
        scale: 1,
      },
      {
        y: 100,
        scale: 1.5,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".rocket-img"),
      {
        x: 0,
        y: 0,
        scale: 1,
      },
      {
        x: -1000,
        y: 400,
        scale: 2.5,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".mars-img"),
      {
        x: 0,
        y: 0,
        scale: 1,
      },
      {
        x: 50,
        y: 25,
        scale: 1.1,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".space-station-img"),
      {
        x: 0,
        y: 0,
        scale: 1,
      },
      {
        x: -75,
        y: 200,
        scale: 1.5,
        scrollTrigger: {
          trigger: element.querySelector(".hero-container"),
          start: 0,
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (    
    <section className="hero-container">
      <div className="hero-center-container d-flex flex-column mx-auto">
        <div className="hero-inner-wrapper">
          <img src={logo} className="tron-logo-hero mr-auto" alt="Tron Dao"/>
          <div className="large-hero-text">
            <HackerText tag="h1" text="GRAND" />
            <HackerText tag="h1" text="HACKATHON" delay={500}/>
          </div>
        </div>
        <p className="medium-hero-text">Accelerate the Future</p>
        <p className="small-hero-text">Join Our Season 3 Hackathon</p>
          <div className="cta-btn-container d-flex justify-content-center flex-wrap">
              <a href="https://trons3.devpost.com/" id="hackathon-cta-join" className="hero-cta-btn forum-btn mt-2" target="_blank" rel="noopener noreferrer">Join HackaTRON!</a>
          </div>
        <CountdownTimer className=""/>
      </div>
      <img src={EllipseImage} className="ellipse-img" alt="Ellipse"/>
      <img src={SatelliteImage} className="satellite-img" alt="Plane"/>
      <img src={SaturnImage} className="saturn-img" alt="Planet Saturn"/>
      <img src={Mars2Image} className="earth-img" alt="Planet Saturn"/>
      <img src={MarsImage} className="mars-img" alt="Planet Mars"/>
      <img src={SpaceStationImage} className="space-station-img" alt="Space Station"/>
      <img src={RocketImage} className="rocket-img" alt="Rocket"/>
      <div className="small-sphere"></div>
      <div className="small-ellipse sm-ellipse-img-1"></div>
      <div className="small-ellipse sm-ellipse-img-2"></div>
      <div className="small-ellipse sm-ellipse-img-3"></div>
    </section>
  )
}

export default Hero

