import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import React, { useState } from "react";

function App() {
  const [size, setSize] = useState("");
  const [grid, setGrid] = useState([]);
  const [width, setWidth] = useState("");
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState("");

  function handleGrid(rows, columns, size, speed) {
    createGrid(rows, columns);
    setSize(size);
    let fSize = size || 20;
    setWidth(columns * fSize);
    setSpeed(speed);
  }

  function createGrid(rows, columns) {
    if (rows && columns) {
      let arr = [];
      for (let i = 1; i <= rows; i++) {
        let row = [];
        for (let j = 1; j <= columns; j++) {
          row.push("");
        }
        arr.push(row);
      }
      setGrid(arr);
    } else {
      setGrid([]);
    }
  }

  return (
    <div className="App">
      {console.log("app", grid)}
      <Form handleGrid={handleGrid} />
      {grid ? (
        <React.Fragment>
          <Table
            key={JSON.stringify(grid)}
            width={width}
            grid={grid}
            size={size ? size : 20}
            setRunning={setRunning}
            running={running}
            speed={speed}
          />
        </React.Fragment>
      ) : (
        <p>No input</p>
      )}
    </div>
  );
}

export default App;
