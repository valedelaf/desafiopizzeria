import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'


const Pizza = () => {
    const [pizza, setPizza] = useState({})
    const getPizza = async () => {
        const res = await fetch ('http://localhost:5000/api/pizzas/p001')
        const pizza = await res.json ()
        setPizza(pizza)
    }
        useEffect(() => {
        getPizza()
}, [])

  return (
    <Card style={{ width: '35rem' }}>
    <Card.Img variant="top" src={pizza.img} />
    <Card.Body>
      <Card.Title>
        <h3 style={{ textAlign: 'center' }}>Pizza {pizza.name}</h3>
      </Card.Title>
      <ul> {pizza.ingredients.map((ingredient) => {
        return( <li style={{ listStyle: 'none'}}> 🍕{ingredient}</li>)
      })} </ul>
      <Card.Text style={{ display: 'flex', textAlign: 'center' }}>
        {pizza.desc}
      </Card.Text>
      <Card.Text>
        <h3 style={{ textAlign: 'center' }}>Precio: ${pizza.price}</h3>
      </Card.Text>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ marginRight: '10px' }}>Cantidad:</p>
        <button>-</button>
        <input
          type='number'
          min='1'
          style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
          readOnly
        />
        <button>+</button>
        <Button variant="dark" style={{ marginLeft: '10px' }}>
          Añadir al 🛒
        </Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Pizza
