import React, { useEffect, useState } from "react";

import { MdClass } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaRulerHorizontal } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";
import { FaWeightHanging } from "react-icons/fa";
import Logo from "../image/NeoPhyte_logo.gif";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import useWebSocket, { ReadyState } from "react-use-websocket";
import io from "socket.io-client";

export default function DetectedResult() {
  const [socketUrl, setSocketUrl] = useState();
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  // console.log("lastMessage", lastMessage)

  const [response, setReponse] = useState(false);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));

      // console.log(lastMessage);
      setReponse(lastMessage);
    }
  }, [lastMessage, setMessageHistory]);

  let dataResult = "";

  if (response) {
    dataResult = response.data;
  }

  const split_lbh_image = dataResult.split("], [");

  const split_lbhw = split_lbh_image[0].split(",");

  const split_img = split_lbh_image[1];
  let image_byte_url = "";
  if (typeof split_img === "string") {
    const arr = split_img.split("']]");

    image_byte_url = arr[0];

    // do stuff with arr
  } else {
    console.log("str is not a string");
  }

  // console.log(image_byte_url)
  var base64Image = `data:image/png;base64,${image_byte_url}`;
  console.log("base64Image", base64Image);

  // console.log("split_img", split_img.replace("']]", ""))

  // console.log(split_result1)

  const split_l = split_lbhw[0].replace("[[", "");
  // console.log("split_l", split_l)

  const split_b = split_lbhw[1];
  // console.log("split_b", split_b)

  const split_h = split_lbhw[2];
  // console.log("split_h", split_h)

  const split_w = split_lbhw[3];
  // console.log("split_w", split_w)

  // const byteArray = img_byte.getBytes("UTF-8");
  // console.log("imageData", byteArray)
  // const imageData =`data:image/jpeg;base64,${split_img}`

  // const SERVER = "http://127.0.0.1:9990";
  // var socket = io(SERVER);
  // console.log("socket", socket)
  const [lbhData, setLbhData] = useState(false);
  const [cloneLbh, setCloneLbh] = useState([])

  useEffect(() => {
    const socket = io("http://127.0.0.1:9990", {
      transports: ["websocket"],
      cors: {
        origin: "http://localhost:3000/",
      },
    });

    socket.emit("message", "wss");

    socket.on("get_results", (data) => {
      console.log(data);
      setLbhData(data);
      setCloneLbh(data.data)
     
    });
  }, []);

  // socket.on("connection",(data) => {
  //   console.log("connection",data)
  //   // setLbhData(data)

  // })

  // useEffect(() => {
  //     socket.on("get_results",(data) => {
  //       console.log("get_results",data)
  //       setLbhData(data)
  //     })
  // },[])

  console.log("lbhData", lbhData);
  
  const copyofCloneArray = [...cloneLbh];

  var allData = [];
  allData.unshift(copyofCloneArray)
  

   console.log("cloneLbh",allData); 

   

 

  // console.log(result)



  return (
    <>
      <div className="w-2/5 h-full flex flex-col space-y-3">
        <div className="w-full h-12 shadow-md rounded-md bg-white font-black flex justify-around">
          <div className="w-full h-full justify-center font-extrabold text-2xl flex">
            <span className="self-center pl-2 text-gray-700 tracking-wider">
              Analysis
            </span>
          </div>
        </div>
        <div className="w-full rounded-md shadow-md h-4/6 overflow-auto">
          <table className="w-full sm:bg-white border rounded-lg">
            <thead className="w-full h-10 bg-violet-300 text-black font-extrabold text-lg border-t-2 border-b-2 border-violet-600 ">
              <tr className="">
                <th className="">Class</th>
                <th className="">Length</th>
                <th className="">Breadth</th>
                <th className="">Height</th>
                <th className="">Weight</th>
                <th className="">Volume</th>
              </tr>
            </thead>
            <tbody className="w-full h- text-center font-semibold divide-y overflow-y-auto">
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              {/* <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr> */}
              {/* <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr>
              <tr>
                <td className="p-2">9873</td>
                <td>937509</td>
                <td>2o7</td>
                <td>082055</td>
                <td>98287</td>
                <td>98239732</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="h-2/6 flex flex-row space-x-3">
          <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
            <div className="m-2.5 h-2 "></div>
            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-rose-600 ">
              <div className=" w-3/5 h-full  flex flex-row space-x-2 ">
                <span className="text-2xl ml-1 self-center text-white">
                  <MdClass />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Class
                </span>
              </div>
              <div className=" w-2/5 h-full flex justify-around">
                <span className="self-center font-semibold text-large text-white">
                  D21
                </span>
              </div>
            </div>
            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-teal-600 ">
              <div className=" w-3/5 h-full flex flex-row pl-1 space-x-2 ">
                <span className="text-2xl ml-1 self-center text-white">
                  <FaCube />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Volume
                </span>
              </div>
              <div className="w-3/5 h-full flex justify-around">
                {lbhData && (
                  <span className="self-center font-semibold text-large text-white">
                    {lbhData.data[0] *
                      lbhData.data[1] *
                      lbhData.data[2].toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-sky-600 ">
              <div className=" w-3/5 h-full flex flex-row pl-1 space-x-2 ">
                <span className="text-2xl ml-1 self-center text-white">
                  <FaWeightHanging />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Weight
                </span>
              </div>
              <div className="w-3/5 h-full flex justify-around">
                {lbhData && (
                  <span className="self-center font-semibold text-large text-white">
                    {lbhData.data[3].toFixed(2)}kg
                  </span>
                )}
              </div>
            </div>
            <div className="m-2.5 h-1 "></div>
          </div>
          <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
            <div className="m-2.5 h-2 "></div>
            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-amber-600 ">
              <div className=" w-3/5 h-full pl-2 flex flex-row space-x-2">
                <span className="text-2xl ml-1 self-center text-white">
                  <FaRulerHorizontal />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Length
                </span>
              </div>
              <div className=" w-2/5 h-full flex justify-around">
                {lbhData && (
                  <span className="self-center font-semibold text-large text-white">
                    {lbhData.data[0].toFixed(2)}cm
                  </span>
                )}
              </div>
            </div>

            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-indigo-600 ">
              <div className=" w-3/5 h-full pl-2 flex flex-row space-x-2 ">
                <span className="text-2xl ml-1 self-center text-white">
                  <CgDisplayFullwidth />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Width
                </span>
              </div>
              <div className=" w-2/5 h-full flex justify-around">
                {lbhData && (
                  <span className="self-center font-semibold text-large text-white">
                    {lbhData.data[1].toFixed(2)}cm
                  </span>
                )}
              </div>
            </div>
            <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-gray-600 ">
              <div className=" w-3/5 h-full flex flex-row space-x-2 ">
                <span className="text-2xl ml-2 self-center text-white">
                  <TbLineHeight />
                </span>
                <span className="self-center font-semibold text-lg text-white">
                  Height
                </span>
              </div>
              <div className=" w-2/5 h-full flex justify-around">
                {lbhData && (
                  <span className="self-center font-semibold text-large text-white">
                    {lbhData.data[2].toFixed(2)}cm
                  </span>
                )}
              </div>
            </div>
            <div className="m-2.5 h-2 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
