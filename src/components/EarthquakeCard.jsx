import React, { useState } from 'react';
import { RefreshCw, Radio, MapPin, Clock } from 'lucide-react';

/**
 * Diselaraskan dengan tabel ERD `peringatan_gempa`:
 * - id: int
 * - lokasi_pusat_gempa: varchar
 * - magnitudo: float
 * - waktu_terjadi: datetime
 * - potensi_tsunami: boolean
 */
const EarthquakeCard = () => {
  const [gempaData] = useState({
    id: 1,
    lokasi_pusat_gempa: 'Pesisir Barat Sumatera Barat (68 km Barat Daya Pasaman Barat)',
    magnitudo: 4.8,
    waktu_terjadi: '2026-10-13 04:18:22',
    potensi_tsunami: false
  });

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
    <div className="card empty-earthquake-card">
      <div className="empty-earthquake-header">
        <div className="empty-earthquake-title-wrapper">
          <div className="empty-earthquake-icon">
            <Radio size={18} color="#ffffff" />
          </div>
          <div>
            <h3>Peringatan Gempa Terkini</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>SUMBER RESMI BMKG</span>
          </div>
        </div>
        <button className="btn-refresh" aria-label="Refresh Data">
          <RefreshCw size={16} />
        </button>
      </div>

      {gempaData ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#dc2626', lineHeight: 1 }}>
                {gempaData.magnitudo}
              </span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748b' }}>SR</span>
            </div>
            <span style={{
              fontSize: '11.5px',
              fontWeight: '700',
              padding: '4px 10px',
              borderRadius: '20px',
              backgroundColor: gempaData.potensi_tsunami ? '#fee2e2' : '#f0fdf4',
              color: gempaData.potensi_tsunami ? '#dc2626' : '#16a34a',
              border: `1px solid ${gempaData.potensi_tsunami ? '#fecaca' : '#bbf7d0'}`
            }}>
              {gempaData.potensi_tsunami ? 'POTENSI TSUNAMI' : 'TIDAK BERPOTENSI TSUNAMI'}
            </span>
          </div>

          <div style={{ fontSize: '12.5px', color: '#1e293b', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
            <MapPin size={15} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span><strong>Pusat:</strong> {gempaData.lokasi_pusat_gempa}</span>
          </div>

          <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} />
            <span>{formatDateTime(gempaData.waktu_terjadi)}</span>
          </div>
        </div>
      ) : (
        <p className="empty-earthquake-message">Tidak ada rekaman data gempa untuk wilayah Sumatera Barat</p>
      )}
    </div>
  );
};

export default EarthquakeCard;
