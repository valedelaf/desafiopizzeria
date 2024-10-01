import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../context/UserContext';


const RegisterPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const {handleRegister} = useContext(UserContext);

const validarFormulario = (event) => {
  event.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
        setError('No ha completado todos los campos');
        return
    }

    if (password.length < 6) {
        setError('La contraseña debe tener más de 6 caracteres');
        return
    } 

    if (password !== confirmPassword){
setError('El password y la confirmación del password deben ser iguales.');
return
    }

    setError("");
    handleRegister(email, password)
    setEmail("");
    setPassword("");
    setConfirmPassword("");

}

  return (
    <div style={{width: '100%', height: '70vh', marginLeft: '100px', marginTop: '200px'}}>
    <h2> Formulario de contacto </h2>

    <form>
    <p> Email: </p> <input type='email' onChange={(event) => setEmail(event.target.value)}/>
    <p> Contraseña: </p> <input type='password' onChange={(event) => setPassword(event.target.value)}/>
    <p> Confirmar Contraseña: </p> <input type='password' onChange={(event) => setConfirmPassword(event.target.value)}/>
    <br></br>
    <Button type='button' style={{marginTop: '20px'}}onClick={(event) => validarFormulario(event)}> Validar Datos </Button>
    </form>

    </div>
  )
}

export default RegisterPage
