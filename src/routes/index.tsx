import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CreateJournal from '../pages/CreateJournal';
import JournalList from '../pages/JournalList';
import PostList from '../pages/PostList';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.JOURNAL_LIST} component={JournalList} />
        <Route path={ROUTES.CREATE_JOURNAL} component={CreateJournal} />
        <Route path={ROUTES.POST_LIST} component={PostList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
