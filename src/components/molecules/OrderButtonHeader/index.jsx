import React, { useState } from "react";

const OrderButtonHeader = (props) => {
  const [orderCount, setOrderCount] = useState(0);
  return (
    <div
      id="ShellLayout_MastheadNav_Container"
      className="shell-layout-masthead-nav-container"
    >
      <nav className="masthead-nav">
        <ul className="masthead-nav-ul">
          <li className="li-masthead li-masthead--order">
            <a
              className="masthead-nav-anchor"
              id="ShellLayout_CurrOrd_Btn"
              href="#"
            >
              Order
            </a>
            {/*  */}
            {orderCount !== 0 ? (
              <div className="wrapper-ordernotif">
                <div className="wrapper-ordernotifitemview">
                  <span className="badge-masthead--notifs">{orderCount}</span>
                  <div className="wrapper-ordernotiflines no-order-lines">
                    <div className="ordernotiflines-cntnr"></div>
                    <div className="ordernotif-view-order">View Order</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="wrapper-ordernotif hidden">
                <div className="wrapper-ordernotifitemview">
                  <span className="badge-masthead--notifs">{orderCount}</span>
                  <div className="wrapper-ordernotiflines no-order-lines">
                    <div className="ordernotiflines-cntnr"></div>
                    <div className="ordernotif-view-order">View Order</div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="li-masthead li-masthead--ordhist">
            <a
              className="masthead-nav-anchor"
              id="ShellLayout_OrdHist_Btn"
              href="#"
            >
              Order History
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderButtonHeader;
