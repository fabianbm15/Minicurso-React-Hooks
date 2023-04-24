import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Card.css";

export default function Card({ character }) {
   const { theme } = useContext(ThemeContext);

   return (
      <div
         className="Card"
         style={{ background: theme.backgroundCard, color: theme.titleCardColor }}
      >
         <h2>{character.name}</h2>
         <img className="image" src={character.image} alt="No se pudo cargar la imagen" />
      </div>
   );
}
