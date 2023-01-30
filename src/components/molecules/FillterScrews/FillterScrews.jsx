import React from "react";
import LengthScroll from "../../atoms/LengthScroll_LefNavBar/LengthScroll";
import HeadType from "../../atoms/HeadType_LefNavBar/HeadType";
import Materials from "../../atoms/Materials_LefNavBar/Materials";
import Finish from "../../atoms/Finishing_LefNavBar/Finish";
import DriveStyle from "../../atoms/DriveStyle_LefNavBar/DriveStyle";
import Threading from "../../atoms/Threading_LeftNavBar/Threading";
import SocketHeadProfile from "../../atoms/SocketHeadProfile_LeftNavBar/SocketHeadProfile";
import HeadDiameter from "../../atoms/HeadDiameter_LefNavBar/HeadDiameter";
import HeadHeight from "../../atoms/HeadHeight_LefNavBar/HeadHeight";

export default function FillterScrews() {
  return (
    <div className="jg jl SpecSrch_CntnrWithSlider" id="SpecSrch_Cntnr">
      <div className="jh" id="SpecSrch_Inner">
        <div className="SpecSrch_Pane SpecSrch_PaneSize mv">
          <div
            className="SpecSrch_Title" // style={{ width: "177px" }}
          >
            <div className="nm"></div>
            <div className="oc"></div>
          </div>
          <div className="nl"></div>
          <div
            className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
            id="SS_E_475400967847_475400967847"
          >
            <table className="SpecSrch_AttrTitleSpacing">
              <tbody>
                <tr>
                  <td className="ni"></td>
                  <th className="SpecSrch_Lbl lc">
                    <div className="AttrNm_Lbl Hide">System of Measurement</div>
                    System of Measurement
                  </th>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className="ni">
                    <table>
                      <tbody>
                        <tr>
                          <td
                            className="mg mp mr ng ni SpecSrch_Value"
                            id="SS_E_475400967847_475400967847_T_14090729837_14090729837"
                            title=""
                            // style="width:163px;"
                          >
                            <a
                              className="od" //href="system-of-measurement~inch/"
                              href="#"
                            >
                              Inch
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="mg mp mr ng ni SpecSrch_Value"
                            id="SS_E_475400967847_475400967847_T_12551828945_12551828945"
                            title=""
                            // style="width:163px;"
                          >
                            <a
                              className="od" // href="system-of-measurement~metric/"
                              href="#"
                            >
                              Metric
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mn oc"></div>
          <div
            className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
            id="SS_E_266152591711_266152591711"
          >
            <div className="SpecSrch_AttrHeaderAndImageWithIndustrialInfoContainer">
              <table className="SpecSrch_AttrTitleSpacing SpecSrch_AttrTitle_WithIndustrialInfo">
                <tbody>
                  <tr>
                    <td className="ni"></td>
                    <th className="SpecSrch_Lbl lc">
                      <div className="SpecSrch_AttrTitleAndIconContainer SpecSrch_AttrTitleAndIconContainer_FillRow">
                        <div ii-compare-prodvalids="8070433459498,6086123171229,2173483919429,3798014148440,2273149820777,1756715919992,952301588933,1005001782790,1046774814100,1909108945515,1525207669587,341897929811,698257535617,1938828749616,508705207308,255891380752,1662589479762,2782422306662,8794389793721,65494652288,438768655848,2986080738306,749793174687,31002842247,753547990165,35848190356,5789118890472,5692674890673,3069013891523,1942088160875,9618667574769,6282307255696,7127531563200,3576201093784,9091464363461,2833565596237,2328430527728,4812963692198,104681999212,301459828269,1872110148405,4429854214983,4477726469467,3188546304458,124508502341,175513863588,1792526916699,4402088374399,8265312888813,9954794313069,9950996161477,956307683211,447457139656,4286694198514,188544390015,586453436056,3189052785488,4203684579045,189352607036,1067780084839,1026083498229,9549206702184,9713869040028,8937475629415,5628241841083,2177002550614,1104815977044,92562522844,3805125355579,8016491771488,130072600569,1459689234423,585905823202,7834866892624,9266701473690,7358069329421,2482338743024,9115467342954,1222629901707,7180294532510,8779138469403,4001577902843,7775922343770,6713126705429,1914674836889,3495077592503,460627101901,188211128647,5657080703598,1388531811541,2714855500577,1504675890718,8711344770577,9644491516851,4899787644567,9077575583406,3430510233361,4936730026684,2200657434489,1000946426209,2981389702715,2719323451416,3603869376470,13602315341,1022329617868,2671776174980,2966011711887,205565759358,1433896448639,99237628462,1746411622123,859329362633,1819144975635,1242247669470,6590454736356,3032002437875,301595263203,1493783613737,1141008681402,1295247988655,2446313761641,47036627311,3578829933210,7016482913030,3122404412637,183154416417,6616382890951,3426299480957,240324505371,320501665136,956565734319,6186033934777,5587028809839,730973791640,7999735726748,9576166682590,6614312519935,3825489204562,5162024419493,3265139996923,5709051437004,7476863778428,2332230357882,1248487883409,4419513791419,3225505801265,8504179258300,1715855546492,1564220079713,9253003799037,5217424896593,4312143632698,5789751075072,5623155715908,6967419035978,306232885828,494617596004,1630695086638,2672852384976,1146593389358,5565986055166,1023985194495,4698933619444,322315409935,132500783319,3573627985464,702175907440,157502062296,451813461990,4482535846892,1505657674065,565424571833,2222219545476,1054801871263,1374799294642,2254287688006,606271366161,1574994612919,1974082816297,2657423681181,3298490439411,392258665328,1993342352896,1281693477406,4455016838450,8320709898791,4183450682533,6458721197112,3610255082394,1162524019054,5629385696436">
                          <div className="AttrNm_Lbl Hide">Thread Size</div>
                          Thread Size
                        </div>
                        <div className="SpecSrch_IndustrialInfoIconAndCaption SpecSrch_AttrHeading_Compare_IndustrialInfoIcon SpecSrch_AttrHeading_Compare_IndustrialInfoIconPadding SpecSrch_Attribute_IndustrialInfoIconAndCaption">
                          <img
                            id="SpecSrch_imgMoreInfo"
                            className="SpecSrch_IndustrialInfoIcon"
                            title="About Thread Size"
                            src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                            data-filterwithidind="False"
                            width="12"
                            height="12"
                            alt="click to learn more about"
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="SpecSrch_CntxtSrchBx_Wrapper">
              <input
                class="lo"
                maxlength="50"
                type="text"
                id="SS_E_266152591711_266152591711_CS"
                autocomplete="off"
              />
            </div>
            <div class="mx my">
              <table>
                <tbody>
                  <tr>
                    <td class="ni">
                      <table>
                        <tbody>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8070433459498_8070433459498"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">0000-160</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 0000-160 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 0000-160 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6086123171229_6086123171229"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">000-120</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 000-120 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 000-120 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2173483919429_2173483919429"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">00-90</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 00-90 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 00-90 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3798014148440_3798014148440"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">00-96</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 00-96 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 00-96 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2273149820777_2273149820777"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">0-80</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 0-80 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 0-80 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1756715919992_1756715919992"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1-64</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 1-64 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 1-64 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_952301588933_952301588933"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1-72</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 1-72 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 1-72 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1005001782790_1005001782790"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2-56</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 2-56 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 2-56 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1046774814100_1046774814100"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2-64</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 2-64 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 2-64 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1909108945515_1909108945515"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">3-48</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 3-48 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 3-48 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1525207669587_1525207669587"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">3-56</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 3-56 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 3-56 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_341897929811_341897929811"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">4-40</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 4-40 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 4-40 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_698257535617_698257535617"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">4-48</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 4-48 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 4-48 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1938828749616_1938828749616"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">5-40</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 5-40 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 5-40 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_508705207308_508705207308"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">5-44</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 5-44 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 5-44 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_255891380752_255891380752"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">6-32</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 6-32 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 6-32 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1662589479762_1662589479762"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">6-40</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 6-40 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 6-40 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2782422306662_2782422306662"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">6-48</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 6-48 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 6-48 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8794389793721_8794389793721"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">6-80</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 6-80 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 6-80 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_65494652288_65494652288"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">8-32</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 8-32 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 8-32 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_438768655848_438768655848"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">8-36</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 8-36 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 8-36 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2986080738306_2986080738306"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">8-40</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 8-40 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 8-40 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_749793174687_749793174687"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">10-24</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 10-24 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 10-24 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_31002842247_31002842247"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">10-32</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 10-32 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 10-32 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_753547990165_753547990165"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">12-24</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 12-24 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 12-24 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_35848190356_35848190356"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">12-28</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About 12-28 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about 12-28 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5789118890472_5789118890472"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/8</span>"-
                                    </span>
                                    <span class="Wrd">20.8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/8"-20.8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/8"-20.8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5692674890673_5692674890673"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/8</span>"-
                                    </span>
                                    <span class="Wrd">41.7</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/8"-41.7 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/8"-41.7 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3069013891523_3069013891523"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/64</span>"-
                                    </span>
                                    <span class="Wrd">20.8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/64"-20.8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/64"-20.8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1942088160875_1942088160875"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/64</span>"-
                                    </span>
                                    <span class="Wrd">41.7</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/64"-41.7 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/64"-41.7 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9618667574769_9618667574769"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/32</span>"-
                                    </span>
                                    <span class="Wrd">21.3</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/32"-21.3 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/32"-21.3 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6282307255696_6282307255696"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/16</span>"-
                                    </span>
                                    24
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/16"-24 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/16"-24 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7127531563200_7127531563200"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/16</span>"-
                                    </span>
                                    <span class="Wrd">42.7</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/16"-42.7 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/16"-42.7 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3576201093784_3576201093784"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/16</span>"-
                                    </span>
                                    100
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/16"-100 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/16"-100 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9091464363461_9091464363461"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/32</span>"-
                                    </span>
                                    <span class="Wrd">20.8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/32"-20.8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/32"-20.8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2833565596237_2833565596237"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2328430527728_2328430527728"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4812963692198_4812963692198"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    16
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-16 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-16 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_104681999212_104681999212"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-20 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-20 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_301459828269_301459828269"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    28
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-28 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-28 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1872110148405_1872110148405"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    32
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-32 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-32 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4429854214983_4429854214983"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    40
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-40 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-40 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4477726469467_4477726469467"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    80
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-80 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-80 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3188546304458_3188546304458"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/4</span>"-
                                    </span>
                                    100
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/4"-100 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/4"-100 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_124508502341_124508502341"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/16</span>"-
                                    </span>
                                    18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/16"-18 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/16"-18 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_175513863588_175513863588"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/16</span>"-
                                    </span>
                                    24
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/16"-24 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/16"-24 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1792526916699_1792526916699"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/16</span>"-
                                    </span>
                                    32
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/16"-32 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/16"-32 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4402088374399_4402088374399"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8265312888813_8265312888813"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9954794313069_9954794313069"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9950996161477_9950996161477"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_956307683211_956307683211"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    16
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-16 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-16 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_447457139656_447457139656"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-18 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-18 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4286694198514_4286694198514"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-20 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-20 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_188544390015_188544390015"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    24
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-24 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-24 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_586453436056_586453436056"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    32
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-32 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-32 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3189052785488_3189052785488"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/8</span>"-
                                    </span>
                                    40
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/8"-40 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/8"-40 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4203684579045_4203684579045"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/16</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/16"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/16"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_189352607036_189352607036"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/16</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/16"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/16"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1067780084839_1067780084839"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/16</span>"-
                                    </span>
                                    20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/16"-20 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/16"-20 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1026083498229_1026083498229"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9549206702184_9549206702184"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9713869040028_9713869040028"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8937475629415_8937475629415"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5628241841083_5628241841083"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2177002550614_2177002550614"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    13
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-13 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-13 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1104815977044_1104815977044"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-20 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-20 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_92562522844_92562522844"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">1/2</span>"-
                                    </span>
                                    28
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1/2"-28 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1/2"-28 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3805125355579_3805125355579"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/16</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/16"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/16"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8016491771488_8016491771488"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/16</span>"-
                                    </span>
                                    16
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/16"-16 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/16"-16 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_130072600569_130072600569"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/16</span>"-
                                    </span>
                                    18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/16"-18 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/16"-18 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1459689234423_1459689234423"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">9/16</span>"-
                                    </span>
                                    20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 9/16"-20 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 9/16"-20 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_585905823202_585905823202"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7834866892624_7834866892624"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9266701473690_9266701473690"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7358069329421_7358069329421"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2482338743024_2482338743024"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    11
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-11 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-11 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9115467342954_9115467342954"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1222629901707_1222629901707"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">5/8</span>"-
                                    </span>
                                    18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 5/8"-18 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 5/8"-18 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7180294532510_7180294532510"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">11/16</span>"-
                                    </span>
                                    18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 11/16"-18 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 11/16"-18 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8779138469403_8779138469403"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4001577902843_4001577902843"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    <span class="Wrd">
                                      4 <span class="lw">1/2</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-4 1/2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-4 1/2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7775922343770_7775922343770"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6713126705429_6713126705429"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1914674836889_1914674836889"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3495077592503_3495077592503"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_460627101901_460627101901"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_188211128647_188211128647"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">3/4</span>"-
                                    </span>
                                    16
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 3/4"-16 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 3/4"-16 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5657080703598_5657080703598"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/8</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/8"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/8"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1388531811541_1388531811541"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/8</span>"-
                                    </span>
                                    9
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/8"-9 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/8"-9 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2714855500577_2714855500577"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      <span class="lw">7/8</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 7/8"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 7/8"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1504675890718_1504675890718"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-2</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8711344770577_8711344770577"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1"-3 <span class="lw">1/2</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-3 1/2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-3 1/2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9644491516851_9644491516851"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-4</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4899787644567_4899787644567"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9077575583406_9077575583406"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-6</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3430510233361_3430510233361"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4936730026684_4936730026684"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-10</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2200657434489_2200657434489"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-12</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1000946426209_1000946426209"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">1"-14</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2981389702715_2981389702715"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/8</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/8"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/8"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2719323451416_2719323451416"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/8</span>"-
                                    </span>
                                    7
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/8"-7 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/8"-7 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3603869376470_3603869376470"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_13602315341_13602315341"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/8</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/8"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/8"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1022329617868_1022329617868"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/8</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/8"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/8"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2671776174980_2671776174980"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2966011711887_2966011711887"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_205565759358_205565759358"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    7
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-7 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-7 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1433896448639_1433896448639"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_99237628462_99237628462"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1746411622123_1746411622123"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/4</span>"-
                                    </span>
                                    14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/4"-14 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/4"-14 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_859329362633_859329362633"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/8</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/8"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/8"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1819144975635_1819144975635"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/8</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/8"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/8"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1242247669470_1242247669470"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6590454736356_6590454736356"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/8</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/8"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/8"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3032002437875_3032002437875"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    2
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_301595263203_301595263203"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1493783613737_1493783613737"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1141008681402_1141008681402"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-6 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-6 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1295247988655_1295247988655"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2446313761641_2446313761641"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-10 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-10 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_47036627311_47036627311"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">1/2</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 1/2"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 1/2"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3578829933210_3578829933210"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">5/8</span>"-
                                    </span>
                                    <span class="Wrd">
                                      5 <span class="lw">1/2</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 5/8"-5 1/2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 5/8"-5 1/2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7016482913030_7016482913030"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">5/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 5/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 5/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3122404412637_3122404412637"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">5/8</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 5/8"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 5/8"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_183154416417_183154416417"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/4</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/4"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/4"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6616382890951_6616382890951"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/4</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/4"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/4"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3426299480957_3426299480957"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">3/4</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 3/4"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 3/4"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_240324505371_240324505371"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">7/8</span>"-
                                    </span>
                                    5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 7/8"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 7/8"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_320501665136_320501665136"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">7/8</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 7/8"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 7/8"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_956565734319_956565734319"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      1 <span class="lw">7/8</span>"-
                                    </span>
                                    12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 1 7/8"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 1 7/8"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6186033934777_6186033934777"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2"-2</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5587028809839_5587028809839"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2"-4</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf12">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_730973791640_730973791640"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2"-4 <span class="lw">1/2</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-4 1/2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-4 1/2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7999735726748_7999735726748"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2"-5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-5 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-5 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9576166682590_9576166682590"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2"-8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6614312519935_6614312519935"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">2"-12</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2"-12 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2"-12 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3825489204562_3825489204562"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/4</span>"-
                                    </span>
                                    2
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/4"-2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/4"-2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5162024419493_5162024419493"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/4</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/4"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/4"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3265139996923_3265139996923"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/4</span>"-
                                    </span>
                                    <span class="Wrd">
                                      4 <span class="lw">1/2</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/4"-4 1/2 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/4"-4 1/2 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5709051437004_5709051437004"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/4</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/4"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/4"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_7476863778428_7476863778428"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/2</span>"-
                                    </span>
                                    3
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/2"-3 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/2"-3 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2332230357882_2332230357882"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/2</span>"-
                                    </span>
                                    4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/2"-4 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/2"-4 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1248487883409_1248487883409"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">
                                      2 <span class="lw">1/2</span>"-
                                    </span>
                                    8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title='About 2 1/2"-8 Thread Size'
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt='learn more about 2 1/2"-8 by pressing accesskey, i.'
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4419513791419_4419513791419"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M0.5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M0.5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M0.5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3225505801265_3225505801265"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M0.8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M0.8 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M0.8 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8504179258300_8504179258300"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M0.9</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M0.9 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M0.9 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1715855546492_1715855546492"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M1
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1564220079713_1564220079713"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M1.2</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1.2 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1.2 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_9253003799037_9253003799037"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M1.4</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1.4 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1.4 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5217424896593_5217424896593"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M1.6</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1.6 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1.6 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4312143632698_4312143632698"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M1.7</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1.7 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1.7 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5789751075072_5789751075072"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M1.8</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M1.8 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M1.8 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5623155715908_5623155715908"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M2
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M2 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M2 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6967419035978_6967419035978"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M2.2</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M2.2 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M2.2 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_306232885828_306232885828"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M2.5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M2.5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M2.5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_494617596004_494617596004"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M2.6</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M2.6 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M2.6 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1630695086638_1630695086638"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M3
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M3 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M3 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2672852384976_2672852384976"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M3.5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M3.5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M3.5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1146593389358_1146593389358"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M4
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M4 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M4 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5565986055166_5565986055166"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M4.5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M4.5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M4.5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1023985194495_1023985194495"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M5
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4698933619444_4698933619444"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M5.5</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M5.5 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M5.5 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_322315409935_322315409935"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M6
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M6 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M6 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_132500783319_132500783319"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M7
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M7 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M7 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3573627985464_3573627985464"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    <span class="Wrd">M7.25</span>
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M7.25 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M7.25 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_702175907440_702175907440"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M8
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M8 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M8 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_157502062296_157502062296"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M10
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M10 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M10 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_451813461990_451813461990"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M12
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M12 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M12 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4482535846892_4482535846892"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M14
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M14 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M14 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1505657674065_1505657674065"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M16
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M16 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M16 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_565424571833_565424571833"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M18
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M18 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M18 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2222219545476_2222219545476"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M20
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M20 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M20 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1054801871263_1054801871263"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M22
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M22 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M22 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1374799294642_1374799294642"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M24
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M24 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M24 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2254287688006_2254287688006"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M25
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M25 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M25 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_606271366161_606271366161"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M26
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M26 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M26 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1574994612919_1574994612919"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M27
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M27 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M27 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1974082816297_1974082816297"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M28
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M28 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M28 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_2657423681181_2657423681181"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M30
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M30 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M30 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3298490439411_3298490439411"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M33
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M33 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M33 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_392258665328_392258665328"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M36
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M36 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M36 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1993342352896_1993342352896"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M39
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M39 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M39 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1281693477406_1281693477406"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M40
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M40 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M40 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4455016838450_4455016838450"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M42
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M42 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M42 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_8320709898791_8320709898791"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M45
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M45 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M45 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_4183450682533_4183450682533"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M48
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M48 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M48 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_6458721197112_6458721197112"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M56
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M56 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M56 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_3610255082394_3610255082394"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M60
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M60 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M60 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_1162524019054_1162524019054"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M64
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M64 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M64 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="btf24">
                            <td
                              class="mg ng ni SpecSrch_Value"
                              id="SS_E_266152591711_266152591711_T_5629385696436_5629385696436"
                              title=""
                            >
                              <div
                                class="SpecSrch_ValAndIndustrialInfoContainer SpecSrch_ValAndIndustrialInfoContainerHorizontal"
                                tabindex="0"
                              >
                                <div class="SpecSrch_IndustrialInfoTextContainer mp mr">
                                  <a class="od" href="#">
                                    M70
                                  </a>
                                </div>
                                <div class="SpecSrch_IndustrialInfoIconAndCaption mp mr">
                                  <img
                                    class="SpecSrch_IndustrialInfoIcon"
                                    title="About M70 Thread Size"
                                    src="https://images1.mcmaster.com/mvC/gfx/IndustrialInfo/industrial-information-icon.svg?ver=1594717164"
                                    data-filterwithidind="False"
                                    width="12"
                                    height="12"
                                    alt="learn more about M70 by pressing accesskey, i."
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mn oc"></div>
            <div
              className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
              id="SS_E_628363707792_628363707792"
            >
              <table class="SpecSrch_AttrTitleSpacing">
                <tbody>
                  <tr>
                    <td class="ni"></td>
                    <th class="SpecSrch_Lbl lc">
                      <div class="AttrNm_Lbl Hide">Length</div>Length
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className="lb">
                <img
                  src="https://www.mcmaster.com/mvC/Contents/gfx/ImageCache/4x-/4x-s688-sb01-socketheadcapscrews-headstyle-length-spec--84c2d2cf0041602596167-p9@1x_637381755813972181.png?ver=ImageNotFound"
                  alt="default"
                  srcset="https://www.mcmaster.com/mvC/Contents/gfx/ImageCache/4x-/4x-s688-sb01-socketheadcapscrews-headstyle-length-spec--84c2d2cf0041602596167-p9@1x_637381755813972181.png?ver=ImageNotFound 1x, https://www.mcmaster.com/mvC/Contents/gfx/ImageCache/4x-/4x-s688-sb01-socketheadcapscrews-headstyle-length-spec--84c2d2cf0041602596167-p9@1x_637381755813972181.png?ver=ImageNotFound 2x, https://www.mcmaster.com/mvC/Contents/gfx/ImageCache/4x-/4x-s688-sb01-socketheadcapscrews-headstyle-length-spec--84c2d2cf0041602596167-p9@1x_637381755813972181.png?ver=ImageNotFound 3x, https://www.mcmaster.com/mvC/Contents/gfx/ImageCache/4x-/4x-s688-sb01-socketheadcapscrews-headstyle-length-spec--84c2d2cf0041602596167-p9@1x_637381755813972181.png?ver=ImageNotFound 4x"
                  height="50"
                  width="160"
                />
              </div>
              <div class="SpecSrch_CntxtSrchBx_Wrapper">
                <input
                  class="lo LengthInput"
                  maxlength="50"
                  type="text"
                  id="SS_E_628363707792_628363707792_CS"
                  autocomplete="off"
                />
              </div>
              <div
                className="mx my"
                style={{ width: "173px", height: "144px" }}
              >
                <LengthScroll></LengthScroll>
              </div>
              <div class="mn oc"></div>
              <div
                className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
                id="SS_E_884843973393_884843973393"
              >
                <table class="SpecSrch_AttrTitleSpacing">
                  <tbody>
                    <tr>
                      <td class="ni"></td>
                      <th class="SpecSrch_Lbl lc">
                        <div class="AttrNm_Lbl Hide">Head Type</div>Head Type
                      </th>
                    </tr>
                  </tbody>
                </table>
                <HeadType></HeadType>
              </div>
              <div class="mn oc"></div>
              <div
                className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
                id="SS_E_178992199103_178992199103"
              >
                <table class="SpecSrch_AttrTitleSpacing">
                  <tbody>
                    <tr>
                      <td class="ni"></td>
                      <th class="SpecSrch_Lbl lc">
                        <div class="AttrNm_Lbl Hide">Material</div>Material
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div class="SpecSrch_CntxtSrchBx_Wrapper">
                  <input
                    class="lo"
                    maxlength="50"
                    type="text"
                    id="SS_E_178992199103_178992199103_CS"
                    autocomplete="off"
                    style={{ width: "122px" }}
                  />
                </div>
                <div
                  className="mx my"
                  style={{ width: "173px", height: "144px" }}
                >
                  <Materials></Materials>
                </div>
              </div>
              <div class="mn oc"></div>
              <div
                className="SpecSrch_Attribute SpecSrch_AttrShow SpecSrch_AttrExpanded"
                id="SS_E_871670746939_871670746939"
              >
                <table class="SpecSrch_AttrTitleSpacing">
                  <tbody>
                    <tr>
                      <td class="ni"></td>
                      <th class="SpecSrch_Lbl lc">
                        <div class="AttrNm_Lbl Hide">Finish</div>Finish
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div class="SpecSrch_CntxtSrchBx_Wrapper">
                  <input
                    class="lo"
                    maxlength="50"
                    type="text"
                    id="SS_E_871670746939_871670746939_CS"
                    autocomplete="off"
                    style={{ width: "122px" }}
                  />
                </div>
                <div
                  className="mx my"
                  style={{ width: "173px", height: "144px" }}
                >
                  <Finish></Finish>

                </div>
              </div>
              <div class="mn oc"></div>
              <DriveStyle></DriveStyle>
              <div class="mn oc"></div>
              <Threading></Threading>
              <div class="mn oc"></div>
              <SocketHeadProfile></SocketHeadProfile>
              <div class="mn oc"></div>
              <HeadDiameter></HeadDiameter>
              <div class="mn oc"></div>
              <HeadHeight></HeadHeight>
            </div>
          </div>
        </div>
      </div>
      <div class="clearDiv"></div>
    </div>
  );
}
