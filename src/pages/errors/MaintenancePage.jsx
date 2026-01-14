import React from 'react';
import { Helmet } from 'react-helmet-async';

const MaintenancePage = () => {
  return (
    <>
      <Helmet>
        <title>Maintenance Mode</title>
        <meta name="description" content="Under maintenance" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Maintenance Mode</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto text-center"><div className="text-6xl mb-6">🔧</div><h2 className="text-2xl font-semibold mb-4">Under Maintenance</h2><p className="text-gray-600">We'll be back soon!</p></div>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
