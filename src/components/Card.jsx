import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Card.css";

export default function Card({ character, handleClick, handleDelete }) {
   const { theme } = useContext(ThemeContext);

   return (
      <div
         className="Card"
         style={{ background: theme.backgroundCard, color: theme.titleCardColor }}
      >
         <h2>{character.name}</h2>
         <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
         </button>
         <button type="button" onClick={() => handleDelete(character.id)}>
            Eliminar de Favoritos
         </button>
         <img className="image" src={character.image} alt="No se pudo cargar la imagen" />
      </div>
   );
}
