import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import { createBrowserHistory } from "history/cjs/history";

const mount = (
  element,
  { onSignIn, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const ele = document.querySelector("#auth-dev-root");

  if (ele) {
    mount(ele, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
