import { useContext } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

function App() {
   const { theme } = useContext(ThemeContext);

   return (
      <div style={{ backgroundColor: theme.appBackgroundColor, margin: 0 }}>
         <div className="App" style={{ backgroundColor: theme.appBackgroundColor }}>
            <Header />
            <Characters />
         </div>
      </div>
   );
}

export default App;
