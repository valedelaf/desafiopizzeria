import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CartPizzaCard = ({ name, price, ingredients, img, desc, onAgregar, id }) => {
  const [cantidad, setCantidad] = useState(0);
  const navigate = useNavigate();

  const aumentarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    setCantidad(prevCantidad => (prevCantidad > 1 ? prevCantidad - 1 : 1));
  };

  const handleAgregarCarrito = () => {
    onAgregar({ name, price, img, desc, ingredients }, cantidad);
    alert(`Añadido al carrito: ${cantidad} ${name}`);
  };

  const getIngredients = () => (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ listStyle: 'none' }}> 🍕 {ingredient} </li>
      ))}
    </ul>
  );

  return (
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: 'center' }}>Pizza {name}</h3>
        </Card.Title>
        <Card.Text>
         <h4> {getIngredients()} </h4>
        </Card.Text>
        <Card.Text>
          <h3 style={{ textAlign: 'center' }}>Precio: ${price}</h3>
        </Card.Text>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginRight: '10px' }}>Cantidad:</p>
          <button onClick={disminuirCantidad}>-</button>
          <input
            type='number'
            value={cantidad}
            min='1'
            style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
            readOnly
          />
          <button onClick={aumentarCantidad}>+</button>
         <Button variant="dark" onClick={handleAgregarCarrito} style={{ marginLeft: '10px' }}>
            Añadir al 🛒
          </Button>
          <Button variant= "dark"  onClick={() => navigate(`/pizza/${id}`)}>Ver detalle </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartPizzaCard;
