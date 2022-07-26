import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart]=useState([]);
  //const [toatalCount, setTotalCount] =useState(0);
  const fetchCart =()=>{
    axios({
      method:"get",
      url:"http://localhost:8090/cartitems"
    }).then((res)=>{
      setCart(res.data)
    }).catch(error=>{
      console.log(error)
    } )
  }

  const handleAddToCart=(id)=>{
    // console.log("add clikk")
   const item= cart.find((el)=>el.productId === id);
    if(item ===undefined){
      axios({
        method:"post",
        url:"http://localhost:8090/cartitems",
        data:{
          count:1,
          productId:id,
          id
        }
      }).then((res)=>{
        console.log(res, "handlecart")
        fetchCart()
      })
    }
   


  }

  const handleIncrement=(id)=>{
    const item= cart.find((el)=>el.productId === id);
    axios({
      method:"patch",
      url:`http://localhost:8090/cartitems/${id}`,
      data:{
        count: item.count+1,
       
      }
    }).then((res)=>{
      console.log(res, "handlecart res2")
      fetchCart();
    })
    
  }
  const handleIDecrement=(id)=>{
   const item= cart.find((el)=>el.productId === id);
    if(item.count==1){
      axios({
        method:"delete",
        url:`http://localhost:8090/cartitems/${id}`,
      
      }).then((res)=>{
        console.log(res, "handlecart res2")
        fetchCart()
      })
    }else{
      axios({
        method:"patch",
        url:`http://localhost:8090/cartitems/${id}`,
        data:{
          count: item.count-1,
         
        }
      }).then((res)=>{
        console.log(res, "handlecart res2")
        fetchCart()
      })
    }
   
    
  }

  const handleRemove=(id)=>{
    axios({
      method:"delete",
      url:`http://localhost:8090/cartitems/${id}`,
    
    }).then((res)=>{
      console.log(res, "handlecart res2")
      fetchCart()
    })
    
  }
  useEffect(()=>{
    fetchCart()
  },[])

  const value={
   cart,
    handleAddToCart,
    handleIDecrement,
    handleIncrement,
    handleRemove
  }
 

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


/*
 else{
      axios({
        method:"patch",
        url:`http://localhost:8090/cartitems/${id}`,
        data:{
          count: item.count+1,
         
        }
      }).then((res)=>{
        console.log(res, "handlecart res2")
        fetchCart()
      })

    }
*/