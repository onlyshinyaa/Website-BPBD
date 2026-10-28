import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import '../../styles/home.css';

const Reports = () => {
  const [formData, setFormData] = useState({
    namaPelapor: '',
    nomorHp: '',
    kecamatan: 'Payakumbuh Barat',
    kelurahan: '',
    jenisBencana: 'Banjir',
    kondisiDarurat: 'Biasa',
    keterangan: '',
    persetujuan: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [reportCode, setReportCode] = useState('');

  const listKecamatan = [
    'Payakumbuh Barat',
    'Payakumbuh Utara',
    'Payakumbuh Selatan',
    'Payakumbuh Timur',
    'Lamposi Tigo Nagari'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setReportCode(`#LP-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  return (
    <div className="page-reports-container">
      <div className="public-hero-banner" style={{ marginBottom: '22px' }}>
        <div className="hero-status-left">
          <div className="status-badge-live">
            <span className="live-ping"></span>
            <span className="badge-text">LAYANAN PENGADUAN & EVAKUASI WARGA</span>
          </div>
          <h1 className="hero-title">Formulir Lapor Mandiri Kejadian Bencana</h1>
          <p className="hero-subtitle">
            Laporkan kejadian bencana di lingkungan Anda untuk segera diverifikasi dan ditindaklanjuti oleh Posko Tim Reaksi Cepat (TRC) BPBD Payakumbuh.
          </p>
        </div>
        <div className="hero-actions-right">
          <a href="tel:075292113" className="btn-hero-action emergency-btn">
            <PhoneCall size={18} />
            <div className="btn-action-text">
              <span className="action-label">BUTUH SEGERA / EVAKUASI</span>
              <span className="action-value">Telp: (0752) 92113</span>
            </div>
          </a>
        </div>
      </div>

      <div className="reports-layout-grid">
        {/* Kolom Formulir */}
        <div className="card report-form-card">
          <div className="section-header" style={{ marginBottom: '18px' }}>
            <div>
              <h3>Isi Formulir Pelaporan Kejadian</h3>
              <span className="section-subtext">Pastikan data yang dimasukkan benar agar tim dapat mencapai lokasi dengan cepat</span>
            </div>
          </div>

          {submitted ? (
            <div className="report-success-box">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} color="#059669" />
              </div>
              <h3>Laporan Anda Berhasil Terkirim!</h3>
              <p>
                Kode Laporan: <strong>{reportCode}</strong>
              </p>
              <p className="success-desc">
                Petugas Pusdalops BPBD Kota Payakumbuh sedang memverifikasi laporan Anda. Jika memerlukan evakuasi darurat mendesak, petugas kami akan segera menghubungi nomor Anda.
              </p>
              <button 
                type="button" 
                className="btn-submit-report"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    namaPelapor: '',
                    nomorHp: '',
                    kecamatan: 'Payakumbuh Barat',
                    kelurahan: '',
                    jenisBencana: 'Banjir',
                    kondisiDarurat: 'Biasa',
                    keterangan: '',
                    persetujuan: false
                  });
                }}
              >
                Kirim Laporan Baru Lainnya
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="report-form-body">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="namaPelapor">Nama Lengkap Pelapor *</label>
                  <input
                    id="namaPelapor"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.namaPelapor}
                    onChange={(e) => setFormData({ ...formData, namaPelapor: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nomorHp">Nomor HP / WhatsApp Aktif *</label>
                  <input
                    id="nomorHp"
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.nomorHp}
                    onChange={(e) => setFormData({ ...formData, nomorHp: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="kecamatan">Kecamatan *</label>
                  <select
                    id="kecamatan"
                    value={formData.kecamatan}
                    onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })}
                  >
                    {listKecamatan.map((kec) => (
                      <option key={kec} value={kec}>{kec}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="kelurahan">Nama Kelurahan / Lokasi Spesifik *</label>
                  <input
                    id="kelurahan"
                    type="text"
                    required
                    placeholder="Contoh: Kel. Tanjung Pauh, dekat Jembatan"
                    value={formData.kelurahan}
                    onChange={(e) => setFormData({ ...formData, kelurahan: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="jenisBencana">Jenis Kejadian Bencana *</label>
                  <select
                    id="jenisBencana"
                    value={formData.jenisBencana}
                    onChange={(e) => setFormData({ ...formData, jenisBencana: e.target.value })}
                  >
                    <option value="Banjir">Banjir Luapan / Genangan</option>
                    <option value="Tanah Longsor">Tanah Longsor</option>
                    <option value="Pohon Tumbang">Pohon Tumbang Menutup Jalan</option>
                    <option value="Angin Puting Beliung">Angin Kencang / Puting Beliung</option>
                    <option value="Kebakaran Hutan / Lahan">Kebakaran Lahan</option>
                    <option value="Lainnya">Kejadian Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="kondisiDarurat">Tingkat Kebutuhan Evakuasi *</label>
                  <select
                    id="kondisiDarurat"
                    value={formData.kondisiDarurat}
                    onChange={(e) => setFormData({ ...formData, kondisiDarurat: e.target.value })}
                  >
                    <option value="Biasa">Kondisi Terpantau (Belum Mendesak)</option>
                    <option value="Mendesak">Mendesak (Ada Lansia/Anak-anak Terjebak)</option>
                    <option value="Kritis">Kritis (Air Terus Naik Cepat / Akses Terputus)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="keterangan">Keterangan / Kondisi Lapangan Saat Ini *</label>
                <textarea
                  id="keterangan"
                  rows="4"
                  required
                  placeholder="Jelaskan perkiraan kedalaman air, jumlah warga terdampak, jalur jalan yang bisa dilalui, atau bantuan yang paling dibutuhkan..."
                  value={formData.keterangan}
                  onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                ></textarea>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="persetujuan"
                  required
                  checked={formData.persetujuan}
                  onChange={(e) => setFormData({ ...formData, persetujuan: e.target.checked })}
                />
                <label htmlFor="persetujuan">
                  Saya menyatakan bahwa data yang saya laporkan adalah benar sesuai kondisi lapangan dan bersedia dihubungi oleh petugas BPBD.
                </label>
              </div>

              <button type="submit" className="btn-submit-report">
                <Send size={16} /> Kirimkan Laporan ke Pusdalops
              </button>
            </form>
          )}
        </div>

        {/* Kolom Informasi & Petunjuk */}
        <div className="reports-sidebar">
          <div className="card guide-box">
            <div className="guide-header">
              <ShieldCheck size={20} color="#2563eb" />
              <h4>Alur Penanganan Laporan</h4>
            </div>
            <ol className="flow-steps">
              <li>
                <strong>1. Verifikasi Data:</strong> Operator Pusdalops memvalidasi lokasi dan nomor telepon pelapor.
              </li>
              <li>
                <strong>2. Penugasan TRC:</strong> Regu Tim Reaksi Cepat (TRC) terdekat diarahkan ke lokasi kejadian.
              </li>
              <li>
                <strong>3. Koordinasi Penyaluran:</strong> Posko mengoordinasikan logistik, perahu karet, atau alat berat jika diperlukan.
              </li>
            </ol>
          </div>

          <div className="card emergency-help-box">
            <div className="guide-header">
              <AlertTriangle size={20} color="#dc2626" />
              <h4>Keadaan Sangat Kritis?</h4>
            </div>
            <p>
              Jika terdapat korban terluka atau warga yang terjebak di air deras, segera hubungi nomor radio & telepon langsung tanpa menunggu balasan formulir:
            </p>
            <a href="tel:075292113" className="direct-call-pill">
              <PhoneCall size={16} /> (0752) 92113 (Pusdalops 24 Jam)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
