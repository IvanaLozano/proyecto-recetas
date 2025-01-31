import Usuario from "./Usuario";
import Login from "./Login";

function parseJwt(token) {
  if (!token) {
    return null;
  }

  const base64Url = token.split('.')[1];
  if (!base64Url) {
    return null;
  }

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}
export { parseJwt };

const token = localStorage.getItem('token');
let tokenExistyEsValido = false;

if (token) {
  const parsedToken = parseJwt(token);
  if (parsedToken && parsedToken.exp * 1000 > Date.now()) {
    tokenExistyEsValido = true;
  }
}

function Principal() {
  return (
    <>
      {tokenExistyEsValido ? <Usuario /> : <Login />}
    </>
  );
}

export default Principal;
