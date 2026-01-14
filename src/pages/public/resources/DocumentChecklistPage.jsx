import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocumentChecklistPage = () => {
  return (
    <>
      <Helmet>
        <title>Document Checklist - YFV Platform</title>
        <meta name="description" content="Required documents" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Document Checklist</h1>
        <div className="max-w-4xl">

          <div className="card"><h3 className="font-semibold text-lg mb-4">Required Documents</h3><ul className="space-y-3">{['Valid Passport', 'Aadhaar Card / Government ID', 'Booking Confirmation', 'Travel Itinerary (if available)'].map(doc => <li key={doc} className="flex items-center space-x-2"><svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span>{doc}</span></li>)}</ul></div>
        </div>
      </div>
    </>
  );
};

export default DocumentChecklistPage;
