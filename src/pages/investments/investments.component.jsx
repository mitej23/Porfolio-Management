import React, { useContext } from "react";

import "./investments.styles.css";

//components
import TotalBar from "../../components/total-bar/total-bar.components";
import InvestmentBoard from "../../components/investment-board/investmentBoard.component";

//data
import { FundContext } from "../../data/data.context";

const Investments = () => {
  const [funds] = useContext(FundContext);
  let total = 0;
  funds.map(({ amtInvested }) => {
    return (total += amtInvested);
  });
  return (
    <div className="background">
      <TotalBar total={total} />
      <InvestmentBoard data={funds} />
    </div>
  );
};
export default Investments;
