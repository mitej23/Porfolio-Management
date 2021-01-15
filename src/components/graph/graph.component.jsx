import React from "react";

import "./graph.style.css";

import { Line } from "react-chartjs-2";
//import { StatsContext } from "../graph-stats/graph-stats.context";

const Graph = (props) => {
  // const [stats, changeStats] = useContext(StatsContext);
  const red = "#e75757";
  const green = "#79ea86";
  const labeldata = [];
  const amtdata = [];
  props.data.map((item) => {
    labeldata.unshift(item[0]);
    amtdata.unshift(item[1]);
    return 0;
  });

  // changeStats({
  //   high: 1000,
  // });
  let color;
  amtdata[0] < amtdata[amtdata.length - 1] ? (color = green) : (color = red);
  // console.log(amtdata[0], amtdata[amtdata.length - 1]);
  const data = {
    labels: labeldata,
    datasets: [
      {
        label: "NAV",
        data: amtdata,
        fill: "start",
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };
  // console.log(data);
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 12,
      },
    },
    elements: {
      point: {
        pointStyle: "line",
        radius: 1,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
          },
        },
      ],
    },
  };
  return (
    <div id="chart" className="top-container">
      <Line height={500} width={1000} data={data} options={options} />
    </div>
  );
};

export default Graph;
