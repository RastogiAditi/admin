import React from 'react'

export default function EarningTab() {
    return (
        <div className='container'>
            <div className="card-deck container">
                <div className="card">
                    <i className='bx bx-dollar icon-dollar' ></i>
                   <span className="carde-title">Earning</span>
                   
                    <h2 className='text-info'><b>&#x24;198K</b> </h2>
                   <br/>
                    <span className='text-info1'> &#8593;37%</span>
                   <span className='text-month'> &#160;this month</span> 
                         </div>
                <div className="card">
                    <i className='bx bx-book icon-order'></i>
                    <span className="carde-title ">Orders</span>
                    <h2 className='text-info'><b>&#x24;2.4K</b> </h2>
                    <span className='text-info2'> &#8595;2%</span>
                    <span  className='text-month'> &#160;this month </span>
                </div>
                <div className="card">
                    <i className='bx bx-wallet-alt icon-bal' ></i>
                    <span className="carde-title">Balance</span>
                    <h2 className='text-info'><b>&#x24;2.4K</b> </h2>
                    <span className='text-info3'> &#8595;2%</span>
                    <span  className='text-month'> &#160;this month </span>
                </div>
                <div className="card">
                    <i className='bx bxs-shopping-bags icon-sales'></i>
                    <span className="carde-title">Total Sales</span>

                    <h2 className='text-info'><b>&#x24;89K</b> </h2>
                    <span className='text-info4'> &#8593;11%</span>
                    <span  className='text-month'> &#160;this week</span>
                </div>

            </div>
        </div>
    )
}
