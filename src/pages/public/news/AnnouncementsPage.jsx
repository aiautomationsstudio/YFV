import React from 'react';
import { Helmet } from 'react-helmet-async';

const AnnouncementsPage = () => {
  return (
    <>
      <Helmet>
        <title>Announcements - YFV Platform</title>
        <meta name="description" content="Important announcements" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Announcements</h1>
        <div className="max-w-4xl">

          <div className="space-y-4"><div className="card bg-blue-50"><h3 className="font-semibold">System Maintenance</h3><p className="text-sm text-gray-700">Platform will be under maintenance on 20 Jan 2026</p></div></div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementsPage;
