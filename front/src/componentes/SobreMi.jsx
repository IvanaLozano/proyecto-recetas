import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import '../estilos/SobreMi.css';

function SobreMi() {
  const [open, setOpen] = useState({});

  const handleAlternar = (section) => {
    setOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <h4>Conoce todo sobre mi!</h4>

      <div className="button-group">
        <Button
          onClick={() => handleAlternar('introduccion')}
          aria-controls="introduccion-collapse-text"
          aria-expanded={open.introduccion}
        >
          Introducción
        </Button>

        <Button
          onClick={() => handleAlternar('motivaciones')}
          aria-controls="motivaciones-collapse-text"
          aria-expanded={open.motivaciones}
        >
          Motivaciones
        </Button>

        <Button
          onClick={() => handleAlternar('anecdota')}
          aria-controls="anecdota-collapse-text"
          aria-expanded={open.anecdota}
        >
          Anecdota
        </Button>

        <Button
          onClick={() => handleAlternar('conclusion')}
          aria-controls="conclusion-collapse-text"
          aria-expanded={open.conclusion}
        >
          Conclusión
        </Button>
      </div>

      <div className="card-container">
        <Collapse in={open.introduccion} dimension="width">
          <div id="introduccion-collapse-text">
            <Card body className="custom-card">
              Bienvenidos a mi pagina web, mi nombre es Ricardo Morales, soy un apasionado de la cocina que ha recorrido los rincones más exóticos del planeta en busca de sabores auténticos y experiencias culinarias únicas. Con más de cinco años de experiencia, he trabajado en cocinas de renombre en distintos paices y ciudades, perfeccionando mi arte y aprendiendo de las culturas locales.
            </Card>
          </div>
        </Collapse>

        <Collapse in={open.motivaciones} dimension="width">
          <div id="motivaciones-collapse-text">
            <Card body className="custom-card">
              Desde pequeño, sintí una conexión especial con la cocina. Inspirado por las recetas familiares y los aromas que llenaban mi hogar, decidí seguir su pasión y convertirla en su profesión. Mi motivación principal es compartir la riqueza cultural que se encuentra en cada plato y demostrar que la cocina es un lenguaje universal que une a las personas.
            </Card>
          </div>
        </Collapse>

        <Collapse in={open.anecdota} dimension="width">
          <div id="anecdota-collapse-text">
            <Card body className="custom-card">
              Durante mi estancia en Argentina, tuve la oportunidad de trabajar en un pequeño restaurante local. Un día, mientras exploraba el mercado, conocí a una anciana que vendía especias. Ella me enseñó los secretos de una receta ancestral que había pasado de generación en generación. Con su permiso, incorporé esta receta en mi menú, y pronto se convirtió en el plato más popular del restaurante. Esta experiencia le enseñó la importancia de honrar las tradiciones y respetar los ingredientes locales.
            </Card>
          </div>
        </Collapse>

        <Collapse in={open.conclusion} dimension="width">
          <div id="conclusion-collapse-text">
            <Card body className="custom-card">
              En esta pagina, se compartirá recetas, historias y consejos. Mi objetivo es inspirar a otros a explorar el mundo a través de la cocina y a descubrir la magia que se esconde en cada bocado. ¡Acompáñenme en este viaje culinario y descubran los sabores del mundo conmigo!
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default SobreMi;
