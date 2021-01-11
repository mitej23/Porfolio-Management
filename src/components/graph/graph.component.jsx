import React from "react";

import "./graph.style.css";

import { Line } from "react-chartjs-2";

const Graph = (props) => {
  const labeldata = [];
  const amtdata = [];
  props.data.map((item) => {
    labeldata.push(item[0]);
    amtdata.push(item[1]);
  });
  const data = {
    labels: labeldata,
    datasets: [
      {
        label: "NAV",
        data: amtdata,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  console.log(data);
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
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
