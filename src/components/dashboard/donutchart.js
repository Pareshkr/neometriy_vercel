import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function DonutChart(props) {
  const data = props.data;
  console.log("doughnut chart data " , data)
  let sortData = "";
  let totalBoxs="";
  if (data) {
    sortData = data.data.Box_wise;
    totalBoxs = data.data.totol_box
  }
  console.log("totalBoxs",totalBoxs)
 
  const values = Object.values(sortData);

  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  // Total Box
  const totalBox = sum;
  console.log("Total", totalBox);

  const sortedData = Object.entries(sortData).sort((a, b) => b[1] - a[1]);
  
  const greatestNumber = sortedData[0];

  const seconedNumber = sortedData[1];
  const thirdNumber = sortedData[2];

  console.log("sortedData", greatestNumber)
  console.log("sortedData", seconedNumber)
  console.log("sortedData", thirdNumber)

  let others=""

 
  if(sortedData.length > 0) {
    console.log("tuire")
    others =( (totalBoxs - (greatestNumber[1]+seconedNumber[1]+thirdNumber[1]) ) * 100) /totalBoxs
  }
  console.log("others value  ", others)
 

  //Other Boxes count
  // const others = (sum-(greatestNumber+seconedNumber+thirdNumber))
  // console.log("Other Boxes Count", others)

  console.log(
    "greatestNumber",
    greatestNumber,
    seconedNumber,
    thirdNumber,
    totalBox
  );
  let donutChart = "";
  if (sortData === "") {
    donutChart = {
      series: {
        data: [0],
      },
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 0;
                },
              },
            },
          },
        },
        labels: [],
        legend: {
          // show: true,
          // position: "bottom",
          // offsetY: 0,
          // height: 0,
          // width: 0,
          // customLegendItems: ["NO DATA"],
          // onItemHover: {
          //   highlightDataSeries: true,
          // },
        },
      },
    };
  } else {
    donutChart = {
      // series: {
      //   data: [others.toFixed(2), ((greatestNumber[1] *100)/totalBox).toFixed(2), ((seconedNumber[1]*100)/totalBox).toFixed(2), ((thirdNumber[1]*100)/totalBox).toFixed(2)],
      // },
      series: {
        data: [others.toFixed(2), ((greatestNumber[1] *100)/totalBoxs).toFixed(2), ((seconedNumber[1]*100)/totalBoxs).toFixed(2), ((thirdNumber[1]*100)/totalBoxs).toFixed(2)],
      },
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              hollow: {
                size: "20%",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return totalBoxs;
                },
              },
            },
          },
        },
        labels: ["Others", greatestNumber[0], seconedNumber[0], thirdNumber[0]],
        legend: {
          show: true,
          position: "right",
          offsetY: 40,
          height: 250,
          width: 100,
          customLegendItems: [
            "Others",
            greatestNumber[0],
            seconedNumber[0],
            thirdNumber[0],
          ],
          onItemHover: {
            highlightDataSeries: true,
          },
        },
      },
    };
  }

  return (
    <>
      <div className="w-full h-full rounded-md  shadow-md bg-white text-center">
        <div className="w-full h-1/6 flex font-semibold text-lg text-gray-600 pl-5 border-b-2">
          <span className="self-center">Top classes</span>
        </div>
        <div className="w-full h-5/6 pt-3">
          <Chart
            options={donutChart.options}
            series={donutChart.series.data}
            type="radialBar"
            height={250}
            position="left"
          />
        </div>
      </div>
    </>
  );
}
