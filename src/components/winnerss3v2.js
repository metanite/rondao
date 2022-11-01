import React from 'react';
import HackerText from '../components/hackerText'

const Winnerss3v2 = (props) => {

    let winners = props.data.nodes;

    return (
        <>
            <div className="text-center row no-gutters winners-s3 pt-5">
                <HackerText text='Winners' id="winners" className="text-uppercase section-header font-weight-bold w-100 mt-5"
                            tag="h2" triggerStart="bottom 95%" speed="50"/>
                <p className="w-100 winners-s3-subheading"><span>&lt;p&gt;</span>Congratulations to our Season Two
                    1st Place Winners<span>&lt;/p&gt;</span></p>
            </div>
            <div className="text-center row  no-gutters mx-lg-0 mx-0 winners-s3">
                {
                    winners.length > 0 && winners.map((winner => {
                        let parsed = winner.title.split(" ");
                        let track = parsed[0];
                        let place = parsed[1] + " " + parsed[2].slice(0, -1);
                        let parsedByColon = winner.title.split(":")[1].split(" by ")
                        let projectName = parsedByColon[0];
                        let team = parsedByColon[1];

                        return (
                            <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-3 mt-5" key={winner.title}>
                                <div className="winners-s3-v2-card">
                                    <div className="winners-s3-v2-card-img-wrapper w-75 mx-auto d-flex align-items-center">
                                        <div className="position-absolute w-75 mb-5">S2</div>
                                        <img src={winner.hackathonProjectInfo.hackathonTeamPic.sourceUrl}
                                             className="img-fluid"/>
                                    </div>
                                    <div className="w-100 text-center">
                                        <div className="winners-s3-v2-card-track w-100">{track}: <span>{place}</span></div>
                                        <div className="winners-s3-v2-card-project w-100 mt-3">{projectName}</div>
                                        <div className="winners-s3-v2-card-team w-100 mt-2">by {team}</div>
                                    </div>

                                </div>
                            </div>


                        )
                    }))
                }

            </div>
        </>

    )
}

export default Winnerss3v2

