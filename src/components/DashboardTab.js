import React from 'react'

export default function DashboardTab() {
    return (
        <div>
            <nav className='sidebar'>
                <header>
                    <div className='dashboardtab'>
                    <i className='bx bxs-dashboard menu-icon'><b> Dashboard</b></i>
                    </div>
                    <div className='menu-bar'>
                        <div className='menu'>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                    <i className='bx bx-home-circle tab-icon'></i>
                                        <span className="menu-title">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="collapse" href="/" aria-expanded="false">
                                        <i className='bx bxl-product-hunt tab-icon' ></i>
                                        <span className="menu-title">Products</span>
                                        <i className='bx bx-chevron-right tab-icon-arrow'></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="collapse" href="/" aria-expanded="false" >
                                        <i className='bx bxs-user tab-icon'></i>
                                        <span className="menu-title">Customers</span>
                                        <i className='bx bx-chevron-right tab-icon-arrow'></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="collapse" href="/" aria-expanded="false" >
                                        <i className='bx bx-wallet-alt tab-icon'></i>
                                        <span className="menu-title">Income</span>
                                        <i className='bx bx-chevron-right tab-icon-arrow'></i>
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="collapse" href="/" aria-expanded="false" >
                                        <i className='bx bxs-offer tab-icon'></i>
                                        <span className="menu-title">Promote</span>
                                        <i className='bx bx-chevron-right tab-icon-arrow'></i>
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>



                </header>
            </nav>
        </div>
    )
}
