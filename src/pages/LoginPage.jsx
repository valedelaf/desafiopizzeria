import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const LoginPage = () => {
    const { handleLogin, email, password, setPassword, setEmail } = useContext(UserContext); 
    const [error, setError] = useState("");

    const validarLogin = (e)=>{
      e.preventDefault();
      
      if(email === "" || password === ""){
        setError("Debe ingresar todos los datos");
        return
    }

    setError("");
      handleLogin(email, password)
      setEmail("");
      setPassword("");
      
  }

    return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '70vh', marginLeft: '100px', marginTop: '200px'}}>
    <h2> Login </h2>
    <p> Ingresa tu email y contraseña para ingresar a tu cuenta </p>

    <Form onSubmit={validarLogin}>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<Button type="submit">Login</Button>
</Form>

    </div>
  )
}

export default LoginPage
