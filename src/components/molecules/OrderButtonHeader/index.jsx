import React from 'react';

const OrderButtonHeader = () => {
    return (
        <div id="ShellLayout_MastheadNav_Container" className='shell-layout-masthead-nav-container'>
            <nav className='masthead-nav'>
                <ul className='masthead-nav-ul'>
                    <li className='li-masthead li-masthead--order'>
                        <a className='masthead-nav-anchor' id='ShellLayout_CurrOrd_Btn' href='#'>Order</a>
                        <div className='wrapper-ordernotif'>
                            <div tabIndex='-1' className='wrapper-ordernotifitemview'>
                                <span className='badge-masthead--notifs'></span>
                                <div></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default OrderButtonHeader;