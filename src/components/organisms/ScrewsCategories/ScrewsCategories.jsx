import React from "react";
import FillterScrews from "../../molecules/FillterScrews/FillterScrews";
export default function ScrewsCategories () {
    return (
        <div id='ShellLayout_MainContent_Cntnr'>
            <div id="ShellLayout_MainContent_Inner" className="ShellLayout_MainContent_Inner_SecondaryContent_Collapsed">
                <main id="MainContent" className="ShellLayout_MainContent_ProdPage_Loaded">
                    <div>
                        <div id='ProductPage'>
                            <FillterScrews></FillterScrews>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}