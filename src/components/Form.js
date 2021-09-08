import React, { Component } from "react";

class Form extends Component {
  state = { rows: "", columns: "", size: "" };

  handleChange = (target) => {
    console.log(target.value);
    this.setState(
      { [target.name]: target.value > 100 ? 100 : target.value },
      () => {
        this.props.handleGrid(
          this.state.rows,
          this.state.columns,
          this.state.size
        );
      }
    );
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
          onChange={(e) => this.handleChange(e.target)}
        ></input>
      </form>
    );
  }
}

export default Form;
