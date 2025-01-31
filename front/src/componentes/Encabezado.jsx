import "../estilos/encabezado.css";

const Encabezado = () => {


  return (
    <div className="rubik-doodle-triangles-regular encabezado-container">
      <img src="/imagenes/logo.jpg" alt="Logo" className="logo" />
      <div className="encabezado-texto">
        <h2 className="encabezado">Bienvenidos/as a mi página web</h2>
        <h3 className="encabezado">Espero que disfruten de mis recetas!</h3>
      </div>
    </div>
  );
};

export default Encabezado;
