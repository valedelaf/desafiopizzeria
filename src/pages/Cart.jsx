import { useContext} from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";



const Cart= () => {
  const { getTotal, carrito, eliminarPizza, setCarrito } = useContext(CartContext);
 const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");


 const checkout = async () =>{

  const checkoutCarrito = await fetch("http://localhost:5000/api/checkouts", {
      method:"POST",
      headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
          {
              cart:carrito
          }),
  })
  const resultadoPago = await checkoutCarrito.json();
  
  if(resultadoPago.cart && resultadoPago.user){
      alert("Su compra ha sido realizada con éxito")
      setCarrito([])
  }else{
      alert(resultadoPago.error) 
  }
}
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
        <Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '25px', margin: '30px'}} onClick={()=> checkout()}> 💲 Pagar</Button>
        )
      : (
        ''
      )}
        
</div>
  );
}

export default Cart;
