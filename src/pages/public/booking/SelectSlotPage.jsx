import React from 'react';
import { Helmet } from 'react-helmet-async';

const SelectSlotPage = () => {
  return (
    <>
      <Helmet>
        <title>Select Time Slot - YFV Platform</title>
        <meta name="description" content="Choose your preferred vaccination time slot" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Select Time Slot</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Selected Centre: AIIMS Delhi</h2>
            <p className="text-gray-600">New Delhi, 110029</p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Select Date</h3>
            <div className="grid grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <button key={i} className="py-3 border rounded hover:bg-brand-50 text-sm">
                  <div>{day}</div>
                  <div className="text-xs text-gray-500">{15+i}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map(time => (
                <button key={time} className="py-3 border border-brand-500 rounded hover:bg-brand-600 hover:text-white transition-colors">
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button className="btn-primary w-full">Proceed to Payment</button>
        </div>
        
      </div>
    </>
  );
};

export default SelectSlotPage;
