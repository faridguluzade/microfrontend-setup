import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import "./index.css";

const App = () => {
  return <Sidebar />;
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
