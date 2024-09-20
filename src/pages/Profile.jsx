import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          ¡Bienvenido valentina@pizzas.cl !
         <hr></hr> <Button> Cerrar Sesión </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Profile;