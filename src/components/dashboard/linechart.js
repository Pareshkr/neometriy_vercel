import React from "react";
import Chart from "react-apexcharts";

export default function LineChart(props) {

  // API integration  
  const data = props.data;  // get the data from dashboard component 
  
  console.log("line data ",data)
  let dateString = "";
  let valueofData = "";
  if(data) {
    // console.log(Object.keys(data.data))
  dateString=Object.keys(data.data.total_volume_time)
  valueofData= Object.values(data.data.total_volume_time)
  console.log( typeof(Object.values(data.data.total_volume_time)))
  
  }
  

  




  const areaData = {
    series: [
      {
        name: "Volume",
        data: valueofData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: [ "#fb923c"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Time"
        },
        categories: dateString,
      },
      yaxis: {
        title: {
          text: "Volume"
        }

      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };



  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 pl-4 flex font-semibold text-lg text-gray-600 border-b-2">
          <span className="self-center">Volume processed (cm<sup>3</sup>)</span>
        </div>
        <div className="w-full h-5/6">
          <Chart
            options={areaData.options}
            series={areaData.series}
            type="area"
            height={230}
          />
        </div>
      </div>
    </>
  );
}
