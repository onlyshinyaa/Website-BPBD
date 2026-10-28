import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  AlertTriangle, 
  FileText, 
  MapPin, 
  Clock, 
  Waves, 
  Mountain, 
  Wind, 
  ChevronRight,
  ShieldAlert,
  PhoneCall,
  HeartPulse,
  Building
} from 'lucide-react';

/**
 * Data model diselaraskan 100% dengan ERD Database:
 * - tabel: bencana (id, id_laporan, id_kelurahan, jenis_bencana, penyebab, waktu_kejadian, status_bencana)
 * - relasi: kelurahan (id, id_kecamatan, nama_kelurahan) & kecamatan (id, nama_kecamatan)
 * - relasi 1:N: dampak_bencana (id, id_bencana, jiwa_terdampak, korban_luka, kerusakan_infrastruktur)
 * - relasi 1:N: bantuan (id, id_bencana, jenis_bantuan, jumlah, status_penyaluran)
 * - relasi: laporan_masyarakat (id, waktu_laporan, status)
 */
const DisasterCard = () => {
  const bencanaDataList = [
    {
      id: 1,
      id_laporan: 101,
      id_kelurahan: 14,
      jenis_bencana: 'Banjir',
      penyebab: 'Curah hujan ekstrem memicu luapan sungai Batang Agam',
      waktu_kejadian: '2026-10-13 06:30:00',
      status_bencana: 'Tanggap Darurat',
      // Relasi Kelurahan & Kecamatan
      kelurahan: {
        id: 14,
        nama_kelurahan: 'Tanjung Pauh',
        id_kecamatan: 2,
        kecamatan: { id: 2, nama_kecamatan: 'Payakumbuh Barat' }
      },
      // Relasi Laporan Masyarakat
      laporan_masyarakat: {
        id: 101,
        waktu_laporan: '2026-10-13 07:15:00',
        status: 'Terverifikasi'
      },
      // Relasi Tabel dampak_bencana
      dampak_bencana: {
        id: 1,
        id_bencana: 1,
        jiwa_terdampak: 4521,
        korban_luka: 12,
        kerusakan_infrastruktur: '85 Rumah terendam (ketinggian 40-120cm), 1 Jembatan gantung rusak ringan'
      },
      // Relasi Tabel bantuan
      bantuan: {
        id: 1,
        id_bencana: 1,
        jenis_bantuan: 'Paket Sembako, Selimut & Perahu Karet',
        jumlah: 1250,
        status_penyaluran: 'Tersalurkan Sebagian'
      },
      icon: Waves,
      iconColor: '#2563eb',
      badgeBg: '#eff6ff',
      statusClass: 'critical',
      isLive: true
    },
    {
      id: 2,
      id_laporan: 102,
      id_kelurahan: 8,
      jenis_bencana: 'Tanah Longsor',
      penyebab: 'Tebing labil akibat rembesan air hujan lebat',
      waktu_kejadian: '2026-10-12 22:15:00',
      status_bencana: 'Dalam Penanganan',
      kelurahan: {
        id: 8,
        nama_kelurahan: 'Limbukan',
        id_kecamatan: 3,
        kecamatan: { id: 3, nama_kecamatan: 'Payakumbuh Selatan' }
      },
      laporan_masyarakat: {
        id: 102,
        waktu_laporan: '2026-10-12 22:45:00',
        status: 'Terverifikasi'
      },
      dampak_bencana: {
        id: 2,
        id_bencana: 2,
        jiwa_terdampak: 180,
        korban_luka: 2,
        kerusakan_infrastruktur: 'Badan jalan tertutup material longsor sepanjang 25 meter'
      },
      bantuan: {
        id: 2,
        id_bencana: 2,
        jenis_bantuan: 'Alat Berat Ekskavator & Terpal Pelindung',
        jumlah: 2,
        status_penyaluran: 'Selesai Penyaluran'
      },
      icon: Mountain,
      iconColor: '#d97706',
      badgeBg: '#fffbeb',
      statusClass: 'warning',
      isLive: false
    },
    {
      id: 3,
      id_laporan: 103,
      id_kelurahan: 21,
      jenis_bencana: 'Pohon Tumbang',
      penyebab: 'Angin kencang disertai hujan petir',
      waktu_kejadian: '2026-10-12 17:40:00',
      status_bencana: 'Selesai / Terkendali',
      kelurahan: {
        id: 21,
        nama_kelurahan: 'Balai Nan Tuo',
        id_kecamatan: 4,
        kecamatan: { id: 4, nama_kecamatan: 'Payakumbuh Timur' }
      },
      laporan_masyarakat: {
        id: 103,
        waktu_laporan: '2026-10-12 18:00:00',
        status: 'Selesai'
      },
      dampak_bencana: {
        id: 3,
        id_bencana: 3,
        jiwa_terdampak: 45,
        korban_luka: 0,
        kerusakan_infrastruktur: '1 Tiang listrik patah, kabel PLN terputus'
      },
      bantuan: {
        id: 3,
        id_bencana: 3,
        jenis_bantuan: 'Unit Chainsaw TRC BPBD & Tim Pembersih',
        jumlah: 4,
        status_penyaluran: 'Selesai Penyaluran'
      },
      icon: Wind,
      iconColor: '#10b981',
      badgeBg: '#ecfdf5',
      statusClass: 'success',
      isLive: false
    }
  ];

  const [selectedId, setSelectedId] = useState(1);
  const [filterType, setFilterType] = useState('Semua');

  const selectedBencana = bencanaDataList.find(b => b.id === selectedId) || bencanaDataList[0];

  const filteredBencanaList = filterType === 'Semua'
    ? bencanaDataList
    : bencanaDataList.filter(b => b.jenis_bencana === filterType);

  // Helper formatting waktu
  const formatDateTime = (dtStr) => {
    if (!dtStr) return '-';
    const d = new Date(dtStr.replace(' ', 'T'));
    return d.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' WIB';
  };

  return (
    <div className="disaster-card-container">
      {/* 1. Emergency Live Alert Ticker (Berdasarkan status_bencana & waktu_kejadian) */}
      <div className="alert-broadcast-ticker">
        <div className="broadcast-label">
          <span className="live-dot"></span>
          <ShieldAlert size={16} />
          <span>PERINGATAN TERBARU</span>
        </div>
        <div className="broadcast-content">
          <span className="broadcast-text">
            <strong>[{selectedBencana.status_bencana} - {selectedBencana.jenis_bencana}]</strong> {selectedBencana.penyebab} di Kelurahan {selectedBencana.kelurahan.nama_kelurahan}, Kec. {selectedBencana.kelurahan.kecamatan.nama_kecamatan}.
          </span>
        </div>
        <a href="tel:075292113" className="broadcast-action">
          <PhoneCall size={14} /> Posko BPBD: (0752) 92113
        </a>
      </div>

      {/* 2. Header & Filter Jenis Bencana (tabel: bencana.jenis_bencana) */}
      <div className="disaster-section-header">
        <div>
          <div className="section-title-row">
            <h2>Pantauan Kejadian Bencana Terkini</h2>
            <span className="live-badge">INFORMASI PUBLIK RESMI</span>
          </div>
          <p>Pemutakhiran resmi situasi kebencanaan, dampak, dan penanganan di wilayah Kota Payakumbuh</p>
        </div>

        <div className="disaster-filter-chips">
          {['Semua', 'Banjir', 'Tanah Longsor', 'Pohon Tumbang'].map((jenis) => (
            <button
              key={jenis}
              className={`filter-chip ${filterType === jenis ? 'active' : ''}`}
              onClick={() => setFilterType(jenis)}
            >
              {jenis}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Kartu Bencana Cepat (Data tabel bencana + kelurahan + dampak_bencana) */}
      <div className="disaster-quick-cards">
        {filteredBencanaList.map((item) => {
          const IconComp = item.icon;
          const isSelected = item.id === selectedBencana.id;
          return (
            <div 
              key={item.id}
              className={`quick-disaster-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              <div className="quick-card-top">
                <div className="quick-icon-wrapper" style={{ backgroundColor: item.badgeBg }}>
                  <IconComp size={20} color={item.iconColor} />
                </div>
                <div className="quick-status-pill-wrap">
                  {item.isLive && <span className="pulsing-live-pill">LIVE</span>}
                  <span className={`status-pill ${item.statusClass}`}>
                    {item.status_bencana}
                  </span>
                </div>
              </div>

              <h4 className="quick-card-title">{item.jenis_bencana} di Kel. {item.kelurahan.nama_kelurahan}</h4>
              
              <div className="quick-card-meta">
                <span className="meta-item">
                  <MapPin size={13} /> Kec. {item.kelurahan.kecamatan.nama_kecamatan}
                </span>
                <span className="meta-item">
                  <Clock size={13} /> {formatDateTime(item.waktu_kejadian)}
                </span>
              </div>

              <div className="quick-card-footer">
                <span className="quick-card-impact">
                  Terdampak: <strong>{item.dampak_bencana.jiwa_terdampak.toLocaleString('id-ID')} Jiwa</strong>
                </span>
                <span className="view-detail-hint">Lihat Situasi <ChevronRight size={14} /></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Active Incident Focused Spotlight (Detail Atribut ERD Database) */}
      <div className="incident-detail-banner modern-banner">
        <div className="incident-header">
          <div className="incident-title-wrapper">
            <div className="incident-icon-pulse">
              <AlertTriangle size={22} color="#dc2626" />
            </div>
            <div>
              <div className="incident-title-sub">
                KODE INSIDEN #{selectedBencana.id} &bull; LAPORAN TERVERIFIKASI
              </div>
              <h3 className="incident-title">
                {selectedBencana.jenis_bencana} - Kelurahan {selectedBencana.kelurahan.nama_kelurahan}
              </h3>
            </div>
          </div>
          <div className="incident-header-actions">
            <span className={`banner-status-tag ${selectedBencana.statusClass}`}>
              Status: {selectedBencana.status_bencana}
            </span>
            <button className="btn-detail">
              <FileText size={16} /> Laporan #{selectedBencana.id_laporan}
            </button>
          </div>
        </div>

        {/* Grid Atribut: Tabel bencana, kelurahan, kecamatan, dampak */}
        <div className="incident-grid modern-grid">
          <div className="incident-field-box">
            <span className="field-label"><MapPin size={15} /> Wilayah Administrasi (Kelurahan / Kecamatan)</span>
            <span className="field-value highlight-location">
              Kelurahan {selectedBencana.kelurahan.nama_kelurahan}, Kecamatan {selectedBencana.kelurahan.kecamatan.nama_kecamatan}
            </span>
          </div>

          <div className="incident-field-box">
            <span className="field-label"><AlertTriangle size={15} /> Penyebab Bencana</span>
            <span className="field-value">{selectedBencana.penyebab}</span>
          </div>

          <div className="incident-field-box">
            <span className="field-label"><Clock size={15} /> Waktu Kejadian</span>
            <span className="field-value">{formatDateTime(selectedBencana.waktu_kejadian)}</span>
          </div>

          <div className="incident-field-box">
            <span className="field-label"><Building size={15} /> Kerusakan Infrastruktur</span>
            <span className="field-value">{selectedBencana.dampak_bencana.kerusakan_infrastruktur}</span>
          </div>
        </div>

        {/* Highlight Statistik dari Tabel dampak_bencana & bantuan */}
        <div className="disaster-stats-row modern-stats">
          <div className="stat-item pulse-border">
            <div className="stat-icon red-bg"><Users size={22} color="#ef4444" /></div>
            <div className="stat-info">
              <span className="stat-label">JIWA TERDAMPAK</span>
              <strong className="stat-value text-red">
                {selectedBencana.dampak_bencana.jiwa_terdampak.toLocaleString('id-ID')} Jiwa
              </strong>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon blue-bg"><HeartPulse size={22} color="#2563eb" /></div>
            <div className="stat-info">
              <span className="stat-label">KORBAN LUKA</span>
              <strong className="stat-value">
                {selectedBencana.dampak_bencana.korban_luka} Orang
              </strong>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon emerald-bg"><Package size={22} color="#059669" /></div>
            <div className="stat-info">
              <span className="stat-label">BANTUAN ({selectedBencana.bantuan.status_penyaluran.toUpperCase()})</span>
              <strong className="stat-value text-emerald">
                {selectedBencana.bantuan.jumlah.toLocaleString('id-ID')} Item &bull; {selectedBencana.bantuan.jenis_bantuan.split(',')[0]}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterCard;
