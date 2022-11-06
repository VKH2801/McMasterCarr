import React, {useState} from "react";
import closeIcon from "../../../assets/icons/closeIcon.png";




const Header = () => {
  const [openDialogEmailUs, setOpenDialogEmailUs] = useState('dialog hide')
  const openEmailUsDialog = () => {
    return (
      setOpenDialogEmailUs('dialog')
    )
  }

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
              href={openEmailUsDialog}
            >
              Email Us
            </a>
            <div id='MastheadEmailUsWebPart_ContentContainer'>
              <div id='MastheadEmailUsDialog' className='dialog show_form hide'>
                <section id="MastheadEmailUsDialogForm" className="form" role="form">
                  <header className="section_form">
                    <h2 className="title">Email Us</h2>
                    <p className="subTitle">We will reply to your message as soon as possible</p>
                    <button className="buttonClose" title="close"></button>
                  </header>
                  <div className="section_form form-section">
                    <label className="form-label" for="form-input">From:</label>
                    <span className="form-input-wrapper">
                      <input id="form-input" name="form-input" className="form-input" type='text' ></input>
                    </span>
                  </div>
                  <div className="section_form message-section">
                    <div className="expanding-area active">
                      <pre>
                        <span className="message-input-clone">
                          <br></br>
                        </span>
                      </pre>
                      <textarea id="message-input" className="message-input" placeholder="Let us know what you need."></textarea>
                    </div>
                  </div>
                  <footer className="section_form">
                    <div className="left-container">
                      <button className="button-send-feedback">SEND</button>
                      <button className="link-cancel-feedback">CANCEL</button>
                      <span className="footer-message-container"></span>
                    </div>
                    <div className="right-container">
                      <span className="email-message">
                        Customer Service Email: 
                        <a href="mailto:vukhanhhoang2801@gmail.com">vukhanhhoang2801@gmail.com</a>
                      </span>
                    </div>
                  </footer>
                </section>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div id="ShellLayout_MastheadLogin_Cntnr" className="link-wrapper">
            <div id="MastheadLoginWebPartCntnr">
              <div className="Clear"></div>
              <div id="MastheadLoginInner" className="Clear MastheadLoginInner_Hide container--loginbox"></div>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
