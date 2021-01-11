import React from "react";
import "./total-bar.styles.css";

//components
import TotalInvestment from "../total-investment/total-investment.component";

function TotalBar(props) {
  return (
    <div className="total-bar">
      {/* Add a link to addFund */}
      <TotalInvestment {...props} />
    </div>
  );
}
export default TotalBar;
