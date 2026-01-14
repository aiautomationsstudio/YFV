import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - YFV Platform</title>
        <meta name="description" content="How we protect your data" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Privacy Policy</h1>
        <div className="max-w-4xl">

          <div className="prose max-w-none"><h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2><p className="text-gray-600 mb-4">Last updated: January 2026</p><div className="space-y-4 text-gray-700"><p>This platform is committed to protecting your privacy and personal information...</p><h3 className="font-semibold text-lg mt-6">Data Collection</h3><p>We collect information necessary for vaccination services including personal details, health information, and payment data.</p><h3 className="font-semibold text-lg mt-6">Data Security</h3><p>All data is encrypted and stored securely following government standards.</p></div></div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
