import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    toggle: true
  };
  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  showHide = () => {
    if (this.state.toggle) {
      return "Hide";
    } else {
      return "Show";
    }
  };
  render() {
    return (
      <div className="App">
        <h3>{this.state.toggle && "Hi i am Here"}</h3>
        <button onClick={this.onToggle}>
          {/* {this.state.toggle ? "Hide" : "Show"} */}
          {this.showHide()}
        </button>
      </div>
    );
  }
}

export default App;
