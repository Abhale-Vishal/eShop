import "./CheckoutProduct.css";
import { useContext } from "react";
import FirstConetxt from "../Context/FirstContext";

function CheckoutProduct(props) {
  const cntx = useContext(FirstConetxt);

  const removeFromCheckoutProduct = () => {
    cntx.removefrombasket(props.id);
  };

  return (
    <div className="checkoutproduct">
      {
        <div className="listofitems" key={props.id}>
          <div>
            <img
              src={props.img}
              alt="checkoutProduct_image"
              className="checkoutProduct__image"
            />
          </div>

          <div className="checkoutproduct__info">
            <p>{props.title}</p>
            <p className="checkoutproduct__price">${props.price}</p>
            <div className="checkoutproduct__rating">
              {Array(props.rating).fill("⭐")}
            </div>
            <button className="btn" onClick={removeFromCheckoutProduct}>
              Remove From Cart
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default CheckoutProduct;

// <div>
// <img
//   src="data:image/jpeg;base64,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"
//   alt="checkoutProduct_image"
//   className="checkoutProduct__image"
// />
// </div>
// <hr></hr>
// <div className="checkoutproduct__info">
// <p>
//   Noise Newly Launched Buds X Truly Wireless in-Ear Earbuds with
//   ANC(Upto 25dB), 35H Playtime, Quad Mic with ENC, Instacharge(10
//   min=120 min), 12mm Driver, BT v5.3 (Carbon Black)
// </p>
// <p className="checkoutproduct__price">$1299</p>
// <div className="checkoutproduct__rating">⭐⭐⭐</div>
// <button className="btn">Remove From Cart</button>
// </div>
