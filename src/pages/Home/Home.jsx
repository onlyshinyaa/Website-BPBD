import React from 'react';
import { Link } from 'react-router-dom';
import DisasterCard from '../../components/DisasterCard';
import EarthquakeCard from '../../components/EarthquakeCard';
import WeatherCard from '../../components/WeatherCard';
import '../../styles/home.css';
import '../../styles/responsive.css';

import { ShieldCheck, AlertCircle, PhoneCall, FileText, Users, HeartHandshake } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Public Monitoring Overview & Safety Status Banner */}
      <div className="public-hero-banner">
        <div className="hero-status-left">
          <div className="status-badge-live">
            <span className="live-ping"></span>
            <span className="badge-text">STATUS KOTA PAYAKUMBUH: SIAGA WASPADA</span>
          </div>
          <h1 className="hero-title">Pusat Informasi & Pemantauan Bencana Daerah</h1>
          <p className="hero-subtitle">
            Portal resmi pemantauan potensi risiko, peringatan dini, dan panduan keselamatan masyarakat Kota Payakumbuh secara transparan dan terpadu.
          </p>
        </div>
        <div className="hero-actions-right">
          <a href="tel:075292113" className="btn-hero-action emergency-btn">
            <PhoneCall size={18} />
            <div className="btn-action-text">
              <span className="action-label">PUSAT PENGADUAN</span>
              <span className="action-value">(0752) 92113</span>
            </div>
          </a>
          <Link to="/laporan" className="btn-hero-action report-btn">
            <FileText size={18} />
            <div className="btn-action-text">
              <span className="action-label">LAPOR MANDIRI</span>
              <span className="action-value">Lapor Kejadian</span>
            </div>
          </Link>
        </div>
      </div>

      {/* 2. Top Summary KPI Metrics Cards for Citizens */}
      <div className="public-kpi-grid">
        <div className="kpi-card danger">
          <div className="kpi-icon-box danger-bg">
            <AlertCircle size={22} color="#dc2626" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Kejadian Dalam Penanganan</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-danger">2</span>
              <span className="kpi-unit">Titik Lokasi</span>
            </div>
            <span className="kpi-sub">Banjir & Tanah Longsor</span>
          </div>
        </div>

        <div className="kpi-card info">
          <div className="kpi-icon-box info-bg">
            <Users size={22} color="#2563eb" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Warga Terdampak Dipantau</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-info">4.746</span>
              <span className="kpi-unit">Jiwa</span>
            </div>
            <span className="kpi-sub">Kec. Payakumbuh Barat & Selatan</span>
          </div>
        </div>

        <div className="kpi-card success">
          <div className="kpi-icon-box success-bg">
            <HeartHandshake size={22} color="#059669" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Logistik & Bantuan Tersalurkan</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-success">1.256</span>
              <span className="kpi-unit">Paket Bantuan</span>
            </div>
            <span className="kpi-sub">Pangan, Perlengkapan & Evakuasi</span>
          </div>
        </div>

        <div className="kpi-card warning">
          <div className="kpi-icon-box warning-bg">
            <ShieldCheck size={22} color="#d97706" />
          </div>
          <div className="kpi-details">
            <span className="kpi-title">Kesiapsiagaan Posko</span>
            <div className="kpi-number-row">
              <span className="kpi-number text-warning">Siaga 24 Jam</span>
            </div>
            <span className="kpi-sub">Tim Reaksi Cepat (TRC) Aktif</span>
          </div>
        </div>
      </div>

      {/* Main & Sidebar Columns Layout */}
      <div className="home-content-grid">
        <div className="main-column">
          <DisasterCard />
        
        {/* Affected Areas Section */}
        <div className="card affected-areas-card">
          <div className="section-header">
            <div>
              <h3>Wilayah Terdampak Bencana</h3>
              <span className="section-subtext">Distribusi dampak bencana per kecamatan & kelurahan di Kota Payakumbuh</span>
            </div>
            <a href="#statistik" className="link-detail">LIHAT REKAP DETAIL &rarr;</a>
          </div>
          
          <div className="affected-grid">
            <div className="affected-list">
              <div className="list-title">5 KECAMATAN TERDATA</div>
              <ul>
                <li className="active">Payakumbuh Utara</li>
                <li>Payakumbuh Barat</li>
                <li>Payakumbuh Selatan</li>
                <li>Payakumbuh Timur</li>
                <li>Lamposi Tigo Nagari</li>
              </ul>
            </div>
            
            <div className="affected-chart">
              <div className="list-title">DISTRIBUSI JIWA TERDAMPAK (KELURAHAN)</div>
              <div className="custom-bar-chart">
                <div className="chart-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
                <div className="chart-bars">
                  {[
                    { name: 'Tigo Koto', value: 320, height: '35%' },
                    { name: 'Koto Tuo', value: 580, height: '55%' },
                    { name: 'P. Sinayan', value: 890, height: '80%' },
                    { name: 'Kubu Gadang', value: 1150, height: '100%' },
                    { name: 'P. Tinggi', value: 740, height: '70%' },
                    { name: 'P. Rantang', value: 410, height: '42%' },
                  ].map((item, index) => (
                    <div className="bar-group" key={index}>
                      <div className="bar-wrapper">
                        <div className="bar" style={{ height: item.height }}>
                           <div className="bar-tooltip">{item.value} Jiwa</div>
                        </div>
                      </div>
                      <span className="bar-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="affected-summary">
              <div className="list-title">RINGKASAN LAPANGAN</div>
              <div className="summary-box">
                <div className="summary-stat">
                  <strong>14</strong>
                  <span>Kelurahan Waspada</span>
                </div>
                <p>Mayoritas daerah terdampak banjir berada di sekitar bantaran Sungai Batang Agam dan dataran rendah Payakumbuh Barat & Utara.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="side-column">
        <EarthquakeCard />
        <WeatherCard />
      </div>
      </div>
    </div>
  );
};

export default Home;
