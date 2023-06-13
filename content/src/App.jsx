import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/Content/Content";

import "./index.css";

const App = () => {
  return <Content />;
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
