import { useContext } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

function App() {
   const { theme } = useContext(ThemeContext);

   return (
      <div
         style={{
            background: theme.appBackgroundColor,
            margin: 0,
            fontFamily: "Courier New",
         }}
      >
         <div className="App" style={{ backgroundColor: theme.appBackgroundColor }}>
            <Header />
            <div className="DivComponents">
               <Characters />
            </div>
         </div>
      </div>
   );
}

export default App;
