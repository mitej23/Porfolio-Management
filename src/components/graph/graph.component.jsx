import React, { useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import "./graph.style.css";

import { Line } from "react-chartjs-2";
import { StatsContext } from "../graph-stats/graph-stats.context";

const Graph = (props) => {
  //context variables
  let high = 0;
  let low = 1000;
  let start = 0;
  let last = 0;
  //graph
  const [stats, changeStats] = useContext(StatsContext);
  console.log(stats);
  const red = "#e75757";
  const green = "#79ea86";
  const labeldata = [];
  const amtdata = [];
  props.data.map((item, index) => {
    if (index === 0) {
      high = item[1];
      low = item[1];
      start = item[1];
    }
    if (index === props.data.length - 1) {
      last = item[1];
    }
    labeldata.unshift(item[0]);
    amtdata.unshift(item[1]);
    if (item[1] > high) {
      high = item[1];
    } else if (item[1] < low) {
      low = item[1];
    }
    return 0;
  });
  let margin = start - last;
  useEffect(() => {
    return changeStats({
      high: high,
      low: low,
      profitOrLoss: margin,
    });
  }, [changeStats, high, low, margin]);
  let color;
  amtdata[0] < amtdata[amtdata.length - 1] ? (color = green) : (color = red);
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
  let h = 500;
  let w = 1000;
  let size = 12;
  const media = useMediaQuery({ query: "(max-width: 480px)" });
  console.log(media);
  if (media) {
    h = 280;
    w = 380;
    size = 8;
  }
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: size,
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
            fontSize: size,
            autoSkip: true,
            maxTicksLimit: 10,
          },
        },
      ],
    },
  };

  return (
    <div id="chart" className="top-container">
      <Line
        height={h}
        width={w}
        data={data}
        options={options}
        className="graph"
      />
    </div>
  );
};

export default Graph;
