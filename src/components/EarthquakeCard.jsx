import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const EarthquakeCard = () => {
  return (
    <div className="card empty-earthquake-card">
      <div className="empty-earthquake-header">
        <div className="empty-earthquake-title-wrapper">
          <div className="empty-earthquake-icon">
            <AlertTriangle size={18} color="#fef08a" fill="#eab308" />
          </div>
          <h3>Gempa Terkini (Sumatera Barat)</h3>
        </div>
        <button className="btn-refresh" aria-label="Refresh Data">
          <RefreshCw size={18} />
        </button>
      </div>
      <p className="empty-earthquake-message">Tidak ada data gempa untuk Sumatera Barat</p>
    </div>
  );
};

export default EarthquakeCard;
