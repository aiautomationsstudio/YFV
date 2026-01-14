import React from 'react';
import { Helmet } from 'react-helmet-async';

const CentreDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Centre Details - YFV Platform</title>
        <meta name="description" content="Detailed information about vaccination centre" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Centre Details</h1>
        
        <div className="max-w-4xl space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">AIIMS Delhi Vaccination Centre</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-600">📍 New Delhi, 110029</p>
                <p className="text-gray-600">📞 +91-11-XXXX-XXXX</p>
                <p className="text-gray-600">✉️ aiims-yfv@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Available Slots</h3>
            <div className="grid grid-cols-4 gap-2">
              {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'].map(time => (
                <button key={time} className="py-2 border border-brand-500 rounded hover:bg-brand-50 text-sm">
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button className="btn-primary w-full">Book Appointment at This Centre</button>
        </div>
        
      </div>
    </>
  );
};

export default CentreDetailsPage;
