import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Header.css";

export default function Header() {
   const [darkMode, setDarkMode] = useState(false);

   const color = useContext(ThemeContext);

   const handleClick = () => {
      setDarkMode(!darkMode);
   };
   return (
      <div className="Header">
         <h1 style={{ color }}>ReactHooks</h1>
         <button className="buttonDarkMode" type="button" onClick={handleClick}>
            {darkMode ? "Dark Mode" : "Light Mode"}
         </button>
         {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark Mode" : "Light Mode"}
         </button> */}
      </div>
   );
}
