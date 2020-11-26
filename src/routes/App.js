import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Login' component={Login}></Route>
        <Route exact path='/Register' component={Register}></Route>
        <Route exact path='/player/:id' component={Player}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
