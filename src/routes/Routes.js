import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Meals from '../pages/Meals';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Meals } />
    </Switch>
  );
}

export default Routes;
