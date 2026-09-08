import React from 'react';

const EarthquakeCard = () => {
  return (
    <div className="card earthquake-card">
      <div className="card-header">
        <h3>Gempa Terkini</h3>
      </div>
      <div className="earthquake-content">
        <div className="magnitude">
          <span>5.2</span>
        </div>
        <div className="earthquake-details">
          <h4>Payakumbuh</h4>
          <p>Kedalaman: 12 km</p>
        </div>
      </div>
      <div className="earthquake-time">
        <span>Waktu Kejadian</span>
        <span>12 MEI 2024, 14:30 WIB</span>
      </div>
    </div>
  );
};

export default EarthquakeCard;
