import React from "react";
import "./Card.css";

export default function Card({ character }) {
   return (
      <div className="Card">
         <h2>{character.name}</h2>
         <img className="image" src={character.image} alt="No se pudo cargar la imagen" />
      </div>
   );
}
