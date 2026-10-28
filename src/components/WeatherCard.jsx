import React, { useState } from 'react';
import { CalendarDays, CloudSun, Sun, CloudRain, RefreshCw, Wind, Droplets } from 'lucide-react';

/**
 * Diselaraskan dengan tabel ERD `cuaca`:
 * - id: int
 * - id_kecamatan: int (relasi ke kecamatan.id & nama_kecamatan)
 * - tanggal: date
 * - kondisi_cuaca: varchar
 * - suhu_celcius: int
 * - persentase_kelembaban: int
 * - angin_kmh: int
 */
const WeatherCard = () => {
  // Simulasi data cuaca hari ini dari tabel `cuaca`
  const [currentCuaca] = useState({
    id: 1,
    id_kecamatan: 2,
    nama_kecamatan: 'Payakumbuh Barat',
    tanggal: '2026-10-13',
    kondisi_cuaca: 'Cerah Berawan',
    suhu_celcius: 27,
    persentase_kelembaban: 76,
    angin_kmh: 12
  });

  // Prakiraan cuaca beberapa hari ke depan
  const [forecastCuaca] = useState([
    {
      id: 1,
      tanggal: '2026-10-13',
      label: 'Hari Ini',
      kondisi_cuaca: 'Cerah Berawan',
      suhu_celcius: 28,
      icon: CloudSun,
      iconColor: '#fbbf24'
    },
    {
      id: 2,
      tanggal: '2026-10-14',
      label: 'Besok',
      kondisi_cuaca: 'Cerah',
      suhu_celcius: 29,
      icon: Sun,
      iconColor: '#f59e0b'
    },
    {
      id: 3,
      tanggal: '2026-10-15',
      label: 'Lusa',
      kondisi_cuaca: 'Hujan Ringan',
      suhu_celcius: 26,
      icon: CloudRain,
      iconColor: '#3b82f6'
    }
  ]);

  return (
    <>
      <div className="card current-weather-card">
        <div className="cwc-header">
          <div className="cwc-title-wrapper">
            <div className="cwc-icon-wrapper blue-bg">
              <CloudSun size={20} color="#fff" />
            </div>
            <div>
              <h3>Cuaca Terkini</h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Kecamatan: {currentCuaca.nama_kecamatan}</span>
            </div>
          </div>
          <button className="btn-refresh-blue" aria-label="Refresh Data">
            <RefreshCw size={16} />
          </button>
        </div>
        
        <div className="cwc-main">
          <div className="cwc-temp-wrapper">
            <span className="cwc-temp">{currentCuaca.suhu_celcius}°C</span>
            <div className="cwc-desc">
              <span className="cwc-condition">{currentCuaca.kondisi_cuaca}</span>
              <span className="cwc-location">Kec. {currentCuaca.nama_kecamatan}, Payakumbuh</span>
            </div>
          </div>
          
          <div className="cwc-stats">
            <div className="cwc-stat-item">
              <span className="cwc-stat-label" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Droplets size={12} /> Kelembaban
              </span>
              <span className="cwc-stat-value">{currentCuaca.persentase_kelembaban}%</span>
            </div>
            <div className="cwc-stat-item">
              <span className="cwc-stat-label" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Wind size={12} /> Angin
              </span>
              <span className="cwc-stat-value">{currentCuaca.angin_kmh} km/h</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card forecast-weather-card">
        <div className="fwc-header">
          <div className="fwc-icon-wrapper green-bg">
            <CalendarDays size={20} color="#fff" />
          </div>
          <div>
            <h3>Prakiraan Cuaca Harian</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Tabel: cuaca (per tanggal)</span>
          </div>
        </div>
        
        <div className="fwc-grid">
          {forecastCuaca.map((item) => {
            const WeatherIcon = item.icon;
            return (
              <div className="fwc-item" key={item.id}>
                <WeatherIcon size={28} color={item.iconColor} />
                <span className="fwc-day">{item.label}</span>
                <span className="fwc-cond">{item.kondisi_cuaca}</span>
                <span className="fwc-temp">{item.suhu_celcius}°C</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
