import React, { useEffect, useState } from "react";

import axios from "axios";
import Switch from "@mui/material/Switch";
import Controller from "./controller";
export default function Video() {

  const [startCamera, setStartCamera] = useState();

  const videoStart = async () => {
    console.log("start0")
   
    setStartCamera("http://127.0.0.1:9990/camera/preview")
      
  };
  console.log("startCamera",startCamera)
  
  return (
    <>
      <div className="w-full h-3/4 rounded-lg bg-black">
        <iframe
          className="w-full h-full aspect-video"
          width="560"
          height="315"
          src={startCamera}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />        
      </div>

      <div className="w-full h-1/4">
              <Controller onClick={videoStart}/>
            </div>
    </>
  );
}
