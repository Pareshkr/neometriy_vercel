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
  // const [socketUrl, setSocketUrl] = useState("ws://127.0.0.1:9990/get_results");
  // const [messageHistory, setMessageHistory] = useState([]);

  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  // // console.log("lastMessage", lastMessage)

  // const [response, setReponse] = useState(false);
  const [chat, setChat] = useState([]);

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev) => prev.concat(lastMessage));

  //     // console.log(lastMessage);
  //     setReponse(lastMessage);
  //     // setChat(oldChats =>[lastMessage.data, ...oldChats])
  //   }
  // }, [lastMessage, setMessageHistory]);

  // let dataResult = "";
  // // console.log("dhddh",chat)

  // if (response) {
  //   dataResult = response.data;
  // }

  // const arr = ["First item", "Second item", "Third item"];

  // arr.push(dataResult);

  // let array_image = [];
  // const split_lbh_image = dataResult;
  // console.log(split_lbh_image);
  // array_image.push(split_lbh_image);

  // console.log("array_image", arr);

  // let months = ["January", "February", "Monday", "Tuesday"];
  // months.splice(0, 0, "March", "hwdgygdwy");

  // console.log(months);
  // console.log("allDataEntry", allDataEntry);

  // const byteArray = img_byte.getBytes("UTF-8");
  // console.log("imageData", byteArray)
  // const imageData =`data:image/jpeg;base64,${split_img}`

  // const SERVER = "http://127.0.0.1:9990";
  // var socket = io(SERVER);
  // console.log("socket", socket)
  const [lbhData, setLbhData] = useState(false);

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
      setChat(oldChats =>[data.data, ...oldChats])
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

  // console.log("lbhData", lbhData);
  // const cloneLbh = { ...lbhData };
  console.log("cloneLbh", chat);

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-4">
        <div className="w-full h-12 shadow-md rounded-md bg-slate-500 font-black flex justify-around">
          <div className="w-full h-full justify-center font-bold text-2xl flex">
            <span className="self-center pl-2 text-white tracking-wider">
              Analysis
            </span>
          </div>
        </div>
        <div className="w-full rounded-md shadow-md h-4/6 bg-white overflow-y-auto">
          <table className="w-full sm:bg-white border rounded-lg table-auto">
            <thead className="w-full h-10 bg-emerald-500 text-white font-extrabold text-lg">
              <tr className="tracking-wider font-semibold">
                <th className="">Class</th>
                <th className="">Length</th>
                <th className="">Breadth</th>
                <th className="">Height</th>
                <th className="">Weight</th>
                <th className="">Volume</th>
              </tr>
            </thead>
            <tbody className="w-full h- text-center font-semibold divide-y">
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td className="p-2">D22</td>
                <td>28.12 cm</td>
                <td>19.56 cm</td>
                <td>8.74 cm</td>
                <td>4.63 kg</td>
                <td>
                  22257.51 cm<sup>3</sup>
                </td>
              </tr>
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
                    {lbhData.data[3].toFixed(2)}cm
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
