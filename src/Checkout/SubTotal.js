import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import FirstConetxt from "../Context/FirstContext";
import { Link } from "react-router-dom";

function SubTotal(props) {
  const cntx = useContext(FirstConetxt);

  const clearFromCheckoutProduct = () => {
    cntx.clearFromBasket({
      id: props.id,
      title: props.title,
      price: props.price,
      img: props.img,
      rating: props.rating,
    });
  };

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__items">
              Subtotal({cntx.basket.length} items) : <strong>${value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        thousandSeparator={true}
        displayType={"text"}
        value={cntx.totalAmount || 0}
      />
      <Link to="/purchase">
        <span className="btn" onClick={clearFromCheckoutProduct}>
          Procced to Purchase
        </span>
      </Link>
    </div>
  );
}

export default SubTotal;
