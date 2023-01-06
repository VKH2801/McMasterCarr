import React from "react";

const FooterFloat = () => {
  return (
    <footer id="Shell_BottomNavWebPart_Cntnr">
      <div id="BottomNavWebPart_Cntnr" class="DefltOpaqueBackgrnd TopRul">
        <div id="BottomNavWebPart_LnksCntnr">
          <a class="BottomNavLnk" id="BottomNavWebPart_HomeLnk" href="/">
            Home
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_ContactLnk"
            href="/contact"
          >
            Locations
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_ReturnsLnk"
            href="/returns"
          >
            Returns
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_CareersLnk"
            href="/careers"
          >
            Careers
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_MobileLnk"
            href="/mobile"
          >
            Mobile App
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_SWAddInLnk"
            href="/solidworksaddin"
          >
            Solidworks Add-In
          </a>
          <span class="VerticalSeprt">|</span>
          <a class="BottomNavLnk" id="BottomNavWebPart_HelpLnk" href="/help">
            Help
          </a>
          <span class="VerticalSeprt">|</span>
          <a
            class="BottomNavLnk"
            id="BottomNavWebPart_SiteSettingsLnk"
            href="/settings"
          >
            Settings
          </a>
        </div>
        <div id="BottomNavWebPart_TermsCntnr">
          <span class="TermsTxt" style="display: inline;">
            By using this website, you agree to our{" "}
          </span>
          <a
            class="BottomNavLnk"
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
