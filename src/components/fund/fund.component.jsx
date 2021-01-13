import React from "react";
import "./fund.styles.css";

//component
import FundName from "../fund-name/fund-name.component";
import FundAmt from "../fund-amt/fund-amt.component";

function Fund({ fundName, amtInvested, ...otherProps }) {
  return (
    <div className="fund-bar">
      <FundName name={fundName} {...otherProps} />
      <FundAmt amt={amtInvested} name={fundName} />
    </div>
  );
}
export default Fund;
