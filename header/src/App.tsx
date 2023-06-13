import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import "./index.css";

const App = () => {
  return <Header></Header>;
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
