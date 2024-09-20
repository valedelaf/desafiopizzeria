import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../pages/Profile';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import Logout from '../pages/Logout';

const NavBar = () => {
    const { user } = useContext(UserContext)
    const { getTotal } = useContext(CartContext);
    console.log(user);

    return (
    <Navbar fixed='top' collapseOnSelect expand="lg" style={{backgroundColor: '#a52a2a', color: 'white', width:'100vw', height: '10vh'}}>
      <Container>
        <Navbar.Brand style={{color: 'white'}}>Pizzería Mamma Mía </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{fontSize: '20px', gap: '20px', alignItems:'center'}} className="me-auto">
            <NavLink to= "/"style={{color: 'white'}}>🍕Home</NavLink>

          {user ? (
            <>
            <NavLink to= "/profile" style={{color: 'white'}}>🔓{Profile()}</NavLink>
            <NavLink to= "/logout" style={{color: 'white'}}>🔓Logout</NavLink>
            </>
          )
          : (
            <>
            <NavLink to= "/login" style={{color: 'white'}}>🔓Login</NavLink>
            <NavLink to= "/register" style={{color: 'white'}}>🔓Regístrate</NavLink>
            </>
          )}
           <NavLink to= "/cart" style={{color: 'white', marginLeft: '500px', marginBottom: '5px'}} > Mi Carrito 🛒<br></br>Total: ${getTotal()}
            </NavLink>
          </Nav>
          { user ? (
            <>
          <Nav>
            <NavLink style={{color: 'white'}}><Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '20px'}}> 💲 Pagar</Button> </NavLink>
          </Nav>
          </>
          )
          : (
            ''
          )
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavBar;
