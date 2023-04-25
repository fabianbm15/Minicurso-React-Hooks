import React, { useEffect, useState, useReducer, useContext, useMemo, useRef } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
import "./Characters.css";

const initialState = {
   favorites: [],
};

const favoriteReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_FAVORITE":
         const index = state.favorites.findIndex((character) => character.id === action.payload.id);
         if (index !== -1) {
            return state;
         } else {
            return {
               ...state,
               favorites: [...state.favorites, action.payload],
            };
         }

      case "DELETE_FROM_FAVORITE":
         // console.log(state);
         const filteredFavs = state.favorites.filter((fav) => fav.id !== action.payload);
         return { ...state, favorites: filteredFavs };
      default:
         return state;
   }
};

export default function Characters() {
   const [characters, setCharacters] = useState([]);
   const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
   const [search, setSearch] = useState("");
   const searchInput = useRef(null);
   const { theme } = useContext(ThemeContext);

   useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
         .then((response) => response.json())
         .then((data) => setCharacters(data.results));
   }, []);

   const handleClick = (favorite) => {
      dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
   };

   const handleDelete = (id) => {
      dispatch({ type: "DELETE_FROM_FAVORITE", payload: id });
   };

   const handleSearch = () => {
      setSearch(searchInput.current.value);
   };

   // const filteredUsers = characters.filter((user) => {
   //    return user.name.toLowerCase().includes(search.toLowerCase());
   // });

   const filteredUsers = useMemo(
      () =>
         characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
         }),
      [characters, search]
   );

   return (
      <div className="Characters">
         <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
         </div>
         <h2 className="Subtitle" style={{ color: theme.color, background: theme.background }}>
            Favorites
         </h2>
         <div className="Cards">
            {favorites.favorites.length === 0 ? (
               <h3 className="Subtitle" style={{ color: theme.textColor }}>
                  Favorites is empty...
               </h3>
            ) : (
               favorites.favorites.map((favorite, key) => {
                  return (
                     <Card key={favorite.id} character={favorite} handleDelete={handleDelete} />
                  );
               })
            )}
         </div>

         <hr></hr>
         <h2 className="Subtitle" style={{ color: theme.color, background: theme.background }}>
            Characters
         </h2>
         <div className="Cards">
            {filteredUsers.map((character, key) => (
               <Card
                  key={character.id}
                  character={character}
                  handleClick={handleClick}
                  handleDelete={handleDelete}
               />
            ))}
         </div>
      </div>
   );
}
