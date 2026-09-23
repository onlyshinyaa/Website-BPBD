import React from 'react';
import { CloudRain, CalendarDays, CloudSun, Sun, RefreshCw } from 'lucide-react';

const WeatherCard = () => {
  return (
    <>
      <div className="card current-weather-card">
        <div className="cwc-header">
          <div className="cwc-title-wrapper">
            <div className="cwc-icon-wrapper blue-bg">
              <CloudSun size={20} color="#fff" />
            </div>
            <h3>Cuaca Saat Ini</h3>
          </div>
          <button className="btn-refresh-blue" aria-label="Refresh Data">
            <RefreshCw size={16} />
          </button>
        </div>
        
        <div className="cwc-main">
          <div className="cwc-temp-wrapper">
            <span className="cwc-temp">25°C</span>
            <div className="cwc-desc">
              <span className="cwc-condition">Cerah Berawan</span>
              <span className="cwc-location">Payakumbuh, Sumatera Barat</span>
            </div>
          </div>
          
          <div className="cwc-stats">
            <div className="cwc-stat-item">
              <span className="cwc-stat-label">Kelembaban</span>
              <span className="cwc-stat-value">75%</span>
            </div>
            <div className="cwc-stat-item">
              <span className="cwc-stat-label">Angin</span>
              <span className="cwc-stat-value">12 km/h</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card forecast-weather-card">
        <div className="fwc-header">
          <div className="fwc-icon-wrapper green-bg">
            <CalendarDays size={20} color="#fff" />
          </div>
          <h3>Prakiraan Cuaca</h3>
        </div>
        
        <div className="fwc-grid">
          <div className="fwc-item">
            <CloudSun size={28} color="#fbbf24" fill="#fbbf24" />
            <span className="fwc-day">Hari Ini</span>
            <span className="fwc-cond">Cerah Berawan</span>
            <span className="fwc-temp">28°C</span>
          </div>
          <div className="fwc-item">
            <Sun size={28} color="#f59e0b" fill="#f59e0b" />
            <span className="fwc-day">Besok</span>
            <span className="fwc-cond">Cerah</span>
            <span className="fwc-temp">29°C</span>
          </div>
          <div className="fwc-item">
            <CloudRain size={28} color="#a78bfa" fill="#c4b5fd" />
            <span className="fwc-day">Lusa</span>
            <span className="fwc-cond">Hujan Ringan</span>
            <span className="fwc-temp">27°C</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
