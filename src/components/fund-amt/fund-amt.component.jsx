import React from "react";
import "./fund-amt.styles.css";

function FundAmt(props) {
  return (
    <div className="fund-amt">
      <h1 className="amt-h1">{props.amt}</h1>
    </div>
  );
}
export default FundAmt;
