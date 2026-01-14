import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">404 - Page Not Found</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto text-center"><div className="text-8xl font-bold text-gray-300 mb-4">404</div><h2 className="text-2xl font-semibold mb-4">Page Not Found</h2><p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p><a href="/" className="btn-primary inline-block">Go Home</a></div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
