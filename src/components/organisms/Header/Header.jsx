/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import LogoHeader from "../../molecules/LogoHeader/index";
import SearchBarHeader from "../../molecules/SearchBarHeader/index";

const Header = () => {
  const [openDialogEmailUs, setOpenDialogEmailUs] = useState(false);
  const [openDialogLogin, setOpenDialogLogin] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const openEmailUsDialog = () => {
    return setOpenDialogEmailUs((current) => !current);
  };
  const showPasswordFunction = () => {
    return setshowPassword((current) => !current);
  };
  const openDialogLoginFunction = () => {
    return setOpenDialogLogin((current) => !current);
  };

  return (
    <header className="header">
      <div className="browseCatalog_Container">
        <div className="browseCatalog_ButtonContainer">
          <img
            className="browseCatalog_ButtonImg"
            alt="Img Browse Catalog"
            src="https://images1.mcmaster.com/init/gfx/home/CategoryTiles/Browse-Catalog-Icon.png?ver=1640884702"
          ></img>
          <button className="browseCatalog_Button">BROWSE CATALOG</button>
        </div>
        {/* <div className="overlay"></div>
        <section className="browse-catalog-menu">
          <header>
            <a className="logo-link" href="/_" tabIndex='-1'>
              <img preserveaspectratio='xMinYMin meet' alt='McMaster-Logo' src='https://images1.mcmaster.com/init/gfx/MastheadLogo.svg?ver=1545146094'></img>
            </a>
            <button className="close-Catalog-Button" alt='Browse Category Menu Close Button' tabIndex='-1' title='Close'>
              <img src={closeIcon} alt='Close Icon'></img>
            </button>
          </header>
        </section> */}
        <div className="mastHeader-top-right">
          <div
            id="ShellLayout_MastheadPhoneNumber_Container"
            className="link-wrapper"
          >
            <a
              className="masthead-top-right-link-cursor-default"
              href="tel: +84353114987"
              aria-label="6 3 0. 8 3 3. 0 3 0 0."
            >
              +84353114987
            </a>
          </div>
          <div className="divider"></div>
          <div
            id="ShellLayout_MastheadEmailUs_Container"
            className="link-wrapper"
          >
            <a
              className="EmailUsWebPartLink"
              href="#"
              onClick={openEmailUsDialog}
            >
              Email Us
            </a>
            {openDialogEmailUs === true && (
              <div id="MastheadEmailUsWebPart_ContentContainer">
                <div id="MastheadEmailUsDialog" className="dialog show_form">
                  <section
                    id="MastheadEmailUsDialogForm"
                    className="form"
                    role="form"
                  >
                    <header className="section_form">
                      <h2 className="title">Email Us</h2>
                      <p className="subTitle">
                        We will reply to your message as soon as possible
                      </p>
                      <button
                        className="buttonClose"
                        title="close"
                        onClick={openEmailUsDialog}
                      ></button>
                    </header>
                    <div className="section_form form-section">
                      <label className="form-label" for="form-input">
                        From:
                      </label>
                      <span className="form-input-wrapper">
                        <input
                          id="form-input"
                          name="form-input"
                          className="form-input"
                          type="text"
                        ></input>
                      </span>
                    </div>
                    <div className="section_form message-section">
                      <div className="expanding-area active">
                        <pre>
                          <span className="message-input-clone">
                            <br></br>
                          </span>
                        </pre>
                        <textarea
                          id="message-input"
                          className="message-input"
                          placeholder="Let us know what you need."
                        ></textarea>
                      </div>
                    </div>
                    <footer className="section_form">
                      <div className="left-container">
                        <button className="button-send-feedback">SEND</button>
                        <button
                          className="link-cancel-feedback"
                          onClick={openEmailUsDialog}
                        >
                          CANCEL
                        </button>
                        <span className="footer-message-container"></span>
                      </div>
                      <div className="right-container">
                        <span className="email-message">
                          Customer Service Email:
                          <a href="mailto:vukhanhhoang2801@gmail.com">
                            vukhanhhoang2801@gmail.com
                          </a>
                        </span>
                      </div>
                    </footer>
                  </section>
                </div>
              </div>
            )}
          </div>
          <div className="divider"></div>
          <div id="ShellLayout_MastheadLogin_Cntnr" className="link-wrapper">
            <div id="MastheadLoginWebPartCntnr">
              <div className="Clear">
                <div
                  className="MastheadLoginUsrCtrlCntnr_Show"
                  id="MastheadLoginUsrCtrlCntnr"
                >
                  <div className="LoginUsrCtrlWebPart_ContentCntnr">
                    <div
                      className="LoginUsrCtrlWebPart_AlertCntnr link-wrapper"
                      id="_CrtePswdAlertCntnr"
                    >
                      <a
                        id="LoginUsrCtrlWebPart_LoginLnk"
                        className="header--masthead text-login "
                        onClick={openDialogLoginFunction}
                      >
                        Log in
                      </a>
                      <svg viewBox="0 0 10 6">
                        <polygon points="0,0 5,6 10,0"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {openDialogLogin === true && (
                <div
                  id="MastheadLoginInner"
                  className="Clear MastheadLoginInner_Hide container--loginbox"
                >
                  <div id="MastheadLoginInner_Content">
                    <div id="MastheadLogin">
                      <div>
                        <button
                          className="buttonCloseLogIn"
                          title="close"
                          onClick={openDialogLoginFunction}
                        ></button>
                        <div>
                          <div className="VertSpace_space"></div>
                          <div className="VertSpace_space"></div>
                        </div>
                        <div className="LoginDropDown_inset">
                          <div className="App">
                            <form>
                              <div className="CreateLoginFrame_inset">
                                <h2 className="CreateLoginFrame_frameHeader">
                                  Log in
                                </h2>
                                <div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                </div>
                                <div>
                                  <div className="Input_inputCover Input_neutral undefined">
                                    <div>
                                      <input
                                        spellCheck="false"
                                        type="text"
                                        required
                                        id="Email"
                                        className="InputField_input InputField_fullwidth"
                                      ></input>
                                    </div>
                                    <label className="Input_labelFloat">
                                      Email
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                </div>
                                <div className="Input_inputCover Input_neutral undefined">
                                    {showPassword === true ? (
                                      <div>
                                          <div>
                                            <input
                                              type="text"
                                              required
                                              id="password"
                                              className="InputField_input InputField_buttonwidth"
                                            ></input>
                                          </div>
                                          <div className="ShowHideInput_container">
                                          <button
                                            className="ShowHideInput_button"
                                            type="button"
                                            onClick={showPasswordFunction}
                                          >
                                            hide
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                          <div>
                                            <input
                                              type="password"
                                              required
                                              id="password"
                                              className="InputField_input InputField_buttonwidth"
                                            ></input>
                                          </div>
                                          <div className="ShowHideInput_container">
                                          <button
                                            className="ShowHideInput_button"
                                            type="button"
                                            onClick={showPasswordFunction}
                                          >
                                            show
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  
                                  <label className="Input_labelFloat">
                                    Password
                                  </label>
                                </div>
                                <div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                </div>
                                <div className="Dyad_base">
                                  <div className="Dyad_left">
                                    <div>
                                      <input
                                        className="ValidatedCheckboxInput_customBox"
                                        type="checkbox"
                                      ></input>
                                      <label className="ValidatedCheckboxInput_text">
                                        <span>Stay logged in</span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="Dyad_right">
                                    <button
                                      type="button"
                                      className="CreateLoginFrame_link"
                                    >
                                      Reset Password
                                    </button>
                                  </div>
                                </div>
                                <div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                </div>
                                <button
                                  type="submit"
                                  className="FormButton_primaryButton"
                                >
                                  Log in
                                </button>
                                <div>
                                  <div className="VertSpace_space"></div>
                                  <div className="VertSpace_space"></div>
                                </div>
                                <button className="FormButton_secondaryButton">
                                  Create login
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div>
                          <div className="VertSpace_space"></div>
                          <div className="VertSpace_space"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <LogoHeader></LogoHeader>
        <SearchBarHeader></SearchBarHeader>
      </div>
    </header>
  );
};

export default Header;
