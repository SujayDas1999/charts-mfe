import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === "development") {
  const ele = document.querySelector("#marketing-dev-root");

  if (ele) {
    mount(ele);
  }
}

export { mount };
