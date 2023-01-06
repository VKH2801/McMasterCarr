import React from "react";

const FooterAbout = () => {
  return (
    <div id="HomePageServices">
      <div class="services-web-part-main-cntr">
        <div>
          <h2 class="services-web-part-hdr">Our Services</h2>
        </div>
        <div>
          <ul class="services-web-part-ul">
            <li class="services-web-part-li">
              <h3 class="services-web-part-sb-hdr">
                Same or next day delivery
              </h3>
              <p class="services-web-part-sb-txt">
                98% of orders ship from stock today at ground rates.
              </p>
              <a
                id="services-link-1"
                class="services-web-part-link"
                href="info/delivery"
              >
                <span>Delivery in Your Area</span>
              </a>
            </li>
            <li class="services-web-part-li">
              <h3 class="services-web-part-sb-hdr">Here when you need us</h3>
              <p class="services-web-part-sb-txt">
                Whatever you need, whenever you need us, your call is answered
                in seconds and your email in minutes.
              </p>
              <a
                id="services-link-2"
                class="services-web-part-link"
                href="contact"
              >
                <span>Contact Us</span>
              </a>
            </li>
            <li class="services-web-part-li">
              <h3 class="services-web-part-sb-hdr">
                Streamline your design process with CAD
              </h3>
              <p class="services-web-part-sb-txt">
                Download CAD models for our products from our site or Solidworks
                Add-In.
              </p>
              <a
                id="services-link-3"
                class="services-web-part-link"
                href="solidworksaddin"
              >
                <span>Learn More</span>
              </a>
            </li>
            <li class="services-web-part-li">
              <h3 class="services-web-part-sb-hdr">
                Automate your ordering process
              </h3>
              <p class="services-web-part-sb-txt">
                Reduce administrative costs with our eProcurement and API
                solutions.
              </p>
              <a
                id="services-link-4"
                class="services-web-part-link"
                href="eprocurement"
              >
                <span>Learn More</span>
              </a>
            </li>
            <li id="services-web-part-li-5" class="services-web-part-li">
              <h3 class="services-web-part-sb-hdr">
                Maintain traceability with material certificates
              </h3>
              <p class="services-web-part-sb-txt">
                Material certificates emailed and available for download as soon
                as your order ships.
              </p>
              <a
                id="services-link-5"
                class="services-web-part-link"
                href="info-certificates"
              >
                <span>Learn More</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
