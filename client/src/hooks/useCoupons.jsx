import React, { createContext, useContext, useReducer, useMemo } from "react";

const initialState = {
  couponCode: "KENZIE20",
  couponRate: "20%",
};

export const CouponsContext = createContext(initialState);

CouponsContext.displayName = "CouponsContext";


function couponsReducer(state, action) {
  switch (action.type) {
    case "SET_COUPONS": {
    //   const newCode = isUSD ? 1 : 0.8;
    //   const newRate = isUSD ? "$" : "€";

      return {
        ...state,
        code: newCode,
        rate: newRate,
      };
    }
    default:
      return state;
  }
}

export const CouponsProvider = (props) => {
  const [state, dispatch] = useReducer(couponsReducer, initialState);

  const setCoupons = () => dispatch({ type: "SET_COUPONS" });
//   const toggleCurrency = () => dispatch({ type: "SET_CURRENCY" });
//   const getPrice = (amount) => {
//     let convertPrice = 0;
//     convertPrice = amount * state.rate
//     return parseFloat(convertPrice.toFixed(2));
//   };

  const value = useMemo(
    () => ({
      ...state,
      setCoupons,
    //   toggleCurrency,
    //   symbol: state.symbol,
    //   getPrice,
    }),
    [state]
  );


  return <CouponsContext.Provider value={value} {...props} />;
};

const useCoupons = () => {
  const context = useContext(CouponsContext);
  if (context === undefined) {
    throw new Error(`useCoupons must be used within a couponsProvider`);
  }
  return context;
};

export const ManagedCouponsContext = ({ children }) => (
  <CouponsProvider>{children}</CouponsProvider>
);

export default useCoupons;