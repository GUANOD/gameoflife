import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import { React, useState } from "react";

function App() {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [size, setSize] = useState(null);
  const [run, setRun] = useState(false);

  function handleSize(rows, columns, size) {
    setRows(rows);
    setColumns(columns);
    setSize(size);
  }

  function createGrid() {
    let arr = [];
    for (let i = 1; i <= rows; i++) {
      let row = [];
      for (let j = 1; j <= columns; j++) {
        row.push([]);
      }
      arr.push(row);
    }
    console.log("array is", arr);
    return arr;
  }

  return (
    <div className="App">
      <Form run={run} handleSize={handleSize} />
      {rows && columns ? (
        //JAI CREE ALORS UNE GRID ICI ET JE L'ENVOYE EN PROPS POUR ETRE RENDERED
        <Table
          setRun={(value) => setRun(value)}
          grid={createGrid()}
          size={size ? size : 20}
        />
      ) : (
        <p>No input</p>
      )}
    </div>
  );
}

export default App;
