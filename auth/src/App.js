import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              path="/auth/signin"
              render={() => <SignIn onSignIn={onSignIn} />}
            ></Route>
            <Route
              path="/auth/signup"
              render={() => <SignUp onSignIn={onSignIn} />}
            ></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
