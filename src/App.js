import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import { React, useState } from "react";

function App() {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [size, setSize] = useState(null);

  function handleSize(rows, columns, size) {
    setRows(rows);
    setColumns(columns);
    setSize(size);
  }

  return (
    <div className="App">
      <Form handleSize={handleSize} />
      {rows && columns ? (
        <Table rows={rows} columns={columns} size={size ? size : 10} />
      ) : (
        <p>No input</p>
      )}
    </div>
  );
}

export default App;
