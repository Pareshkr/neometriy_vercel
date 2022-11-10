import React, { useState, useEffect } from "react";
import SideNav from "../others/sidenav";
import DashHeader from "./dashheader";
import Cards from "./cards";
import BarChart from "./barchart";
import DonutChart from "./donutchart";
import Calender from "./calendar";
import LineChart from "./linechart";
import ClassVolume from "./classvolume";
import AnomalyImages from "./anomalyimages";
import axios from "axios";

export default function Dashboard() {
  const [parentdata, setParentdata] = useState("");
  console.log("parentdata", parentdata);
  const [card, setCard] = useState(false)

  const[ totalVolume, setTotalVolume] =  useState(false)
  const url = "http://216.48.181.202:9191"
  // APi integration for cards and bar chart
  useEffect(() => {
    async function getFullnessPercentage() {
      try {
        const res = await axios.get(
          `${url}/data/get_dashboard_analysis/${parentdata}`,
          {
            headers: {
              Accept: "application/json",
             
            },
          }
        );
        // console.log(res.data);

        setCard(res.data);
       
      } catch (error) {
        console.log("Error Calling all Store API: ", error);
      }
    }
    getFullnessPercentage();
  }, [parentdata]);


  useEffect(() => {
    async function getFullnessPercentage() {
      try {
        const res = await axios.get(
          `${url}/data/get_volume_per_hour/${parentdata}`,
          {
            headers: {
              Accept: "application/json",
             
            },
          }
        );
        // console.log(res.data);

        setTotalVolume(res.data);
      } catch (error) {
        console.log("Error Calling all Store API: ", error);
      }
    }
    getFullnessPercentage();
  }, [parentdata]);
  console.log("totalVolume", totalVolume)
  return (
    <>
      <div className="w-full  border h-full flex bg-gray-100 ">
        <SideNav />
        <div className="w-10/12">
          <div className="w-full h-16">
            <DashHeader />
          </div>
          <div className="w-full h-5/6 flex flex-col space-between space-y-4 pt-4 pl-4 pr-4">
            <div className="w-full h-1/5">
              <Cards data={card}/>
            </div>
            <div className="w-full h-2/5 flex space-between space-x-3">
              <div className="w-2/4 h-full">
                <BarChart data={card}/>
              </div>
              <div className="w-1/4 h-full pl-3">
                <DonutChart data={card}/>
              </div>
              <div className="w-1/4 h-full pl-3">
                <Calender setParentdata={setParentdata} />
              </div>
            </div>
            <div className="w-full h-2/5 flex items-stretch space-between space-x-6">
              <div className="w-2/4 h-full">
                <LineChart data={totalVolume}/>
              </div>
              <div className="w-2/4 h-full rounded-md shadow-md bg-white">
              <ClassVolume data={totalVolume}/>
              </div>



              {/* <div className="w-1/4 h-full pl-3">
                <ClassVolume data={totalVolume}/>
              </div>
              <div className="w-1/4 h-full self-end pl-3">
                <AnomalyImages />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
