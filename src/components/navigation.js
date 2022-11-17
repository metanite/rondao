import React, {useState} from "react"
import {Collapse, NavbarToggler,} from 'reactstrap';
import logo from "../images/nav/nav-logo.png";
import globe from "../images/globe.svg";
import info_circle from "../images/info_circle.svg";
import diamond from "../images/diamond.svg";
import learning from "../images/learning.svg";
import people from "../images/people.svg";
import grant from "../images/grant.svg";
import calendar from "../images/calendar.svg";
import content from "../images/content.svg";
import node from "../images/node.svg";
import {
  FaArrowRight,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaHubspot
} from "react-icons/fa";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    closeNavDropDowns();
  };

  const show = "d-block active";
  const hide = "d-none";

  const closeNavDropDowns = () => {
    closeNavDropDown1();
    closeNavDropDown2();
    closeNavDropDown3();
    closeNavDropDown4();
  }

  const [isNavDropDown1Open, setIsNavDropDown1Open] = useState(hide);
  const toggleNavDropDown1 = () => {
    if (isNavDropDown1Open === show) {
      setIsNavDropDown1Open(hide)
    } else {
      closeNavDropDowns();
      setIsNavDropDown1Open(show)
    }
  };
  const closeNavDropDown1 = () => setIsNavDropDown1Open(hide);

  const [isNavDropDown2Open, setIsNavDropDown2Open] = useState(hide);
  const toggleNavDropDown2 = () => {
    if (isNavDropDown2Open === show) {
      setIsNavDropDown2Open(hide)
    } else {
      closeNavDropDowns();
      setIsNavDropDown2Open(show)
    }
  };
  const closeNavDropDown2 = () => setIsNavDropDown2Open(hide);

  const [isNavDropDown3Open, setIsNavDropDown3Open] = useState(hide);
  const toggleNavDropDown3 = () => {
    if (isNavDropDown3Open === show) {
      setIsNavDropDown3Open(hide)
    } else {
      closeNavDropDowns();
      setIsNavDropDown3Open(show)
    }
  };
  const closeNavDropDown3 = () => setIsNavDropDown3Open(hide);

  const [isNavDropDown4Open, setIsNavDropDown4Open] = useState(hide);
  const toggleNavDropDown4 = () => {
    if (isNavDropDown4Open === show) {
      setIsNavDropDown4Open(hide)
    } else {
      closeNavDropDowns();
      setIsNavDropDown4Open(show)
    }
  };
  const closeNavDropDown4 = () => setIsNavDropDown4Open(hide);

  let isHackathon = false;
  if (typeof window !== "undefined") {
    isHackathon = window.location.pathname === "/hackathon/";
  }


  return (
      <header className="position-sticky sticky-top">
        <nav
            className={(isHackathon === true ? 'navbar-hackathon' : '') + " navbar navbar-expand-lg navbar-light d-flex"}>
          <div className="container-fluid no-gutters px-0 w-100">
            <div className="d-flex logo-wrapper">
              <a onClick={closeMenu} href="/" className="my-auto">
                <img src={logo} alt="Tron Logo" className="logo"/>
              </a>
              <div className="ml-2 d-sm-none d-block logo-wrapper-mobile-text">
                <a onClick={closeMenu} className="" href="/">TRON DAO</a>
              </div>
            </div>
            <div className="navbar-name d-none d-sm-block col-4 col-lg-3">
              <div className="mt-3">
                <a onClick={closeMenu} className="float-right" href="/">TRON DAO</a>
              </div>
            </div>
            <NavbarToggler onClick={toggle} className="ml-auto mr-5 my-2"/>
            <Collapse isOpen={isOpen} navbar>
              <ul className="navbar-nav small mr-0 ml-lg-auto">
                <li className="nav-item dropdown position-static">
                    <button className={(isNavDropDown1Open === show ? 'active' : '') + ' nav-link w-100 dropdown-toggle'}
                            type="button" id="dropdownMenuButton0" onClick={toggleNavDropDown1}>
                    USE TRON
                    </button>
                    <div style={{borderBottom: "0.5px solid #232323", width: "85%"}} className='mx-auto d-block d-sm-block d-md-none d-lg-none'></div> 
                  <div className={isNavDropDown1Open + ' dropdown-menu'}
                       aria-labelledby="dropdownMenuButton0">
                    <div className="d-flex flex-wrap">
                      <div
                  			className="text-left d-inline-block align-top px-5 justify-content-center col-md-3 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
                            <FaHubspot className="mr-2" />
                            NETWORK
                        </p>
                        <ul>
                          <li>
                            <a onClick={closeMenu} href="https://tron.network/wallet?lng=en"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-network-wallet">
                              Find Wallet
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="https://tron.network/trx?lng=en"
                               target="_blank" rel="noopener noreferrer" id="nav-network-trx">
                              Get TRX
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="https://tron.network/bttc?lng=en"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-network-bittorrent">
                              BitTorrent
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="https://tron.network/bttc?lng=en"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-network-bittorrent">
                              Staking
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu}
                               href="https://tronscan.org/#/sr/representatives" target="_blank"
                               rel="noopener noreferrer" id="nav-network-tronscan">
                              TRONSCAN
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown position-static">
                  <button
                      className={(isNavDropDown2Open === show ? 'active' : '') + ' nav-link w-100 dropdown-toggle'}
                      type="button" id="dropdownMenuButton0" onClick={toggleNavDropDown2}>
                    INITIATIVES
                  </button>
									<div style={{borderBottom: "0.5px solid #232323", width: "85%"}} className='mx-auto d-block d-sm-block d-md-none d-lg-none'></div>
                  <div className={isNavDropDown2Open + ' dropdown-menu'}
                       aria-labelledby="dropdownMenuButton0">
                    <div className="d-flex flex-wrap">
                      <div
                          className="text-left d-inline-block align-top px-5 justify-content-center col-md-3 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
                            <img src={globe} alt="Globe" className="mr-2"/>
                            PROGRAMS
                        </p>
                        <ul>
                         <li>
                            <a onClick={closeMenu} href="/"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-programs-launchpad">
                              Charity
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="/initiatives/tron-academy"
                               rel="noopener noreferrer"
                               id="nav-programs-tron-academy">
                              TRON Academy
                            </a>
                          </li>   
                          <li>
                            <a onClick={closeMenu} href="https://apenft.io/tron/launchpad"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-programs-launchpad">
                              Launchpad
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                          className="text-left d-inline-block align-top px-5 justify-content-center col-md-3 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
                            <img src={info_circle} alt="Info Circle" className="mr-2"/>
                            ABOUT
                        </p>
                        <ul>
                          <li>
                            <a onClick={closeMenu} href=""
                               target="_blank" rel="noopener noreferrer"
                               id="nav-about-history">
                              History
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="/initiatives/about/research/"
                               rel="noopener noreferrer"
                               id="nav-about-research">
                              Research
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown position-static">
                  <button
                      className={(isNavDropDown3Open === show ? 'active' : '') + ' nav-link dropdown-toggle w-100'}
                      type="button" id="dropdownMenuButton1" onClick={toggleNavDropDown3}>
                    DEVELOPERS/BUILD
                  </button>
                  <div style={{borderBottom: "0.5px solid #232323", width: "85%"}} className='mx-auto d-block d-sm-block d-md-none d-lg-none'></div>
                  <div className={isNavDropDown3Open + ' dropdown-menu'}
                       aria-labelledby="dropdownMenuButton1">
                    <div className="d-flex flex-wrap">
                      <div
                          className="text-left d-inline-block align-top px-5 justify-content-center col-md-3 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
													<img src={diamond} alt="Diamond" className="mr-2"/>
													RESOURCES
												</p>
												<ul>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/get-started/"
                              rel="noopener noreferrer"
                               id="nav-build-get-started">
                              Get Started
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/multimedia/" rel="noopener noreferrer"
                               id="nav-resources-multimedia">
                              Multimedia
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/gaming/"
                              rel="noopener noreferrer"
                              id="nav-resources-gaming">
                              Gaming
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/finance/"
                              rel="noopener noreferrer"
                              id="nav-resources-finance">
                              Finance
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/art/"
                              rel="noopener noreferrer"
                               id="nav-resources-art">
                              Art
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href="/developers/resources/governance/" rel="noopener noreferrer"
                               id="nav-resources-governance">
                              Governance
                            </a>
                          </li>
												</ul>
                      </div>
                      <div
                          className="text-left d-inline-block align-top px-5 justify-content-center col-md-3 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
													<img src={learning} alt="Learning" className="mr-2"/>
													LEARNING
												</p>
                        <ul>
													<li>
                            <a onClick={closeMenu} href=""
                               target="_blank" rel="noopener noreferrer"
                               id="nav-learning-blueprint">
                              TRON Blueprint
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="https://developers.tron.network/"
                               target="_blank" rel="noopener noreferrer" id="nav-learning-docs">
                              TRON Docs
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
													<li>
                            <a onClick={closeMenu} href=""
                               target="_blank" rel="noopener noreferrer"
                               id="nav-learning-tronpedia">
                              TRONpedia
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu}
                               href="https://tron.network/static/doc/white_paper_v_2_0.pdf"
                               target="_blank" rel="noopener noreferrer"
                               id="nav-learning-whitepaper">
                              Whitepaper
                              <FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="/developers/learning/faq/"
                              rel="noopener noreferrer" id="nav-learning-faqs">
                              FAQs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <button
                      className={(isNavDropDown4Open === show ? 'active' : '') + ' nav-link dropdown-toggle w-100'}
                      type="button" id="dropdownMenuButton2" onClick={toggleNavDropDown4}>COMMUNITY
                  </button>
                  <div style={{borderBottom: "0.5px solid #232323", width: "85%"}} className='mx-auto d-block d-sm-block d-md-none d-lg-none'></div>
                  <div className={isNavDropDown4Open + ' dropdown-menu'}
                       aria-labelledby="dropdownMenuButton2">
                    <div className="d-flex flex-wrap flex-column flex-md-row flex-lg-row">
                      <div
                          className="text-left d-inline-block align-top justify-content-center col-md-2 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
												 <img src={people} alt="People Icon" className="mr-2"/>
													COMMUNITY
												</p>
                        <ul>
                          <li><a onClick={closeMenu} href="/community/home">Home</a></li>
                          <li><a onClick={closeMenu} href="/grants/">Branding</a></li>
                          <li><a onClick={closeMenu} href="/grants/">TRONIC</a></li>
                          {/* <li><a onClick={closeMenu} href="/grants/" id="nav-community-grants">Grants</a></li> */}
                        </ul>
                      </div>
											<div
                          className="text-left d-inline-block align-top justify-content-center col-md-2 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
												  <img src={grant} alt="Contract Icon" className="mr-2"/>
													GRANTS
												</p>
												<ul>
                          <li><a onClick={closeMenu} href="/">For Community</a></li>
													<li><a onClick={closeMenu} href="/">For Developers</a></li>
													<li><a onClick={closeMenu} href="/">For Influencers</a></li>
												</ul>
											</div>
                      <div
                          className="text-left d-inline-block align-top justify-content-center col-md-2 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
													<img src={calendar} alt="Calendar Icon" className="mr-2"/>
													EVENTS
												</p>
                        <ul>
                          <li><a onClick={closeMenu} href="/hackathon/" id="nav-events-hackathon">TRON
                            Grand Hackathon</a></li>
														<li><a onClick={closeMenu} href="/" id="nav-events-whale-night">TRON
                            Whale Night</a></li>
                          <li><a onClick={closeMenu} href="/events/conferences/"
                            id="nav-events-upcoming">Upcoming Events</a></li>
                        </ul>
                      </div>
                      <div
                          className="text-left d-inline-block align-top justify-content-center col-md-2 offset-md-0 col-10 offset-1">
                        <p className="dropdown-menu-subtitle">
												  <img src={content} alt="Content Icon" className="mr-2"/>
													CONTENT
												</p>
                        <ul>
                          <li><a onClick={closeMenu} href="/podcasts/"
                                 id="nav-content-podcast">ATB Podcast</a></li>
                          <li><a onClick={closeMenu} href="/videos/"
                                 id="nav-content-videos">Videos</a></li>
                          <li><a onClick={closeMenu} href="/press/" id="nav-content-press">Press
                            Releases</a></li>
                          <li><a onClick={closeMenu} href="/blog/" id="nav-content-blog">Blog</a>
                          </li>
                          <li>
                            <a onClick={closeMenu} href="https://forum.trondao.org"
                               id="nav-content-forum" rel="noopener noreferrer">
                              Forum<FaArrowRight className="navbar-outside-link"/>
                            </a>
                          </li>
                        </ul>
                      </div>
											<div className="d-flex flex-column" style={{marginLeft: "0px", marginTop: "0px"}}>
                      <div
                          className="text-left d-inline-block align-top px-0 justify-content-center col-md-8 offset-md-0 col-10 offset-1"
													>
                        <p className="dropdown-menu-subtitle" style={{marginTop: "0px"}}>
												 <img src={node} alt="Node Icon" className="mr-2"/>
													SOCIAL
												</p>
                        <ul>
                          <li className="d-sm-inline-flex d-block">
                            <a onClick={closeMenu} id="nav-social-twitter"
                               href="https://twitter.com/trondao" className="navbar-social-icon"
                               target="_blank" rel="noopener noreferrer">
                              <FaTwitter className="text-primary"/>
                              <span className="pl-1">Twitter</span>
                            </a>
                            <div className="navbar-social-spacer"/>
                            <a onClick={closeMenu} id="nav-social-instagram"
                               href="https://www.instagram.com/trondaoofficial/"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaInstagram className="text-primary" />
                              <span className="pl-1">Instagram</span>
                            </a>
                          </li>
                          <br className="d-none d-sm-block"/>
                          <li className="d-sm-inline-flex d-block">
                            <a onClick={closeMenu} id="nav-social-youtube"
                               href="https://www.youtube.com/channel/UC5OPOGRq02iK-0T9sKse_kA?view_as=subscriber"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaYoutube className="text-primary" /><span className="pl-1">Youtube</span>
                            </a>
                            <div className="navbar-social-spacer"/>
                            <a onClick={closeMenu} id="nav-social-tiktok"
                               href="https://www.tiktok.com/@trondaoofficial"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaTiktok className="text-primary" /><span className="pl-1 text-nowrap">Tik Tok</span>
                            </a>
                          </li>
                          <br className="d-none d-sm-block"/>
                          <li className="d-sm-inline-flex d-block">
                            <a onClick={closeMenu} id="nav-social-discord"
                               href="https://discord.com/invite/pn6WWmXtQV"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaDiscord className="text-primary" /><span className="pl-1">Discord</span>
                            </a>
                            <div className="navbar-social-spacer"/>
                            <a onClick={closeMenu} id="nav-social-linkedin"
                               href="https://www.linkedin.com/company/trondao"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaLinkedin className="text-primary" /><span className="pl-1">LinkedIn</span>
                            </a>
                          </li>
                          <br className="d-none d-sm-block"/>
                          <li className="d-sm-inline-flex d-block">
                            <a onClick={closeMenu} id="nav-social-reddit"
                               href="https://www.reddit.com/r/Tronix/"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaReddit className="text-primary" /><span className="pl-1">Reddit</span>
                            </a>
                            <div className="navbar-social-spacer"/>
                            <a onClick={closeMenu} id="nav-social-github"
                               href="https://github.com/tronprotocol/"
                               className="navbar-social-icon" target="_blank"
                               rel="noopener noreferrer">
                              <FaGithub className="text-primary" /><span className="pl-1">Github</span>
                            </a>
                          </li>
                          <br className="d-none d-sm-block"/>
                        </ul>
                      </div>
											</div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a onClick={closeMenu} href="/ecosystem/" id="nav-ecosystem">
                    <button className="nav-link w-100">
                      ECOSYSTEM
                    </button>
                    <div style={{borderBottom: "0.5px solid #232323", width: "85%", marginBottom: '1.5rem'}} className='mx-auto d-block d-sm-block d-md-none d-lg-none'></div>
                  </a>
                </li>
              </ul>
            </Collapse>
            <div className="navbar-filler d-none d-xl-block"/>
          </div>
        </nav>
      </header>
  )
}

export default Navigation
