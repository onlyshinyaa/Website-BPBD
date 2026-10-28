import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Alert from '../pages/Alert/Alert';
import Cluster from '../pages/Cluster/Cluster';
import Statistics from '../pages/Statistics/Statistics';
import Reports from '../pages/Reports/Reports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peringatan" element={<Alert />} />
      <Route path="/peta" element={<Cluster />} />
      <Route path="/bantuan" element={<Statistics />} />
      <Route path="/laporan" element={<Reports />} />
      {/* Fallback ke home jika rute tidak ditemukan */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
