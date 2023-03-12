import React from "react";
import '../stylesheets/Card.css'
function Card(props){
  return(
    <div className="contenedor-card">
      <img 
        className="img-card"
        src={require(`../images/card-${props.imagen}.jpg`)}
        alt="Foto de Jeremy Buendia"
      />
      <div className="contenedor-texto-card">
        <p className="nombre-card"><strong>{props.nombre} - ({props.pais})</strong> </p>
        <p className="profesion-card"><strong>{props.profesion}</strong></p>
        <p className="descripcion-card">{props.descripcion}</p>
      </div>
    </div>
  );
}
export default Card;
