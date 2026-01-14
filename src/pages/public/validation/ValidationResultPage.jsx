import React from 'react';
import { Helmet } from 'react-helmet-async';

const ValidationResultPage = () => {
  return (
    <>
      <Helmet>
        <title>Validation Result - YFV Platform</title>
        <meta name="description" content="Certificate validation result" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Validation Result</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="card border-2 border-green-500">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2 text-green-700">Certificate is Valid</h2>
            <p className="text-center text-gray-600 mb-8">This is an authentic Yellow Fever vaccination certificate</p>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Certificate No.</p>
                  <p className="font-semibold">YFV-2026-12345</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-semibold text-green-600">Active</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">Rahul Sharma</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Passport No.</p>
                  <p className="font-semibold">Z1234567</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Vaccination Date</p>
                  <p className="font-semibold">05 Jan 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valid From</p>
                  <p className="font-semibold">15 Jan 2026</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Vaccination Centre</p>
                <p className="font-semibold">AIIMS Delhi, New Delhi</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Batch Number</p>
                <p className="font-semibold">YFV-BATCH-2026-001</p>
              </div>
            </div>

            <button className="btn-primary w-full mt-6">Print Validation Report</button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ValidationResultPage;
