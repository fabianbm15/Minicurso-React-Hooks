import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext, { darkTheme, lightTheme } from "./context/ThemeContext.js";

function Main() {
   const [theme, setTheme] = useState(lightTheme);

   const toggleTheme = () => {
      setTheme(theme === lightTheme ? darkTheme : lightTheme);
   };

   return (
      <React.StrictMode>
         <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <App />
         </ThemeContext.Provider>
      </React.StrictMode>
   );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
