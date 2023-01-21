import React from 'react'
import LogoDark from "../assets/images/logo-dark.png";

const Header = () => {
    return (
        <header id="dtr-header-global" className="fixed-top">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    {/* header left starts */}
                    <div className="dtr-header-left">
                        {/* logo */}
                        <a className="logo-default dtr-scroll-link" href="#home">
                        <h4>AIBot</h4>
                        </a>
                        {/* logo on scroll */}
                        <a className="logo-alt dtr-scroll-link" href="#home">
                            <h4>AIBot</h4>
                        </a>
                        {/* logo on scroll ends */}
                    </div>
                    {/* header left ends */}
                    {/* menu starts*/}
                    <div className="main-navigation">
                        <ul className="sf-menu dtr-nav dark-nav-on-load dark-nav-on-scroll">
                            <li>
                                {" "}
                                <a className="nav-link" href="#home">
                                    Home
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a className="nav-link" href="#services">
                                    Features
                                </a>{" "}
                            </li>
                           
                           
                            <li>
                                {" "}
                                <a className="nav-link" href="#pricing">
                                    Pricing
                                </a>{" "}
                            </li>
                           
                            <li>
                                {" "}
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    {/* menu ends */}
                </div>
            </div>
        </header>
    )
}

export default Header
