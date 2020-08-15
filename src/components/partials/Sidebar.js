import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas bg-white" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="ti-shield menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
