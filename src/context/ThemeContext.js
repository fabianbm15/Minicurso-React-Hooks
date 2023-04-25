import React, { createContext } from "react";

const ThemeContext = createContext(null);

export const lightTheme = {
   appBackgroundColor: "#F0F0F0",
   background: "linear-gradient(to top right, #0068B1, #4ADCC2)",
   color: "#fff",
   backgroundButton: "#2D2727",
   colorButton: "#fff",
   backgroundCard: "linear-gradient(to top right, #00B7C3, #4ADCC2)",
   titleCardColor: "#1d1e1e",
   textColor: "#000",
};

export const darkTheme = {
   appBackgroundColor: "#000",
   background: "#1d1e1e",
   color: "#fff",
   backgroundButton: "#AFA8BA",
   colorButton: "#000",
   backgroundCard: "#1d1e1e",
   titleCardColor: "#7DB3C6",
   textColor: "#fff",
};

export default ThemeContext;
