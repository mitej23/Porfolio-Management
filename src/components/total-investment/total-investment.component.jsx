import React from "react";
import "./total-invesment.styles.css";

function TotalInvestment(props) {
  console.log(props.total);
  return <div className="inv-amt">${props.total}</div>;
}
export default TotalInvestment;
