import FirstConetxt from "./FirstContext";
import { useReducer } from "react";

// const initialState = { basket: [] };

const reducerFunction = (state, action) => {
  if (action.type === "ADD__To__BASKET") {
    const updatedAmount = state.totalAmount + action.item.price;

    return {
      basket: [...state.basket, action.item],
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE__FROM__BASKET") {
    const index = state.basket.findIndex((item) => item.id === action.id);

    let newBasket = [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    }
    let existingItem = state.basket[index];
    let updatedAmount = state.totalAmount - existingItem.price;
    if (updatedAmount > 0 ? updatedAmount : 0)
      return { ...state, basket: newBasket, totalAmount: updatedAmount };
  }
  if (action.type === "CLEAR__FROM__BASKET") {
    return {
      basket: [],
      totalAmount: 0,
    };
  }
  return { basket: [], totalAmount: 0 };
};

function SecondContext(props) {
  const [value, dispatch] = useReducer(reducerFunction, {
    basket: [],
    totalAmount: 0,
  });

  const addtobasket = (item) => {
    dispatch({ type: "ADD__To__BASKET", item: item });
  };

  const removefrombasket = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE__FROM__BASKET", id: id });
  };

  const clearFromBasket = (item) => {
    //console.log(id);
    dispatch({ type: "CLEAR__FROM__BASKET", item: item });
  };
  console.log(value.basket);

  const state = {
    basket: value.basket,
    totalAmount: value.totalAmount,
    addtobasket: addtobasket,
    removefrombasket: removefrombasket,
    clearFromBasket: clearFromBasket,
  };

  return (
    <FirstConetxt.Provider value={state}>
      {props.children}
    </FirstConetxt.Provider>
  );
}
export default SecondContext;
