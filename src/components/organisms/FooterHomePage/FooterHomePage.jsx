import React from "react";

const FooterHomePage = () => {
  return (
    <div id="HomePageProductDiscovery" class="home-page-product-discovery">
      <div id="product-discovery-cntnr">
        <div id="product-discovery-left-cntnr">
          <h2 id="product-discovery-left-hdr">Discover Products</h2>
          <p id="product-discovery-left-desc">
            A selection of products and solutions for your next project.
          </p>
          <button id="product-discovery-shuffle">
            <span>SHUFFLE PRODUCTS</span>
            <img src="https://images1.mcmaster.com/init/gfx/home/ProductDiscovery/shuffle.svg?ver=1642190842" />
          </button>
        </div>
        <div id="product-discovery-panes-cntnr">
          <a
            id="product-discovery-pane-1"
            class="product-discovery-pane"
            href="/key-extractors/"
          >
            <div class="product-discovery-img-cntnr">
              <img
                class="product-discovery-img"
                src="https://www.mcmaster.com/mvC/Contents/gfx/ProductDiscoveryImages/1642459312/broken-key-extractor-sets.png"
              />
            </div>
            <div class="product-discovery-text-cntnr">
              <h2 class="product-discovery-hdr">Broken Key Extractor Sets</h2>
              <p class="product-discovery-desc">
                No need to call a locksmith—these sets include extractor picks
                to pull broken key stubs out of lock cylinders.{" "}
              </p>
            </div>
            <p class="product-discovery-count">1 product</p>
          </a>
          <a
            id="product-discovery-pane-2"
            class="product-discovery-pane"
            href="/3d-printer-filaments/"
          >
            <div class="product-discovery-img-cntnr">
              <img
                class="product-discovery-img"
                src="https://www.mcmaster.com/mvC/Contents/gfx/ProductDiscoveryImages/1642459312/3d-printer-filaments.png"
              />
            </div>
            <div class="product-discovery-text-cntnr">
              <h2 class="product-discovery-hdr">3D Printer Filaments</h2>
              <p class="product-discovery-desc">
                Choose from a wide range of 3D printer filaments, including
                wear-resistant, high-strength, chemical-resistant, and static
                control options.
              </p>
            </div>
            <p class="product-discovery-count">182 products</p>
          </a>
          <a
            id="product-discovery-pane-3"
            class="product-discovery-pane"
            href="/coatings/oil-resistant-coatings/"
          >
            <div class="product-discovery-img-cntnr">
              <img
                class="product-discovery-img"
                src="https://www.mcmaster.com/mvC/Contents/gfx/ProductDiscoveryImages/1642459312/oil-resistant-coatings.png"
              />
            </div>
            <div class="product-discovery-text-cntnr">
              <h2 class="product-discovery-hdr">Oil-Resistant Coatings</h2>
              <p class="product-discovery-desc">
                Spray these coatings on glass to create a clear,
                scratch-resistant surface that repels oil and water. They’re
                also known as oleophobic and hydrophobic coatings.
              </p>
            </div>
            <p class="product-discovery-count">1 product</p>
          </a>
          {/* <a
            id="product-discovery-pane-4"
            class="product-discovery-pane"
            href="/bearings/roller-bearing-type~crossed/seal-type~open/seal-type~sealed/"
          >
            <div class="product-discovery-img-cntnr">
              <img
                class="product-discovery-img"
                src="https://www.mcmaster.com/mvC/Contents/gfx/ProductDiscoveryImages/1642459312/crossed-roller-bearings.png"
              />
            </div>
            <div class="product-discovery-text-cntnr">
              <h2 class="product-discovery-hdr">Crossed-Roller Bearings</h2>
              <p class="product-discovery-desc">
                The rollers face in alternating directions to allow for rigid,
                accurate motion under any combination of radial, thrust, and
                moment (twisting) loads.
              </p>
            </div>
            <p class="product-discovery-count">37 products</p>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default FooterHomePage;
