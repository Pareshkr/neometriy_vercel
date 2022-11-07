import React, {useState} from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";

export default function Controller({ onClick }) {
  const [checked_one, setChecked_one] = useState(false);
  const [checked_two, setChecked_two] = useState(false);
  const [checked_three, setChecked_three] = useState(false);

  

  const handleChange_one = (event) => {
    setChecked_one(event.target.checked);
  };
  const handleChange_two = (event) => {
    setChecked_two(event.target.checked);
  };
  const handleChange_three = (event) => {
    setChecked_three(event.target.checked);
  };

  const onSubmitStop = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:9990/camera/stop", {
        headers: {
          Accept: "application/json",
        },
      });
      if (res) {
        console.log("video stop");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col shadow-md rounded-md bg-white space-y-2">
        <div className="w-full h-2/4 flex flex-row border-b-2 space-x-2">
          <div className="w-4/12 h-full flex flex-row justify-center">
            <div className="flex flex-row self-center justify-center space-x-4">
              <div className="flex flex-row">
                <Switch
                  checked={checked_one}
                  onChange={handleChange_one}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <div className="font-bold text-blue-800 self-center">
                  Volumetric profile
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-full flex flex-row justify-center">
            <div className="flex flex-row self-center justify-center pl-2 pt-2 space-x-4">
            <div className="flex flex-row">
                <Switch
                  checked={checked_two}
                  onChange={handleChange_two}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <div className="font-bold text-blue-800 self-center">
                  Weight
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-full flex flex-row justify-center">
            <div className="flex flex-row self-center justify-center pl-2 pt-2 space-x-4">
              <div className="flex flex-row">
                <Switch
                  checked={checked_three}
                  onChange={handleChange_three}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <div className="font-bold text-blue-800 self-center">
                  Damaged
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/4 flex flex-row justify-center space-x-16">
          <button onClick={onClick} className="w-4/12 bg-emerald-600 h-3/6 self-center text-white font-bold text-md rounded-lg ">
            START
          </button>
          <button
            onClick={onSubmitStop}
            className="w-4/12 bg-rose-600 h-3/6 self-center text-white font-bold text-md rounded-lg "
          >
            STOP
          </button>
        </div>
      </div>

      {/* <div className="w-full h-full  flex flex-row space-between space-x-3">
        <div className="w-4/12 h-full rounded-md shadow-md bg-white">
          <div className="flex pl-2 pt-2 space-x-4">
            <div>
              <input type="checkbox" />
            </div>
            <div className="font-bold text-blue-800">Volumetric Profile</div>
          </div>
        </div>
        <div className="w-4/12 h-full rounded-md shadow-md bg-white">
        <div className="flex pl-2 pt-2 space-x-4">
            <div>
              <input type="checkbox" />
            </div>
            <div className="font-bold text-blue-800">Weight</div>
          </div>
        </div>
        <div className="w-4/12 h-full flex flex-col space-y-3">
        <div className="w-full h-4/5 rounded-md shadow-md bg-white">
        <div className="flex pl-2 pt-2 space-x-4">
            <div>
              <input type="checkbox" />
            </div>
            <div className="font-bold text-blue-800">Damaged</div>
          </div>
        </div>
        <div className="w-full h-1/5 rounded-md shadow-md bg-white"></div>
        </div> */}

      {/* <div  className='p-2 grid'>
                    <div className="flex space-x-4">
                        <div><input type="checkbox" /></div>
                        <div className='font-bold text-blue-800'>YOLO Model</div>
                    </div>
                    <div className="flex space-x-4">
                        <div><input type="checkbox" /></div>
                        <div className='font-bold text-blue-800'>Detectron Model</div>
                    </div>
                </div>
                <div className=' flex flex-row justify-end items-end space-x-4  w-1/2 m-2'>
                  <button className='w-24 bg-green-600 h-10  text-white font-bold text-md rounded-lg '>
                    START
                  </button>
                  <button onClick={onSubmitStop} className='w-24 bg-red-600 h-10  text-white font-bold text-md rounded-lg '>
                    STOP
                  </button>
                </div> */}
      {/* </div> */}
    </>
  );
}
