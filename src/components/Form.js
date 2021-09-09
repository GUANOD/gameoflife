import React, { Component } from "react";
const speed = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

class Form extends Component {
  state = { rows: "", columns: "", size: "", speed: "", color: "#000000" };

  handleChange = (target) => {
    console.log(target.value);
    this.setState(
      { [target.name]: target.value > 100 ? 100 : target.value },
      () => {
        this.props.createGrid(this.state.rows, this.state.columns);
      }
    );
  };

  handleSpeed = (value) => {
    this.setState({ speed: value });
    this.props.setSpeed(speed[this.state.speed]);
  };

  render() {
    return (
      <form className="inputs">
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          id="rows"
          maxLength="2"
          name="rows"
          value={this.state.rows}
          onChange={(e) => this.handleChange(e.target)}
          disabled={this.props.run}
        ></input>

        <label htmlFor="columns">Columns</label>
        <input
          type="number"
          id="columns"
          name="columns"
          value={this.state.columns}
          maxLength="2"
          onChange={(e) => this.handleChange(e.target)}
          disabled={this.props.run}
        ></input>

        <label htmlFor="size">Size</label>
        <input
          type="range"
          min="10"
          max="30"
          id="size"
          name="size"
          value={this.state.size}
          step="1"
          onChange={(e) =>
            this.setState({ size: e.target.value }, () =>
              this.props.handleSize(this.state.size)
            )
          }
        ></input>

        <label htmlFor="speed">Speed</label>
        <input
          type="range"
          min="0"
          max="10"
          id="speed"
          name="speed"
          value={this.state.speed}
          step="1"
          onChange={(e) => this.handleSpeed(e.target.value)}
        ></input>

        <label htmlFor="color">Color</label>
        <input
          type="color"
          id="color"
          name="color"
          value={this.state.color}
          onChange={(e) =>
            this.setState({ color: e.target.value }, () => {
              this.props.setColor(this.state.color);
            })
          }
        ></input>
      </form>
    );
  }
}

export default Form;
