import React  from 'react';
import { Link, graphql } from "gatsby"
import PartnersIcons from "../../components/partners-icons";
import {Helmet} from "react-helmet";


const Partners = ({ data }) => {
  return (
    <div className="mb-5 pb-5 hero-padding bg-gradient ">
        <Helmet>
            <title>Hackathon Partners | TRONDAO</title>
            <meta name="description" content="Prestigious institutions in the crypto arena judge the blockchain projects in the Grand Hackathon expanding TRON DAO’s ecosystem. See who participates."/>
            <meta property="og:description" content="Prestigious institutions in the crypto arena judge the blockchain projects in the Grand Hackathon expanding TRON DAO’s ecosystem. See who participates."/>
            <meta property="og:title" content="Hackathon Partners | TRONDAO"/>
        </Helmet>
      <div className="pb-5 d-flex flex-column align-items-center justify-content-center text-decoration-none text-white">
        <h1 className="mt-5 mb-5 transform-uppercase">PARTNERS</h1>
        <div className="judge-intro text-center">
              Crypto’s most prestigious institutions come together to offer their expertise as they judge all-around blockchain inventions and accelerate the growth of the TRON DAO Ecosystem.
        </div> 
      </div>
     <PartnersIcons data={data.allWpPartner} />
    </div>
  )
}

export default Partners

export const pageQuery = graphql`
query {
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