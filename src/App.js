import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appstart from "./Appstart";
import BannerMovie from "./BannerMovie";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Appstart} />
          <Route path="/movie/:id/:imgid" exact component={BannerMovie} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
