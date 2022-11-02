import React from "react"
import {FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube, FaBriefcase} from 'react-icons/fa';
import tronLogo from "../images/footer/tron_logo_dark.svg";

const Footer = () => {
    let isHackathon = false;
    if (typeof window !== "undefined") {
        isHackathon = window.location.pathname === "/hackathon/";
    }

    return (
        <>
            <footer className={(isHackathon === true ? 'footer-container-hackathon' : '') + " footer-container"}>
                <div className="container pt-4 pb-3">
                    <div className="row">
                        <div className="col-md-12 text-center text-md-left d-flex justify-content-between">
                            <div className="text-left d-inline-block align-top px-0 mx-auto justify-content-center">
                                <ul className="left">
                                    <li className="py-1"><a id="footer-social-careers" href="https://boards.greenhouse.io/rainberry?gclid=EAIaIQobChMIrdKsqr_B-AIVXiitBh2ZJQsKEAAYASAAEgKyf_D_BwE"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaBriefcase/>Join Us</a></li>
                                    <li className="py-1"><a id="footer-social-fb" href="https://www.facebook.com/trondaoofficial"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaFacebook/>Facebook</a></li>
                                    <li className="py-1"><a id="footer-social-twitter" href="https://twitter.com/trondao"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaTwitter/>Twitter</a></li>
                                    <li className="py-1"><a id="footer-social-instagram"
                                           href="https://www.instagram.com/trondaoofficial/"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaInstagram/>Instagram</a></li>
                                </ul>
                            </div>
                            <div className="text-left d-inline-block align-top px-0 mx-auto justify-content-center">
                                <ul className="right">
                                    <li className="py-1"><a id="footer-social-discord" href="https://discord.com/invite/pn6WWmXtQV"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaDiscord/>Discord</a></li>
                                    <li className="py-1"><a id="footer-social-youtube"
                                           href="https://www.youtube.com/channel/UC5OPOGRq02iK-0T9sKse_kA?view_as=subscriber"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaYoutube/>Youtube</a></li>
                                    <li className="py-1"><a id="footer-social-tiktok" href="https://www.tiktok.com/@trondaoofficial"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaTiktok/>Tik Tok</a></li>
                                    <li className="py-1"><a id="footer-social-linkedin" href="https://www.linkedin.com/company/trondao"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-container-other text-left col-md-12 py-3 mt-1 mb-4 mx-auto w-75 d-flex flex-column flex-md-row flex-lg-row align-items-start align-items-md-center justify-content-md-center border-top border-bottom my-2">
                    <a href="/" className="my-2 my-md-0">ALSO OF INTEREST</a>
                    <a href="/" className="ml-md-4 my-1 my-md-0">All-around Blockchain Inventions</a>
                    <a href="/" className="ml-md-4 my-1 my-md-0">Grand Hackathon Season 2 Winners</a>
                    <a href="/" className="ml-md-4 my-1 my-md-0">Hackathon Tract</a>
                </div>
                <div className="be-ix-link-block"/>
                <div className="container">
                    <div className="row justify-content-center no-gutters footer-bottom mb-4">
                        <div className="col-12 my-3">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={tronLogo} alt="Tron Logo" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="whitespace-nowrap">Copyright © 2022 TRON Network Limited.  <span className="ml-2">All rights reserved. </span><a href="/legal/privacy-policy/" className="ml-2">Privacy</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

