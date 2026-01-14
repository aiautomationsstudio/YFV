import React from 'react';
import { Helmet } from 'react-helmet-async';

const SubmitComplaintPage = () => {
  return (
    <>
      <Helmet>
        <title>Submit Complaint - YFV Platform</title>
        <meta name="description" content="Report an issue" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Submit Complaint</h1>
        <div className="max-w-4xl">

          <div className="max-w-2xl mx-auto card"><form className="space-y-4"><div><label className="block text-sm font-medium mb-2">Complaint Type</label><select className="input-field"><option>Select type</option><option>Booking Issue</option><option>Payment Issue</option><option>Centre Related</option></select></div><div><label className="block text-sm font-medium mb-2">Description</label><textarea className="input-field" rows="5" placeholder="Describe your issue..."></textarea></div><button type="submit" className="btn-primary w-full">Submit Complaint</button></form></div>
        </div>
      </div>
    </>
  );
};

export default SubmitComplaintPage;
