import React from 'react';
import { Helmet } from 'react-helmet-async';

const AppointmentConfirmationPage = () => {
  return (
    <>
      <Helmet>
        <title>Booking Confirmed - YFV Platform</title>
        <meta name="description" content="Your vaccination appointment has been confirmed" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Booking Confirmed</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your appointment has been successfully booked</p>

            <div className="bg-brand-50 p-6 rounded-lg text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="font-semibold">YFV-2026-12345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Centre:</span>
                <span className="font-semibold">AIIMS Delhi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-semibold">15 Jan 2026, 10:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold">₹300</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="btn-primary w-full">Download Appointment Confirmation</button>
              <button className="btn-outline w-full">Add to Calendar</button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AppointmentConfirmationPage;
