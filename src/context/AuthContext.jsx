import React, { createContext, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token ,setToken]=useState(null);

  const handleLogin =(body)=>{

    axios({
     method:"post",
     url:"https://reqres.in/api/login",
     data:body
    }).then(res=>{
    setToken(res.data) 
    }).catch(error=>{
      console.log(error)
    })

}
const value ={ 
  handleLogin,
  token
}
  // code here
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
