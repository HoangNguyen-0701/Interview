import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { storageService } from '../../services/storageService';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const Login = React.lazy(() => import('../../components/pages/Auth/Login'));
const Register = React.lazy(() => import('../../components/pages/Auth/Register'));
const Home = React.lazy(() => import('../../components/pages/Home'));
const NotFound = React.lazy(() => import('../../components/pages/NotFound'));

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/',
          exact: true,
          component: Home,
          isPrivate: true,
        },
        {
          path: '/login',
          exact: true,
          component: Login,
          isPrivate: false,
        },
        {
          path: '/register',
          exact: true,
          component: Register,
          isPrivate: false,
        },
        {
          path: '*',
          exact: true,
          component: NotFound,
          isPrivate: false,
        },
      ],
    };
  }

  render() {
    const { routes } = this.state;
    const isLogin = storageService.getToken();
    return (
      <Router>
        <Switch>
          {routes.map((r, i) =>
            r.isPrivate ? (
              <PrivateRoute
                key={i}
                path={r.path}
                exact={r.exact}
                component={WaitingComponent(r.component)}
                isLogin={isLogin}
              />
            ) : (
              <PublicRoute
                key={i}
                path={r.path}
                exact={r.exact}
                component={WaitingComponent(r.component)}
                isLogin={isLogin}
              />
            )
          )}
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
