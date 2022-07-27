import React, { useContext } from "react";
import Products from "../components/Products";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const {cart} =useContext(CartContext) 
  const {token} =useContext(AuthContext)
  return token ? (<div>
    <h2> Total Count-{cart.reduce((prev,curr)=> prev +curr.count ,0)}</h2>
    <Products/> 
    </div>): <div> please login to see products</div>
};

export default Home;
