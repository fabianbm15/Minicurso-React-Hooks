import React, { createContext } from "react";

const ThemeContext = createContext(null);

export const lightTheme = {
   background: "#fff",
   color: "#000",
};

export const darkTheme = {
   background: "#000",
   color: "#fff",
};

export default ThemeContext;
