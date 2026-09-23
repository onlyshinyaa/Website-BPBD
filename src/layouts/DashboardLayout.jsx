import React from 'react';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-content-wrapper">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
