import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
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
