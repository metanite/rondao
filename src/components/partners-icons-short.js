import React, {useRef, useState} from 'react';


const PartnerIconsShort = ({data}) => {
    const [displayedIcons, setDisplayedIcons] = useState(data.edges.slice(0, 18));
    let short = data.edges.slice(0, 18)
    let all = data.edges;
    let myRef = useRef();

    function displayButton() {
        if (displayedIcons.length === 18) {
            return <button className="partners-more" id="hackathon-partners-more-btn" onClick={function () {
                setDisplayedIcons(all)
            }}>More</button>;
        }
        return <button className="partners-more" id="hackathon-partners-less-btn" onClick={function () {
            setDisplayedIcons(short)
            window.scrollTo({behavior: "smooth", top: myRef.current.offsetTop})
        }}>Less</button>;
    }

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center" ref={myRef}>
            <div className="col-12 col-lg-11 mb-5 d-flex flex-wrap justify-content-center">
                {
                    displayedIcons.map((node) => {
                        return (
                            <div className="col-lg-4 d-flex justify-content-center align-items-center"
                                 key={"partner-icon-key" + node.node.title}>
                                <a href={node.node.partnerInfo.partnerUrl} target="_blank" rel="noopenner noreferrer"
                                   id={"hackathon-partner-icon-" + node.node.title}>
                                    <img src={node.node.partnerInfo.partnerLogo.sourceUrl} className="partners-logo"
                                         alt={node.node.title}/>
                                </a>
                            </div>

                        )
                    })
                }
            </div>
            {displayButton()}

        </div>
    )
}


export default PartnerIconsShort