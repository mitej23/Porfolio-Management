import React, { createContext, useState } from "react";

export const FundContext = createContext();

export const FundProvider = (props) => {
  const [funds, addFund] = useState([]);
  return (
    <FundContext.Provider value={[funds, addFund]}>
      {props.children}
    </FundContext.Provider>
  );
};
