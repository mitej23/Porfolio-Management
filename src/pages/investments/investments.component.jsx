import React, { useContext } from "react";
import "./investments.styles.css";

//components
import TotalBar from "../../components/total-bar/total-bar.components";
import InvestmentBoard from "../../components/investment-board/investmentBoard.component";

//data
//import INV_DATA from "../../data/data";//old method
import { FundContext } from "../../data/data.context";

const Investments = () => {
  const [funds] = useContext(FundContext);

  let total = 0;
  funds.map(({ amtInvested }) => {
    //console.log(amtInvested + "this is it");
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
