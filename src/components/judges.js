import React, {useRef, useState} from "react"
import {graphql, StaticQuery} from "gatsby"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill, CgClose, FaCircle} from "react-icons/all";

const Judges = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedJudge, setSelectedJudge] = useState({});
    const [currentJudges, setCurrentJudges] = useState(data.allWpJudge.edges.slice(0, 6));

    const currentMinIndex = useRef(0);
    const currentMaxIndex = useRef(6);


    const displayModal = () => {
        return isOpen ? ' d-block' : ' ';
    }
    const viewJudge = function (judge) {
        setIsOpen(true);
        setSelectedJudge(judge);
    }

    const nextJudges = function () {
        currentMinIndex.current += 6;
        currentMaxIndex.current += 6;
        updateJudges();

    }

    const previousJudges = function () {
        currentMinIndex.current -= 6;
        currentMaxIndex.current -= 6;
        updateJudges();
    }

    const updateJudges = function () {
        setCurrentJudges(allJudges.slice(currentMinIndex.current, currentMaxIndex.current));
    }

    const updateJudgesByIndexes = function (min, max) {
        currentMinIndex.current = min;
        currentMaxIndex.current = max;
        updateJudges();
    }


    let allJudges = data.allWpJudge.edges;


    return (
        <>
            <div className="w-100 judges-s3">
                <div className="judges-s3-button d-inline-flex">
                    {currentMinIndex.current > 0 &&
                        <BsArrowLeftCircleFill className="ml-2 ml-lg-5 cursor-pointer" color="#61E899" size="65px"
                                               id="hackathon-judges-more-left"
                                               onClick={function () {
                                                   previousJudges()
                                               }}/>
                    }
                    {currentMaxIndex.current < allJudges.length &&
                        <BsArrowRightCircleFill className="ml-auto mr-2 mr-lg-5  cursor-pointer" color="#61E899"
                                                id="hackathon-judges-more-right"
                                                size="65px" onClick={function () {
                            nextJudges()
                        }}/>
                    }
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        currentJudges.map(({node}) => {
                            return (
                                <div
                                    className="col-lg-3 col-5 offset-0 offset-lg-0 m-1 m-md-3 judges-s3-card cursor-pointer"
                                    key={'hackathon-judges-modal-open-'+node.title}
                                    id={'hackathon-judges-modal-open-'+node.title}
                                    role="button"
                                    aria-label={"View Judge " + node.title}
                                    onKeyDown={function(e){
                                        if(e.key === "Enter"){
                                        viewJudge(node)
                                    }}}
                                    tabIndex="0"
                                    onClick={function () {
                                        viewJudge(node)
                                    }}>
                                    <div className="judges-s3-card-image rounded-circle mx-auto">
                                        <div className="judges-s3-card-image-circle d-none d-sm-block" />
                                        <img src={node.judgeInfo.judgePic.sourceUrl}
                                             className="rounded-circle judges-s3-card-image-judge" alt=""/>
                                    </div>
                                    <div className="w-100 text-center my-1 my-md-5">
                                        <p className="judges-s3-card-name">{node.title}</p>
                                        <p className="judges-s3-card-description">{node.judgeInfo.judgeCompany}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                {allJudges.length > 0 && allJudges.map((judge, index) => {
                    if (index % 6 === 0) {
                        let isActive = index >= currentMinIndex.current && index < currentMaxIndex.current ? ' judges-s3-card-active ' : '';
                        return (
                            <FaCircle className={'cursor-pointer mx-3' + isActive}
                                      id={"judges-more-bottom-circles-"+((index/6)+1)}
                                      key={"judges-more-bottom-circles-"+((index/6)+1)}
                                      onClick={function () {
                                updateJudgesByIndexes(index, index + 6)
                            }}/>
                        )
                    } return(<></>)
                })
                }

            </div>


            <div className={'winners-s3-modal' + displayModal()} role="presentation">
                <div className="row no-gutters h-100 align-items-center justify-content-center">
                    <div className="w-75 winners-s3-modal-container">
                        <div className="float-right mr-3 mt-2 cursor-pointer"
                             tabIndex="0"
                             role="button"
                             aria-label="Close Dialog"
                             onKeyDown={function(e){
                                 if(e.key === "Enter"){
                                     setIsOpen(false);
                                 }
                             }}
                             onClick={function () {
                            setIsOpen(false)
                        }}><CgClose size="45px"/></div>
                        {selectedJudge.judgeInfo != null &&
                            <>
                                <div className="row no-gutters w-100">
                                    <div className="col-12 col-md-4 d-flex justify-content-center mt-0 mt-md-5">
                                        <div className="judges-s3-card-image rounded-circle mt-5">
                                            <img src={selectedJudge.judgeInfo.judgePic.sourceUrl}
                                                 className="rounded-circle img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="w-100 text-md-left text-center  my-0 my-md-5 pr-0 pr-md-5">
                                            <p className="judges-s3-modal-company mt-2 mt-md-5">{selectedJudge.judgeInfo.judgeCompany}</p>
                                            <p className="judges-s3-modal-name mt-2 mt-md-5">{selectedJudge.title}</p>
                                            <p className="judges-s3-modal-title mt-3">{selectedJudge.judgeInfo.judgeTitle}</p>
                                            <div className="w-100 judges-s3-modal-spacer"/>
                                        </div>
                                        <div className="w-100 my-5 pr-3 pl-3 pl-md-0">
                                            <p className="judges-s3-modal-bio"
                                               dangerouslySetInnerHTML={{__html: selectedJudge.judgeInfo.judgeBio}}/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
      query {
        allWpJudge (sort: {order: ASC, fields: menuOrder}){
          edges {
            node {
              id
              uri
              menuOrder
              judgeInfo {
                judgeAlsoAPartner
                judgeBio
                judgeCompany
                judgeTitle
                judgeUrl
                judgePic {
                  sourceUrl
                }
              }
              title
              hackathonSeasonsAndTracks {
                hackathonSeason
                hackathonTrack
              }
            }
          }
        }
      }
      `
        }
        render={data => <Judges data={data} {...props} />}
    />
)
