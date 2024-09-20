import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';

function Pizza() {
  const [pizza, setPizza] = useState({});
  const navigate = useNavigate();
  const  { id } = useParams();
  
  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const pizzaData = await res.json();

    setPizza(pizzaData);
  };

  return (
<>
<Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: 'center' }}>Pizza {pizza.name}</h3>
        </Card.Title>
        <Card.Text style={{ display: 'flex', textAlign: 'center' }}>
          {pizza.desc}
        </Card.Text>
        <Card.Text>
          <h3 style={{ textAlign: 'center' }}>Precio: ${pizza.price}</h3>
        </Card.Text>
        <NavLink to= "/"> <Button variant='dark' style={{marginLeft: '35%'}}> Volver al inicio </Button> </NavLink>
        </Card.Body>
        </Card>

 </> )
}

export default Pizza