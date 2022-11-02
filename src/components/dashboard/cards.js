import React from "react";
import { FaBox } from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaCube } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Cards(props) {
  const data = props.data;

  return (
    <>
      {data && (
        <div className="w-full h-full flex justify-between space-x-6">
          <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-1.5">
            <div className="w-3/12 h-3/5 flex justify-between self-center bg-violet-300 rounded-full">
              <div className="m-auto text-violet-800 text-2xl">
                <FaBox />
              </div>
            </div>
            <div className="w-7/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
              <div className="w-full h-1/2 text-left font-bold text-2xl">
                {data.data.totol_box}
              </div>
              <div className="w-full h-1/2 text-left font-bold text-lg text-gray-600">
                Total Bins
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-1.5">
            <div className="w-3/12 h-3/5 flex justify-between self-center bg-amber-300 rounded-full">
              <div className="m-auto text-amber-700 text-3xl">
                <FaCube />
              </div>
            </div>
            <div className="w-7/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
              <div className="w-full h-1/2 text-left font-bold text-2xl">
                {data.data.total_volume.toFixed(2)}
              </div>
              <div className="w-full h-1/2 text-left  text-gray-600">
                <span className="font-bold text-lg">Total Volume </span>
                <span className="font-semibold text-md">
                  (cm<sup>3</sup>)
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-1.5">
            <div className="w-3/12 h-3/5 flex justify-between self-center bg-sky-300 rounded-full">
              <div className="m-auto text-sky-800 text-3xl">
                <IoSpeedometerSharp />
              </div>
            </div>
            <div className="w-7/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
              <div className="w-full h-1/2 text-left font-bold text-2xl">
                10
              </div>
              <div className="w-full h-1/2 text-left  text-gray-600">
                <span className="font-bold text-lg">Throughput</span>
                <span className="font-semibold text-md"> (per min)</span>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-1.5">
            <div className="w-3/12 h-3/5 flex justify-between self-center bg-rose-300 rounded-full">
              <div className="m-auto text-rose-800 text-4xl">
                <RiErrorWarningFill />
              </div>
            </div>
            <div className="w-7/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
              <div className="w-full h-1/2 text-left font-bold text-2xl">0</div>
              <div className="w-full h-1/2 text-left  text-gray-600">
                <span className="font-bold text-lg">Damaged </span>
                <span className="font-semibold text-md">(Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
