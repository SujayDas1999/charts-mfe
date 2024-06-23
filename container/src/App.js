import React from "react";
import MarketingApp from "./components/MarketingApp";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </StylesProvider>
  );
}

export default App;
