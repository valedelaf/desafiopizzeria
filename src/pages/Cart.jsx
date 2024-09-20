import { useContext} from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";



const Cart= () => {
  const { getTotal, carrito, eliminarPizza } = useContext(CartContext);
 const { user } = useContext(UserContext);
  return (
    <div style={{marginLeft: '300px', height: '80vh', marginTop: '100px'}}>
    <h2 style={{padding: '50px'}}>🛒 Mi Carrito:</h2>
    <div style={{border: '1px solid grey', width: '400px'}}>
    <ul style={{listStyle: 'none'}}>
      {carrito.map((item, index, img) => (
        <li key={index}> 🍕
          {item.cantidad} x {item.name} (${item.price} c/u) <button onClick={() => eliminarPizza(item)}> x </button>
        </li>
      ))}
    </ul>
    <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
        </div>
        </div>
        {user ?(
        <Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '25px', margin: '30px'}}> 💲 Pagar</Button>
        )
      : (
        ''
      )}
        
</div>
  );
}

export default Cart;
