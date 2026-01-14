import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConversionStatusPage = () => {
  return (
    <>
      <Helmet>
        <title>Conversion Status - YFV Platform</title>
        <meta name="description" content="Track your card conversion request status" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Conversion Status</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Conversion Request Status</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Request ID</p>
                  <p className="font-semibold text-lg">CVT-2026-001</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Under Review
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Request Submitted</p>
                  <p className="text-sm text-gray-600">12 Jan 2026, 10:30 AM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Documents Received</p>
                  <p className="text-sm text-gray-600">12 Jan 2026, 10:35 AM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Under Verification</p>
                  <p className="text-sm text-gray-600">In progress...</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 opacity-50">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Certificate Generation</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Estimated completion:</strong> 13 Jan 2026<br />
                You will receive an email and SMS notification once your digital certificate is ready.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ConversionStatusPage;
