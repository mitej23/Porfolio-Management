import React from "react";
import "./total-bar.styles.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
//components
import TotalInvestment from "../total-investment/total-investment.component";

function TotalBar(props) {
  return (
    <div className="total-bar">
      <Link to="/add" className="add">
        <span className="text">Add Fund</span>
        <FiPlus size={40} />
      </Link>

      <TotalInvestment {...props} />
    </div>
  );
}
export default TotalBar;
