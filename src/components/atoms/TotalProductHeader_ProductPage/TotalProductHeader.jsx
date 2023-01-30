import React from "react";

export default function TotalProductHeader() {
  return (
    <div id="WebToolset_ProdPageContent" style= {{height: '22px'}}>
      <div
        class="WebToolsetWebPart_Cntnr WebToolsetWebPart-border"
        style={{width: '1105px'}}
      >
        <div class="WebToolsetToolWebPart_Cntnr WebToolsetToolWebPart_Aligned_RIGHT WebToolsetToolWebPart_forward WebToolsetToolWebPart_RightmostTool_Cntnr">
          <a
            href="#"
            data-mcm-webtoolset-identifier="true"
            data-mcm-tool-name="FwdLnkTool"
            title="Email a link to these products"
            className="ai"
          >
            Forward
          </a>
        </div>
        <div class="WebToolsetToolWebPart_FormCntnr" style= {{top: '21px'}}>
          <div class="WebToolsetToolWebPart_LeftBorder"> </div>
          <div class="WebToolsetToolWebPart_CloseBtn">
            <a
              id="FrwLnkCancelClick"
              href="#"
              className="ai "
              style={{}}
            >
            </a>
          </div>
          <form action="#" class="WebToolsetToolWebPart_FwdLnkTool_Form">
            <div class="WebToolsetToolWebPart_Lbl">
              Enter e-mail addresses in the fields below
            </div>
            <div class="WebToolsetToolWebPart_ToAreaCntnr">
              <label id="tolabel" for="fwdTo">
                To
              </label>
              <input
                id="fwdTo"
                type="text"
                value=""
                maxlength="50"
                class="WebToolsetToolWebPart_ToEmailInp"
              />
            </div>
            <div class="WebToolsetToolWebPart_FromAreaCntnr">
              <label id="fromlabel" for="fwdFrom">
                From
              </label>
              <input
                id="fwdFrom"
                type="text"
                value=""
                maxlength="50"
                class="WebToolsetToolWebPart_FrmEmailInp"
              />
            </div>
            <div class="WebToolsetToolWebPart_Lbl">Message</div>
            <textarea
              cols="52"
              rows="6"
              id="messagetxt"
              class="WebToolsetToolWebPart_MsgInp"
            ></textarea>
            <div class="WebToolsetToolWebPart_LinkAreaCntnr">
              <label id="linklabel" for="fwdLink">
                Link
              </label>
              <input
                id="fwdLink"
                type="text"
                value=""
                readonly=""
                class="WebToolsetToolWebPart_URLInp"
              />
            </div>
            <div class="WebToolsetToolWebPart_ErrMsgCntnr"></div>
            <div class="WebToolsetToolWebPart_Btns">
              <button class="button-forward-order forward-link">
                <span class="button-reset--IE">Send</span>
              </button>
              <a class="link-undo cancel-forward-link" title="">
                Cancel
              </a>
              <div style={{clear: 'both'}}></div>
            </div>
          </form>
          <div
            class="DropShadow AbsolutelyPositionedDropShadow"
            style={{zIndex: '-2'}}
          ></div>
        </div>
        <div class="WebToolsetToolWebPart_ConfirmationMsg" style="top: 21px;">
          <div class="WebToolsetToolWebPart_ConfirmationMsgTxt"></div>
          <div class="WebToolsetToolWebPart_LeftBorder"> </div>
          <div class="WebToolsetToolWebPart_CloseBtn">
            <a
              id="FrwLnkCloseCnfrmMsgClick"
              href="#"
              class="ai"
              style="background-image: url(/mvC/gfx/HomePageImages.png?ver=1622796110);"
            ></a>
          </div>
        </div>
        <div class="WebToolsetToolWebPart_Cntnr WebToolsetToolWebPart_Aligned_RIGHT WebToolsetToolWebPart_print">
          <a
            href="#"
            data-mcm-webtoolset-identifier="true"
            data-mcm-tool-name="PrintTool"
            class="ai"
          >
            Print
          </a>
        </div>
        <div class="WebToolsetToolWebPart_Cntnr WebToolsetToolWebPart_Aligned_RIGHT WebToolsetToolWebPart_how-can-we-improve">
          <a
            href="#"
            data-mcm-webtoolset-identifier="true"
            data-mcm-tool-name="FeedbackTool"
            class="ai"
          >
            How can we improve?
          </a>
        </div>
        <div
          class="WebToolsetToolWebPart_FormCntnr"
          style="font: 12px arial, helvetica, sans-serif; top: 21px;"
        >
          <div class="WebToolsetToolWebPart_LeftBorder"> </div>
          <div class="WebToolsetToolWebPart_CloseBtn">
            <a
              id="FeedbackToolCancelClick"
              href="#"
              class="ai"
              style="background-image: url(/mvC/gfx/HomePageImages.png?ver=1622796110);"
            ></a>
          </div>
          <form action="#" class="WebToolsetToolWebPart_FeedbackTool_Form">
            <div class="WebToolsetToolWebPart_Lbl">Comments</div>
            <textarea
              cols="52"
              rows="5"
              class="WebToolsetToolWebPart_MsgInp"
            ></textarea>
            <div class="WebToolsetToolWebPart_Lbl">
              E-mail address (if you would like a response)
            </div>
            <div>
              <input
                type="text"
                value=""
                maxlength="50"
                class="WebToolsetToolWebPart_FrmEmailInp"
              />
            </div>
            <div class="WebToolsetToolWebPart_ErrMsgCntnr"></div>
            <div class="WebToolsetToolWebPart_Btns">
              <button class="button-send-feedback-toolset send-feedback-toolset">
                <span class="button-reset--IE">Send</span>
              </button>
              <a class="link-undo cancel-feedback-toolset" title="">
                Cancel
              </a>
              <div style="clear: both;"></div>
            </div>
          </form>
          <div
            class="DropShadow AbsolutelyPositionedDropShadow"
            style="z-index: -2;"
          ></div>
        </div>
        <div class="WebToolsetToolWebPart_ConfirmationMsg" style="top: 21px;">
          <div class="WebToolsetToolWebPart_ConfirmationMsgTxt"></div>
          <div class="WebToolsetToolWebPart_LeftBorder"> </div>
          <div class="WebToolsetToolWebPart_CloseBtn">
            <a
              id="FeedbackToolCloseCnfrmMsg"
              href="#"
              class="ai"
              style="background-image: url(/mvC/gfx/HomePageImages.png?ver=1622796110);"
            ></a>
          </div>
        </div>
        <div class="WebToolsetToolWebPart_Cntnr WebToolsetToolWebPart_Aligned_LEFT WebToolsetToolWebPart_TxtTool_Cntnr">
          76,290 Products
        </div>
      </div>
    </div>
  );
}
