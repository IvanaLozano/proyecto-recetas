import { useState } from 'react';
import Axios from 'axios';
import "../estilos/PostReceta.css";

function PostReceta() {
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [receta, setReceta] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3000/recetas", {
        nombre,
        ingredientes,
        receta,
        idCategoria,
        imagen,
      });
      console.log('Reseta añadida:', response.data);
      alert('Receta creada exitosamente');

      setNombre('');
      setIngredientes('');
      setReceta('');
      setIdCategoria('');
      setImagen('');

    } catch (error) {
      console.error('Error añadiendo receta:', error);
      alert('Error al crear la receta');
    }

  };

  return (
    <form className="reseta-envio"onSubmit={handleSubmit}>
      <div>
        <h3>Inserte su nueva receta:</h3>
        <label className='nombres'>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required
        />
      </div>
      <div>
        <label className='nombres'>Ingredientes:</label>
        <textarea 
          value={ingredientes} 
          onChange={(e) => setIngredientes(e.target.value)} 
          required
        />
      </div>
      <div>
        <label className='nombres'>Receta:</label>
        <textarea 
          value={receta} 
          onChange={(e) => setReceta(e.target.value)} 
          required
        />
      </div>
      <div>
        <label className='nombres'>Categoría:</label>
        <input 
          type="number" 
          value={idCategoria} 
          onChange={(e) => setIdCategoria(e.target.value)} 
          required
        />
      </div>
      <div>
        <label className='nombres'>Imagen:</label>
        <input 
          type="text" 
          value={imagen} 
          onChange={(e) => setImagen(e.target.value)} 
        />
      </div>
      <button type="submit">Añadir Receta</button>
    </form>
  );
}

export default PostReceta;
