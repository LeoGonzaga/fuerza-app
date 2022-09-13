import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JournalList from '../pages/JournalList';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/journal-list" component={JournalList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
