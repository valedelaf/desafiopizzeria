import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70vh', marginTop: '20vh'}}>
        <h1> Esta página ya fue comida y no ha sido encontrada :'( </h1>
      <img style={{width: '400px'}} src='./src/assets/img/404.jpg'></img>
      <h3> Para volver al Inicio haz clic aquí: </h3>
      <NavLink to= "/"> <button> Volver al inicio </button> </NavLink>
    </div>
  )
}

export default NotFound
