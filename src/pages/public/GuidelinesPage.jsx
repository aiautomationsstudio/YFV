import React from 'react';
import { Helmet } from 'react-helmet-async';

const GuidelinesPage = () => {
  return (
    <>
      <Helmet>
        <title>Vaccination Guidelines - YFV Platform</title>
        <meta name="description" content="Official guidelines for Yellow Fever vaccination in India" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Vaccination Guidelines</h1>
        
        <div className="max-w-4xl space-y-6">
          <div className="card bg-brand-50">
            <h2 className="text-xl font-semibold mb-4">Before Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Carry valid identification documents (Passport/Aadhaar)</li>
              <li>Arrive 15 minutes before your scheduled appointment</li>
              <li>Inform about any allergies or medical conditions</li>
              <li>Bring booking confirmation (SMS/Email/Print)</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">During Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Complete the medical screening form</li>
              <li>Consult with the healthcare provider if needed</li>
              <li>Receive vaccination from authorized personnel</li>
              <li>Wait for 30 minutes post-vaccination for observation</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">After Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Download digital certificate immediately</li>
              <li>Certificate becomes valid after 10 days</li>
              <li>Valid for lifetime (as per WHO guidelines)</li>
              <li>Report any adverse reactions to the centre</li>
            </ul>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default GuidelinesPage;
