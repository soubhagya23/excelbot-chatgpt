import React from "react";
import { MdMessage } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { Button } from "@mui/material";
import { Tab } from "@headlessui/react";

const FixedBottomNavigation = (props) => {

  const handleClick = () => {
    const storedChats = localStorage.allChats ? JSON.parse(localStorage.getItem('allChats')) : [];
    const allChats = [...storedChats, props.chats];
    localStorage.setItem('allChats', JSON.stringify(allChats));
    localStorage.setItem('response', JSON.stringify([]));
    props.func([]);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {/*     <div className="">
      <section id="bottom-navigation" className="block fixed inset-x-0 mt-3 z-10 bottom-0 bg-gray-200 shadow-lg w-full mx-auto">
        <div id="tabs" className="flex justify-evenly">
          <div className="w-full focus:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <Link to='/dashboard/chats'><span className="text-xs"><MdMessage size='25px' className="mx-auto hover:text-blue-500 text-gray-600" /></span></Link>
          </div>

          <div className="w-full focus:text-blue-500 justify-center inline-block text-center pt-2 pb-1 shadow-lg">
            <Popover>
              <PopoverHandler>
                <span className="block text-xs"><BsPlusCircleFill size='25px' className="mx-auto hover:text-blue-500" /></span>
              </PopoverHandler>
              <PopoverContent>
                <div>
                  <p className="text-[16px] font-semibold">Do you want to save the Chats?</p>
                  <div className="flex space-x-3 justify-center">
                    <Button variant="contained" onClick={handleClick}>Yes</Button>
                    <Button variant="outlined">No</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-full focus:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <Popover>
              <PopoverHandler>
                <span className="block text-xs"><CgProfile size='25px' className="mx-auto  hover:text-blue-500" /></span>
              </PopoverHandler>
              <PopoverContent className="">
                profile
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>
    </div>
 */}


      <div className="w-full max-w-md px-2 sm:px-0" style={{ position: 'fixed', bottom: 0, marginBottom: 10 }}>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-green-600/60 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Home
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Chat
            </Tab>
            <Popover>
              <PopoverHandler>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Profile
                </Tab>
              </PopoverHandler>
              <PopoverContent>
                <div>
                  Profile
                </div>
              </PopoverContent>
            </Popover>
          </Tab.List>
        </Tab.Group>
      </div>
    </>
  );
}

export default FixedBottomNavigation;
