import React from 'react'
import { useAuth } from '../../fireBase/authContext';
import { CgProfile } from 'react-icons/cg'
import { GrGoogle } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Button, IconButton } from '@mui/material';
import { spacing } from '@mui/system'
// import LogoDark from "../assets/images/logo-dark.png";

const Header = () => {

    const { googleSignIn, user, logOut } = useAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut();
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
                                    <div>
                                        <Box sx={{display: 'flex'}}>
                                            <NavLink to='/dashboard' className='no-underline'>
                                                <IconButton variant='text' size='small'><CgProfile size='20px' color='blue' /></IconButton>
                                            </NavLink>
                                            <Button onClick={handleSignOut} variant='outlined'>Log Out</Button>
                                        </Box>
                                    </div>
                                    :
                                    <Box>   
                                        <Button onClick={handleSignIn} variant='contained'><Box sx={{ pr: 2, pb: '1px' }}><GrGoogle size='20px'/></Box>Log In</Button>
                                    </Box>
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
