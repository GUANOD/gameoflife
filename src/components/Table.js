import React, { Component } from "react";

class Table extends Component {
  state = {
    run: 0,
    interval: "",
    grid: this.props.grid,
  };

  handleGridChange = (i, j) => {
    console.log(i, j);
    let newGrid = [...this.state.grid];
    console.log("stategrid", this.state.grid);
    console.log("newGrid", newGrid);
    newGrid[i][j] = newGrid[i][j] === 1 ? "" : 1;
    console.table(newGrid);
    this.setState({ grid: newGrid });
  };

  runSim = () => {
    this.props.setRunning(true);
    let interval = setInterval(() => {
      let grid = [...this.state.grid];

      let newGrid = [];

      grid.forEach((row, i) => {
        let rows = [];

        grid[i].forEach((columns, j) => {
          let cells = 0;
          if (grid[i][j + 1] === 1) cells++;
          if (grid[i][j - 1] === 1) cells++;
          if (grid[i + 1] && grid[i + 1][j] === 1) cells++;
          if (grid[i + 1] && grid[i + 1][j - 1] === 1) cells++;
          if (grid[i + 1] && grid[i + 1][j + 1] === 1) cells++;
          if (grid[i - 1] && grid[i - 1][j] === 1) cells++;
          if (grid[i - 1] && grid[i - 1][j - 1] === 1) cells++;
          if (grid[i - 1] && grid[i - 1][j + 1] === 1) cells++;

          if (grid[i][j] === 1 && (cells === 2 || cells === 3)) {
            rows.push(1);
          } else if (grid[i][j] !== 1 && cells === 3) {
            rows.push(1);
          } else {
            rows.push("");
          }
        });

        newGrid.push(rows);
      });

      this.setState({ grid: newGrid });
    }, this.props.speed);

    this.setState({ interval });
  };

  stopSim = () => {
    clearInterval(this.state.interval);
    this.props.setRunning(false);
  };

  changeSpeed() {
    this.stopSim();
    this.runSim();
  }

  render() {
    return (
      <div className="gameContainer">
        <table width={this.props.width} className="game">
          <tbody>
            {this.state.grid.map((elm, i) => {
              return (
                <tr key={i}>
                  {elm.map((td, j) => {
                    return (
                      <td
                        key={j}
                        className={"cell"}
                        style =  {this.state.grid[i][j] === 1 ? {background: this.props.color}:{}}
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
        <button
          onClick={
            this.props.running ? () => this.stopSim() : () => this.runSim()
          }
          className={this.props.running ? "stop" : "start"}
        >
          {this.props.running ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default Table;
