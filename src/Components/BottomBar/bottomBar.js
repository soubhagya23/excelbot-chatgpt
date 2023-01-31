import React from "react";
import { MdMessage } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const FixedBottomNavigation = () => {
  return (
    <div className="">
      <section id="bottom-navigation" className="block fixed inset-x-0 mt-3 z-10 bottom-0 bg-gray-200 shadow-lg w-full mx-auto">
        <div id="tabs" className="flex justify-evenly">
          <div className="w-full focus:text-blue-400 justify-center inline-block text-center pt-2 pb-1">
            <span className="tab tab-home text-xs"><MdMessage size='25px' className="mx-auto hover:text-blue-400"/></span>
          </div>

          <div className="w-full focus:text-blue-400 justify-center inline-block text-center pt-2 pb-1">
            <span className="tab tab-kategori block text-xs"><BsPlusCircleFill size='25px' className="mx-auto hover:text-blue-400"/></span>
          </div>

          <div className="w-full focus:text-blue-400 justify-center inline-block text-center pt-2 pb-1">
            <span className="tab tab-explore block text-xs"><CgProfile size='25px' className="mx-auto  hover:text-blue-400"/></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FixedBottomNavigation;
