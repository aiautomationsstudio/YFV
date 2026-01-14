import React from 'react';
import { Helmet } from 'react-helmet-async';

const EmergencyVaccinationPage = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Vaccination - YFV Platform</title>
        <meta name="description" content="Emergency services" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Emergency Vaccination</h1>
        <div className="max-w-4xl">

          <div className="card bg-red-50 border-l-4 border-red-500"><h2 className="text-2xl font-semibold mb-4 text-red-900">Emergency Vaccination Services</h2><p className="text-gray-700 mb-4">For urgent travel requirements, contact our emergency helpline.</p><div className="bg-white p-4 rounded"><p className="font-semibold text-lg text-red-700">Emergency Hotline: 1800-XXX-XXXX</p></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyVaccinationPage;
