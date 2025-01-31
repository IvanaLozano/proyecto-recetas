import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { parseJwt } from './Principal';

const RutaProtegida = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token && parseJwt(token).exp * 1000 > Date.now();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RutaProtegida;
