import Form from 'react-bootstrap/Form';
import DefaultLayout from '../layout/DefaultLayout';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Usuario from './Usuario';
import { parseJwt } from './Principal';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');
  const [logeado, setLogeado] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      usuario: usuario,
      contra: contra,
    };

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const users = await response.json();

      const user = users.find(
        (u) => u.username === usuario && u.password === contra
      );

      if (user) {
        console.log(parseJwt(user.token));
        localStorage.setItem('token', user.token);
        setLogeado(true);
      } else {
        setErrorMensaje('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
        setLogeado(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {logeado ? (
        <Usuario />
      ) : (
        <DefaultLayout>
          <Form>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingrese su usuario"
                name="usuario"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                value={contra}
                onChange={(e) => setContra(e.target.value)}
                placeholder="Ingrese su contraseña"
                name="contraseña"
              />
            </Form.Group>

            <Button variant="warning" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            {errorMensaje && (
              <div className="error">
                <p style={{ color: 'red' }}>{errorMensaje}</p>
              </div>
            )}
          </Form>
        </DefaultLayout>
      )}
    </>
  );
};

export default Login;
