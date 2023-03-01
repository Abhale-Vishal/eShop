import React from "react";
import "./Product.css";
import { useContext } from "react";
import FirstConetxt from "../Context/FirstContext";

function Product(props) {
  const cntx = useContext(FirstConetxt);

  const addBasketHandler = () => {
    cntx.addtobasket({
      id: props.id,
      title: props.title,
      price: props.price,
      img: props.img,
      rating: props.rating,
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">${props.price}</p>
          <div className="product__rating">
            {Array(props.rating).fill("⭐")}
          </div>
        </div>
        <img src={props.img} alt="bag-_img" className="img" />
        <button onClick={addBasketHandler}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Product;
