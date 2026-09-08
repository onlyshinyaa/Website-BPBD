import React from 'react';
import DisasterCard from '../../components/DisasterCard';
import EarthquakeCard from '../../components/EarthquakeCard';
import WeatherCard from '../../components/WeatherCard';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-column">
        <DisasterCard />
        
        {/* Affected Areas Section */}
        <div className="affected-areas-section">
          <div className="section-header">
            <h3>Daerah Terdampak</h3>
            <a href="#" className="link-detail">LIHAT DETAIL</a>
          </div>
          <div className="affected-grid">
            <div className="affected-list">
              <div className="list-title">5 KECAMATAN</div>
              <ul>
                <li className="active">PAYAKUMBUH UTARA</li>
                <li>PAYAKUMBUH BARAT</li>
                <li>PAYAKUMBUH SELATAN</li>
                <li>PAYAKUMBUH TIMUR</li>
                <li>LAMPOSI TIGO NAGARI</li>
              </ul>
            </div>
            <div className="affected-chart">
              <div className="list-title">14 KELURAHAN</div>
              {/* Placeholder for bar chart */}
              <div className="chart-placeholder">
                <div className="bar" style={{height: '30%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '100%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '40%'}}></div>
              </div>
            </div>
            <div className="affected-summary">
              <div className="list-title">14 DESA/KELURAHAN</div>
              <p>Mayoritas terdampak parah di area lembah dan bantaran sungai.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="side-column">
        <EarthquakeCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default Home;
