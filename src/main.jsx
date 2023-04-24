import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext, { darkTheme, lightTheme } from "./context/ThemeContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeContext.Provider value="red">
         <App />
      </ThemeContext.Provider>
   </React.StrictMode>
);
