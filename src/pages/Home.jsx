import React, { useContext } from "react";
import Products from "../components/Products";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const {cart} =useContext(CartContext)
  return <div>
    <h2> Total Count-{cart.reduce((prev,curr)=> prev +curr.count ,0)}</h2>
    <Products/>
    </div>;
};

export default Home;
