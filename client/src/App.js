import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import LoanScreen from "./screens/LoanScreen";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/loans" exact component={LoanScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Redirect to="/" />
      </Switch>
      <Calculator />
    </Layout>
  );
}

export default App;
