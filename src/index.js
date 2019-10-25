import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/header";

import "./styles.css";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
