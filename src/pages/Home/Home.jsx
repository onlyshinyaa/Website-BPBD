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
              <div className="custom-bar-chart">
                <div className="chart-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
                <div className="chart-bars">
                  {[
                    { name: 'Tigo Koto', value: 30, height: '30%' },
                    { name: 'Koto Tuo', value: 50, height: '50%' },
                    { name: 'P. Sinayan', value: 80, height: '80%' },
                    { name: 'Kubu Gadang', value: 100, height: '100%' },
                    { name: 'P. Tinggi', value: 70, height: '70%' },
                    { name: 'P. Rantang', value: 40, height: '40%' },
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
