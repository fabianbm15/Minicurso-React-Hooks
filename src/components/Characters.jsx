import React, { useEffect, useState, useReducer } from "react";
import Card from "./Card";
import "./Characters.css";

const initialState = {
   favorites: [],
};

const favoriteReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_FAVORITE":
         return {
            ...state,
            favorites: [...state.favorites, action.payload],
         };
      default:
         return state;
   }
};

export default function Characters() {
   const [characters, setCharacters] = useState([]);
   const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

   useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
         .then((response) => response.json())
         .then((data) => setCharacters(data.results));
   }, []);

   const handleClick = (favorite) => {
      dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
   };

   return (
      <div className="Characters">
         <h2>Favorites</h2>
         <div className="Cards">
            {favorites.favorites.map((favorite, key) => {
               return <Card key={favorite.id} character={favorite} />;
            })}
         </div>

         <hr></hr>
         <h2>Characters</h2>
         <div className="Cards">
            {characters.map((character, key) => (
               <Card key={character.id} character={character} handleClick={handleClick} />
            ))}
         </div>
      </div>
   );
}
