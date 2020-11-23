import React from 'react'
import "./style.css";
import {Link} from "react-router-dom"
import {ReactComponent as IconoEliminar} from "../../img/Eliminar.svg"
const Eliminar = () => {
    return (
        <div>
        <button className='BtnCrear BtnEliminar'>
          <IconoEliminar /> <span>Eliminar Libro</span>
        </button>
        </div>
    )
}

export default Eliminar
