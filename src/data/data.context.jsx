import React, { createContext, useState } from "react";

export const FundContext = createContext();

export const FundProvider = (props) => {
  const [funds, addFund] = useState([
    // {
    //   id: 1,
    //   fundName: "ICICI Prudential Balanced Advantage Fund",
    //   dateOfInvestment: new Date("2018, 1, 25"),
    //   amtInvested: 25000,
    //   code: 104686,
    // },
    // {
    //   id: 2,
    //   fundName: "HDFC Prudence Fund - Dividend Option",
    //   dateOfInvestment: new Date("2018, 1, 24"),
    //   amtInvested: 24900,
    //   code: 101978,
    // },
    // {
    //   id: 3,
    //   fundName: "HDFC Prudence Fund - Dividend Option",
    //   dateOfInvestment: new Date(2018, 2, 22),
    //   amtInvested: 24900,
    //   code: 101978,
    // },
    // {
    //   id: 4,
    //   fundName: "HDFC Prudence Fund - Dividend Option",
    //   dateOfInvestment: new Date(2018, 4, 11),
    //   amtInvested: 24900,
    //   code: 101978,
    // },
    // {
    //   id: 5,
    //   fundName: "HDFC Prudence Fund - Dividend Option",
    //   dateOfInvestment: new Date(2018, 4, 26),
    //   amtInvested: 39900,
    //   code: 101978,
    // },

    // {
    //   id: 6,
    //   fundName: "UTI MUTUAL FUND 2019",
    //   dateOfInvestment: new Date(2019, 11, 14),
    //   amtInvested: 20000,
    //   code: 100033,
    // },
    // {
    //   id: 7,
    //   fundName: "LIC MUTUAL FUND 2019",
    //   dateOfInvestment: new Date(2019, 5, 14),
    //   amtInvested: 40000,
    //   code: 100034,
    // },
    // {
    //   id: 8,
    //   fundName: "ICICI Prudential Balanced Advantage Fund",
    //   dateOfInvestment: new Date("2018, 1, 25"),
    //   amtInvested: 25000,
    //   code: 104686,
    // },
    // {
    //   id: 9,
    //   fundName: "HDFC Prudence Fund - Dividend Option",
    //   dateOfInvestment: new Date("2018, 1, 24"),
    //   amtInvested: 24900,
    //   code: 101978,
    // },
  ]);
  return (
    <FundContext.Provider value={[funds, addFund]}>
      {props.children}
    </FundContext.Provider>
  );
};
