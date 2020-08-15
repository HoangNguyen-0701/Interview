import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logo.svg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEmail, setEmailValid] = useState(false);
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const [rememberMe, setrememberMe] = useState(false);
  const [hasError, setError] = useState(false);

  const regexEmail = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;

  const onRegister = (e) => {
    e.preventDefault();
    if (!username || !isEmail || !country || !password) {
      setError(true);
    } else {
      history.push('/login');
    }
  };

  useEffect(() => {
    setEmailValid(regexEmail.test(email));
  }, [email, regexEmail]);

  return (
    <div className="auth-wrapper template-demo">
      <div className="col-md-6 col-lg-4 auth-form-light text-left py-5 px-4 px-sm-5">
        <div className="brand-logo">
          <img src={logoImg} alt="logo" />
        </div>
        <h4>New here?</h4>
        <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
        <form className="pt-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputUsername1"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
            />
            <small className="text-danger">{hasError && !username && 'Your username is invalid'}</small>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
            />
            <small className="text-danger">{hasError && !isEmail && 'Your email is invalid'}</small>
          </div>
          <div className="form-group">
            <select
              className="form-control form-control-lg"
              id="exampleFormControlSelect2"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setError(false);
              }}
            >
              <option>Country</option>
              <option>United States of America</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option>Germany</option>
              <option>Argentina</option>
            </select>
            <small className="text-danger">{hasError && !country && 'Your country is invalid'}</small>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
            <small className="text-danger">{hasError && !password && 'Your password is invalid'}</small>
          </div>
          <div className="mb-4">
            <div className="form-check">
              <label className="form-check-label text-muted">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={rememberMe}
                  onChange={(e) => {
                    setrememberMe(e.target.checked);
                    setError(false);
                  }}
                />
                I agree to all Terms &amp; Conditions
                <i className="input-helper"></i>
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={onRegister}>
              SIGN UP
            </button>
          </div>
          <div className="text-center mt-4 font-weight-light">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
