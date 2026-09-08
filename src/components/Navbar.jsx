import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">WILAYAH PEMANTAUAN</span>
        <span className="navbar-subtitle">Seluruh Payakumbuh</span>
      </div>
      
      <div className="navbar-right">
        <div className="search-bar">
          <span>🔍</span>
          <input type="text" placeholder="Cari data bencana..." />
        </div>
        <button className="icon-btn">
          <span>🔔</span>
        </button>
        <button className="icon-btn">
          <span>⚙️</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
