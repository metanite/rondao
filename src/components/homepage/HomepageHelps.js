import React, {useState} from "react"


const HomepageHelps = () => {
    const items = [
        {
            title: "Gaming",
            description: "TRON is delighted to present the new standard in blockchain-based gaming. Finally take control of your gaming experience by actually owning the game that you are playing. Looking to make your own game? Our easy-to-use tools make it easy for anyone to get started building their own blockchain-based game. So why wait? Get started with TRON today!",
            url: "/gaming/",
            disabled: false
        },
        {
            title: "Finance",
            description: "TRON's vision is to empower developers with the tools they need to create next-generation decentralized applications, free from the restrictions imposed by traditional financial institutions. TRON is actively changing the way we interact with the internet, opening up a world of possibilities for developers and users alike.",
            url: "/finance/",
            disabled: false
        },
        {
            title: "Multimedia",
            description: "Welcome to the future of entertainment. TRON is proud to offer the first free peer-to-peer, decentralized content entertainment protocol that aims to construct an open ecosystem. This platform allows everyone to freely publish, store, and own data, creating a decentralized media entertainment ecosystem for all.",
            url: "/multimedia/",
            disabled: false
        },
        {
            title: "Art",
            description: "The TRON DAO is committed to empowering artists through blockchain technology. By using the power of this new tech, artists can better protect their intellectual property and receive fairer compensation for their creations– all while distribution happens faster than ever before! TRON’s ultimate goal is to create a more vibrant and inclusive culture for all artists.",
            url: "/art/",
            disabled: false
        },
        {
            title: "Governance",
            description: "When it comes to decentralized governance, TRON is leading the pack. Under TRON’s consensus protocol, you–the token holders– are responsible for deciding what the future of the TRON protocol will look like along with the dApps that will emerge from it. This system ensures opportunity for all, and decisions that reflect the will of the community. TRON is also proud to be the official blockchain for the Commonwealth of Dominica.",
            url: "/governance/",
            disabled: false
        }
    ]
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const selectItem = function (index) {
        setSelectedItem(items[index]);
    }

    const isSelected = function (title) {
        return title === selectedItem.title ? " homepage-helps-inner-circle-fill" : " ";
    }

    return (
        <div className="homepage-border homepage-helps-inner mx-auto my-5 ">
            <div className="homepage-helps-inner-start row no-gutters py-5 justify-content-start">
                <div
                    className="homepage-helps-inner-content col-12 col-lg-6 offset-0 offset-lg-0 px-md-5 px-2 order-lg-0 order-1 mt-4 text-center text-lg-left">
                    <div className="d-flex flex-column flex-md-row flex-lg-column align-items-md-center align-items-lg-start my-4 my-lg-0">
                        <div className="text-left ml-3 ml-md-0">
                            HOW <span className="homepage-helps-inner-tron">TRON</span> HELPS
                            <hr className="my-4 d-lg-block d-none" />
                        </div>
                        <div className="ml-0 ml-lg-0 px-lg-0 col-4 col-md-3 col-lg-12">
                            <h3 className="text-left text-md-center text-lg-left">{selectedItem.title}</h3>
                            <hr className="my-4 d-lg-block d-none" />
                        </div>
                    </div>
                    <p className="text-justify px-3 px-md-0">{selectedItem.description}
                    </p>
                    <a href={selectedItem.url} id={"home-how-tron-helps-" + selectedItem.title + "-visit"}
                       onClick={function (e) {
                           if (selectedItem.disabled === true) {
                               e.preventDefault();
                           }
                       }}>
                        <button id={"home-how-tron-helps-" + selectedItem.title + "-visit-btn"}
                                className="homepage-helps-inner-learn float-md-right float-lg-left mt-3 mt-lg-0"
                                disabled={selectedItem.disabled}>&gt; Visit {selectedItem.title}</button>
                    </a>
                </div>
                <div
                    className="d-none col-12 col-lg-6 col-xl-5 offset-0 offset-lg-0 order-lg-1 order-0 d-md-inline-flex d-lg-block justify-content-start justify-content-lg-center my-md-4 homepage-helps-inner-buttons px-md-2 px-lg-4">
                    <div className="d-flex justify-content-start mt-lg-5 mt-0">
                        <div id={"home-how-tron-helps-" + items[0].title}
                             className={"homepage-helps-inner-circle" + isSelected(items[0].title)}
                             aria-labelledby={"how tron helps " + items[0].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(0)
                                 }
                             }}
                             onClick={function () {
                                 selectItem(0)
                             }}>{items[0].title}</div>
                        <div id={"home-how-tron-helps-" + items[1].title}
                             aria-labelledby={"how tron helps " + items[1].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(1)
                                 }
                             }}
                             className={"homepage-helps-inner-circle ml-md-4 ml-lg-0" + isSelected(items[1].title)}
                             onClick={function () {
                                 selectItem(1)
                             }}>{items[1].title}</div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div id={"home-how-tron-helps-" + items[2].title}
                             aria-labelledby={"how tron helps " + items[2].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(2)
                                 }
                             }}
                             className={"homepage-helps-inner-circle mx-4 mx-lg-0" + isSelected(items[2].title)}
                             onClick={function () {
                                 selectItem(2)
                             }}>{items[2].title}</div>
                    </div>
                    <div className="d-flex justify-content-start justify-content-lg-between">
                        <div id={"home-how-tron-helps-" + items[3].title}
                             aria-labelledby={"how tron helps " + items[3].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(3)
                                 }
                             }}
                             className={"homepage-helps-inner-circle " + isSelected(items[3].title)}
                             onClick={function () {
                                 selectItem(3)
                             }}>{items[3].title}</div>
                        <div id={"home-how-tron-helps-" + items[4].title}
                             aria-labelledby={"how tron helps " + items[4].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(4)
                                 }
                             }}
                             className={"homepage-helps-inner-circle ml-md-4 ml-lg-0" + isSelected(items[4].title)}
                             onClick={function () {
                                 selectItem(4)
                             }}>{items[4].title}</div>
                    </div>
                </div>

                {/* for mobile page */}
                <div className="d-flex d-md-none flex-row px-1 align-items-center justify-content-between w-100">
                    <div id={"home-how-tron-helps-" + items[0].title}
                             className={"homepage-helps-inner-circle" + isSelected(items[0].title)}
                             aria-labelledby={"how tron helps " + items[0].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(0)
                                 }
                             }}
                             onClick={function () {
                                 selectItem(0)
                             }}>{items[0].title}</div>
                    <div id={"home-how-tron-helps-" + items[2].title}
                             aria-labelledby={"how tron helps " + items[2].title}
                             role={"button"}
                             tabIndex="0"
                             onKeyDown={function (e) {
                                 if (e.key === "Enter") {
                                     selectItem(2)
                                 }
                             }}
                             className={"homepage-helps-inner-circle" + isSelected(items[2].title)}
                             onClick={function () {
                                 selectItem(2)
                             }}>{items[2].title}</div>
                    <div id={"home-how-tron-helps-" + items[1].title}
                            aria-labelledby={"how tron helps " + items[1].title}
                            role={"button"}
                            tabIndex="0"
                            onKeyDown={function (e) {
                                if (e.key === "Enter") {
                                    selectItem(1)
                                }
                            }}
                            className={"homepage-helps-inner-circle" + isSelected(items[1].title)}
                            onClick={function () {
                                selectItem(1)
                            }}>{items[1].title}</div>        
                </div>
                <div className="d-flex d-md-none align-items-center justify-content-around w-100 pt-4">
                    <div id={"home-how-tron-helps-" + items[3].title}
                        aria-labelledby={"how tron helps " + items[3].title}
                        role={"button"}
                        tabIndex="0"
                        onKeyDown={function (e) {
                            if (e.key === "Enter") {
                                selectItem(3)
                            }
                        }}
                        className={"homepage-helps-inner-circle " + isSelected(items[3].title)}
                        onClick={function () {
                            selectItem(3)
                        }}>{items[3].title}</div>
                    <div id={"home-how-tron-helps-" + items[4].title}
                        aria-labelledby={"how tron helps " + items[4].title}
                        role={"button"}
                        tabIndex="0"
                        onKeyDown={function (e) {
                            if (e.key === "Enter") {
                                selectItem(4)
                            }
                        }}
                        className={"homepage-helps-inner-circle" + isSelected(items[4].title)}
                        onClick={function () {
                            selectItem(4)
                        }}>{items[4].title}</div>       
                </div>
            </div>
        </div>
    )
}

export default HomepageHelps

