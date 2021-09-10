import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Home from "./Home";
import Results from "./Results";
import Detail from "./Detail";

function App() {
  return (
    <Switch>
      {/* <Route path="/" component={Detail} exact /> */}
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Results} />
      <Route path="/courses" component={Detail} />
    </Switch>
  );
}

export default App;
