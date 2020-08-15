import React from 'react';
import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Footer from '../../partials/Footer';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
