import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input, Checkbox } from '../../common';

import { auth } from '../../../services/modules/authService';
import logoImg from '../../../assets/images/logo.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [hasError, setError] = useState(false);
  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
    } else {
      auth.login({ username, password, rememberMe }).then((res) => {
        history.push('/');
      });
    }
  };
  return (
    <div className="auth-wrapper template-demo">
      <div className="col-md-6 col-lg-4 auth-form-light text-left py-5 px-4 px-sm-5 m-4">
        <div className="brand-logo">
          <img src={logoImg} alt="logo" />
        </div>
        <h4>Hello! let's get started</h4>
        <h6 className="font-weight-light">Sign in to continue.</h6>
        <form className="pt-3">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChangeValue={setUsername}
            checkError={hasError && !username}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChangeValue={setPassword}
            checkError={hasError && !password}
          />
          <div className="mt-3">
            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={login}>
              SIGN IN
            </button>
          </div>
          <div className="my-2 d-flex justify-content-between align-items-center">
            <Checkbox label="Keep me signed in" value={rememberMe} onChangeValue={setRememberMe} />
            <Link to="/forgot-password" className="auth-link text-black">
              Forgot password?
            </Link>
          </div>
          <div className="mb-2">
            <button type="button" className="btn btn-block btn-facebook auth-form-btn">
              <i className="ti-facebook mr-2"></i>Connect using facebook
            </button>
          </div>
          <div className="text-center mt-4 font-weight-light">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary">
              Create
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
