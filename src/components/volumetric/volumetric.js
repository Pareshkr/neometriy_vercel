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

        <div className="w-10/12 p-4 flex">
          <div className="w-3/5 h-full flex flex-col justify-between">
            <div className="w-full h-3/4">
              <Video />
            </div>
            <div className="w-full pr-3 h-1/4">
              <Controller />
            </div>
          </div>
          <DetectedResult/>
        </div>
      </div>
    </>
  );
}
