import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../fireBase/authContext';
// import LogoDark from "../assets/images/logo-dark.png";

const SmHeader = () => {
  const [show, setShow] = useState(false);

  const { googleSignIn, user } = useAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div>
      <div className="dtr-responsive-header header-with-slick-menu fixed-top">
        <div className="container">
          {/* small devices logo */}
          <div className="dtr-responsive-header-left">
            {" "}
            <a className="dtr-logo" href="index.html">
              {/*  <img src={LogoDark} alt="logo" /> */}
            </a>{" "}
          </div>
          {/* small devices logo ends */}
          {/* menu button */}
          <button id="dtr-menu-button" className="dtr-hamburger" type="button" onClick={() => { setShow(!show) }}>
            <span className="dtr-hamburger-lines-wrapper">
              <span className="dtr-hamburger-lines" />
            </span>
          </button>
        </div>
        {
          show &&
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
              {user.displayName ?
                <NavLink to='/dashboard' className='no-underline'>
                  <div className='flex justify-center items-center text-center cursor-pointer space-x-2'>
                    <h6 className='text-violet-600 font-bold'>{user.displayName}</h6>
                    <CgProfile className='text-lg font-bold text-violet-600' />
                  </div>
                </NavLink>
                :
                <div className=''>
                  <GrGoogle className='text-xl text-white' />
                  <button onClick={handleSignIn} className='font-bold text-lg text-white'>Log In</button>
                </div>
              }
            </li>
          </ul>
        }
      </div>
    </div>
  )
}

export default SmHeader
