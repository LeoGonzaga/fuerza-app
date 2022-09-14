import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CreateJournal from '../pages/Journal/CreateJournal';
import JournalList from '../pages/Journal/JournalList';
import CreatePost from '../pages/Posts/CreatePost';
import PostList from '../pages/Posts/PostList';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './AuthRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <PrivateRoute path={ROUTES.JOURNAL_LIST} component={JournalList} />
        <Route path={ROUTES.CREATE_JOURNAL} component={CreateJournal} />
        <Route path={ROUTES.POST_LIST} component={PostList} />
        <Route path={ROUTES.CREATE_POST} component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
