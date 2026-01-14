import React from 'react';
import { Helmet } from 'react-helmet-async';

const CardConversionPage = () => {
  return (
    <>
      <Helmet>
        <title>Convert Physical Card - YFV Platform</title>
        <meta name="description" content="Convert your physical vaccination card to digital certificate" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Convert Physical Card</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="card bg-yellow-50 border-l-4 border-yellow-500">
            <h3 className="font-semibold mb-2">Before You Start</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Keep your physical Yellow Fever vaccination card ready</li>
              <li>• Clear photo or scan of the card required</li>
              <li>• Valid passport or Aadhaar card needed</li>
              <li>• Processing time: 2-3 working days</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Upload Documents</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Personal Information</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" className="input-field" placeholder="Full Name" />
                  <input type="text" className="input-field" placeholder="Passport Number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Physical Card (Front)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-500 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF (Max 5MB)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Physical Card (Back)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-500 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF (Max 5MB)</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-600">
                  I confirm that the uploaded documents are authentic and belong to me
                </label>
              </div>

              <button type="submit" className="btn-primary w-full">Submit for Verification</button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CardConversionPage;
