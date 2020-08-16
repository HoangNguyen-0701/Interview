import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../services/modules/authService';
import logoImg from '../../assets/images/logo.svg';
import logoutImg from '../../assets/images/logout.svg';

const Narbar = () => {
  let history = useHistory();

  const onLogout = () => {
    auth.logout();
    history.replace('/login');
  };
  return (
    <nav className="navbar col-lg-12 col-12 fixed-top d-flex flex-row bg-secondary">
      <Link className="navbar-brand brand-logo mr-5" to="/">
        <img src={logoImg} className="mr-2" alt="logo" />
      </Link>
      <button className="btn" onClick={onLogout}>
        <img src={logoutImg} className="brand-logo-mini" alt="logo" />
      </button>
    </nav>
  );
};

export default Narbar;
