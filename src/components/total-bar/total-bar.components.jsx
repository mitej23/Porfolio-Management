import React from "react";
import "./total-bar.styles.css";
import { Link } from "react-router-dom";
//components
import TotalInvestment from "../total-investment/total-investment.component";

function TotalBar(props) {
  return (
    <div className="total-bar">
      <Link to="/add">Add a fund</Link>
      <TotalInvestment {...props} />
    </div>
  );
}
export default TotalBar;
