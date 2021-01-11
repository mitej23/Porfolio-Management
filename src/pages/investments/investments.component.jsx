import React from "react";
import "./investments.styles.css";

//components
import TotalBar from "../../components/total-bar/total-bar.components";
import InvestmentBoard from "../../components/investment-board/investmentBoard.component";

//data
import INV_DATA from "../../data/data";

class Investments extends React.Component {
  state = {
    data: INV_DATA,
  };
  render() {
    const { data } = this.state;
    let total = 0;
    data.map(({ amtInvested }) => {
      //console.log(amtInvested + "this is it");
      total += amtInvested;
    });
    return (
      <div className="background">
        <TotalBar total={total}/>
        <InvestmentBoard data={data} />
      </div>
    );
  }
}
export default Investments;
