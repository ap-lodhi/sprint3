import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem"
const Products = () => {
const [products ,setProducts]=useState([]);
  useEffect(()=>{
    axios({
      method:"get",
      url:"http://localhost:8090/products",

    }).then(res =>{
     setProducts(res.data);
     console.log(res, " res prod")
    }).catch(error=>{
      console.log(error)
    })
  },[])
  return <div>

    {products.map((el,ind)=> <ProductItem {...el}/>)}
  </div>;
};

export default Products;
