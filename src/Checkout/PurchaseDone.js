import React from "react";
import { Link } from "react-router-dom";

function PurchaseDone() {
  return (
    <div>
      <h1>Thank you for shopping from our website.Your Order Is Placed.</h1>
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>
    </div>
  );
}
export default PurchaseDone;
