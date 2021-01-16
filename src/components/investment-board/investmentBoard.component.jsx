import React from "react";
import "./investmentBoard.styles.css";

//components
import Fund from "../fund/fund.component";

function InvestmentBoard(props) {
  return (
    <div>
      <div className="inv-board">
        {props.data.length > 0 ? (
          props.data.map(({ id, ...otherProps }) => (
            <Fund key={id} {...otherProps} />
          ))
        ) : (
          <div className="empty">To add a fund click on "Add Fund" button</div>
        )}
      </div>
    </div>
  );
}

export default InvestmentBoard;
