import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../image/NeoPhyte_logo_white.gif";
export default function Video() {

    const url = "http://127.0.0.1:9990";
    const [camera, setCamera] = useState(false);

    // useEffect(() => {
    //   async function getCamera() {
    //     try{
    //       const res = await axios.get(
    //         `${url}/camera/preview`,
    //         {
    //           headers: {
    //             Accept: "application/json",
               
    //           },
    //         }
    //       );

    //       if(res) {
    //         setCamera(res)
    //         console.log("camera is open ")
    //       }

    //     } catch(error){
    //       console.log(error)
    //     }

    //   }
    //   getCamera()
    // }, []);
  

  return (
    <>
      <div className="w-full pr-3 pb-3   h-full ">
        <div className="bg-black grid w-full h-full rounded-lg">
          {/* <div></div> */}
          <div className="w-12/12 m-auto">
            <video
              width="800"
              height="600"
              margin="auto"
              src="http://127.0.0.1:9990/camera/preview"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            {/* <img src={Logo} alt="Image not found " /> */}
            {/* <div className="font-bold text-white w-full text-center">
              Coming Soon....
            </div> */}
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </>
  );
}
