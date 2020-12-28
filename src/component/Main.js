import React from "react";

//React Router Dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import store from "../store";
import { Provider } from "react-redux";
import Login from "./Login";
import Results from "./Results";

export default function main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
