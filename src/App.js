import { createContext } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";

export const PlayerContext = createContext();

function App() {
  const player = {
    name: "Sami",
    age: 21,
  };

  return (
    <div className="App">
      <PlayerContext.Provider value={player}>
        <Comp1 />
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
