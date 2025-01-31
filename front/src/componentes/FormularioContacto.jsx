
import { useForm } from "../hooks/useForm";
import Loader from "../componentes/Loader";
import Message from "../componentes/Message";

import Form from 'react-bootstrap/Form';

const initialForm = {
  name: "",
  email: "",
  comentarios: "",
};

const validationsForm = (form) => {
  let errors = {};
  // expresiones regulares, name may y min y acentos, comentario del 1 al 255.
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";

  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }


  if (!form.comentarios.trim()) {
    errors.comentarios = "El campo 'Comentario' es requerido";
  } else if (!regexComments.test(form.comentarios.trim())) {
    errors.comentarios = "El campo 'comentarios' no debe exceder los 255 caracteres";
  }

  return errors;

};
let styles = {
  fontWeight: "bold",
  color: "#dc3545"

}

function FormularioContacto() {

  const { form, errors, loading, respuesta, handleChange, handleSubmit, handleValidacion } = useForm(initialForm, validationsForm);

  return (
    <>
      <hr/>
      <h4>Dejanos tu comentario para saber si te gusto nuestro sitio web! </h4>
      <h4>Si estas interesado/a en alguna receta que quieras que publiquemos, escríbenos! </h4>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Escribe tu nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleValidacion}
            placeholder="Ingrese su nombre completo"
            required
          />
          {errors.name && <p style={styles}>{errors.name}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Escribe tu mail:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleValidacion}
            placeholder="name@example.com"
            required
          />
          {errors.email && <p style={styles}>{errors.email}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dejanos tu comentario:</Form.Label>
          <Form.Control
            as="textarea"
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
            onBlur={handleValidacion}
            rows={3}
            required
          />
          {errors.comentarios && <p style={styles}>{errors.comentarios}</p>}
        </Form.Group>
        <input type="submit" value="Enviar el comentario"></input>
        {loading && <Loader/>}
      {respuesta && (<Message msg= "Los datos han sido enviados" bgColor= "#198754"/>)}
      </Form>
    </>
  )
}


export default FormularioContacto;
