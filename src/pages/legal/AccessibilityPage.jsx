import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityPage = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility - YFV Platform</title>
        <meta name="description" content="Accessibility features" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Accessibility</h1>
        <div className="max-w-4xl">

          <div className="card"><h2 className="text-2xl font-semibold mb-4">Accessibility Statement</h2><p className="text-gray-700 mb-4">We are committed to ensuring accessibility for all users.</p><ul className="list-disc list-inside space-y-2 text-gray-700"><li>Screen reader compatible</li><li>Keyboard navigation</li><li>High contrast mode</li><li>Multi-language support</li></ul></div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;
