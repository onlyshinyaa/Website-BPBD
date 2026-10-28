import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PhoneCall, Clock, Menu, X, LayoutDashboard, AlertTriangle, MapPin, Package, FileEdit } from 'lucide-react';
import bpbdLogo from '../assets/logos/bpbd-removebg-preview.png';

const Navbar = () => {
  const [timeStr, setTimeStr] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="top-navbar">
        <div className="top-navbar-left">
          <div className="top-navbar-logos">
            <div className="logo-box">
              <img src={bpbdLogo} alt="Logo BPBD" className="navbar-logo-img bnpb-logo" />
            </div>
          </div>
          <div className="top-navbar-text">
            <div className="navbar-agency-badge">
              <span className="agency-badge-pill">BPBD KOTA PAYAKUMBUH</span>
              <span className="live-status-pill">
                <span className="status-indicator-dot"></span> <span className="status-text">PUSDALOPS AKTIF</span>
              </span>
            </div>
            <span className="top-navbar-title">Sistem Informasi Tanggap Bencana</span>
          </div>
        </div>

        <div className="top-navbar-center">
          <nav className="top-nav-links">
            <NavLink to="/" end className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
              Dashboard
            </NavLink>
            <NavLink to="/peringatan" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
              Peringatan Dini
            </NavLink>
            <NavLink to="/peta" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
              Peta Terdampak
            </NavLink>
            <NavLink to="/bantuan" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
              Logistik & Bantuan
            </NavLink>
            <NavLink to="/laporan" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
              Lapor Mandiri
            </NavLink>
          </nav>
        </div>
        
        <div className="top-navbar-right">
          <div className="navbar-clock-badge">
            <Clock size={14} color="#64748b" />
            <span>{timeStr || 'Memuat...'}</span>
          </div>
          
          <a href="tel:075292113" className="emergency-call-btn" title="Hubungi Pusdalops BPBD Payakumbuh">
            <div className="emergency-call-icon">
              <PhoneCall size={16} />
            </div>
            <div className="emergency-call-text">
              <span className="emergency-label">PUSDALOPS BPBD 24 JAM</span>
              <span className="emergency-number">(0752) 92113</span>
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="mobile-menu-toggle-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="drawer-title-group">
                <span className="drawer-brand">BPBD KOTA PAYAKUMBUH</span>
                <span className="drawer-sub">Pusdalops Penanggulangan Bencana</span>
              </div>
              <button 
                className="drawer-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-info">
              <div className="drawer-live-badge">
                <span className="status-indicator-dot"></span> PUSDALOPS 24 JAM AKTIF
              </div>
              <div className="drawer-time-badge">
                <Clock size={13} color="#64748b" />
                <span>{timeStr}</span>
              </div>
            </div>

            <nav className="mobile-nav-list">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LayoutDashboard size={18} />
                <span>Dashboard Utama</span>
              </NavLink>
              <NavLink 
                to="/peringatan" 
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <AlertTriangle size={18} />
                <span>Peringatan Dini</span>
              </NavLink>
              <NavLink 
                to="/peta" 
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapPin size={18} />
                <span>Peta Terdampak</span>
              </NavLink>
              <NavLink 
                to="/bantuan" 
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Package size={18} />
                <span>Logistik & Bantuan</span>
              </NavLink>
              <NavLink 
                to="/laporan" 
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileEdit size={18} />
                <span>Lapor Mandiri</span>
              </NavLink>
            </nav>

            <div className="mobile-drawer-footer">
              <a href="tel:075292113" className="mobile-drawer-emergency-btn">
                <PhoneCall size={18} />
                <div className="m-emergency-text">
                  <span className="m-call-label">PUSDALOPS BPBD 24 JAM</span>
                  <strong className="m-call-num">(0752) 92113</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
