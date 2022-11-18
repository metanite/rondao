import React, {useState} from "react";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";
import background from "../images/ecosystem/ecobackground.mp4";

const Ecosystem = ({data}) => {

    let allEcosystems = data.allWpEcosystemDapp.edges;
    const infrastructure = 'infrastructure';
    const defi = 'defi';
    const gamefi = 'gamefi';
    const nft = 'nft';
    const stablecoin = 'stablecoin';
    const crosschain = 'cross-chain';
    const [keywordValue, setKeywordValue] = useState('');
    const [selectedButton, setSelectedButton] = useState('');

    const init = () => {
        deselectOthers(true);
        setSelectedButton(defi);
        let results = [];
        for (let i = 0; i < allEcosystems.length; i++) {
            let system = allEcosystems[i];
            if (system.node.dappinfo.category.toUpperCase() === defi.toUpperCase()) {
                results.push(system);
            }
        }
       return results;
    }

    const handleChange = (e) => {
        setKeywordValue(e.target.value)
        deselectOthers(false);
        filterByKeywords(e.target.value);
    };
    const deselectOthers = (clearSearch) => {
        if (clearSearch) {
            setKeywordValue("");
        }
        setSelectedButton('');
    }
    const filterByCategory = (category) => {
        deselectOthers(true);
        setSelectedButton(category);
        let results = [];
        for (let i = 0; i < allEcosystems.length; i++) {
            let system = allEcosystems[i];
            if (system.node.dappinfo.category.toUpperCase() === category.toUpperCase()) {
                results.push(system);
            }
        }
        setDisplayedEcosystem(results);
    }

    const filterByKeywords = (keyword) => {
        let results = [];
        for (let i = 0; i < allEcosystems.length; i++) {
            let system = allEcosystems[i];
            let containsTitle = system.node.title.toUpperCase().includes(keyword.toUpperCase());
            let containsDescription = system.node.dappinfo.description.toUpperCase().includes(keyword.toUpperCase());
            if (containsTitle || containsDescription) {
                results.push(system);
            }
        }
        setDisplayedEcosystem(results);
    }

    const activeIfSelected = (category) => {
        if (selectedButton === category) {
            return ' active ecosystem-color-' + category;
        }
        return ' ecosystem-color-' + category;
    }

    const [displayedEcosystems, setDisplayedEcosystem] = useState(init);





    return (
        <div className="ecosystem">
            <Helmet>
                <title>TRON Ecosystem | TRONDAO</title>
                <meta name="description"
                      content="Welcome to the TRON Ecosystem. See the distributed applications, (dApp) on the TRON network. DeFi, GameFi, NFTs, Stablecoins and more."/>
                <meta property="og:description" content="Welcome to the TRON Ecosystem. See the distributed applications, (dApp) on the TRON network. DeFi, GameFi, NFTs, Stablecoins and more."/>
                <meta property="og:title" content="TRON Ecosystem | TRONDAO"/>
            </Helmet>
            <div className="ecosystem-hero text-center">
                <video autoPlay muted loop playsInline className="ecosystem-hero-background">
                    <source src={background} type="video/mp4"/>
                </video>
                <div className="ecosystem-hero-front d-flex flex-column align-items-center justify-content-center">
                    <h1 className="ecosystem-hero-header">
                        TRON
                        <div className="mt-2 w-100"/>
                        ECOSYSTEM
                    </h1>
                    <p className="ecosystem-hero-subheader">Discover the latest dApps built on TRON, actively
                        defining decentralization and fulfilling TRON’s mission of creating an internet for all.</p>
                    <a href="https://docs.google.com/forms/d/1aw1KTjKxxEhKNqF5WyvKlPy_YDM4ueti4f_707g7Qa8/edit"
                       id="ecosystem-btn-submit-your-project" target="_blank" rel="noopener noreferrer">
                        <button className="cta mt-5">Submit your project</button>
                    </a>
                </div>

            </div>
            <div className="w-100 ecosystem-container ecosystem-buttons">
                <div className="d-flex flex-wrap w-100">
                    <button className={'m-2' + activeIfSelected(infrastructure)} onClick={function () {
                        filterByCategory(infrastructure)
                    }} id="ecosystem-dapp-filter-infrastructure">Infrastructure
                    </button>
                    <button className={'m-2' + activeIfSelected(defi)} onClick={function () {
                        filterByCategory(defi)
                    }} id="ecosystem-dapp-filter-defi">Defi
                    </button>
                    <button className={'m-2' + activeIfSelected(gamefi)} onClick={function () {
                        filterByCategory(gamefi)
                    }} id="ecosystem-dapp-filter-gamefi">Gamefi
                    </button>
                    <button className={'m-2' + activeIfSelected(nft)} onClick={function () {
                        filterByCategory(nft)
                    }} id="ecosystem-dapp-filter-nft">NFT
                    </button>
                    <button className={'m-2' + activeIfSelected(stablecoin)} onClick={function () {
                        filterByCategory(stablecoin)
                    }} id="ecosystem-dapp-filter-stablecoin">Stablecoin
                    </button>
                    <button className={'m-2' + activeIfSelected(crosschain)} onClick={function () {
                        filterByCategory(crosschain)
                    }} id="ecosystem-dapp-filter-crosschain">cross-chain
                    </button>
                    <input type="text" placeholder="SEARCH" className="" onChange={handleChange} value={keywordValue}/>
                </div>
            </div>

            <div className="pb-5 ecosystem-container-lower ecosystem-items">
                {
                    displayedEcosystems.length > 0 && displayedEcosystems.map(system => {
                        return <a href={system.node.dappinfo.url} className="ecosystem-card px-3" key={system.node.title}
                                  target="_blank" rel="noopener noreferrer" id={'ecosystem-card-' + system.node.title}>
                            <div className="w-100">
                                <span
                                    className={'ecosystem-card-category ecosystem-color-' + system.node.dappinfo.category.toLowerCase()}>{system.node.dappinfo.category}</span>
                                {
                                    system.node.dappinfo.isnew === true &&
                                    <span className="ecosystem-card-new float-right">NEW!</span>

                                }
                            </div>
                            <div className="text-center w-100">
                                <img src={system.node.dappinfo.image.sourceUrl} alt={system.title + ' logo'}
                                     className="ecosystem-card-image"/>
                            </div>
                            <div className="text-center row no-gutters">
                                <h2 className="w-100 ecosystem-card-title">{system.node.title}</h2>
                                <p className="ecosystem-card-description">
                                    {system.node.dappinfo.description}
                                </p>
                            </div>

                        </a>
                    })
                }
                {
                    displayedEcosystems.length === 0 &&
                    <div className="text-center w-100">
                        <h4>Sorry, no results found.</h4>
                    </div>
                }
            </div>

            <p className="m-md-5 p-md-5 p-1 m-1 mb-5"><b>Disclaimer:</b> The TRON protocol is leveraged by a decentralized community comprised of autonomous members. The TRON DAO disclaims governance over, the endorsement of, and liability related to projects or services offered by independent participants leveraging the TRON protocol. End users are always advised to conduct independent research regarding each community project accessed through the protocol.</p>


        </div>
    );
};


export default Ecosystem;

export const pageQuery = graphql`
query {
  allWpEcosystemDapp {
    edges {
      node {
        title
        dappinfo {
          category
          description
          fieldGroupName
          isnew
          url
          image {
            sourceUrl
          }
        }
      }
    }
  }
}
`
