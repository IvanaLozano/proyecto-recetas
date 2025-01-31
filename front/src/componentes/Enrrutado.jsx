
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Menu from './Menu'
import Inicio from './Inicio'
import RecetasOrganizadas from './RecetasOrganizadas'
import FormularioContacto from './FormularioContacto'
import Usuario from './Usuario'
import SobreMi from './SobreMi'
import Error404 from './Error404'
import Login from './Login'
import Principal from './Principal'
// // import Registro from './Registro'
import RutaProtegida from './RutaProtegida'
import Encabezado from './Encabezado'



const Enrrutado = () => {
    
    return (
        <>
            <BrowserRouter>
            <Encabezado/>
                <Menu />
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    {/* <Route path='/RecetasOrganizadas' element={<RecetasOrganizadas />}></Route> */}
                    <Route path='/SobreMi' element={<SobreMi />}></Route>
                    <Route path='/FormularioContacto' element={<FormularioContacto />}></Route>

                    <Route path='/Principal' element={<Principal />}></Route>
                    <Route path='/Login' element={<Principal />}></Route>

                    {/* <Route path='/Registro' element={<Registro />}></Route> */}


                    {/* ruta protegida */}

                    <Route element={<RutaProtegida />}>
                        <Route path='/Usuario' element={<Usuario />} />
                    </Route>
                    

                    <Route path='*' element={<Error404 />}></Route>
                    {/* Esto es el caso de error en caso que sea redireccionado a una ruta que no esta */}
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Enrrutado
