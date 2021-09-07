import React, { Component } from "react";

class Cell extends Component {
  state = { color: false };

  render() {
    return (
      <td
        style={{
          width: this.props.size + "px",
          height: this.props.size + "px",
        }}
        onClick={() => {
          this.setState({ color: !this.state.color });
          this.props.choose(this.props.i, this.props.j);
        }}
        className={this.state.color ? "cell black" : "cell"}
      ></td>
    );
  }
}

export default Cell;
