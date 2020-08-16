import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { storageService } from '../../services/storageService';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogin = storageService.getToken();
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PublicRoute;
