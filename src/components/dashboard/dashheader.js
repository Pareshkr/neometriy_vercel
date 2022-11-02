import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";

export default function DashHeader() {
  return (
    <>
      <div className="w-full h-full bg-white pl-4 pt-2 pr-4 flex justify-between">
        <div className="w-1/4 h-full text-2xl font-sans text-gray-600 font-bold tracking-wide">
          Dashboard
        </div>
        <div className="w-1/4 h-full flex space-between space-x-4 justify-end">
            <div className="text-3xl text-gray-500"><IoMdNotifications/></div>
            <div className="text-3xl text-gray-500"><HiUserCircle/></div>
            <div className="text-lg font-semibold tracking-wider text-gray-500">Paresh Barik</div>
        </div>
      </div>
    </>
  );
}
