import React from "react";
import { VscGraphLine, VscProject } from "react-icons/vsc";

import { MdOutlineContactPage, MdOutlineDocumentScanner } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../image/NeoPhyte_logo.gif";

export default function SideNav() {
  return (
    <>
      <div className="w-2/12 shadow-md bg-white h-screen  ">
        <div className="h-16 shadow-sm">
          <div className="flex justify-center pt-2">
            <img src={Logo} className="w-5/6" alt="Logo" />
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between ">
          <div className="flex flex-col mt-3 py-4 space-y-2  border-b-2 border-white-200">
            <div>
              <NavLink to={`/dashboard`}>
                <p className="relative flex flex-row items-center h-9 px-6 focus:outline-none dark:hover:bg-gray-300 text-white hover:bg-gray-200 hover:w-96 hover:z-20  focus:bg-blue-500 focus:text-white pr-6 ">
                  <span className="inline-flex justify-center items-center ml-2 ">
                    <VscGraphLine className="text-purple-800 font-medium	 text-md" />
                  </span>
                  <span className="ml-3 text-sm text-md font-sans	font-medium	 text-gray-600 tracking-wide truncate">
                    Dashboard
                  </span>
                </p>
              </NavLink>
            </div>

            <div>
              <NavLink to={`/volumetric`}>
                <p className="relative flex flex-row   items-center h-9 px-6 focus:outline-none dark:hover:bg-gray-300 text-white hover:bg-purple-200 hover:w-96 hover:z-20  dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6 ">
                  <span className="inline-flex justify-center items-center ml-2">
                    <VscProject className="text-purple-800 font-medium	 text-md" />
                  </span>
                  <span className="ml-3 text-sm text-md font-sans	font-medium	 text-gray-600 tracking-wide truncate">
                    Volumetric
                  </span>
                </p>
              </NavLink>
            </div>

            {/* <div>
           
                <p className="relative flex flex-row  items-center h-9 px-6 focus:outline-none dark:hover:bg-gray-300 text-white hover:bg-purple-200 hover:w-96 hover:z-20  dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6 ">
                  <span className="inline-flex justify-center items-center ml-2">
                    <BiStore className="text-purple-800 font-medium text-md" />
                  </span>
                  <span className="ml-3 text-sm text-md font-sans	font-medium	 text-gray-600 tracking-wide truncate">
                    Store
                  </span>
                </p>
            
            </div> */}

            {/* <div>
              
                <p className="relative flex flex-row   items-center h-9 px-6 focus:outline-none dark:hover:bg-gray-300 text-white hover:bg-purple-200 hover:w-96 hover:z-20  dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6 ">
                  <span className="inline-flex justify-center items-center ml-2">
                    <BiUser className="text-purple-800 font-medium	 text-md" />
                  </span>
                  <span className="ml-3 text-sm text-md font-sans	font-medium	 text-gray-600 tracking-wide truncate">
                    User
                  </span>
                </p>
          
            </div> */}
          </div>
          <div className="mb-5">
            <div className="flex flex-col  py-4 space-y-2">
              <p className="relative flex flex-row items-center h-9 px-6 focus:outline-none  dark:hover:bg-gray-300 hover:bg-purple-200  text-white hover:text-white  border-transparent dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6">
                <span className="inline-flex justify-center items-center ml-2">
                  <MdOutlineDocumentScanner className="text-purple-800 font-medium text-md" />
                </span>
                <span className="ml-3 text-sm text-gray-600 font-sans text-md	font-medium	 tracking-wide truncate">
                  Documentation
                </span>
              </p>
            </div>
            <div>
              <p className="relative flex flex-row items-center  h-9 px-6 focus:outline-none  dark:hover:bg-gray-300 hover:bg-purple-200  text-white hover:text-white  border-transparent  dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6">
                <span className="inline-flex justify-center items-center ml-2">
                  <MdOutlineContactPage className="text-purple-800 font-medium text-md" />
                </span>
                <span className="ml-3 text-sm text-md font-sans	font-medium	 text-gray-600 tracking-wide truncate">
                  Contact Us
                </span>
              </p>
            </div>
          </div>
          <hr />

          <div className="  absolute bottom-0     ">
            <div className="px-4  pt-5">
              <div className="">
                <p className="mt-auto relative flex flex-row items-center focus:outline-none hover:bg-purple-200  font-sans dark:hover:bg-gray-300 text-gray-700   border-transparent  dark:hover:border-gray-800 focus:bg-blue-500 focus:text-white pr-6">
                  <span className="ml-4 text-sm  text-md	font-medium	 tracking-wide truncate">
                    Version Info
                  </span>
                </p>
              </div>

              <div className="px-5 w-full mt-3">
                <div className="border-t border-gray-400 text-xs py-2 text-gray-700">
                  <p>copyright © 2022 NeoPhyte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
