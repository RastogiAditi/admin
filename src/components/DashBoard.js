import React from 'react';
export default function DashBoard() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <h1 className="welcome-text"><span className="text-black fw-bold">Hello Shahrukh &#128075;,</span></h1>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                            <button className="btn btn-outline-success" type="submit"><i className='bx bx-search-alt-2' ></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
