import React, { useContext } from "react";
import "./graph-stats.component.css";
import { StatsContext } from "./graph-stats.context";

const GraphStats = ({ name, amt }) => {
  const [stats] = useContext(StatsContext);
  return (
    <div className="stats">
      <div className="title">
        <h1>{name}</h1>
        <h1>Amount Invested:&emsp;{amt}</h1>
        <br />
        <br />
        <h1>Fund Statistics</h1>
      </div>
      <br />

      <h2>
        Profit / Loss:&emsp;&emsp;&emsp;&emsp;{stats.profitOrLoss}{" "}
        <span className="nav">/ NAV</span>
      </h2>
      <br />
      <h2>
        All time high: &emsp;&emsp;&emsp; {stats.high}
        <span className="nav"> / NAV</span>
      </h2>
      <br />
      <h2>
        All time low:&emsp;&emsp;&emsp;&emsp;{stats.low}
        <span className="nav"> / NAV</span>
      </h2>
    </div>
  );
};
export default GraphStats;
