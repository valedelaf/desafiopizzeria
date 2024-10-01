import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';



function Profile() {
  const { user, setUser, logout } = useContext(UserContext); 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    fetch("http://localhost:5000/api/auth/me", {
    headers: {
    Authorization: `Bearer ${token}`,
    },
    })
    .then((response) => response.json())
    .then((data) => setUser(data));
    }
    }, []); 


  return (
    <>
      <NavLink style={{color: 'white', backgroundColor: 'none'}} onClick={handleShow}>
        Profile
      </NavLink>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sesión de usuario</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user ? (
          <p>Bienvenido {user.email} </p>)
          : (
         <p>Por favor haz Login para acceder a tu cuenta.</p>
)}
        
         <hr></hr> <Button onClick={()=> logout()}> Cerrar Sesión </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Profile;