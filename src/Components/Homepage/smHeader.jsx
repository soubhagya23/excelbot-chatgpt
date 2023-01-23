import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../fireBase/authContext';
import { FiMenu } from 'react-icons/fi';
// import LogoDark from "../assets/images/logo-dark.png";

const SmHeader = () => {
  const [show, setShow] = useState(false);

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
    <div>
      <div className="dtr-responsive-header header-with-slick-menu fixed-top">
        <div className="container d-flex justify-content-between">
          {/* small devices logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Menu Icon */}
            <Box sx={{ pb: '10px', mr: '15px', cursor: 'pointer' }} onClick={() => { setShow(!show) }}>
              <FiMenu size='25px' />
            </Box>
            <a className="dtr-logo" href="index.html">
              {/*  <img src={LogoDark} alt="logo" /> */}
              <h4>AIBot</h4>
            </a>{" "}
          </Box>
          {/* small devices logo ends */}
          {
            user &&
            <Box sx={{ display: 'flex' }}>
              <NavLink to='/dashboard' className='no-underline'>
                <IconButton variant='text'><CgProfile size='24px' color='blue' /></IconButton>
              </NavLink>
            </Box>
          }
        </div>
        {
          show &&
          <ul className="sf-menu dtr-nav dark-nav-on-load dark-nav-on-scroll d-flex flex-column justify-content-center container mx-auto">
            <li>
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#services">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li>
              {user ?
                <div>
                  <Box sx={{ display: 'flex' }}>
                    <Button onClick={handleSignOut} variant='outlined' sx={{width: '100px', mt: '5px'}}>Log Out</Button>
                  </Box>
                </div>
                :
                <Box>
                  <Button onClick={handleSignIn} variant='contained'><Box sx={{ pr: 2, pb: '1px' }}><GrGoogle size='20px' /></Box>Log In</Button>
                </Box>
              }
            </li>
          </ul>
        }

      </div>
    </div>
  )
}

export default SmHeader
