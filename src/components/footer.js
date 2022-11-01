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
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="col-md-12 text-center text-md-left d-flex justify-content-between">
                            <div className="text-left d-inline-block align-top px-0 mx-auto justify-content-center">
                                <ul>
                                    <li><a id="footer-social-careers" href="https://boards.greenhouse.io/rainberry?gclid=EAIaIQobChMIrdKsqr_B-AIVXiitBh2ZJQsKEAAYASAAEgKyf_D_BwE"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaBriefcase/>Join Us</a></li>
                                    <li><a id="footer-social-fb" href="https://www.facebook.com/trondaoofficial"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaFacebook/>Facebook</a></li>
                                    <li><a id="footer-social-twitter" href="https://twitter.com/trondao"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaTwitter/>Twitter</a></li>
                                    <li><a id="footer-social-instagram"
                                           href="https://www.instagram.com/trondaoofficial/"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaInstagram/>Instagram</a></li>
                                </ul>
                            </div>
                            <div className="text-left d-inline-block align-top px-0 mx-auto justify-content-center">
                                <ul>
                                    <li><a id="footer-social-discord" href="https://discord.com/invite/pn6WWmXtQV"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaDiscord/>Discord</a></li>
                                    <li><a id="footer-social-youtube"
                                           href="https://www.youtube.com/channel/UC5OPOGRq02iK-0T9sKse_kA?view_as=subscriber"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaYoutube/>Youtube</a></li>
                                    <li><a id="footer-social-tiktok" href="https://www.tiktok.com/@trondaoofficial"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaTiktok/>Tik Tok</a></li>
                                    <li><a id="footer-social-linkedin" href="https://www.linkedin.com/company/trondao"
                                           className="social-icon" target="_blank"
                                           rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="be-ix-link-block"/>
                <div className="container">
                    <div className="row justify-content-center no-gutters footer-bottom">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={tronLogo} alt="Tron Logo" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="whitespace-nowrap">Copyright © 2022 TRON Network Limited. | All rights reserved. | <a href="/legal/privacy-policy/">Privacy</a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

