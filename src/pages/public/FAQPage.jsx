import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - YFV Platform</title>
        <meta name="description" content="Find answers to common questions about Yellow Fever vaccination" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Frequently Asked Questions</h1>
        
        <div className="max-w-4xl space-y-6">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Who needs Yellow Fever vaccination?</h3>
            <p className="text-gray-600">
              Travelers visiting Yellow Fever endemic countries or territories must have a valid vaccination certificate.
              Check with your destination country's requirements before traveling.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">How do I book an appointment?</h3>
            <p className="text-gray-600">
              You can book an appointment online through our platform by selecting a vaccination centre,
              choosing an available slot, and completing the payment process.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Is the digital certificate valid internationally?</h3>
            <p className="text-gray-600">
              Yes, our digital certificates are IHR-2005 compliant and recognized by WHO member countries worldwide.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">What documents do I need for vaccination?</h3>
            <p className="text-gray-600">
              You need a valid passport, Aadhaar card or government-issued ID, and your booking confirmation.
            </p>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default FAQPage;
