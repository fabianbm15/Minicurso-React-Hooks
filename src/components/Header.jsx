import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Header.css";

export default function Header() {
   const [darkMode, setDarkMode] = useState(false);

   const { theme, toggleTheme } = useContext(ThemeContext);

   const handleClick = () => {
      setDarkMode(!darkMode);
      toggleTheme();
   };
   return (
      <div className="Header" style={{ background: theme.background }}>
         <div className="HeaderContent">
            <h1 style={{ color: theme.color }}>ReactHooks</h1>
            <button
               className="buttonDarkMode"
               type="button"
               onClick={handleClick}
               style={{ background: theme.backgroundButton, color: theme.colorButton }}
            >
               {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark Mode" : "Light Mode"}
         </button> */}
         </div>
      </div>
   );
}
