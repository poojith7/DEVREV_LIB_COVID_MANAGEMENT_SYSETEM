import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Library management system</h2>
        </header>
        <Home />
        <footer>
          <small>
            🕷 THANK YOU,{" "}
            <a href="https://www.linkedin.com/in/mannepalli-poojith/">
              Poojith
            </a>file:///home/poojith7/Documents/covid-manegment-system%20backend/src

            .
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
