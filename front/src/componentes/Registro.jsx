

// //signup
// import Form from 'react-bootstrap/Form';
// import React, { useState, useContext } from 'react'
// import DefaultLayout from '../layout/DefaultLayout'
// import Button from 'react-bootstrap/Button';
// import AuthContext from '../context/AuthContext';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { API_URL } from '../context/constants';
// import PropTypes from 'prop-types'
// import { AuthResponseErrorPropTypes } from '../tipos/types';

// const Registro = () => {

//   const [usuario, setUsuario] = useState('');
//   const [contraseña, setContraseña] = useState('');
//   const [nombre, setNombre] = useState('');
//   const [errorResponse, setErrorResponse] = useState('');

//   const auth = useContext(AuthContext);
//   const goTo = useNavigate();

//   async function handleSubmit(e){
//     e.preventDefault();

//     console.log("Datos enviados:", { nombre, usuario, contraseña });

//     try{
//       const response = await fetch(`${API_URL}/registro`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           nombre,
//           usuario,
//           contraseña
//         }),
//       });
//       if(response.ok) {
//         console.log("El usuario se creo correctamente");
//         setErrorResponse('');
//         goTo("/Login")

//       }else{
//         console.log("ocurrió un error");
//         const json = await response.json();

//        if (PropTypes.checkPropTypes(AuthResponseErrorPropTypes, json, 'prop', 'AuthResponseError')) {
//           setErrorResponse(json.body.error);
//         } else {
//           console.error("La respuesta del servidor no coincide con la estructura esperada");
//         }
//         return;
//       }
     
//     }catch (error){
//       console.log(error);

//     }
//   }

//   if(auth.isAuthenticated){
//     return <Navigate to="/Usuario" />

//   }

//   return (
//     <DefaultLayout>
//       <Form onSubmit={handleSubmit}>
//         <h1>Registrar usuario</h1>
//         {!!errorResponse && <div className='errorMessage'>{errorResponse}</div>}
//         <Form.Group className="mb-3" controlId="formGroupName">
//           <Form.Label>Nombre: </Form.Label>
//           <Form.Control type="text" value= {nombre} onChange={(e) =>setNombre(e.target.value)} placeholder="Ingrese su nombre completo" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGroupEmail">
//           <Form.Label>Usuario:</Form.Label>
//           <Form.Control type="text" value= {usuario} onChange={(e) =>setUsuario(e.target.value)} placeholder="Ingrese su usuario" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGroupPassword">
//           <Form.Label>Contraseña:</Form.Label>
//           <Form.Control type="password" value= {contraseña} onChange={(e) =>setContraseña(e.target.value)} placeholder="Ingrese su contraseña" />
//         </Form.Group>

//         <Button variant="warning" type='submit'>Crear nuevo usuario</Button>
//       </Form>

//     </DefaultLayout>

//   )
// }

// export default Registro;
