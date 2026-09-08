import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {/* Placeholder logo */}
          <span>BPBD</span>
        </div>
        <div className="sidebar-title">
          BPBD Kota <br/>Payakumbuh
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <span>🏠</span>
          <span>BERANDA</span>
        </div>
        <div className="nav-item">
          <span>📊</span>
          <span>STATISTIK</span>
        </div>
        <div className="nav-item">
          <span>🔀</span>
          <span>KLASTER</span>
        </div>
        <div className="nav-item">
          <span>⚠️</span>
          <span>SIAGA BENCANA</span>
        </div>
        
        <div className="nav-item nav-item-emergency">
          <span>📞</span>
          <span>KONTAK DARURAT</span>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <span className="user-name">Role</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
