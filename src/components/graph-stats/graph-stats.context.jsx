import React, { createContext, useState } from "react";

export const StatsContext = createContext();

export const StatsProvider = (props) => {
  const [stats, changeStats] = useState({
    profitOrLoss: null,
    high: null,
    low: null,
  });
  return (
    <StatsContext.Provider value={[stats, changeStats]}>
      {props.children}
    </StatsContext.Provider>
  );
};
