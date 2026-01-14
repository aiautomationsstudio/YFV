import React from 'react';
import { Helmet } from 'react-helmet-async';

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>News & Updates - YFV Platform</title>
        <meta name="description" content="Latest news" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">News & Updates</h1>
        <div className="max-w-4xl">

          <div className="space-y-6">{[1,2,3].map(i => <div key={i} className="card"><h3 className="font-semibold text-lg mb-2">News Item {i}</h3><p className="text-sm text-gray-500 mb-2">15 Jan 2026</p><p className="text-gray-600">Latest updates about Yellow Fever vaccination services...</p></div>)}</div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
