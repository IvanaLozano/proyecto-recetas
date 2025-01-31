import Nav from 'react-bootstrap/Nav';


const Menu = () => {

    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link href="/RecetasOrganizadas"eventKey="link-1">Recetas por categoria</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link href="/SobreMi"eventKey="link-1">Sobre Mi</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/FormularioContacto"eventKey="link-1">Dejanos tu comentario</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Principal"eventKey="link-2">Subir Receta(solo usuario)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                   
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Menu
