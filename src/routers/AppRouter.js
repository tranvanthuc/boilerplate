import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Boilerplate from '../components/Boilerplate';
import Test from '../components/Test';
import Header from '../components/Header';
import NoMatch from '../components/NoMatch';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Boilerplate} />
          <Route path="/test/:id" component={Test} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
