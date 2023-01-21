import React from 'react'
import { useAuth } from '../../fireBase/authContext';
import { CgProfile } from 'react-icons/cg'
import { GrGoogle } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
// import LogoDark from "../assets/images/logo-dark.png";

const Header = () => {

    const { googleSignIn, user } = useAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error.message);
        }
    }

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
                            <li>
                                {user ?
                                    <NavLink to='/dashboard' className='no-underline'>
                                        <CgProfile className='text-xl font-bold text-violet-600' />
                                    </NavLink>
                                    :
                                    <div className=''>
                                        <GrGoogle className='text-xl text-white' />
                                        <button onClick={handleSignIn} className='font-bold text-lg text-white'>Log In</button>
                                    </div>
                                }
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
