import React, { Fragment, useState, useEffect } from 'react';
import AppWallet from "./AppWallet";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './app.css';
import image from './11.jpg'; // Importar la imagen

export default function App() {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  const [show, setShow] = useState(false);

  return (
    <Fragment>


    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <br />
        <p>Bienvenid@ a CAMBIOS CLIMATICOS (by ELEVEN ELEVEN)</p>
        <br />
        <div>
          <Button color='success' onClick={() => setShow(!show)}>{show ? 'Desconectar' : 'Seleccionar'} Wallet</Button>
        </div>
        <br />
        <img src={image} alt="Imagen" style={{ width: '300px', height: 'auto' }} /> {/* Cambiar el tamaño de la imagen aquí */}
      </div>
    </form>

      <Modal isOpen={show} style={modalStyles}>
        <ModalHeader>
          Conectar Billetera
        </ModalHeader>
        <ModalBody>
          <AppWallet />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShow(!show)}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      
    </Fragment>
  );
}
        

       