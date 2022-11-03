import React from "react"
import {FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";


const EmailCapture = () => {


    return (
        <div className="row no-gutters email-capture ">
            <div className="col-12 col-lg-5 offset-lg-1 pl-md-5 mb-5">
                <div className="col-12">
                    <div className="d-flex justify-content-start">
                        <div className="email-capture-know text-left">
                            BE THE FIRST <br /> TO KNOW
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-12 mt-1 pl-md-0">
                    <div className="d-flex flex-wrap justify-content-between">
                        <a id="email-capture-social-twitter"
                           aria-label="social-icon-twitter"
                           href="https://twitter.com/trondao"
                           target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                        <a id="email-capture-social-instagram"
                           aria-label="social-icon-instagram"
                           href="https://www.instagram.com/trondaoofficial/"
                           target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                        <a id="email-capture-social-facebook"
                           aria-label="social-icon-facebook"
                           href="https://www.facebook.com/trondaoofficial"
                           target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                        <a id="email-capture-social-linkedin"
                           aria-label="social-icon-linkedin"
                           href="https://www.linkedin.com/company/trondao"
                           target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <a id="email-capture-social-youtube"
                           aria-label="social-icon-youtube"
                           href="https://www.youtube.com/channel/UC5OPOGRq02iK-0T9sKse_kA?view_as=subscriber"
                           target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
                        <a id="email-capture-social-tiktok"
                           aria-label="social-icon-tiktok"
                           href="https://www.tiktok.com/@trondaoofficial"
                           target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
                        <a id="email-capture-social-reddit"
                           aria-label="social-icon-reddit"
                           href="https://www.reddit.com/r/Tronix/"
                           target="_blank" rel="noopener noreferrer"><FaReddit/></a>
                        <a id="email-capture-social-discord"
                           aria-label="social-icon-discord"
                           href="https://discord.com/invite/pn6WWmXtQV"
                           target="_blank" rel="noopener noreferrer"><FaDiscord/></a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 email-capture-subscribe">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"/>
                <form
                    action="https://network.us19.list-manage.com/subscribe/post?u=5724a62f28217f1bf009679d6&amp;id=a313741a09&amp;f_id=00f086e4f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                    target="_blank">
                    <div className="mx-5">
                        <h3>SUBSCRIBE</h3>
                        <p className="email-capture-subscribe-signup">SIGN UP FOR OUR NEWSLETTER</p>
                        <div className="row no-gutters mr-lg-5 mr-0">
                            <input type="email" name="EMAIL" placeholder="EMAIL" className="col-12 required email"
                                   id="mce-EMAIL" required/>
                            <input type="text" name="FNAME" id="mce-FNAME" placeholder="FIRST"
                                   className="col-lg-4 col-12 mt-2"/>
                            <input type="text" name="LNAME" id="mce-LNAME" placeholder="LAST"
                                   className="col-lg-7 offset-lg-1 col-12 mt-2"/>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{display: 'none'}}/>
                                <div className="response" id="mce-success-response" style={{display: 'none'}}/>
                            </div>
                            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                <input type="text"
                                       name="b_5724a62f28217f1bf009679d6_a313741a09"
                                       tabIndex="-1"/>
                            </div>
                            <p className="col-12 email-capture-subscribe-disclaimer">By signing up for our Newsletter, I agree to the <a href={"/legal/privacy-policy/"} id={"email-capture-privacy-policy"}>Privacy Policy</a>.</p>
                            <div className="col-12 text-center text-lg-left mt-2">
                                <button id="email-subscribe" className="float-lg-right float-none" type="submit"
                                        value="Subscribe" name="subscribe">Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <script type='text/javascript'
                        src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            </div>


        </div>
    )
}

export default EmailCapture

