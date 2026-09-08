import React from 'react';

const WeatherCard = () => {
  return (
    <div className="card weather-card">
      <div className="weather-header">
        <span>Payakumbuh</span>
      </div>
      <div className="weather-current">
        <div className="weather-current-title">cuaca saat ini</div>
        <div className="weather-current-main">
          <div className="weather-icon">🌧️</div>
          <div className="weather-temp">
            <span className="temp-value">28°C</span>
            <span className="temp-desc">Cerah Berawan</span>
          </div>
        </div>
        <div className="weather-stats">
          <div className="stat-box">
            <span>💧 Kelembapan</span>
            <strong>60%</strong>
          </div>
          <div className="stat-box">
            <span>💨 Angin</span>
            <strong>12 km/h</strong>
          </div>
        </div>
      </div>

      <div className="weather-forecast">
        <div className="forecast-title">📅 Prakiraan 3 Hari</div>
        <div className="forecast-list">
          <div className="forecast-item">
            <span>Hari Ini</span>
            <span>⛅</span>
            <span><strong>29°C</strong> 24°C</span>
          </div>
          <div className="forecast-item">
            <span>Besok</span>
            <span>☀️</span>
            <span><strong>27°C</strong> 23°C</span>
          </div>
          <div className="forecast-item">
            <span>Lusa</span>
            <span>🌧️</span>
            <span><strong>28°C</strong> 24°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
