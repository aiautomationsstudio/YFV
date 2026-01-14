import React from 'react';
import { Helmet } from 'react-helmet-async';

const CampaignsPage = () => {
  return (
    <>
      <Helmet>
        <title>Vaccination Campaigns - YFV Platform</title>
        <meta name="description" content="Special campaigns" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Vaccination Campaigns</h1>
        <div className="max-w-4xl">

          <div className="space-y-6"><div className="card"><h3 className="font-semibold text-lg mb-2">Free Vaccination Camp</h3><p className="text-gray-600">Government-sponsored free vaccination for eligible citizens</p></div></div>
        </div>
      </div>
    </>
  );
};

export default CampaignsPage;
