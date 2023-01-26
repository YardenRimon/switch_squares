import { useState } from "react";
import "./App.css";
import ContinuousSlider from "./components/ContinuousSlider.tsx";
import Square from "./components/Square.tsx";

function App() {

  const initPosition = 0;

  const [position, setPosition] = useState(initPosition);
  let bluePos = position * 1.2;
  let redPos = position * (-1.2)

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Yarden's Place!</p>
      </header>
      <div className="wrapper">
        <div className="squares_container">
          <Square color={'blue'} position={bluePos} />
          <Square color={'red'} position={redPos} />
        </div>
        <div className="slider_container">
          <ContinuousSlider setPosition={setPosition} />
        </div>
      </div>
    </div>
  );
}

export default App;
