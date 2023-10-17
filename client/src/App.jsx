import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { Landing, Home, Activity, Detail } from "./pages";
const App = () => {
  const history = useHistory();
  const [isReloading, setIsReloading] = useState(true);

  useEffect(() => {
    if (isReloading) {
      setIsReloading(false);

      history.push("/");
    }
  }, [isReloading, history]);

  useEffect(() => {
    window.onload = () => {
      setIsReloading(true);
    };
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/detail/:id" render={() => <Detail />} />
        <Route exact path="/activity" render={() => <Activity />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
