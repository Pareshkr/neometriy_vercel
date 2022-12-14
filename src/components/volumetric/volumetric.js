import React from "react";
import SideNav from "../others/sidenav";
import Video from "./video";
import DetectedResult from "./detectedResult";
import Controller from "./controller";
import demoImage from "../image/demoimage.jpg";
import { MdClass } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaRulerHorizontal } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";

export default function Volumetric() {
  return (
    <>
      <div className="w-full h-full flex bg-gray-100 ">
        <SideNav />
        <div className="w-10/12 h-screen p-4 flex flex-row space-x-4">
          <div className="w-3/5 h-full flex flex-col space-y-4">
            <div className="w-full h-full">
              <Video />
            </div>
            
          </div>
          <div className="w-2/5 h-full">
            <DetectedResult />
          </div>
        </div>
      </div>
    </>
  );
}
