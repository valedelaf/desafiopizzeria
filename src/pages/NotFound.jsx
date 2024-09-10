import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70vh', marginTop: '20vh'}}>
        <h1> Esta página ya fue comida y no ha sido encontrada :'( </h1>
      <img style={{width: '400px'}} src='./src/assets/img/404.jpg'></img>
      <h3> Para volver al Inicio haz clic aquí: </h3>
      <Link to= "/"> <button> Volver al inicio </button> </Link>
    </div>
  )
}

export default NotFound
