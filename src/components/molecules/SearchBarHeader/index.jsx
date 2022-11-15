import React, { useState, useRef } from "react";

const SearchBarHeader = () => {
  const [displayButtonClear, setDisplayButtonClear] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  
  const ref = useRef(null);

  const handleRenderOnChange = () => {
    if (searchInput === '') {
      setDisplayButtonClear(false);
    }
    else {
      setDisplayButtonClear(true);
    }
  }
  

  return (
    <div
      id="ShellLayout_SrchEntryWebPart_Cntnr"
      className="shell-layout-search-entry-container"
    >
      <div id="SrchEntryWebPart_Cntnr" className="container-searchEntry">
        {/* {displayButtonClear === true ? (
                    <form id="SrchEntryWebPart_Form">
                        <input type="text" className='searchBar' placeholder='Search' id="SrchEntryWebPart_InpBox" name="SrchEntryWebPart_InpBox" autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength='150'
                        value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}}>
                        </input>
                        <input type="text" className='ac-searchBar' tabIndex='-1' autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength='150'></input>
                        <button id="SrchEntryClearButton" className="clear-button inactive" type='button' title='clear'></button>
                        <span id="SrchEntryVerticalSeprt" className="Verti  calSeprt inactive"></span>
                        <button type='submit' title='search' className='searchBar-button'></button>
                    </form>
                ) : (
                    <form id="SrchEntryWebPart_Form">
                        <input type="text" className='searchBar' placeholder='Search' id="SrchEntryWebPart_InpBox" name="SrchEntryWebPart_InpBox" autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength='150'
                        value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}}>
                        </input>
                        <input type="text" className='ac-searchBar' tabIndex='-1' autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength='150'></input>
                        <button id="SrchEntryClearButton" className="clear-button inactive" type='button' title='clear'></button>
                        <span id="SrchEntryVerticalSeprt" className="VerticalSeprt inactive"></span>
                        <button type='submit' title='search' className='searchBar-button'></button>
                    </form>
                )} */}
        <form id="SrchEntryWebPart_Form">
          <input
            type="text"
            className="searchBar"
            placeholder="Search"
            id="SrchEntryWebPart_InpBox"
            name="SrchEntryWebPart_InpBox"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            maxLength="150"
            value={searchInput}
            ref={ref}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleRenderOnChange();
            }}
          ></input>
          <input
            type="text"
            className="ac-searchBar"
            tabIndex="-1"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            maxLength="150"
          ></input>
          {
            displayButtonClear === true ? (
              <button
                id="SrchEntryClearButton"
                className="clear-button"
                type="button"
                title="clear"
              ></button>
            ) : (
              <button
                id="SrchEntryClearButton"
                className="clear-button inactive"
                type="button"
                title="clear"
              ></button>
            )
          }
          <button
            id="SrchEntryClearButton"
            className="clear-button inactive"
            type="button"
            title="clear"
          ></button>
          <span
            id="SrchEntryVerticalSeprt"
            className="VerticalSeprt"
          ></span>
          <button
            type="submit"
            title="search"
            className="searchBar-button"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default SearchBarHeader;
