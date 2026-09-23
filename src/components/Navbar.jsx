import React from 'react';
import bpbdLogo from '../assets/logos/bpbd-removebg-preview.png';

const Navbar = () => {
  return (
    <header className="top-navbar">
      <div className="top-navbar-left">
        <div className="top-navbar-logos">
          <div className="logo-box">
            <img src={bpbdLogo} alt="Logo BPBD" className="navbar-logo-img bnpb-logo" />
          </div>
        </div>
        <div className="top-navbar-text">
          <span className="top-navbar-title">Dashboard Satu Data Bencana</span>
          <span className="top-navbar-subtitle">Kota Payakumbuh Sumatera Barat</span>
        </div>
      </div>
      
      <div className="top-navbar-right">
        <nav className="top-nav-links">
          <a href="#" className="top-nav-link active">Beranda</a>
          <a href="#" className="top-nav-link">Statistik</a>
          <a href="#" className="top-nav-link">Klaster</a>
          <a href="#" className="top-nav-link">Siaga Bencana</a>
          <a href="#" className="top-nav-link">Kontak Darurat</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
