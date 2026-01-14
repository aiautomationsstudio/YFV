import React from 'react';
import { Helmet } from 'react-helmet-async';

const TrackComplaintPage = () => {
  return (
    <>
      <Helmet>
        <title>Track Complaint - YFV Platform</title>
        <meta name="description" content="Check complaint status" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Track Complaint</h1>
        <div className="max-w-4xl">

          <div className="max-w-2xl mx-auto card"><h2 className="text-xl font-semibold mb-4">Track Your Complaint</h2><div className="mb-6"><input type="text" className="input-field" placeholder="Enter complaint ID" /></div><button className="btn-primary w-full">Track Status</button></div>
        </div>
      </div>
    </>
  );
};

export default TrackComplaintPage;
