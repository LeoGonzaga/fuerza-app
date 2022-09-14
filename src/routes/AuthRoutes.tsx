import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useUserStore } from '../store/user';

function PrivateRoute({ ...rest }: RouteProps) {
  const { setUser }: any = useUserStore();

  const user = sessionStorage.getItem('user');
  setUser(JSON.parse(user || ''));

  return user ? <Route {...rest} /> : <Redirect to="/" />;
}

export default PrivateRoute;
