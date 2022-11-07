import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { FiMoreHorizontal } from "react-icons/fi";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import {
  TransformWrapper,
  TransformComponent,
} from "@kokarn/react-zoom-pan-pinch";
import D0 from "../image/D0.jpg";
import D1 from "../image/D1.jpg";
import D19 from "../image/D19.jpg";
import D23 from "../image/D23.jpg";
import D2 from "../image/anomalyDummy/D2.jpg";
import D6 from "../image/anomalyDummy/D6.jpg";
import D7 from "../image/anomalyDummy/D7.jpg";
import D10 from "../image/anomalyDummy/D10.jpg";
import D15 from "../image/anomalyDummy/D15.jpg";
import D18 from "../image/anomalyDummy/D18.jpg";
import D27 from "../image/anomalyDummy/D27.jpg";

export default function ClassVolume(props) {
  const data = props.data;
  console.log("class by volume data ", data);

  let allData = "";
  // if (data) {
  //   allData= data.data.box_wise_lbh.map((val) => val)
  // }

  let sortData = "";
  // const [lbhBoxwise, setLbhBoxwise] = useState(false);
  let lbhBoxwise = "";
  if (data) {
    sortData = data.data.total_volume_box;
    lbhBoxwise = data.data.box_wise_lbh;
  }

  // function sortFloat(a,b) { return a - b; }

  // const copyShorting =sortData.sort(sortFloat);

  // console.log("sortedData", sortData.sort());

  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const [fullWidths, setFullWidths] = useState(true);
  const [maxWidths, setMaxWidths] = useState("md");

  const itemData = [
    {
      img: D0,
      class: "D0",
      time: "17-10-22 11:43",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: D1,
      class: "D1",
      time: "17-10-22 12:15",
    },
    {
      img: D19,
      class: "D19",
      time: "17-10-22 13:38",
    },
    {
      img: D23,
      class: "D23",
      time: "17-10-22 14:05",
      cols: 2,
    },
  ];

  const allItemData = [
    {
      img: D0,
      class: "D0",
      time: "17-10-22 11:43",
    },
    {
      img: D1,
      class: "D1",
      time: "17-10-22 12:15",
    },
    {
      img: D19,
      class: "D19",
      time: "17-10-22 13:38",
    },
    {
      img: D23,
      class: "D23",
      time: "17-10-22 14:05",
    },
    {
      img: D2,
      class: "D2",
      time: "17-10-22 14:28",
    },
    {
      img: D6,
      class: "D6",
      time: "17-10-22 15:19",
    },
    {
      img: D7,
      class: "D7",
      time: "17-10-22 15:26",
    },
    {
      img: D10,
      class: "D10",
      time: "17-10-22 15:45",
    },
    {
      img: D15,
      class: "D15",
      time: "17-10-22 16:06",
    },
    {
      img: D18,
      class: "D18",
      time: "17-10-22 16:27",
    },
    {
      img: D23,
      class: "D23",
      time: "17-10-22 16:55",
    },
    {
      img: D27,
      class: "D27",
      time: "17-10-22 16:59",
    },
  ];
  const [zoomImage, setZoomImage] = useState(0);

  const openCardView = (e, index) => {
    e.preventDefault();
    // setCardViewIsActive(!cardViewIsActive);
    setZoomImage(index);
    setOpened(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpened = () => {
    setOpened(true);
  };
  const handleClosed = () => {
    setOpened(false);
  };

  return (
    <>
      <div className="w-full h-full rounded-md shadow-md flex flex-col justify-between bg-white">
        <div className="w-full h-1/6 flex border-b-2">
          <div className="self-center pl-5 text-gray-600 font-semibold text-lg ">
            Time series data
          </div>
        </div>

        <div className="w-full h-4/6 container overflow-x-auto">
          <div className="container overflow-x-auto">
            <table className="w-full sm:bg-white rounded-lg">
              <thead className="w-full h-10 bg-emerald-500 text-white font-bold text-md tracking-wider">
                <tr className="">
                  <th className="pl-3 pb-6">Class</th>
                  <th className="">
                    <span>Timestamp</span>
                    <br />
                    <span className="text-sm">(dd/mm hh:mm:ss)</span>
                  </th>
                  <th className="">
                    <span>Length</span>
                    <br />
                    <span className="text-sm">(cm)</span>
                  </th>
                  <th className="">
                    <span>Breadth</span>
                    <br />
                    <span className="text-sm">(cm)</span>
                  </th>
                  <th className="">
                    <span>Height</span>
                    <br />
                    <span className="text-sm">(cm)</span>
                  </th>
                  <th className="">
                    <span>Weight</span>
                    <br />
                    <span className="text-sm">(kg)</span>
                  </th>
                  <th className="">
                    <span>Volume</span>
                    <br />
                    <span className="text-sm">
                      (cm<sup>3</sup>)
                    </span>
                  </th>
                  <th className="pb-6">Image</th>
                </tr>
              </thead>
              {data ? (
                <tbody className="text-center font-semibold">
                  <tr>
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {data.data.box_wise_lbh[0].class_name}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {/* <td>27/10 04:34:08</td> */}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {new Date(
                          data.data.box_wise_lbh[0].timestamps
                        ).getDate() +
                          "/" +
                          new Date(
                            data.data.box_wise_lbh[0].timestamps
                          ).getMonth() +
                          " " +
                          new Date(
                            data.data.box_wise_lbh[0].timestamps
                          ).getHours() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[0].timestamps
                          ).getMinutes() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[0].timestamps
                          ).getSeconds()}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[0].l}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[0].b}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[0].h}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">12</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">1338.48</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        <td className="flex pt-2 justify-center text-blue-600">
                          <button
                            type="button"
                            onClick={handleClickOpened}
                            className="self-center text-sm text-blue-600 hover:bg-blue-100"
                          >
                            show
                            <hr className="" />
                          </button>
                        </td>
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                  </tr>

                  <tr>
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {data.data.box_wise_lbh[1].class_name}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {/* <td>27/10 04:34:08</td> */}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {new Date(
                          data.data.box_wise_lbh[1].timestamps
                        ).getDate() +
                          "/" +
                          new Date(
                            data.data.box_wise_lbh[1].timestamps
                          ).getMonth() +
                          " " +
                          new Date(
                            data.data.box_wise_lbh[1].timestamps
                          ).getHours() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[1].timestamps
                          ).getMinutes() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[1].timestamps
                          ).getSeconds()}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[1].l}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[1].b}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[1].h}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">12</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">1338.48</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        <td className="flex pt-2 justify-center text-blue-600">
                          <button
                            type="button"
                            onClick={handleClickOpened}
                            className="self-center text-sm text-blue-600 hover:bg-blue-100"
                          >
                            show
                            <hr className="" />
                          </button>
                        </td>
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                  </tr>

                  <tr>
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {data.data.box_wise_lbh[2].class_name}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {/* <td>27/10 04:34:08</td> */}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {new Date(
                          data.data.box_wise_lbh[2].timestamps
                        ).getDate() +
                          "/" +
                          new Date(
                            data.data.box_wise_lbh[2].timestamps
                          ).getMonth() +
                          " " +
                          new Date(
                            data.data.box_wise_lbh[2].timestamps
                          ).getHours() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[2].timestamps
                          ).getMinutes() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[2].timestamps
                          ).getSeconds()}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[2].l}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[2].b}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[2].h}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">12</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">1338.48</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        <td className="flex pt-2 justify-center text-blue-600">
                          <button
                            type="button"
                            onClick={handleClickOpened}
                            className="self-center text-sm text-blue-600 hover:bg-blue-100"
                          >
                            show
                            <hr className="" />
                          </button>
                        </td>
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                  </tr>

                  <tr>
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {data.data.box_wise_lbh[3].class_name}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {/* <td>27/10 04:34:08</td> */}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        {new Date(
                          data.data.box_wise_lbh[3].timestamps
                        ).getDate() +
                          "/" +
                          new Date(
                            data.data.box_wise_lbh[3].timestamps
                          ).getMonth() +
                          " " +
                          new Date(
                            data.data.box_wise_lbh[3].timestamps
                          ).getHours() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[3].timestamps
                          ).getMinutes() +
                          ":" +
                          new Date(
                            data.data.box_wise_lbh[3].timestamps
                          ).getSeconds()}
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[3].l}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[3].b}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">{data.data.box_wise_lbh[3].h}</td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">12</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">1338.48</td>
                    ) : (
                      <td className="p-2"></td>
                    )}

                    {data.data.box_wise_lbh.length > 0 ? (
                      <td className="p-2">
                        <td className="flex pt-2 justify-center text-blue-600">
                          <button
                            type="button"
                            onClick={handleClickOpened}
                            className="self-center text-sm text-blue-600 hover:bg-blue-100"
                          >
                            show
                            <hr className="" />
                          </button>
                        </td>
                      </td>
                    ) : (
                      <td className="p-2"></td>
                    )}
                  </tr>
                </tbody>
              ) : (
                <>No data available</>
              )}
            </table>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-end pr-5">
          <button
            type="button"
            onClick={handleClickOpen}
            className="self-center text-sm text-blue-600 hover:bg-blue-100"
          >
            View more
            <hr className="" />
          </button>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <div className="w-full h-full flex flex-col space-y-3 p-2">
                <div className="w-full h-1/6 pb-2 text-gray-600 font-semibold text-lg">
                  Time series data
                </div>
                <div className="w-full h-5/6 container overflow-x-auto">
                  <div className="container overflow-x-auto">
                    <table className="w-full sm:bg-white rounded-lg">
                      <thead className="w-full h-10 bg-emerald-500 text-white font-bold text-md tracking-wider">
                        <tr className="">
                          <th className="pl-3 pb-6">Class</th>
                          <th className="">
                            <span>Timestamp</span>
                            <br />
                            <span className="text-sm">(dd/mm hh:mm:ss)</span>
                          </th>
                          <th className="">
                            <span>Length</span>
                            <br />
                            <span className="text-sm">(cm)</span>
                          </th>
                          <th className="">
                            <span>Breadth</span>
                            <br />
                            <span className="text-sm">(cm)</span>
                          </th>
                          <th className="">
                            <span>Height</span>
                            <br />
                            <span className="text-sm">(cm)</span>
                          </th>
                          <th className="">
                            <span>Weight</span>
                            <br />
                            <span className="text-sm">(kg)</span>
                          </th>
                          <th className="">
                            <span>Volume</span>
                            <br />
                            <span className="text-sm">
                              (cm<sup>3</sup>)
                            </span>
                          </th>
                          <th className="pb-6">Image</th>
                        </tr>
                      </thead>
                      <tbody className="text-center font-semibold divide-y">
                        {data ? (
                          data.data.box_wise_lbh.map((val, id) => (
                            <tr
                              className="odd:bg-white even:bg-slate-200"
                              key={id}
                            >
                              <td className="p-2">{val.class_name}</td>
                              <td>
                                {new Date(val.timestamps).getDate() +
                                  "/" +
                                  new Date(val.timestamps).getMonth() +
                                  " " +
                                  new Date(val.timestamps).getHours() +
                                  ":" +
                                  new Date(val.timestamps).getMinutes() +
                                  ":" +
                                  new Date(val.timestamps).getSeconds()}
                              </td>
                              <td>{val.l.toFixed(2)}</td>
                              <td>{val.b.toFixed(2)}</td>
                              <td>{val.h.toFixed(2)}</td>
                              <td>12</td>
                              <td>{(val.l * val.b * val.h).toFixed(2)}</td>
                              <td className="flex pt-2 justify-center text-blue-600">
                                <button
                                  type="button"
                                  onClick={handleClickOpened}
                                  className="self-center text-sm text-blue-600 hover:bg-blue-100"
                                >
                                  show
                                  <hr className="" />
                                </button>
                                <Dialog
                                  fullWidth={fullWidths}
                                  maxWidth={maxWidths}
                                  open={opened}
                                  onClose={handleClosed}
                                >
                                  <DialogContent>
                                    {allItemData ? (
                                      <TransformWrapper>
                                        <TransformComponent>
                                          <img
                                            className="cursor-pointer "
                                            src={allItemData[zoomImage].img}
                                            alt="img not found"
                                          />
                                        </TransformComponent>
                                      </TransformWrapper>
                                    ) : (
                                      <>no image found</>
                                    )}
                                  </DialogContent>
                                </Dialog>

                                {/* <Tippy content={"Click on View more to see more data"}>
                          <div className="self-center">
                            <FiMoreHorizontal />
                          </div>
                        </Tippy> */}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Dialog
          fullWidth={fullWidths}
          maxWidth={maxWidths}
          open={opened}
          onClose={handleClosed}
        >
          <DialogContent>
            {allItemData ? (
              <TransformWrapper>
                <TransformComponent>
                  <img
                    className="cursor-pointer "
                    src={allItemData[zoomImage].img}
                    alt="img not found"
                  />
                </TransformComponent>
              </TransformWrapper>
            ) : (
              <>no image found</>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
