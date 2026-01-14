import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - YFV Platform</title>
        <meta name="description" content="Platform terms of use" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Terms & Conditions</h1>
        <div className="max-w-4xl">

          <div className="prose max-w-none"><h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2><p className="text-gray-600 mb-4">Last updated: January 2026</p><div className="space-y-4 text-gray-700"><p>By using this platform, you agree to these terms and conditions...</p><h3 className="font-semibold text-lg mt-6">User Obligations</h3><p>Users must provide accurate information and comply with all regulations.</p></div></div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;
