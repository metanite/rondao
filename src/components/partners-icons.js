import React  from 'react';


const PartnerIcons = ({ data }) => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                    <div className="col-12 col-lg-11 mb-5 d-flex flex-wrap justify-content-center">
                        {
                            data.edges.map((node) => {
                                return (
                                    <div className="col-lg-4 d-flex justify-content-center align-items-center" key={"partner-icon-key" + node.node.title}>
                                        <a href={node.node.partnerInfo.partnerUrl} target="_blank" rel="noopenner noreferrer">
                                            <img src={node.node.partnerInfo.partnerLogo.sourceUrl} className="partners-logo" alt={node.node.title}/>
                                        </a>
                                    </div>

                                )
                            })
                        }
                    </div>
        </div>
    )
}

export default PartnerIcons