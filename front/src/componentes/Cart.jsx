import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../estilos/cart.css';

function Cart() {
  const [recetas, setRecetas] = useState([]);

  const getRecetas = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/recetas");
      setRecetas(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getRecetas();
  }, []);

  return (
    <>
      <div className='card-container'>
        {recetas.map((receta) => (
          <Card key={receta.id} className='custom-card'>
            <Card.Img 
              variant="top" 
              src={`/imagenes/${receta.imagen}`} 
              alt={receta.nombre} 
            />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <h6>Ingredientes:</h6>
              <Card.Text>
                {receta.ingredientes}
              </Card.Text>
              <h6>Paso a paso:</h6>
              <Card.Text>
                {receta.receta}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{receta.idCategoria}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cart;
