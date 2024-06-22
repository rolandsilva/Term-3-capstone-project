import React, { useReducer, useContext, createContext, useEffect } from "react";

const initialState = localStorage.hasOwnProperty("ProductCart")
  ? JSON.parse(localStorage.getItem("ProductCart"))
  : {
      cart: [],
      itemCount: 0,
      cartTotal: 0,
    };

const calculateCartTotal = (cartItems) => {
  let total = 0;

  cartItems.map((item) => (total += item.price * item.quantity));

  return parseFloat(total.toFixed(2));
};

const reducer = (state, action) => {
  let nextCart = [...state.cart];
  switch (action.type) {
    case "INIT_SAVED_CART":
      return {
        ...action.payload,
      };

    case "ADD_ITEM":
        console.log(state)
      var existingIndex = nextCart.findIndex(
        (item) => item._id === action.payload._id
      );

      var numItemsToAdd = action.payload.quantity;

      if (existingIndex >= 0) {
        const newQuantity = parseInt(
          nextCart[existingIndex].quantity + numItemsToAdd
        );

        nextCart[existingIndex] = {
          ...action.payload,
          quantity: newQuantity,
        };
      } else {
        nextCart.push(action.payload);
      }

      return {
        ...state,
        cart: nextCart,
        itemCount: state.itemCount + 1,
        cartTotal: calculateCartTotal(nextCart),
      };
    case "REMOVE_ITEM":
      nextCart = nextCart
        .map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cart: nextCart,
        itemCount: state.itemCount > 0 ? state.itemCount - 1 : 0,
        cartTotal: calculateCartTotal(nextCart),
      };
    case "REMOVE_ALL_ITEMS":
      let quantity = nextCart.find((i) => i._id === action.payload).quantity;
      nextCart = nextCart.filter((item) => item._id !== action.payload);

      return {
        ...state,
        cart: nextCart,
        itemCount: state.itemCount > 0 ? state.itemCount - quantity : 0,
        cartTotal: calculateCartTotal(nextCart),
      };

    case "RESET_CART":
      return {
        cart: [],
        itemCount: 0,
        cartTotal: 0,
      };

    case "APPLY_COUPONS":
      //   const newCode = isUSD ? 1 : 0.8;
  console.log(action.payload)
      return {
        ...state,
        couponRate: action.payload,
        cartTotal: state.cartTotal - (state.cartTotal * parseFloat(action.payload)),
      };

    case "UPDATE_CART":
      var existingIndex = nextCart.findIndex(
        (item) => item._id === action.payload._id
      );
      var numItemsToAdd = action.payload.quantity;
      if (existingIndex >= 0) {
        var newQuantity = parseInt(numItemsToAdd);

        nextCart[existingIndex] = {
          ...action.payload,
          quantity: newQuantity,
        };
      } else {
        nextCart.push(action.payload);
      }
      let itemCount = 0;
      for (let i = 0; i < nextCart.length; i++) {
        itemCount += nextCart[i].quantity;
      }

      return {
        ...state,
        cart: nextCart,
        itemCount: itemCount,
        cartTotal: calculateCartTotal(nextCart),
      };

    default:
      return state;
  }
};

const cartContext = createContext();

export function ProvideCart({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(cartContext);
};

const useProvideCart = () => {
  const { state, dispatch } = useCart();
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("ProductCart")) || false;
    if (savedCart) {
      dispatch({
        type: "INIT_SAVED_CART",
        payload: savedCart,
      });
    }
  }, [dispatch]);

  localStorage.setItem("ProductCart", JSON.stringify(state));

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const removeAllItems = (id) => {
    dispatch({
      type: "REMOVE_ALL_ITEMS",
      payload: id,
    });
  };

  const applyCoupons = (couponsRate) => {
    dispatch({
      type: "APPLY_COUPONS",
      payload: couponsRate,
    });
  };

  const updateItem = (item) => {
    dispatch({
      type: "UPDATE_CART",
      payload: item,
    });
  };

  const resetCart = () => {
    dispatch({
      type: "RESET_CART",
    });
  };

  const isItemInCart = (id) => {
    return !!state.cart.find((item) => item._id === id);
  };

  return {
    state,
    addItem,
    removeItem,
    removeAllItems,
    resetCart,
    isItemInCart,
    updateItem,
    applyCoupons,
    calculateCartTotal,
  };
};

export default useProvideCart;
