import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

function PrivateRoute({ ...rest }: RouteProps) {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem('token');
    if (value) {
      setIsAuth(!!value);
      history.replace({ pathname: ROUTES.JOURNAL_LIST });
    } else {
      history.replace({ pathname: ROUTES.SIGN_IN });
    }
  }, []);

  return isAuth ? <Route {...rest} /> : <Redirect to="/" />;
}

export default PrivateRoute;
