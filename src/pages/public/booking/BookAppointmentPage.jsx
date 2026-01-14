import React from 'react';
import { Helmet } from 'react-helmet-async';

const BookAppointmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Book Appointment - YFV Platform</title>
        <meta name="description" content="Book your Yellow Fever vaccination appointment online" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Book Appointment</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" className="input-field" placeholder="As per Passport" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                  <input type="date" className="input-field" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Passport Number *</label>
                <input type="text" className="input-field" placeholder="Enter Passport Number" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                  <input type="tel" className="input-field" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" className="input-field" placeholder="your@email.com" />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">Continue to Select Centre</button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default BookAppointmentPage;
