import React, { Component } from "react";
const allSpeeds = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

class Form extends Component {
  state = { 
    rows: "", 
    columns: "", 
    size: "", 
    speed:5,

    
};
  

  handleChange = (target) => {
    console.log(target.value);
    this.setState(
      { [target.name]: target.value > 100 ? 100 : target.value },
      () => {
        this.props.handleGrid(
          this.state.rows,
          this.state.columns,
          this.state.size,
          this.state.speed
        );
      }
    );
  };

  handleSpeed = (value) =>{
    console.log(value);
    

    this.setState({speed : value}, ()=>{
      
        this.props.handleGrid(
          this.state.rows,
          this.state.columns,
          this.state.size,
          allSpeeds[value]
        );
    })
  }


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

        <label htmlFor="speed">Speed</label>
        <input
          type ="range"
          min= "0"
          max= "10"
          id="speed"
          name="speed"
          value={this.state.speed}
          step="1"
          onChange={(e) => this.handleSpeed(e.target.value)}
        ></input>

      </form>
    );
  }
}

export default Form;
