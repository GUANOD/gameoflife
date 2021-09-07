import React, { Component } from "react";
import Cell from "./Cell";

class Table extends Component {
  render() {
    let arr = [];

    for (let i = 1; i <= this.props.rows; i++) {
      let row = [];
      for (let j = 1; j <= this.props.columns; j++) {
        row.push([]);
      }
      arr.push(row);
    }

    console.table(arr);

    return (
      <table
        width={this.props.size * this.props.columns + "px"}
        className="game"
      >
        <tbody>
          {arr.map((elm) => {
            return (
              <tr>
                {elm.map((td) => (
                  <Cell size={this.props.size} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
