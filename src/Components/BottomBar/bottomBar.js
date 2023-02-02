import React from "react";
import { MdMessage } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { Button } from "@mui/material";

const FixedBottomNavigation = (props) => {

  const handleClick = () => {
    const storedChats = localStorage.allChats ? JSON.parse(localStorage.getItem('allChats')) : [];
    const allChats = [...storedChats, props.chats];
    localStorage.setItem('allChats', JSON.stringify(allChats)) ;
    localStorage.setItem('response', JSON.stringify([])) ;
    props.func([]);
  }

  return (
    <div className="">
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
  );
}

export default FixedBottomNavigation;
