import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Register' component={Register}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
