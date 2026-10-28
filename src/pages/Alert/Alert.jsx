import React, { useState } from 'react';
import { ShieldAlert, CloudRain, Radio, AlertTriangle, CheckCircle2 } from 'lucide-react';
import '../../styles/home.css';

const Alert = () => {
  const [filterLevel, setFilterLevel] = useState('Semua');

  const alerts = [
    {
      id: 1,
      level: 'WASPADA',
      badgeClass: 'badge-warning',
      category: 'Cuaca Ekstrem',
      icon: CloudRain,
      title: 'Potensi Hujan Sedang-Lebat Disertai Angin Kencang',
      waktu: 'Hari ini, 13:00 - 18:30 WIB',
      wilayah: 'Kecamatan Payakumbuh Barat, Payakumbuh Utara, dan Lamposi Tigo Nagari',
      deskripsi: 'Diprakirakan terjadi peningkatan debit air pada Daerah Aliran Sungai (DAS) Batang Agam. Warga di bantaran sungai diminta meningkatkan kewaspadaan.',
      sumber: 'BMKG Stasiun Klimatologi Sumbar & Pusdalops BPBD',
      arahan: 'Amankan barang berharga dan dokumen penting ke tempat yang lebih tinggi jika air mulai meluap.'
    },
    {
      id: 2,
      level: 'SIAGA',
      badgeClass: 'badge-danger',
      category: 'Banjir Luapan',
      icon: AlertTriangle,
      title: 'Kenaikan Muka Air Sungai Batang Agam (Elevasi +75 cm)',
      waktu: 'Update 1 jam lalu',
      wilayah: 'Kelurahan Tanjung Pauh & Kubu Gadang',
      deskripsi: 'Air telah menggenangi area pekarangan permukiman warga setinggi 30-60 cm. Tim Reaksi Cepat (TRC) telah berada di posko pantau lapangan.',
      sumber: 'Pusdalops BPBD Payakumbuh',
      arahan: 'Hindari melintasi jembatan gantung dan jalan tepian sungai yang tergenang arus deras.'
    },
    {
      id: 3,
      level: 'INFORMASI',
      badgeClass: 'badge-info',
      category: 'Aktivitas Seismik',
      icon: Radio,
      title: 'Pemutakhiran Informasi Gempa Terkini Tektonik',
      waktu: '2026-10-13 04:18 WIB',
      wilayah: 'Pesisir Barat Sumbar (M 4.8) - Terasa Lemah di Payakumbuh (Skala II MMI)',
      deskripsi: 'Gempa berpusat di laut 68 km Barat Daya Pasaman Barat dengan kedalaman 10 km. Tidak berpotensi tsunami dan tidak ada laporan kerusakan.',
      sumber: 'BMKG Pusat Gempa Bumi & Tsunami',
      arahan: 'Masyarakat diimbau tetap tenang dan tidak terpengaruh oleh isu bohong / hoax yang tidak dapat dipertanggungjawabkan.'
    }
  ];

  const filteredAlerts = filterLevel === 'Semua' 
    ? alerts 
    : alerts.filter(a => a.level === filterLevel);

  return (
    <div className="page-alert-container">
      <div className="public-hero-banner" style={{ marginBottom: '22px' }}>
        <div className="hero-status-left">
          <div className="status-badge-live">
            <span className="live-ping"></span>
            <span className="badge-text">EARLY WARNING SYSTEM (EWS) KOTA PAYAKUMBUH</span>
          </div>
          <h1 className="hero-title">Sistem Peringatan Dini & Informasi Siaga</h1>
          <p className="hero-subtitle">
            Saluran resmi informasi peringatan dini potensi bahaya cuaca, hidrometeorologi, dan seismik secara realtime untuk keselamatan warga.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="alert-filter-bar">
        <div className="filter-group">
          {['Semua', 'SIAGA', 'WASPADA', 'INFORMASI'].map(level => (
            <button
              key={level}
              className={`filter-chip ${filterLevel === level ? 'active' : ''}`}
              onClick={() => setFilterLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
        <span className="alert-count-text">
          Menampilkan <strong>{filteredAlerts.length}</strong> Peringatan Aktif
        </span>
      </div>

      {/* Alert List Cards */}
      <div className="alert-cards-stack">
        {filteredAlerts.map(item => {
          const IconComp = item.icon;
          return (
            <div key={item.id} className={`alert-full-card ${item.badgeClass}`}>
              <div className="alert-card-header">
                <div className="alert-title-group">
                  <div className="alert-icon-wrapper">
                    <IconComp size={22} />
                  </div>
                  <div>
                    <div className="alert-meta-top">
                      <span className={`status-pill ${item.badgeClass}`}>{item.level}</span>
                      <span className="meta-category">{item.category}</span>
                      <span className="meta-time">&bull; {item.waktu}</span>
                    </div>
                    <h3 className="alert-heading">{item.title}</h3>
                  </div>
                </div>
              </div>

              <div className="alert-body-content">
                <div className="alert-info-row">
                  <strong>Wilayah Terdampak:</strong>
                  <span>{item.wilayah}</span>
                </div>
                <p className="alert-description">{item.deskripsi}</p>
                <div className="alert-advice-box">
                  <div className="advice-title">
                    <ShieldAlert size={16} /> Arahan Keselamatan Warga:
                  </div>
                  <p>{item.arahan}</p>
                </div>
              </div>

              <div className="alert-footer-bar">
                <span className="source-label">Sumber Data: <strong>{item.sumber}</strong></span>
                <span className="verified-tag"><CheckCircle2 size={14} color="#059669" /> Terverifikasi Pusdalops</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alert;
