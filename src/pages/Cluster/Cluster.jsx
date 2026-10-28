import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import '../../styles/home.css';

const Cluster = () => {
  const [filterType, setFilterType] = useState('Semua');

  const disasterPoints = [
    {
      id: 1,
      type: 'Banjir',
      lokasi: 'Kel. Tanjung Pauh (Bantaran Batang Agam)',
      kecamatan: 'Payakumbuh Barat',
      status: 'Tanggap Darurat',
      statusClass: 'danger',
      terdampak: '4.521 Jiwa',
      tinggiAir: '40 - 120 cm',
      poskoTerdekat: 'Aula Kantor Camat Payakumbuh Barat',
      jalurAman: 'Jl. Soekarno-Hatta (Aman dilalui kendaraan roda 2 & 4)'
    },
    {
      id: 2,
      type: 'Tanah Longsor',
      lokasi: 'Kel. Limbukan (Ruas Lereng Tebing)',
      kecamatan: 'Payakumbuh Selatan',
      status: 'Dalam Penanganan',
      statusClass: 'warning',
      terdampak: '180 Jiwa',
      tinggiAir: 'Timbunan tanah 25 meter',
      poskoTerdekat: 'Posko Siaga Kelurahan Limbukan',
      jalurAman: 'Dialihkan via jalur lingkar Padang Karambia'
    },
    {
      id: 3,
      type: 'Pohon Tumbang',
      lokasi: 'Kel. Balai Nan Tuo (Dekat Simpang Pasar)',
      kecamatan: 'Payakumbuh Timur',
      status: 'Terkendali / Selesai',
      statusClass: 'success',
      terdampak: '45 Jiwa',
      tinggiAir: 'Material pohon telah ditepikan',
      poskoTerdekat: 'Mako BPBD Payakumbuh',
      jalurAman: 'Arus lalu lintas telah kembali normal 2 arah'
    }
  ];

  const filteredPoints = filterType === 'Semua' 
    ? disasterPoints 
    : disasterPoints.filter(p => p.type === filterType);

  return (
    <div className="page-map-container">
      <div className="public-hero-banner" style={{ marginBottom: '22px' }}>
        <div className="hero-status-left">
          <div className="status-badge-live">
            <span className="live-ping"></span>
            <span className="badge-text">PEMANTAUAN KELAYAKAN WILAYAH & JALUR</span>
          </div>
          <h1 className="hero-title">Peta Persebaran Titik Bencana & Jalur Evakuasi</h1>
          <p className="hero-subtitle">
            Informasi spasial situasi 5 kecamatan di Kota Payakumbuh untuk membantu masyarakat memantau titik genangan, jalan alternatif, dan lokasi posko pengungsian.
          </p>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="alert-filter-bar">
        <div className="filter-group">
          {['Semua', 'Banjir', 'Tanah Longsor', 'Pohon Tumbang'].map(jenis => (
            <button
              key={jenis}
              className={`filter-chip ${filterType === jenis ? 'active' : ''}`}
              onClick={() => setFilterType(jenis)}
            >
              {jenis}
            </button>
          ))}
        </div>
        <span className="alert-count-text">
          Menampilkan <strong>{filteredPoints.length}</strong> Titik Pantau Wilayah
        </span>
      </div>

      {/* Interactive Map Visual Simulator */}
      <div className="card map-viewport-card">
        <div className="map-view-header">
          <div className="map-legend">
            <span className="legend-item"><span className="legend-dot red"></span> Zona Merah / Bahaya</span>
            <span className="legend-item"><span className="legend-dot orange"></span> Zona Waspada</span>
            <span className="legend-item"><span className="legend-dot green"></span> Posko & Jalur Aman</span>
          </div>
          <span className="map-note">Peta Interaktif Payakumbuh Satu Data (GIS)</span>
        </div>

        <div className="map-canvas-mockup">
          <div className="map-overlay-grid">
            {filteredPoints.map((item, idx) => (
              <div key={item.id} className={`map-marker-pin marker-${item.statusClass} pos-${idx + 1}`}>
                <div className="pin-pulse"></div>
                <div className="pin-tooltip">
                  <strong>{item.type}</strong>
                  <span>{item.lokasi}</span>
                </div>
              </div>
            ))}

            <div className="map-center-watermark">
              <h3>KOTA PAYAKUMBUH</h3>
              <p>5 KECAMATAN &bull; 47 KELURAHAN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Cards List of Points */}
      <div className="map-points-grid" style={{ marginTop: '22px' }}>
        {filteredPoints.map(point => (
          <div key={point.id} className="card point-item-card">
            <div className="point-card-header">
              <div>
                <span className={`status-pill ${point.statusClass}`}>{point.status}</span>
                <h4 className="point-title">{point.type} - {point.lokasi}</h4>
                <span className="point-kecamatan"><MapPin size={13} /> Kec. {point.kecamatan}</span>
              </div>
            </div>

            <div className="point-specs">
              <div className="spec-row">
                <span className="spec-label">Kondisi / Ketinggian:</span>
                <strong className="spec-val">{point.tinggiAir}</strong>
              </div>
              <div className="spec-row">
                <span className="spec-label">Posko Pengungsian Terdekat:</span>
                <strong className="spec-val text-blue">{point.poskoTerdekat}</strong>
              </div>
              <div className="spec-row">
                <span className="spec-label">Jalur Aman Lalu Lintas:</span>
                <span className="spec-val text-green">{point.jalurAman}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cluster;
