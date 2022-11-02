import React, { useState, useEffect, createContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from '../image/NeoPhyte_logo.gif'
export default function Login() {
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden py-10  bg-white rounded-md shadow-lg max md:flex-row md:flex-1 my-20 lg:max-w-screen-md">
          <div className="p-5 w-full bg-white md:flex-1">
            {/* <Image className="w-full m-auto  " src={Logo} width={150} height={70} alt="Img"/> */}
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Sign in
            </h3>
            {/* <Formik initialValues={initialValues} onSubmit={onSubmit}> */}
            <div className="flex flex-col space-y-5">
              <div className="text-sm  font-semibold text-gray-500">
                to access Accounts
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="number"
                  label="Number"
                  name="number"
                  placeholder="Mobile number"
                  autoFocus
                  className="px-4 py-2 w-full transition duration-300 border border-gray-300 rounded bg-gray-100 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div>
                <NavLink to={`/dashboard`}>
                  <button
                    // onClick={loginAction}
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Send OTP
                  </button>
                </NavLink>
              </div>
              <div id="recaptcha-container"></div>
              {/* <span className="text-md text-blue-400 font-semibold hover:underline ml-32 focus:text-blue-800">
                Forgot Password?
              </span> */}
              <div className="grid grid-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-200 w-96"></span>
                </span>
              </div>
            </div>
            {/* </Formik> */}
          </div>
          <span className=" flex items-center justify-center space-x-2">
            <span className="h-full bg-gray-100 w-1"></span>
          </span>
          <div className="p-8 py-2  text-black bg-white-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            {/* <img src="pwd.png " a lt="img"></img> */}
            <div className="">
              {" "}
              <img className="w-58 h-12" src={Logo} alt="Neophyte Logo " />
            </div>

            <div className=" text-sm font-bold tracking-wider text-center">
              <span>NEO-METRIC</span>
              <p className="mt-6  py-2 mx-8 mr-8 font-normal text-center text-black-200 md:mt-0">
                Digital image-based Shelf-fullness Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
