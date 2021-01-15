import React, { useContext } from "react";
import "./graph-stats.component.css";
import { StatsContext } from "./graph-stats.context";

const GraphStats = () => {
  const [stats, changeStats] = useContext(StatsContext);
  console.log(stats);
  return (
    <div className="stats">
      <div className="title">
        <h1>Fund Statistics</h1>
      </div>
      <br />
      <br />

      <h2>Current Value: &emsp;&emsp;&emsp;40000 </h2>
      <br />
      <h2>Profit / Loss:&emsp;&emsp;&emsp;&emsp;{stats.profitOrLoss}</h2>
      <br />
      <h2>All time high: &emsp;&emsp;&emsp; {stats.high}</h2>
      <br />
      <h2>All time low:&emsp;&emsp;&emsp;&emsp;{stats.low}</h2>
    </div>
  );
};
export default GraphStats;
