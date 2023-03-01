import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import { useContext } from "react";
import FirstConetxt from "../Context/FirstContext";

function Checkout() {
  const cntx = useContext(FirstConetxt);

  // const id = cntx.basket.map((item) => item.id);
  // console.log(id);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdBdzq2otd2n1Apd_mBi3avIgtRGNxWf-6g&usqp=CAU"
          alt="offer img"
        />

        <h1>Welcome to your Checkout Basket</h1>
        <hr></hr>
        {cntx.basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        {/* <SubTotal /> */}
        {cntx.basket.map((item) => (
          <SubTotal key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
}
export default Checkout;
