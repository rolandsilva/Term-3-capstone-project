import React, { createContext, useContext, useReducer, useMemo } from "react";

const initialState = {
  displayUSD: true,
  rate: 1,
  symbol: "$",
};

export const CurrencyContext = createContext(initialState);

CurrencyContext.displayName = "CurrencyContext";


function currencyReducer(state, action) {
  switch (action.type) {
    case "SET_CURRENCY": {
      const isUSD = !state.displayUSD;
      const newRate = isUSD ? 1 : 0.8;
      const newSymbol = isUSD ? "$" : "€";

      return {
        ...state,
        displayUSD: isUSD,
        rate: newRate,
        symbol: newSymbol,
      };
    }
    default:
      return state;
  }
}

export const CurrencyProvider = (props) => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  const setCurrency = () => dispatch({ type: "SET_CURRENCY" });
  const toggleCurrency = () => dispatch({ type: "SET_CURRENCY" });
  const getPrice = (amount) => {
    let convertPrice = 0;
    convertPrice = amount * state.rate
    return parseFloat(convertPrice.toFixed(2));
  };

  const value = useMemo(
    () => ({
      ...state,
      setCurrency,
      toggleCurrency,
      symbol: state.symbol,
      getPrice,
    }),
    [state]
  );


  return <CurrencyContext.Provider value={value} {...props} />;
};

const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(`useCurrency must be used within a currencyProvider`);
  }
  return context;
};

export const ManagedCurrencyContext = ({ children }) => (
  <CurrencyProvider>{children}</CurrencyProvider>
);

export default useCurrency;


