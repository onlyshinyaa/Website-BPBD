import React from 'react';
import { Activity, Users, Package, AlertTriangle, FileText } from 'lucide-react';

const DisasterCard = () => {
  return (
    <div className="disaster-card">
      <div className="disaster-header">
        <div>
          <h2>Dashboard Pantauan Bencana</h2>
          <p>Ringkasan status kejadian dan penanganan bencana di payakumbuh</p>
        </div>
      </div>
      
      <div className="incident-detail-banner">
        <div className="incident-header">
          <div className="incident-title-wrapper">
            <div className="incident-icon">
              <AlertTriangle size={20} color="#f59e0b" fill="#fef3c7" strokeWidth={1.5} />
            </div>
            <h3 className="incident-title">Pusat Kejadian Bencana <span className="incident-status">(Aktif)</span></h3>
          </div>
          <button className="btn-detail">
            <FileText size={16} style={{ marginRight: '6px', verticalAlign: 'middle', marginTop: '-2px' }} /> Informasi Detail Kejadian
          </button>
        </div>
        
        <h4 className="detail-heading">Detail Kejadian</h4>
        
        <div className="incident-grid">
          <div className="incident-field">
            <span className="field-label">Jenis Kejadian:</span>
            <span className="field-value highlight-purple">Banjir</span>
          </div>
          <div className="incident-field">
            <span className="field-label">Penyebab:</span>
            <span className="field-value highlight-purple">Hujan Deras</span>
          </div>
          <div className="incident-field">
            <span className="field-label">Tanggal Laporan Masuk:</span>
            <span className="field-value">01 September 2024 08:00:00</span>
          </div>
          <div className="incident-field">
            <span className="field-label">Lokasi:</span>
            <span className="field-value highlight-purple">Jalan Sutan Syahrir Nomor 20, Kelurahan Tanjung Pauh, Kota Payakumbuh, Sumatera Barat</span>
          </div>
          <div className="incident-field">
            <span className="field-label">Status Bencana:</span>
            <span className="field-value">Bencana</span>
          </div>
          <div className="incident-field">
            <span className="field-label">Waktu Kejadian:</span>
            <span className="field-value">Mulai Dari Tanggal 28 Ags Sampai Selesai</span>
          </div>
        </div>
      </div>
      
      <div className="disaster-stats-row">
        <div className="stat-item">
          <div className="stat-icon red-bg"><Activity size={24} color="#ef4444" /></div>
          <div className="stat-info">
            <span className="stat-label">STATUS</span>
            <strong className="stat-value">Siaga 1</strong>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon blue-bg"><Users size={24} color="#3b82f6" /></div>
          <div className="stat-info">
            <span className="stat-label">TERDAMPAK</span>
            <strong className="stat-value">4.521 Jiwa</strong>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon blue-bg"><Package size={24} color="#3b82f6" /></div>
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
