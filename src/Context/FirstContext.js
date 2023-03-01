import { createContext } from "react";

const FirstConetxt = createContext({
  basket: [],
  totalAmount: 0,
  addtobasket: (item) => {},
  removefrombasket: (id) => {},
  clearFromBasket: (id) => {},
});

export default FirstConetxt;
