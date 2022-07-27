import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const {token ,handleLogin ,setToken} =useContext(AuthContext)

  const handleAuth =(details)=>{
    token ? setToken(null): handleLogin(details)
  }

  return <div>
   {token ? <h2>User LOgged In</h2> : <>
      <TextField  value={email} onChange={(e)=>setEmail(e.target.value)}  label="email" variant="standard" />
      <br />
      <br />
      <TextField    value={password} onChange={(e)=>setPassword(e.target.value)}  label="password" variant="standard" />
      <br />
      <br />
      </>}

      <Button variant="outlined" onClick={  ()=> handleAuth({email,password })}>{token ? "Log out" : "Login"}</Button>
      
  </div>;
};

export default Login;
