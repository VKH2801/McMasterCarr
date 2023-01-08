import React from "react";

const FooterFloat = () => {
  return (
    <footer id="Shell_BottomNavWebPart_Cntnr">
      <div id="BottomNavWebPart_Cntnr" className="DefltOpaqueBackgrnd TopRul">
        <div id="BottomNavWebPart_LnksCntnr">
          <a className="BottomNavLnk" id="BottomNavWebPart_HomeLnk" href="/">
            Home
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_ContactLnk"
            href="/contact"
          >
            Locations
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_ReturnsLnk"
            href="/returns"
          >
            Returns
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_CareersLnk"
            href="/careers"
          >
            Careers
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_MobileLnk"
            href="/mobile"
          >
            Mobile App
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_SWAddInLnk"
            href="/solidworksaddin"
          >
            Solidworks Add-In
          </a>
          <span className="VerticalSeprt">|</span>
          <a className="BottomNavLnk" id="BottomNavWebPart_HelpLnk" href="/help">
            Help
          </a>
          <span className="VerticalSeprt">|</span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_SiteSettingsLnk"
            href="/settings"
          >
            Settings
          </a>
        </div>
        <div id="BottomNavWebPart_TermsCntnr">
          <span className="TermsTxt" >
            By using this website, you agree to our{" "}
          </span>
          <a
            className="BottomNavLnk"
            id="BottomNavWebPart_TermsandConditionsLnk"
            href="/termsandconditions"
          >
            Terms and Conditions and Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterFloat;
