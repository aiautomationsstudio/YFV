import React from 'react';
import { Helmet } from 'react-helmet-async';

const AadhaarAuthPage = () => {
  return (
    <>
      <Helmet>
        <title>Aadhaar Authentication - YFV Platform</title>
        <meta name="description" content="Verify with Aadhaar" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Aadhaar Authentication</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Aadhaar Authentication</h2>
            <form className="space-y-4">
              <div><input type="text" className="input-field" placeholder="Enter 12-digit Aadhaar Number" /></div>
              <button type="submit" className="btn-primary w-full">Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AadhaarAuthPage;
