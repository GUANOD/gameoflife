import React, { Component } from "react";
import Cell from "./Cell";

class Table extends Component {
  // initialState = { grid: [] };

  grid = "";

  // createGrid = () => {
  //   let arr = [];
  //   for (let i = 1; i <= this.props.rows; i++) {
  //     let row = [];
  //     for (let j = 1; j <= this.props.columns; j++) {
  //       row.push([]);
  //     }
  //     arr.push(row);
  //   }
  //   return arr;
  // };

  choose = (i, j) => {
    this.props.setRun(true);

    if (!this.grid) this.grid = this.props.grid;

    this.grid[i][j] = 1;
    console.table(this.grid);
  };

  render() {
    // let arr = [];
    //J'AI BESOIN DE CETTE GRID POUR LES OPERATIONS DU JEU ET SI JE LA GARDE ICI EN STATE, A MOINS QUE J'UTILISE getDerivedStateFromProps,
    //LE STATE SERA ETABLI QUAND LE COMPOSANT SE MOUNT ET NE CHANGERA PLUS, MEME SI LES PROPS (ROW ET COLUMNS) CHANGENT,
    //J'AI ALORS GARDEE LA GRID EN STATE DE L'APP

    ///J'AVOUE QUE SE COMPOSANT NE SERT PLUS A GRAND CHOSE, MAIS J'AI LA FLEMME DE LE REFAIRE

    // for (let i = 1; i <= this.props.rows; i++) {
    //   let row = [];
    //   for (let j = 1; j <= this.props.columns; j++) {
    //     row.push([]);
    //   }
    //   arr.push(row);
    // }

    let grid = this.grid ? this.grid : this.props.grid;

    return (
      <table
        width={this.props.size * this.props.columns + "px"}
        className="game"
      >
        <tbody>
          {grid.map((elm, i) => {
            return (
              <tr key={i}>
                {elm.map((td, j) => (
                  <Cell
                    key={j}
                    i={i}
                    j={j}
                    size={this.props.size}
                    choose={this.choose}
                  />
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
