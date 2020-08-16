import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { storageService } from '../../services/storageService';

// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = storageService.getToken();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: 'login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
