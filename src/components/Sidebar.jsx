import React from 'react';
import { Home, BarChart2, Network, AlertTriangle, Phone, User, UserCog } from 'lucide-react';

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
          <Home size={20} />
          <span>BERANDA</span>
        </div>
        <div className="nav-item">
          <BarChart2 size={20} />
          <span>STATISTIK</span>
        </div>
        <div className="nav-item">
          <Network size={20} />
          <span>KLASTER</span>
        </div>
        <div className="nav-item">
          <AlertTriangle size={20} />
          <span>SIAGA BENCANA</span>
        </div>
        
        <div className="nav-item nav-item-emergency">
          <Phone size={20} />
          <span>KONTAK DARURAT</span>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar"><UserCog size={20} /></div>
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
