import CartPizzaCard from "../components/CartPizzaCard"
import { useState, useEffect, useContext } from "react"
import NavBar from "../components/Navbar"
import { CartContext } from "../context/CartContext"
import Header from "../components/Header"
import Pizza from "./Pizza"


const Home = () => {
    const { getTotal, agregarPizza, carrito } = useContext(CartContext);
    const [pizzas, setPizzas] = useState([])

const getPizzas = async () => {
    const respuesta = await fetch ('http://localhost:5000/api/pizzas')
    const pizzas = await respuesta.json()

    setPizzas(pizzas)
}
useEffect(() => {
    getPizzas()
}, [])
    
    return (
    <>

<NavBar></NavBar>
<Header></Header>
<div style={{marginTop: '100px'}}>
    <div className='d-flex justify-content-around my-5 flex-wrap'>
    {pizzas.map(({ desc, id, img, ingredients, name, price }, index) => {
    return (
    <CartPizzaCard
key={index}
name={name}
price={price}
ingredients={ingredients}
img={img}
desc= {desc}
id = {id}
onAgregar={agregarPizza}>
    
</CartPizzaCard>
    );
})}
 
</div>
</div>
    </>
    )}
    export default Home;
