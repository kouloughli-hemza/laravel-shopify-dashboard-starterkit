import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import MediaManager from "./components/MediaManager/MediaManager";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/podify" exact component={Dashboard} />
        <Route path="/podify/app" exact component={Dashboard} />
        <Route path="/podify/app/media" exact component={MediaManager} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
