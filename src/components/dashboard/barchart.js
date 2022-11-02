import React from "react";
import Chart from "react-apexcharts";
export default function BarChart(props) {

  const data = props.data;
  // console.log("barChart data", data)
  let boxData = ""
  if(data) {
    boxData = data.data.Box_wise;
  }
  console.log("BOX DATA",boxData)
  const barGraph = {
    series: [
      {
        name: "Box count",
        data: [
          {
            x: "D0",
            y: boxData.D0,
          },
          {
            x: "D1",
            y: boxData.D1,
          },
          {
            x: "D2",
            y: boxData.D2,
          },
          {
            x: "D3",
            y: boxData.D3,
          },
          {
            x: "D4",
            y: boxData.D4,
          },
          {
            x: "D5",
            y: boxData.D5,
          },
          {
            x: "D6",
            y: boxData.D6,
          },
          {
            x: "D7",
            y: boxData.D7,
          },
          {
            x: "D8",
            y: 0,
          },
          {
            x: "D9",
            y: 0,
          },
          {
            x: "D10",
            y: 0,
          },
          {
            x: "D11",
            y: 0,
          },
          {
            x: "D12",
            y: 0,
          },
          {
            x: "D13",
            y: 0,
          },
          {
            x: "D14",
            y: 0,
          },
          {
            x: "D15",
            y: 0,
          },
          {
            x: "D16",
            y: 0,
          },
          {
            x: "D17",
            y: 0,
          },
          {
            x: "D18",
            y: 0,
          },
          {
            x: "D19",
            y: 0,
          },
          {
            x: "D20",
            y: 0,
          },
          {
            x: "D21",
            y: 0,
          },
          {
            x: "D22",
            y: 0,
          },
          {
            x: "D23",
            y: 0,
          },
          {
            x: "D24",
            y: 0,
          },
          {
            x: "D25",
            y: 0,
          },
          {
            x: "D26",
            y: 0,
          },
          {
            x: "D27",
            y: 0,
          },
          {
            x: "D28",
            y: 0,
          },
          {
            x: "D29",
            y: 0,
          },
          {
            x: "D30",
            y: 0,
          },
          {
            x: "D31",
            y: 0,
          },
          {
            x: "D32",
            y: 0,
          },
          {
            x: "D33",
            y: 0,
          },
          {
            x: "D34",
            y: 0,
          },
          {
            x: "D35",
            y: 0,
          },
        ],
      },
    ],
    options: {
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#6ee7b7"],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      xaxis: {
        type: "category",
      },
      chart: {
        type: "bar",
        height: 350,
        width: 400,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            position: "top",
            orientation: "vertical",
          },
          columnWidth: "50%",
        },
        dataLabels: {
          enabled: true,
        },
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["transparent"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 pl-4 flex font-semibold text-lg text-gray-600 border-b-2">
          <span className="self-center">Shipments processed</span>
        </div>
        <div className="w-full h-5/6">
          <Chart
            options={barGraph.options}
            series={barGraph.series}
            type="bar"
            height={240}
          />
        </div>
      </div>
    </>
  );
}
