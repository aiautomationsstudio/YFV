import React from 'react';
import { Helmet } from 'react-helmet-async';

const CentreLocatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Find Vaccination Centres - YFV Platform</title>
        <meta name="description" content="Locate Yellow Fever vaccination centres near you" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Find Vaccination Centres</h1>
        
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Search for Centres</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" placeholder="Enter State" className="input-field" />
              <input type="text" placeholder="Enter City" className="input-field" />
              <button className="btn-primary">Search Centres</button>
            </div>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map View - Integration with Google Maps/MapMyIndia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">AIIMS Delhi Centre</h3>
              <p className="text-sm text-gray-600 mb-4">New Delhi, 110029</p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Open</span>
                <button className="text-brand-700 text-sm font-semibold">View Details →</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CentreLocatorPage;
