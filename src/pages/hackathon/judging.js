import React, { useState } from "react"
import {Helmet} from "react-helmet";

const Judging = ({ data }) => {
    const [password,setPassword] = useState("")
    const handle = ({target:{value}}) => setPassword(value)
    let secretPassword = "hackathon2022s2";
    return (
        <div>
        <div className="mb-5 pb-5 hero-padding bg-gradient ">
            <Helmet>
                <title>Hackathon Judging | TRONDAO</title>
            </Helmet>
            <div className="pb-5 d-flex flex-column align-items-center justify-content-center text-decoration-none text-white">
                <h1 className="mt-5 mb-5 transform-uppercase">JUDGING</h1>
            </div>
        </div>
            <div className="container">
                <div className="row">
                    {password !== secretPassword &&
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <p>Please insert password:</p>
                            <input type="password" name="any2" value={password} onChange={handle} />
                        </div>
                    }
                    {password === secretPassword &&
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <p className="text-left px-5">Howdy! Thank you for being an integral part of the TRON Grand Hackathon 2022 Season 2;  it’s judging time after over 2 months and 1,831 applicants! It’s a pleasure to have you on board, and thank you for your valuable time.<br/><br/>

                                For more details on the Hackathon, please refer to <a href="https://trondao.org/hackathon">https://trondao.org/hackathon</a> & <a href="https://trons3.devpost.com/">https://trons3.devpost.com/</a><br/><br/>

                                <b>AN OVERVIEW OF PROJECTS</b><br/>
                                All season 2 hackathon projects are required to submit to the <a href="https://trons3.devpost.com/">DevPost platform</a><br/>
                                It is optional for projects to participate in the TRON DAO Forum<br/>
                                You may check out all of the projects that participated in the <a href="https://forum.trondao.org/c/tron-hackathon/hackathon-2022-season-2/11">TRON DAO Forum</a> through the links below:<br/>
                                <ul>
                                    <li><a href="https://forum.trondao.org/tags/c/tron-hackathon/hackathon-2022-season-2/11/web3">Web3 Track</a></li>
                                    <li><a href="https://forum.trondao.org/tags/c/tron-hackathon/hackathon-2022-season-2/11/nft">NFT Track</a></li>
                                    <li> <a href="https://forum.trondao.org/tags/c/tron-hackathon/hackathon-2022-season-2/11/defi">DeFi Track</a></li>
                                    <li> <a href="https://forum.trondao.org/tags/c/tron-hackathon/hackathon-2022-season-2/11/gamefi">GameFi Track</a></li>
                                </ul><br/>

                                <b>HOW JUDGING WORKS</b><br/><br/>

                                1. Before judging starts, the TRON DAO team will work with DevPost to create a shortlist of
                                submissions that meet all the eligibility criteria for you to score.<br/><br/>

                                2. On August 1, 2022, you will be sent an email invitation to judge on the Devpost platform
                                titled: <b>Judging BEGINS NOW for TRON Grand Hackathon 2022</b>.<br/><br/>

                                3. Click the link in the email to create your account and access your judging dashboard.<br/><br/>

                                4. The judging dashboard lists the detailed judging criteria mentioned above that you’ll use to
                                judge submissions. It also displays your progress. When you’re ready to start judging the
                                submissions, click the “<b>Start judging</b>” button. You’ll go directly to the first submission.<br/><br/>

                                5. You’ll be asked to rank each submission using the judging criteria. 1 star is the lowest rating and 5 is the highest rating. For more details about the criteria, you can click the question mark icon next to each item in the list. When you’re done ranking a submission, click “<b>Save and Continue</b>” to continue to the next submission.
                                <br/><br/>
                                For a walkthrough of the process, please view this short demo video.<br/><br/>
                                <div className="embed-responsive">
                                    <iframe src="https://www.youtube.com/embed/kpV6-T0KB40" className="embed-responsive-item" allowFullScreen/>
                                </div>

                                <br/><br/>
                                <b>JUDGING TIPS</b><br/><br/>

                                You do not need to judge all hackathon projects in one go. There will be 11 days for the judging period, you can take your time and check out the projects closely.<br/><br/>

                                You will be able to edit scores until the Judging Period ends by clicking back onto a submission in the dashboard. All the judges’ scores will be averaged to determine the winners!<br/><br/>

                                If you do not want to judge a particular submission because of a conflict of interest, you can select the “I recuse myself” checkbox.<br/><br/>

                                For participants who have submitted to the forum, you may check out their forum project post and get an idea of the team’s professionalism and responsiveness when interacting with the community.<br/><br/>

                                Please feel free to reach out if you have any questions or concerns during the judging process, our team will be on stand-by.<br/><br/>

                                We launched the TRON Grand Hackathon earlier this year to build and be a part of the evolution of the TRON DAO Ecosystem. It has been a truly rewarding experience to see the influx of interest from the community this season. Thank you for being such an integral part of this hackathon and for sharing your expertise and taking time out of your busy schedules to judge these projects contributing to the growth of blockchain industry!

                            </p>
                        </div>

                }
                </div>
            </div>
        </div>
    )
}

export default Judging
