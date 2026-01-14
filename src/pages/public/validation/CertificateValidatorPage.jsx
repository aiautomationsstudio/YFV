import React from 'react';
import { Helmet } from 'react-helmet-async';

const CertificateValidatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Validate Certificate - YFV Platform</title>
        <meta name="description" content="Verify Yellow Fever vaccination certificate authenticity" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Validate Certificate</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Verify Vaccination Certificate</h2>
              <p className="text-gray-600">
                Scan QR code or enter certificate number to verify authenticity
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Certificate Number</label>
                <input type="text" className="input-field" placeholder="Enter certificate number" />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">OR</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-brand-500 transition-colors cursor-pointer">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                  </svg>
                  <p className="text-gray-600">Scan QR Code</p>
                  <p className="text-xs text-gray-500 mt-1">Click to open camera</p>
                </div>
              </div>

              <button className="btn-primary w-full">Verify Certificate</button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-900">How to Validate?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Scan the QR code on the certificate using your device camera</li>
              <li>• Or manually enter the certificate number</li>
              <li>• System will instantly verify authenticity and validity</li>
              <li>• No login required for validation</li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CertificateValidatorPage;
