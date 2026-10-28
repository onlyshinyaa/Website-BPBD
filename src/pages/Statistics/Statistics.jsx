import React, { useState } from 'react';
import { Package, Truck, Users, Building } from 'lucide-react';
import '../../styles/home.css';

const Statistics = () => {
  const [filterKategori, setFilterKategori] = useState('Semua');

  const bantuanList = [
    {
      id: 1,
      jenis: 'Paket Sembako & Bahan Pangan',
      kategori: 'Pangan',
      jumlah: '1.250 Paket',
      wilayah: 'Kel. Tanjung Pauh & Kubu Gadang (Payakumbuh Barat)',
      status: 'Tersalurkan Sebagian',
      statusClass: 'warning',
      penyalur: 'Dinas Sosial & Dapur Umum BPBD Payakumbuh',
      waktu: '2026-10-13 10:00 WIB'
    },
    {
      id: 2,
      jenis: 'Alat Berat Ekskavator & Operator TRC',
      kategori: 'Pembersihan',
      jumlah: '2 Unit Ekskavator',
      wilayah: 'Kel. Limbukan (Payakumbuh Selatan)',
      status: 'Selesai Penyaluran',
      statusClass: 'success',
      penyalur: 'Dinas PUPR & TRC BPBD Payakumbuh',
      waktu: '2026-10-13 08:30 WIB'
    },
    {
      id: 3,
      jenis: 'Perahu Karet & Life Vest Evakuasi',
      kategori: 'Evakuasi',
      jumlah: '6 Unit Perahu Karet',
      wilayah: 'DAS Batang Agam (Payakumbuh Barat & Utara)',
      status: 'Aktif Beroperasi di Lapangan',
      statusClass: 'danger',
      penyalur: 'Basarnas & BPBD Kota Payakumbuh',
      waktu: '2026-10-13 07:00 WIB'
    },
    {
      id: 4,
      jenis: 'Selimut, Matras & Perlengkapan Bayi',
      kategori: 'Sandang',
      jumlah: '450 Paket',
      wilayah: 'Posko Pengungsian Aula Kantor Camat',
      status: 'Selesai Penyaluran',
      statusClass: 'success',
      penyalur: 'Palang Merah Indonesia (PMI) Payakumbuh',
      waktu: '2026-10-13 11:15 WIB'
    }
  ];

  const filteredBantuan = filterKategori === 'Semua'
    ? bantuanList
    : bantuanList.filter(b => b.kategori === filterKategori);

  return (
    <div className="page-bantuan-container">
      <div className="public-hero-banner" style={{ marginBottom: '22px' }}>
        <div className="hero-status-left">
          <div className="status-badge-live">
            <span className="live-ping"></span>
            <span className="badge-text">TRANSPARANSI LOGISTIK & PENANGGULANGAN</span>
          </div>
          <h1 className="hero-title">Logistik, Bantuan & Penyaluran Posko</h1>
          <p className="hero-subtitle">
            Pusat pemantauan transparan alokasi bantuan kemanusiaan, armada penanganan bencana, dan stok logistik darurat untuk warga Kota Payakumbuh.
          </p>
        </div>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="public-kpi-grid" style={{ marginBottom: '22px' }}>
        <div className="kpi-card success">
          <div className="kpi-icon-box success-bg">
            <Package size={22} color="#059669" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Total Logistik Tersalur</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-success">1.706</span>
              <span className="kpi-unit">Paket / Unit</span>
            </div>
            <span className="kpi-sub">Sembako, Matras & Perlengkapan</span>
          </div>
        </div>

        <div className="kpi-card info">
          <div className="kpi-icon-box info-bg">
            <Truck size={22} color="#2563eb" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Armada Evakuasi Diterjunkan</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-info">8</span>
              <span className="kpi-unit">Unit Armada</span>
            </div>
            <span className="kpi-sub">6 Perahu Karet + 2 Alat Berat</span>
          </div>
        </div>

        <div className="kpi-card warning">
          <div className="kpi-icon-box warning-bg">
            <Building size={22} color="#d97706" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Posko Dapur Umum Aktif</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-warning">3</span>
              <span className="kpi-unit">Titik Posko</span>
            </div>
            <span className="kpi-sub">Kec. Payakumbuh Barat & Selatan</span>
          </div>
        </div>

        <div className="kpi-card danger">
          <div className="kpi-icon-box danger-bg">
            <Users size={22} color="#dc2626" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Penerima Manfaat Langsung</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-danger">4.746</span>
              <span className="kpi-unit">Jiwa</span>
            </div>
            <span className="kpi-sub">Terdata di database posko</span>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="alert-filter-bar">
        <div className="filter-group">
          {['Semua', 'Pangan', 'Evakuasi', 'Pembersihan', 'Sandang'].map(kat => (
            <button
              key={kat}
              className={`filter-chip ${filterKategori === kat ? 'active' : ''}`}
              onClick={() => setFilterKategori(kat)}
            >
              {kat}
            </button>
          ))}
        </div>
        <span className="alert-count-text">
          Menampilkan <strong>{filteredBantuan.length}</strong> Alokasi Bantuan
        </span>
      </div>

      {/* Table Cards List */}
      <div className="bantuan-cards-stack">
        {filteredBantuan.map(item => (
          <div key={item.id} className="card bantuan-item-card">
            <div className="bantuan-card-header">
              <div className="bantuan-title-wrap">
                <div className="bantuan-icon-bg">
                  <Package size={20} color="#2563eb" />
                </div>
                <div>
                  <h4 className="bantuan-title">{item.jenis}</h4>
                  <span className="bantuan-meta">Alokasi Wilayah: <strong>{item.wilayah}</strong></span>
                </div>
              </div>
              <span className={`status-pill ${item.statusClass}`}>{item.status}</span>
            </div>

            <div className="bantuan-detail-grid">
              <div className="detail-col">
                <span className="detail-label">Jumlah / Unit:</span>
                <strong className="detail-val">{item.jumlah}</strong>
              </div>
              <div className="detail-col">
                <span className="detail-label">Penyalur / Penanggung Jawab:</span>
                <strong className="detail-val">{item.penyalur}</strong>
              </div>
              <div className="detail-col">
                <span className="detail-label">Waktu Pemutakhiran:</span>
                <span className="detail-val text-muted">{item.waktu}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
