import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./fund-name.styles.css";

// /${name}
function FundName({ name, code, dateOfInvestment }) {
  console.log(name);
  return (
    <div className="fund-name">
      <h1 className="name-h1">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{
            pathname: `/fund/${name}`,
            state: {
              fundname: name,
              code: code,
              date: dateOfInvestment,
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
