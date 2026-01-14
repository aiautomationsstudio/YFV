import React from 'react';
import { Helmet } from 'react-helmet-async';

const UnauthorizedPage = () => {
  return (
    <>
      <Helmet>
        <title>Unauthorized Access</title>
        <meta name="description" content="Access denied" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Unauthorized Access</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto text-center"><div className="text-8xl mb-6">🔒</div><h2 className="text-2xl font-semibold mb-4">Unauthorized Access</h2><p className="text-gray-600 mb-8">You don't have permission to access this page.</p><a href="/login" className="btn-primary inline-block">Login</a></div>
        </div>
      </div>
    </>
  );
};

export default UnauthorizedPage;
