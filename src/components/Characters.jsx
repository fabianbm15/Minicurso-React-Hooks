import React, { useState, useReducer, useContext, useMemo, useRef, useCallback } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";
import "./Characters.css";

const API = "https://rickandmortyapi.com/api/character/";

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
   const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
   const [search, setSearch] = useState("");
   const searchInput = useRef(null);
   const { theme } = useContext(ThemeContext);

   const characters = useCharacters(API);

   const handleClick = (favorite) => {
      dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
   };

   const handleDelete = (id) => {
      dispatch({ type: "DELETE_FROM_FAVORITE", payload: id });
   };

   // const handleSearch = () => {
   //    setSearch(searchInput.current.value);
   // };

   const handleSearch = useCallback(() => {
      setSearch(searchInput.current.value);
   }, []);

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
         <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
         <h2 className="Subtitle" style={{ color: theme.color, background: theme.background }}>
            Favorites
         </h2>
         <div className="Cards">
            {favorites.favorites.length === 0 ? (
               <h3 className="Subtitle" style={{ color: theme.textColor }}>
                  Favorites is empty...
               </h3>
            ) : (
               favorites.favorites.map((favorite) => {
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
            {filteredUsers.map((character) => (
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
