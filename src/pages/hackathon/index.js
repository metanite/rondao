import React, {useEffect, useRef, useState} from 'react';
import { graphql } from "gatsby"
import Judges from "../../components/judges"
import Prizess3 from '../../components/prizess3'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HackerText from '../../components/hackerText';
import { Helmet } from "react-helmet"
import Winnerss3 from "../../components/winnerss3";
import CountdownTimers3 from "../../components/countdownTimers3";
import TronbullHackathonComputer from '../../images/hackathons3/tronbull-hackathon.gif';
import TronbullRocket from '../../images/hackathons3/tronbull-rocket.svg';
import TronbullCoin from '../../images/hackathons3/tronbull-coin.svg';
import PartnerIconsShort from "../../components/partners-icons-short";
import Winnerss3v2 from "../../components/winnerss3v2";

const Hackathon = ({pageContext:{t}, data :{ season1Winners, allWpPodcast, allWpPartner, season2Winners, allWinners}}) => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [typedText, setTypedText] = useState("");
  const [lowerText, setLowerText] = useState("");
  const counter = useRef(0);
  var txt = 'TRON GRANDHACKATHON'; /* The text */


  useEffect(()=>{
    const timer = setTimeout(() => {
      if (counter.current < txt.length) {
        if(counter.current > 9){
          setLowerText(lowerText + txt.charAt(counter.current));
          counter.current++;
        } else {
          setTypedText(typedText + txt.charAt(counter.current));
          counter.current++;
        }
      }
    }, 300);
  })

  const showCaretUpper = function (text) {
    if(text.length < 'TRON GRAND'.length){
      return ' hackathons3-title-tsymbol-animate'
    }
    return ''
  }

  const showCaretLower = function (text) {
    if(text !== ""){
      return ' hackathons3-title-tsymbol-animate'
    }
    return ''
  }

  return (
    <>
        <Helmet>
            <title>Hackathon | TRONDAO</title>
            <meta name="description" content="TRON Grand Hackathon where blockchain developers get to compete to build decentralized apps. See past winners and compete in the next season here."/>
            <meta property="og:description" content="TRON Grand Hackathon where blockchain developers get to compete to build decentralized apps. See past winners and compete in the next season here."/>
            <meta property="og:title" content="Hackathon | TRONDAO"/>
        </Helmet>
      <div className="index text-white hackathons3" ref={ref}>
        <div className="winners-bg">
          <div className="">
            <div className="row pt-5 pb-4">
              <div className="col-12 col-lg-7 offset-lg-1 offset-0 text-center text-lg-left">
                <div className="hackathons3-title">Season 3 2022</div>
                <p className="hackathons3-title-typewriter"><span className={"hackathons3-title-tsymbol" + showCaretUpper(typedText)}>{typedText}</span></p>
                <p className="hackathons3-title-typewriter"><span className={"hackathons3-title-tsymbol" + showCaretLower(lowerText)}>{lowerText}</span></p>
                <h1 className="hackathons3-title mt-2">#HackaTRON</h1>
              </div>
              <div className="col-12 col-lg-4 text-center text-lg-left align-items-center d-block d-lg-flex">
                <img src={TronbullHackathonComputer} className="img-fluid hackathons3-title-icon" alt="TronbullHackathonComputer"/>
              </div>
            </div>

          </div>
          <CountdownTimers3 />
        </div>
        <div className="hackathon-border-right-first">
          <Winnerss3v2 data={season2Winners}/>
          <div className="d-flex w-100 hackathons3-icon-rocket-wrapper"><img src={TronbullRocket} className="img-fluid hackathons3-icon-rocket" alt="TronbullRocket"/></div>
          <Prizess3/>
          <img src={TronbullCoin} className="img-fluid hackathons3-icon-coin" alt="TronbullCoin"/>
          <div className="hackathon-border-right-fix-bottom w-100"/>
        </div>
        <div className="hackathon-border-left">
          <div className="hackathon-border-right-fix"/>
          <div className="mx-auto pb-5 hero-padding">
            <div className="pb-5 d-flex flex-column align-items-center justify-content-center text-decoration-none text-white">
              <HackerText id="partners" className="w-100 text-center text-uppercase section-header font-weight-bold mb-5" tag="h2" text="PARTNERS" triggerStart="bottom 95%"/>
              <div className="section-description mx-auto"><span>&lt;p&gt;</span>Crypto’s most prestigious institutions come together to offer their expertise as they judge all around blockchain inventions and accelerate the growth of the TRON DAO ecosystem.<span>&lt;/p&gt;</span></div>
            </div>
            <PartnerIconsShort data={allWpPartner}/>
          </div>
          <div className="hackathon-border-left-fix-bottom w-100"/>
        </div>
        <div className="hackathon-border-right">
          <div className="hackathon-border-left-fix"/>
          <div className="w-100 pb-4">
            <HackerText id="judges" className="w-100 text-center text-uppercase section-header font-weight-bold mb-5 pt-5" tag="h2" text="JUDGES" triggerStart="bottom 95%"/>
            <p className="section-description mx-auto" style={{maxWidth: '1300px'}}><span>&lt;p&gt;</span>Experts from across the blockchain industry bring multi-perspective thought leadership in evaluating the wide range of Hackathon projects<span>&lt;/p&gt;</span></p>
            <Judges />
          </div>
          <div className="hackathon-border-right-fix-bottom w-100"/>
        </div>
        <div className="hackathon-border-left-final mb-5">
          <Winnerss3 data={allWinners}/>
        </div>
      </div>
    </>
  )

}

export default Hackathon

export const query = graphql`
query {
  season1Winners: allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 1"}}, hackathonProjectInfo: {winnersPrize: {eq: "Grand Prize"}, projectAWinner: {eq: "Yes"}}}
  ) {
    nodes {
      title
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      hackathonProjectInfo {
        projectAWinner
        projectDescription
        winnersPrize
        hackathonTeamPic {
          sourceUrl
        }
      }
      slug
    }
  }
    season2Winners: allWpProject(
    filter: {hackathonSeasonsAndTracks: {hackathonSeason: {eq: "Season 2"}}, hackathonProjectInfo: {winnersPrize: {eq: "Grand Prize"}, projectAWinner: {eq: "Yes"}}}
  ) {
    nodes {
      title
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      hackathonProjectInfo {
        projectAWinner
        projectDescription
        winnersPrize
        hackathonTeamPic {
          sourceUrl
        }
      }
      slug
    }
  }
    allWinners: allWpProject {
    nodes {
      title
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      hackathonProjectInfo {
        projectAWinner
        projectDescription
        winnersPrize
        hackathonTeamPic {
          sourceUrl
        }
      }
      slug
    }
  }
  allWpArticle {
    nodes {
      title
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      articleInfo {
        articlePic {
          sourceUrl
        }
        articleUrl
      }
    }
  }
  allWpJudge (sort: {order: ASC, fields: menuOrder}){
    nodes {
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      judgeInfo {
        judgeUrl
        judgeTitle
        judgeCompany
        judgeBio
        judgeAlsoAPartner
        judgePic {
          sourceUrl
        }
      }
      title
      menuOrder
    }
  }
  allWpPartner(sort: {order: ASC, fields: menuOrder}) {
  edges {
    node {
      id
      uri
      title
      hackathonSeasonsAndTracks {
        hackathonSeason
        hackathonTrack
      }
      partnerInfo {
        partnerUrl
        partnerBio
        partnerLogo {
          sourceUrl
        }
      }
    }
  }
}
}

`