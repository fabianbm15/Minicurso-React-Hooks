import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Search.css";

export default function Search({ search, searchInput, handleSearch }) {
   const { theme, toggleTheme } = useContext(ThemeContext);

   return (
      <div className="Search">
         <h2 style={{ color: theme.textColor }}>Search characters</h2>
         <div className="SearchContent">
            <input
               className="inputSearch"
               type="text"
               value={search}
               ref={searchInput}
               onChange={handleSearch}
            />
         </div>
      </div>
   );
}
