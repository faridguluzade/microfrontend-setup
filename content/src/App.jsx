import React from "react";
import ReactDOM from "react-dom";

import Root from "./routes/router";

import "./index.css";

const App = () => {
  return <Root />;
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
