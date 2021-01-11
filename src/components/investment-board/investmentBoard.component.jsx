import React from "react";
import "./investmentBoard.styles.css";

//components
import Fund from "../fund/fund.component";

function InvestmentBoard(props) {
  return (
    <div>
      <div className="inv-board">
        {props.data.map(({ id, ...otherProps }) => (
          <Fund key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
}

export default InvestmentBoard;
