import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Characters.css";

export default function Characters() {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
         .then((response) => response.json())
         .then((data) => setCharacters(data.results));
   }, []);

   return (
      <div className="Characters">
         {characters.map((character) => (
            <Card character={character} />
         ))}
      </div>
   );
}
