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
            y: boxData.D8,
          },
          {
            x: "D9",
            y: boxData.D9,
          },
          {
            x: "D10",
            y: boxData.D10,
          },
          {
            x: "D11",
            y: boxData.D11,
          },
          {
            x: "D12",
            y: boxData.D12,
          },
          {
            x: "D13",
            y: boxData.D13,
          },
          {
            x: "D14",
            y: boxData.D14,
          },
          {
            x: "D15",
            y: boxData.D15,
          },
          {
            x: "D16",
            y: boxData.D16,
          },
          {
            x: "D17",
            y: boxData.D17,
          },
          {
            x: "D18",
            y: boxData.D18,
          },
          {
            x: "D19",
            y: boxData.D19,
          },
          {
            x: "D20",
            y: boxData.D20,
          },
          {
            x: "D21",
            y: boxData.D21,
          },
          {
            x: "D22",
            y: boxData.D22,
          },
          {
            x: "D23",
            y: boxData.D23,
          },
          {
            x: "D24",
            y: boxData.D24,
          },
          {
            x: "D25",
            y: boxData.D25,
          },
          {
            x: "D26",
            y: boxData.D26,
          },
          {
            x: "D27",
            y: boxData.D27,
          },
          {
            x: "D28",
            y: boxData.D28,
          },
          {
            x: "D29",
            y: boxData.D29,
          },
          {
            x: "D30",
            y: boxData.D30,
          },
          {
            x: "D31",
            y: boxData.D31,
          },
          {
            x: "D32",
            y: boxData.D32,
          },
          {
            x: "D33",
            y: boxData.D33,
          },
          {
            x: "D34",
            y: boxData.D34,
          },
          {
            x: "D35",
            y: boxData.D35,
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
            width={755}
            height={245}
          />
        </div>
      </div>
    </>
  );
}
