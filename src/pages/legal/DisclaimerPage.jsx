import React from 'react';
import { Helmet } from 'react-helmet-async';

const DisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - YFV Platform</title>
        <meta name="description" content="Important notices" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Disclaimer</h1>
        <div className="max-w-4xl">

          <div className="card"><h2 className="text-2xl font-semibold mb-4">Disclaimer</h2><p className="text-gray-700">The information provided on this platform is for informational purposes only. Consult healthcare professionals for medical advice.</p></div>
        </div>
      </div>
    </>
  );
};

export default DisclaimerPage;
