import React from 'react';
import { Helmet } from 'react-helmet-async';

const PressReleasesPage = () => {
  return (
    <>
      <Helmet>
        <title>Press Releases - YFV Platform</title>
        <meta name="description" content="Official press releases" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Press Releases</h1>
        <div className="max-w-4xl">

          <div className="space-y-6"><div className="card"><h3 className="font-semibold text-lg">Official Press Release</h3><p className="text-sm text-gray-500">15 Jan 2026</p><p className="text-gray-600 mt-2">Ministry announces expansion of YFV services...</p></div></div>
        </div>
      </div>
    </>
  );
};

export default PressReleasesPage;
