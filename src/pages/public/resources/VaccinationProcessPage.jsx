import React from 'react';
import { Helmet } from 'react-helmet-async';

const VaccinationProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Vaccination Process - YFV Platform</title>
        <meta name="description" content="What to expect" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Vaccination Process</h1>
        <div className="max-w-4xl">

          <div className="space-y-6">
            <div className="card"><h3 className="font-semibold text-lg mb-2">Pre-Vaccination</h3><p className="text-gray-600">Medical screening and consent form completion</p></div>
            <div className="card"><h3 className="font-semibold text-lg mb-2">Vaccination</h3><p className="text-gray-600">Single dose injection by trained healthcare professional</p></div>
            <div className="card"><h3 className="font-semibold text-lg mb-2">Post-Vaccination</h3><p className="text-gray-600">30-minute observation period and certificate issuance</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccinationProcessPage;
