import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <AppRoutes />
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
