import React from "react";
import Header from '../../organisms/Header/Header';
import LeftNavBar from '../../organisms/LeftNavBar/LeftNavBar'
import AllCategoriesView from "../../organisms/AllCategoriesView/AllCategoriesView";


const HomePage = () => {
    return (
        <div className="homePage">
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
                    </main>
                </div>
            </div>
        </div>
    )
}

export default HomePage;