import React, { Component } from "react";

class Table extends Component {
  state = { run: 0 };

  handleGridChange = (i, j) => {
    console.log(i, j);
    let newGrid = this.props.grid;
    newGrid[i][j] = newGrid[i][j] === 1 ? "" : 1;
    console.table(newGrid);
    this.props.setGrid(newGrid);
    this.setState({ run: this.state.run + 1 });
  };

  render() {
    console.log("rerendering");
    return (
      <table width={this.props.width} className="game">
        <tbody>
          {this.props.grid.map((elm, i) => {
            return (
              <tr key={i}>
                {elm.map((td, j) => {
                  return (
                    <td
                      key={j}
                      className={
                        this.props.grid[i][j] === 1 ? "cell black" : "cell"
                      }
                      onClick={() => this.handleGridChange(i, j)}
                      width={this.props.size}
                      height={this.props.size}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
