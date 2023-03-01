import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShop,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useContext } from "react";
import FirstConetxt from "../Context/FirstContext";

function Header() {
  const cntx = useContext(FirstConetxt);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <FontAwesomeIcon
            icon={faShop}
            className="header__logoimage"
            fontSize="large"
          />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__inputSearch" />
        <FontAwesomeIcon icon={faSearch} className="header_searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ff9f00" }}
          >
            <span className="nav__itemLineTwo">Sign In</span>
          </Link>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item nav__itemBasket">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="nav__itemLineTwo nav_basketCount">
              {cntx.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;

//className="nav__itemBasket"
//className="nav__item basket_item"
