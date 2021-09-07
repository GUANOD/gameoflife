import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import { React, useState } from "react";

function App() {
  // const [rows, setRows] = useState(null);
  // const [columns, setColumns] = useState(null);
  const [size, setSize] = useState("");

  const [grid, setGrid] = useState("");
  const [width, setWidth] = useState("");

  function handleGrid(rows, columns, size) {
    // setRows(rows);
    // setColumns(columns);
    createGrid(rows, columns);
    setSize(size);
    let fSize = size || 20;
    setWidth(columns * fSize);
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
      setGrid("");
    }
  }

  return (
    <div className="App">
      <Form handleGrid={handleGrid} />
      {grid ? (
        <Table
          width={width}
          grid={grid}
          setGrid={(value) => setGrid(value)}
          size={size ? size : 20}
        />
      ) : (
        <p>No input</p>
      )}
    </div>
  );
}

export default App;
