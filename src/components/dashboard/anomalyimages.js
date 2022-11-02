import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import D0 from "../image/D0.jpg";
import D1 from "../image/D1.jpg";
import D19 from "../image/D19.jpg";
import D23 from "../image/D23.jpg";
import D2 from "../image/anomalyDummy/D2.jpg";
import D6 from "../image/anomalyDummy/D6.jpg";
import D7 from "../image/anomalyDummy/D7.jpg";
import D10 from "../image/anomalyDummy/D10.jpg";
import D15 from "../image/anomalyDummy/D15.jpg";
import D21 from "../image/anomalyDummy/D21.jpg";
import D18 from "../image/anomalyDummy/D18.jpg";
import D27 from "../image/anomalyDummy/D27.jpg";
import {
  TransformWrapper,
  TransformComponent,
} from "@kokarn/react-zoom-pan-pinch";

export default function AnomalyImages() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [fullWidths, setFullWidths] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [maxWidths, setMaxWidths] = useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpened = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosed = () => {
    setOpened(false);
  };

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

  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 flex font-semibold text-lg text-gray-600 pl-5 ">
          <span className="self-center">Damaged box Images</span>
        </div>
        <div className="w-full h-4/6 pl-1">
          <ImageList className="w-full h-full">
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.class}
                  loading="lazy"
                />
                <ImageListItemBar title={item.class} subtitle={item.time} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="w-full h-1/6 flex justify-end pr-5">
          <button
            type="button"
            onClick={handleClickOpen}
            className="self-center text-sm text-blue-600 hover:bg-blue-100"
          >
            View more images
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
                <div className="w-full h-1/6 text-gray-600 font-semibold text-lg">
                  All damaged box images
                </div>
                <div className="w-full h-5/6">
                  <Box sx={{ width: 850, height: 450, overFlow: "scroll" }}>
                    <ImageList
                      variant="masonry"
                      cols={3}
                      gap={8}
                      // rowHeight={164}
                      // rowWidth={164}
                    >
                      {allItemData.map((item, id) => (
                        <button onClick={(e) => openCardView(e, id)}>
                          <ImageListItem key={id}>
                            <img
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.class}
                              loading="lazy"
                            />
                            <ImageListItemBar
                              title={item.class}
                              subtitle={item.time}
                            />
                          </ImageListItem>
                        </button>
                      ))}
                    </ImageList>

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
                                src= {allItemData[zoomImage].img}
                                alt="img not found"
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        ) : (
                          <>no image found</>
                        )}
                      </DialogContent>
                    </Dialog>
                  </Box>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
