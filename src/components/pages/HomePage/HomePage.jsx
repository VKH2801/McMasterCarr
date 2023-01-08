import React, {useEffect, useState, useRef } from "react";
import Header from '../../organisms/Header/Header';
import LeftNavBar from '../../organisms/LeftNavBar/LeftNavBar'
import AllCategoriesView from "../../organisms/AllCategoriesView/AllCategoriesView";
import FooterHomePage from "../../organisms/FooterHomePage/FooterHomePage";
import FooterAbout from "../../organisms/FooterAbout/FooterAbout";
import FooterFloat from "../../organisms/FooterFloat/FooterFloat";
const HomePage = () => {
    // const [isVisible, setIsVisible] = useState(true);

    // const listenToScrollEvents = () => {
    //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     if (winScroll > 950) {
    //         isVisible && setIsVisible(false);
    //     }
    //     else {
    //         setIsVisible(true);
    //     }
    // }

    // useEffect (() => {
    //     window.addEventListener("scroll", listenToScrollEvents);
    //     return () => {
    //         window.removeEventListener("scroll", listenToScrollEvents);
    //     }
    // }, [])
    return (
        <div className="homePage" >
            <Header></Header>
            <div id="ShellLayout_MainContent_Cntnr">
                <div id="ShellLayout_MainContent_Inner" className="ShellLayout_MainContent_Inner_SecondaryContent_Collapsed">
                    <main id="MainContent" className="CollapsedSecondaryContentWithHomePageNav">
                        <div id="HomePageParent" className="ShellLayout_MainContent_WebPartContainer secondary-content-collapsed">
                            <div id="HomePageNavAndCategoriesContainer" className="homepage-nav-and-categories-container">
                                <LeftNavBar></LeftNavBar>
                                <AllCategoriesView></AllCategoriesView>
                            </div>
                        </div>
                        <FooterHomePage></FooterHomePage>
                        <FooterAbout></FooterAbout>
                    </main>
                </div>
                <FooterFloat></FooterFloat>
            </div>
            
            
        </div>
    )
}

export default HomePage;