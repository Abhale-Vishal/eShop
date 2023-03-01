import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import { useState, useEffect } from "react";

function Home() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getProduct() {
    setIsLoading(true);
    const data = await fetch("https://fakestoreapi.com/products/");
    const responce = await data.json();
    console.log(responce);
    setProduct(responce);
    setIsLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="home">
        {isLoading ? (
          <p>Please Wait, Loading...</p>
        ) : (
          <div className="home__container">
            <img
              src="https://png.pngtree.com/background/20210710/original/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-picture-image_1048684.jpg"
              alt="img here"
            />

            <div className="home__row">
              {
                <Product
                  id="1"
                  title="Noise Newly Launched Buds X Truly Wireless in-Ear Earbuds with ANC(Upto 25dB), 35H Playtime, Quad Mic with ENC, Instacharge(10 min=120 min), 12mm Driver, BT v5.3 (Carbon Black)"
                  price={1999.21}
                  rating={5}
                  img="https://m.media-amazon.com/images/I/61RP6WUf9XL._SX679_.jpg"
                />
              }
              {product.map((item) => (
                <Product
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  price={item.price}
                  img={item.image}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
