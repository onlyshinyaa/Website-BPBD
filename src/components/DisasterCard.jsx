import React from 'react';

const DisasterCard = () => {
  return (
    <div className="disaster-card">
      <div className="disaster-header">
        <div>
          <h2>Dashboard Pantauan Bencana</h2>
          <p>Ringkasan status kejadian dan penanganan bencana di payakumbuh</p>
        </div>
        <button className="btn-primary">⬇️ Unduh Laporan</button>
      </div>
      
      <div className="disaster-banner">
        {/* Placeholder for background image */}
        <div className="banner-content">
          <div className="banner-badge">TANGGAP DARURAT</div>
          <h1 className="banner-title">Banjir Bandang</h1>
          
          <div className="banner-updated">
            <span>DIPERBARUI</span>
            <strong>12 MEI 2024, 14:30 WIB</strong>
          </div>
        </div>
      </div>
      
      <div className="disaster-stats-row">
        <div className="stat-item">
          <div className="stat-icon red-bg">🏠</div>
          <div className="stat-info">
            <span className="stat-label">STATUS</span>
            <strong className="stat-value">Siaga 1</strong>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon blue-bg">👥</div>
          <div className="stat-info">
            <span className="stat-label">TERDAMPAK</span>
            <strong className="stat-value">4.521 Jiwa</strong>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon blue-bg">📦</div>
          <div className="stat-info">
            <span className="stat-label">BANTUAN</span>
            <strong className="stat-value">Tersalur</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterCard;
