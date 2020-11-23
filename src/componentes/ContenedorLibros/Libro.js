import React from "react";
import Editar from "../Botones/Editar";
import Eliminar from "../Botones/Eliminar";

const Libro = (props) => {
  const libros = props.libros;
  return (
    <>
      {libros.map((libro, index) => {
        return (
          <div key={index}>
            <div className="ListaLibros">
              <div className="ListaImagen"> </div>
              <div className="ListaDescripcion">
                <div className="ListaDescripcionizq">
                  <h3>Titulo</h3>
                  <p>{libro.Titulo}</p>
                  <h3>Autor</h3>
                  <p>{libro.Autor}</p>
                </div>
                <div className="ListaDescripcionDer">
                  <h3>Editorial</h3>
                  <p>{libro.Editorial}</p>
                  <h3>Clasificacion</h3>
                  <p>{libro.Clasificacion}</p>
                </div>
              </div>
              <div className="ListaBotones">
              <Editar /><Eliminar />
            </div>
            </div>

          </div>
        );
      })}
    </>
  );
};

export default Libro;
