import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [size, setSize] = useState(20);
  const [grid, setGrid] = useState([]);
  const [width, setWidth] = useState("");
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [columns, setColumns] = useState("");
  const child = useRef();

  function handleSize(size) {
    setSize(size);
    setWidth(columns * size);
  }

  function createGrid(rows, columns) {
    setColumns(columns);
    setWidth(columns * size);
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

  useEffect(() => {
    if (!running) return;
    child.current.changeSpeed();
  });

  return (
    <div className="App">
      {console.log("app", grid)}
      <Form
        setWidth={setWidth}
        createGrid={createGrid}
        setSpeed={setSpeed}
        handleSize={handleSize}
      />
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
            ref={child}
          />
        </React.Fragment>
      ) : (
        <p>No input</p>
      )}
    </div>
  );
}

export default App;
