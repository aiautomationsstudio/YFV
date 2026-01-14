import React from 'react';
import { Helmet } from 'react-helmet-async';

const TravelRequirementsPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Requirements - YFV Platform</title>
        <meta name="description" content="Countries requiring vaccination" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Travel Requirements</h1>
        <div className="max-w-4xl">

          <div className="card"><p className="mb-4 text-gray-600">Yellow Fever vaccination is required for travelers to many countries in Africa and South America.</p><ul className="list-disc list-inside space-y-2 text-gray-700"><li>Valid certificate required at border</li><li>Certificate valid 10 days after vaccination</li><li>Lifetime validity as per WHO</li><li>Check specific country requirements</li></ul></div>
        </div>
      </div>
    </>
  );
};

export default TravelRequirementsPage;
