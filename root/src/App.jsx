import React from "react";
import ReactDOM from "react-dom";

import Header from "header/app";
import Sidebar from "sidebar/app";
import Content from "content/app";

// console.log(Sidebar);

import "./index.css";

const App = () => (
  <div>
    <Header />
    <Sidebar />
    <Content />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
