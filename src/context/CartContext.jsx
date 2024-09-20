import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const getTotal = () => {
        return carrito.reduce((total, item) => total + item.price, 0);
    };
  
      const agregarPizza = (pizza, cantidad) => {
        setCarrito(prevCarrito => [
          ...prevCarrito,
          { ...pizza, cantidad }
        ]);
      };

      const eliminarPizza = (id) => {
        const existingItem = carrito.find(item => item.id === id);
        if (existingItem.cantidad === 1) {
            setCarrito(carrito.filter(item => item.id !== id));
        } else {
            setCarrito(carrito.map(item =>
                item.id === id 
                ? { ...item, cantidad: item.cantidad - 1 } 
                : item
            ));
        }
    }


return (
<CartContext.Provider value={{carrito, setCarrito, getTotal, agregarPizza, eliminarPizza }}>
{children}
</CartContext.Provider>
);
};
export default CartProvider;