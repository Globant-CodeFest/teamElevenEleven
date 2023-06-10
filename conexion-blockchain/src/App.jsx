import React, { Fragment, useState, useRef } from 'react'
import { TodoList } from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'
import AppWallet from "./AppWallet";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './app.css';


export default function App() {

// const [todos, setTodos] = useState([
//     {id:1, task:'Tarea uno', completed: false}
// ])

// const todoTaskRef = useRef();

// const handleTodoAdd = () => {
//     const task = todoTaskRef.current.value;
//     if (task === '') return;

//     setTodos((prevTodos) => {
//         return [...prevTodos, { id:uuidv4(), task,completed:true }];
//     }); 
// }

const modalStyles={
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const [show, setShow] = useState(false);

return (
    <Fragment>
       
        <div className='principal'>        
          <div className='secundario'>          
            <Button color='success' onClick={() => { setShow(!show); }}>{show ? 'Desconectar' : 'Conectar'} Wallet</Button>            
          </div>
        </div>      

        <Modal isOpen={show} style={modalStyles}>
          <ModalHeader>
            Conectar Billetera
          </ModalHeader>
          <ModalBody>
              <AppWallet />
          </ModalBody>
          <ModalFooter>            
            <Button color="secondary" onClick={() => { setShow(!show); }}>Cerrar</Button>
          </ModalFooter>
        </Modal> 

        <p>METAN LOS MAPAS ACA!!!!</p>
        
        {/* <button color="success" onClick={() => { setShow(!show);}}>{show ? 'Desconectar' : 'Conectar'} Wallet </button>
        {show ? (
          <div style={{ color: 'red' }}><AppWallet /></div>
        ) : (
          <div style={{ color: 'blue' }}>Div 2</div>
        )}

        <hr/>
        <TodoList todos={todos} />        
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTodoAdd}>+</button>
        <button>-</button>        
        <hr/> */}
        
    </Fragment>
  )
}
