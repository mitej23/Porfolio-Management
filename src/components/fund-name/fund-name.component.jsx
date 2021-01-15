import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./fund-name.styles.css";

function FundName({ name, code, dateOfInvestment, amt }) {
  return (
    <div className="fund-name">
      <h1 className="name-h1">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{
            pathname: `/fund/${name}`,
            state: {
              fundname: name,
              code: code,
              date: dateOfInvestment,
              amt: amt,
            },
          }}
        >
          {name}
        </Link>
      </h1>
    </div>
  );
}

export default withRouter(FundName);
