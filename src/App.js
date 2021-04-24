import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Appstart from "./Appstart";
import BannerMovie from "./BannerMovie";
import "./App.css";

const App = () => {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Appstart} />
          <Route path="/movie/:id/:imgid" exact component={BannerMovie} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
