import React, {useEffect, useState, useRef } from "react";

const LeftNavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

    const listenToScrollEvents = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 950) {
            isVisible && setIsVisible(false);
        }
        else {
            setIsVisible(true);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll", listenToScrollEvents);
        return () => {
            window.removeEventListener("scroll", listenToScrollEvents);
        }
    }, [])
  return (
    <div id="HomePageNav" className="homepage-nav" style={{display: isVisible ? 'flex' : 'none'}}>
      <div id="HomePageNavigationTitle" className="home-page-nav-title">
        Choose a Category
      </div>
      <div id="HomePageNavigation">
        <div id="HomePageCatgs" class="visible">
          <a href="abrading-polishing" id="HPNAV_HP_11">
            Abrading &amp; Polishing
          </a>
          <a href="building-grounds" id="HPNAV_HP_24">
            Building &amp; Grounds
          </a>
          <a href="electrical-lighting" id="HPNAV_HP_8">
            Electrical &amp; Lighting
          </a>
          <a href="fabricating" id="HPNAV_HP_10">
            Fabricating
          </a>
          <a href="fastening-joining" id="HPNAV_HP_1">
            Fastening &amp; Joining
          </a>
          <a href="filtering" id="HPNAV_HP_7">
            Filtering
          </a>
          <a href="flow-level-control" id="HPNAV_HP_5">
            Flow &amp; Level Control
          </a>
          <a href="furniture-storage" id="HPNAV_HP_21">
            Furniture &amp; Storage
          </a>
          <a href="hand-tools" id="HPNAV_HP_18">
            Hand Tools
          </a>
          <a href="hardware" id="HPNAV_HP_20">
            Hardware
          </a>
          <a href="heating-cooling" id="HPNAV_HP_23">
            Heating &amp; Cooling
          </a>
          <a href="lubricating" id="HPNAV_HP_17">
            Lubricating
          </a>
          <a href="material-handling" id="HPNAV_HP_15">
            Material Handling
          </a>
          <a href="measuring-inspecting" id="HPNAV_HP_19">
            Measuring &amp; Inspecting
          </a>
          <a href="office-supplies-signs" id="HPNAV_HP_26">
            Office Supplies &amp; Signs
          </a>
          <a href="pipe-tubing-hose-fittings" id="HPNAV_HP_2">
            Pipe, Tubing, Hose &amp; Fittings
          </a>
          <a href="plumbing-janitorial" id="HPNAV_HP_22">
            Plumbing &amp; Janitorial
          </a>
          <a href="power-transmission" id="HPNAV_HP_3">
            Power Transmission
          </a>
          <a href="pressure-temperature-control" id="HPNAV_HP_6">
            Pressure &amp; Temperature Control
          </a>
          <a href="pulling-lifting" id="HPNAV_HP_14">
            Pulling &amp; Lifting
          </a>
          <a href="raw-materials" id="HPNAV_HP_9">
            Raw Materials
          </a>
          <a href="safety-supplies" id="HPNAV_HP_13">
            Safety Supplies
          </a>
          <a href="sawing-cutting" id="HPNAV_HP_12">
            Sawing &amp; Cutting
          </a>
          <a href="sealing" id="HPNAV_HP_4">
            Sealing
          </a>
          <a href="shipping" id="HPNAV_HP_25">
            Shipping
          </a>
          <a href="suspending" id="HPNAV_HP_16">
            Suspending
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
