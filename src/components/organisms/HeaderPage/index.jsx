import React, { useState } from "react";




export default function HeaderPage() {
  const [visibleMenuCateHeader, setVisibleMenuCateHeader] = useState(false);
  const handleOpenMenuCateHeader = () => {
    return setVisibleMenuCateHeader((current) => !current);
  }
  return (
    <header class="container-masthead" id="ShellLayout_Header_Cntnr">
      <div id="ShellLayout_BrowseCatalog_Cntnr">
        <div id="BrowseCatalog_Cntnr">
          <div id="BrowseCatalog_ButtonCntnr">
            <img
              id="BrowseCatalog_ButtonImg"
              src="https://images1.mcmaster.com/init/gfx/home/CategoryTiles/Browse-Catalog-Icon.png?ver=1640884702"
            />
            <button type="button" id="BrowseCatalog_Button" onClick={handleOpenMenuCateHeader}>
              BROWSE CATALOG
            </button>
          </div>
          {visibleMenuCateHeader === true && (
            <>
              <div class="overlay"></div>
              <section class="browse-catalog-menu">
                <header>
                  <a class="logo-link" href="/" tabindex="-1">
                    <img
                      preserveaspectratio="xMinYMin meet"
                      alt="McMaster-Carr Logo"
                      src="https://images1.mcmaster.com/init/gfx/MastheadLogo.svg?ver=1545146094"
                    />
                  </a>
                  <button
                    class="close-button"
                    alt="Browse Category Menu Close Button"
                    tabindex="-1"
                    title="close"
                  ></button>
                </header>
                <ul class="category-list">
                  <li>
                    <a
                      id="catg0_Abrading-Polishing"
                      class="category-tile"
                      href="/abrading-and-polishing"
                      tabindex="-1"
                    >
                      <img
                        alt="Abrading &amp; Polishing"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Abrading-and-Polishing-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Abrading &amp; Polishing
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg1_Building-Grounds"
                      class="category-tile"
                      href="/building-and-grounds"
                      tabindex="-1"
                    >
                      <img
                        alt="Building &amp; Grounds"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Building-and-Grounds-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Building &amp; Grounds</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg2_Electrical-Lighting"
                      class="category-tile"
                      href="/electrical-and-lighting"
                      tabindex="-1"
                    >
                      <img
                        alt="Electrical &amp; Lighting"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Electrical-and-Lighting-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Electrical &amp; Lighting
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg3_Fabricating"
                      class="category-tile"
                      href="/fabricating"
                      tabindex="-1"
                    >
                      <img
                        alt="Fabricating"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Fabricating-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Fabricating</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg4_Fastening-Joining"
                      class="category-tile"
                      href="/fastening-and-joining"
                      tabindex="-1"
                    >
                      <img
                        alt="Fastening &amp; Joining"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Fastening-and-Joining-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Fastening &amp; Joining</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg5_Filtering"
                      class="category-tile"
                      href="/filtering"
                      tabindex="-1"
                    >
                      <img
                        alt="Filtering"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Filtering-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Filtering</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg6_Flow-Level-Control"
                      class="category-tile"
                      href="/flow-and-level-control"
                      tabindex="-1"
                    >
                      <img
                        alt="Flow &amp; Level Control"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Flow-and-Level-Control-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Flow &amp; Level Control
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg7_Furniture-Storage"
                      class="category-tile"
                      href="/furniture-and-storage"
                      tabindex="-1"
                    >
                      <img
                        alt="Furniture &amp; Storage"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Furniture-and-Storage-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Furniture &amp; Storage</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg8_Hand-Tools"
                      class="category-tile"
                      href="/hand-tools"
                      tabindex="-1"
                    >
                      <img
                        alt="Hand Tools"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Hand-Tools-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Hand Tools</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg9_Hardware"
                      class="category-tile"
                      href="/hardware"
                      tabindex="-1"
                    >
                      <img
                        alt="Hardware"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Hardware-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Hardware</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg10_Heating-Cooling"
                      class="category-tile"
                      href="/heating-and-cooling"
                      tabindex="-1"
                    >
                      <img
                        alt="Heating &amp; Cooling"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Heating-and-Cooling-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Heating &amp; Cooling</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg11_Lubricating"
                      class="category-tile"
                      href="/lubricating"
                      tabindex="-1"
                    >
                      <img
                        alt="Lubricating"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Lubricating-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Lubricating</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg12_Material-Handling"
                      class="category-tile"
                      href="/material-handling"
                      tabindex="-1"
                    >
                      <img
                        alt="Material Handling"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Material-Handling-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Material Handling</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg13_Measuring-Inspecting"
                      class="category-tile"
                      href="/measuring-and-inspecting"
                      tabindex="-1"
                    >
                      <img
                        alt="Measuring &amp; Inspecting"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Measuring-and-Inspecting-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Measuring &amp; Inspecting
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg14_Office-Supplies-Signs"
                      class="category-tile"
                      href="/office-supplies-and-signs"
                      tabindex="-1"
                    >
                      <img
                        alt="Office Supplies &amp; Signs"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Office-Supplies-and-Signs-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Office Supplies &amp; Signs
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg15_Pipe-Tubing-Hose-Fittings"
                      class="category-tile"
                      href="/pipe-tubing-hose-and-fittings"
                      tabindex="-1"
                    >
                      <img
                        alt="Pipe, Tubing, Hose &amp; Fittings"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Pipe-Tubing-Hose-and-Fittings-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Pipe, Tubing, Hose &amp; Fittings
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg16_Plumbing-and-Janitorial"
                      class="category-tile"
                      href="/plumbing-and-janitorial"
                      tabindex="-1"
                    >
                      <img
                        alt="Plumbing and Janitorial"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Plumbing-and-Janitorial-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Plumbing and Janitorial</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg17_Power-Transmission"
                      class="category-tile"
                      href="/power-transmission"
                      tabindex="-1"
                    >
                      <img
                        alt="Power Transmission"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Power-Transmission-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Power Transmission</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg18_Pressure-Temperate-Control"
                      class="category-tile"
                      href="/pressure-and-temperature-control"
                      tabindex="-1"
                    >
                      <img
                        alt="Pressure &amp; Temperate Control"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Pressure-and-Temperature-Control-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">
                        Pressure &amp; Temperate Control
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg19_Pulling-Lifting"
                      class="category-tile"
                      href="/pulling-and-lifting"
                      tabindex="-1"
                    >
                      <img
                        alt="Pulling &amp; Lifting"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Pulling-and-Lifting-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Pulling &amp; Lifting</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg20_Raw-Materials"
                      class="category-tile"
                      href="/raw-materials"
                      tabindex="-1"
                    >
                      <img
                        alt="Raw Materials"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Raw-Materials-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Raw Materials</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg21_Safety-Supplies"
                      class="category-tile"
                      href="/safety-supplies"
                      tabindex="-1"
                    >
                      <img
                        alt="Safety Supplies"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Safety-Supplies-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Safety Supplies</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg22_Sawing-Cutting"
                      class="category-tile"
                      href="/sawing-and-cutting"
                      tabindex="-1"
                    >
                      <img
                        alt="Sawing &amp; Cutting"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Sawing-and-Cutting-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Sawing &amp; Cutting</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg23_Sealing"
                      class="category-tile"
                      href="/sealing"
                      tabindex="-1"
                    >
                      <img
                        alt="Sealing"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Sealing-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Sealing</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg24_Shipping"
                      class="category-tile"
                      href="/shipping"
                      tabindex="-1"
                    >
                      <img
                        alt="Shipping"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Shipping-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Shipping</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="catg25_Suspending"
                      class="category-tile"
                      href="/suspending"
                      tabindex="-1"
                    >
                      <img
                        alt="Suspending"
                        src="https://images1.mcmaster.com/init/gfx/home/BrowseCatalogCategoryImages/1x/Suspending-Catalog.png?ver=1658507392"
                      />
                      <span class="category-name">Suspending</span>
                    </a>
                  </li>
                  <li></li>
                </ul>
              </section>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
