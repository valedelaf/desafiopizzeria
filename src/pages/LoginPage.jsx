import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarFormulario = (event) => {
        if (email === "" || password === "") {
            alert('No ha completado todos los campos');
            return(false);
        }
    
        if (password.length < 6) {
            alert('La contraseña debe tener más de 6 caracteres');
            return(false);
        } 
    
        alert('Datos enviados')
        return(true);
    }

    return (
    <div style={{width: '100%', height: '70vh', marginLeft: '100px', marginTop: '200px'}}>
    <h2> Login </h2>
    <p> Ingresa tu email y contraseña para ingresar a tu cuenta </p>

    <form>
    <p> Email: </p> <input type='email' onChange={(event) => setEmail(event.target.value)}/>
    <p> Contraseña: </p> <input type='password' onChange={(event) => setPassword(event.target.value)}/>
    <br></br>
    <Button type='button' style={{marginTop: '20px'}} onClick={(event) => validarFormulario(event)}> Validar Datos </Button>
    </form>

    </div>
  )
}

export default LoginPage
