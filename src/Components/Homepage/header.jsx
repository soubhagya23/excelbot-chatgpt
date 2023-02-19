import React from "react";
import { useAuth } from "../../fireBase/authContext";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import { Button, IconButton, Modal } from "@mui/material";
import { FcApproval } from "react-icons/fc";
import EmailSignUp from "../Login/EmailSignUp";

const Header = () => {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { googleSignIn, user, logOut } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    pt: 2,
    px: 3,
    borderRadius: "10px",
    pb: 3,
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header
        id="dtr-header-global"
        className="fixed-top"
        style={{ backgroundColor: "whitesmoke" }}
      >
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
                  {user ? (
                    <div>
                      <Box sx={{ display: "flex" }} className="dropdown">
                        <IconButton
                          variant="text"
                          size="small"
                          className=""
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src={user.photoURL}
                            alt="picture"
                            className="h-7 w-7 rounded-full"
                          />
                        </IconButton>
                        <ul
                          className="dropdown-menu py-0"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li className="p-2">
                            <h6 className="text-black no-underline pl-3 font-semibold">
                              {user.displayName}
                            </h6>
                            <p className="text-sm -mt-2 pl-3">{user.email}</p>
                          </li>
                          <li>
                            <Link
                              to="/dashboard"
                              className="text-black no-underline"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li className="p-2">
                            <Button
                              className="w-full"
                              onClick={handleSignOut}
                              variant="outlined"
                            >
                              Log Out
                            </Button>
                          </li>
                        </ul>
                      </Box>
                    </div>
                  ) : (
                    <Box>
                      <Button
                        variant="outlined"
                        onClick={handleOpen}
                        style={{
                          backgroundColor: "#05182b",
                          color: "white",
                          textTransform: "none",
                          fontFamily: "Inter",

                          borderRadius: "32px",
                        }}
                      >
                        <FcApproval style={{ marginRight: "10px" }} size={23} />
                        Login
                      </Button>
                    </Box>
                  )}
                </li>
              </ul>
            </div>
            {/* menu ends */}
          </div>
        </div>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style }}>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClose}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div
                className="px-6 py-6 lg:px-8"
                style={{ backgroundColor: "#1a1a1a", borderRadius: 20 }}
              >
                <EmailSignUp />

                <button
                  onClick={handleSignIn}
                  aria-label="Continue with google"
                  role="button"
                  style={{ background: "white" }}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                >
                  <svg
                    width={19}
                    height={20}
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <p className="text-base font-medium ml-4 text-gray-700">
                    Continue with Google
                  </p>
                </button>
              </div>
            </div>
          </Box>
        </Modal>
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
  );
};

export default Header;
