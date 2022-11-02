import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender({ setParentdata }) {
  // Date change events
  //  const handleonClick= props.apiRes
  const [calender, setCalender] = useState(new Date());
  const handlechange = (date) => {
    // console.log(date)
    setCalender(date);

    // handleonClick();
  };
  useEffect(() => {
    setParentdata(formatDate(calender));
    // apiRes()
  }, [calender]);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  return (
    <>
      <div className="w-full h-full pl-2.5 text-center ">
        <Calendar
          selected={new Date()}
          onChange={handlechange}
          
          minDate={new Date(2019, 10, 16)}
          // maxDate={new Date()}
        />
      </div>
    </>
  );
}
