import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const RegisterPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPasword] = useState("");

const validarFormulario = (event) => {
    if (email === "" || password === "" || confirmPassword === "") {
        alert('No ha completado todos los campos');
        return(false);
    }

    if (password.length < 6) {
        alert('La contraseña debe tener más de 6 caracteres');
        return(false);
    } 

    if (password !== confirmPassword){
alert('El password y la confirmación del password deben ser iguales.');
return(false);
    }

    alert('Datos enviados')
    return(true);
}

  return (
    <div style={{width: '100%', height: '70vh', marginLeft: '100px', marginTop: '200px'}}>
    <h2> Formulario de contacto </h2>

    <form>
    <p> Email: </p> <input type='email' onChange={(event) => setEmail(event.target.value)}/>
    <p> Contraseña: </p> <input type='password' onChange={(event) => setPassword(event.target.value)}/>
    <p> Confirmar Contraseña: </p> <input type='password' onChange={(event) => setConfirmPasword(event.target.value)}/>
    <br></br>
    <Button type='button' style={{marginTop: '20px'}}onClick={(event) => validarFormulario(event)}> Validar Datos </Button>
    </form>

    </div>
  )
}

export default RegisterPage
