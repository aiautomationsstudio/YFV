import React from 'react';
import { Helmet } from 'react-helmet-async';

const SelectCentrePage = () => {
  return (
    <>
      <Helmet>
        <title>Select Centre - YFV Platform</title>
        <meta name="description" content="Choose your preferred vaccination centre" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Select Centre</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card bg-brand-50">
            <p className="text-gray-700">Select a vaccination centre from the list below</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="card hover:border-brand-500 cursor-pointer transition-all">
                <h3 className="font-semibold text-lg mb-2">Centre Name {i}</h3>
                <p className="text-sm text-gray-600 mb-3">City, State - Distance: 5 km</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Available Today
                  </span>
                  <button className="text-brand-700 font-semibold text-sm">Select →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SelectCentrePage;
