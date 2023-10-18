import React from 'react';

const ProductSellTab = () => {
    return (
        <div className='pst-container'>
            <div className='product-tab'>
                <h2> <b>Product Sell</b></h2>
                <div className='producttabinner'>
                    <input type="text"  className='psearchbar'  placeholder="Search products..." />
                    <button>Search</button>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn'>Last 30 days</button>
                    <div className='dropdownbtninner'>
                        <a href="/">Last 7 days</a>
                        <a href="/">Last 15 days</a>
                        <a href="/">Last 30 days</a>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Stocks</th>
                        <th>Price</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 1</td>
                        <td>50</td>
                        <td>$20</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>30</td>
                        <td>$30</td>
                        <td>$900</td>
                    </tr>
                    {/* Add more rows for other products */}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSellTab;
