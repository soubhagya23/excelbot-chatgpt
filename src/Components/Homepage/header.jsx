import React from 'react'
import { useAuth } from '../../fireBase/authContext';
import { GrGoogle } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Button, IconButton } from '@mui/material';

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
        <>
            <header id="dtr-header-global" className="fixed-top" style={{ backgroundColor: 'whitesmoke' }}>
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
                                            <Box sx={{ display: 'flex' }} className='dropdown'>
                                                <IconButton variant='text' size='small' className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><img src={user.photoURL} alt='picture' className='h-7 w-7 rounded-full'/></IconButton>
                                                <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
                                                    <li className='p-2'><h6 className="text-black no-underline pl-3 font-semibold">{user.displayName}</h6>
                                                    <p className='text-sm -mt-2 pl-3'>{user.email}</p></li>
                                                    <li><Link to='/dashboard' className='text-black no-underline'>Dashboard</Link></li>
                                                    <li className='p-2'><Button className='w-full' onClick={handleSignOut} variant='outlined'>Log Out</Button></li>
                                                </ul>
                                            </Box>
                                        </div>
                                        :
                                        <Box>
                                            <Button onClick={handleSignIn} variant='contained'><Box sx={{ pr: 2, pb: '1px' }}><GrGoogle size='20px' /></Box>Log In</Button>
                                        </Box>
                                    }
                                </li>
                            </ul>
                        </div>
                        {/* menu ends */}
                    </div>
                </div>
            </header>
            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div> */}
        </>
    )
}

export default Header
