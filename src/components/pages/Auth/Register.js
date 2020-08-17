import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Input, Checkbox } from '../../common';
import { auth } from '../../../services/modules/authService';

import logoImg from '../../../assets/images/logo.svg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEmail, setEmailValid] = useState(false);
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const [rememberMe, setRememberMe] = useState(false);
  const [hasError, setError] = useState(false);

  const regexEmail = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;

  const onRegister = async (e) => {
    e.preventDefault();
    if (!username || !isEmail || !country || !password) {
      setError(true);
    } else {
      try {
        const res = await auth.register({ username, email, country, password });
        alert(res.msg);
        history.push('/login');
      } catch (error) {
        console.error(error);
      }
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
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChangeValue={(v) => {
              setUsername(v);
              setError(false);
            }}
            checkError={hasError && !username}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChangeValue={(v) => {
              setEmail(v);
              setError(false);
            }}
            checkError={hasError && !isEmail}
          />

          <div className="form-group">
            <select
              className="form-control form-control-lg"
              id="exampleFormControlSelect2"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
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
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChangeValue={(v) => {
              setPassword(v);
              setError(false);
            }}
            checkError={hasError && !password}
          />

          <div className="mb-4">
            <Checkbox value={rememberMe} onChangeValue={setRememberMe} label="I agree to all Terms &amp; Conditions" />
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
