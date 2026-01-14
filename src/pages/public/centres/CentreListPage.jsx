import React from 'react';
import { Helmet } from 'react-helmet-async';

const CentreListPage = () => {
  return (
    <>
      <Helmet>
        <title>All Vaccination Centres - YFV Platform</title>
        <meta name="description" content="Complete list of authorized Yellow Fever vaccination centres" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">All Vaccination Centres</h1>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Showing 150 centres across India</p>
            <select className="input-field w-auto">
              <option>Sort by Distance</option>
              <option>Sort by Name</option>
              <option>Sort by State</option>
            </select>
          </div>

          <div className="space-y-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sample Centre {i}</h3>
                    <p className="text-sm text-gray-600 mb-2">City, State - 110001</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>📞 +91-11-XXXX-XXXX</span>
                      <span>⏰ 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <button className="btn-primary text-sm">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CentreListPage;
