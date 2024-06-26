import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn}></Route>
            <Route path="/auth/signup" component={SignUp}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
