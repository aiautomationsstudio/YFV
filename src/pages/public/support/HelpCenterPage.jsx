import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelpCenterPage = () => {
  return (
    <>
      <Helmet>
        <title>Help Center - YFV Platform</title>
        <meta name="description" content="Get help and support" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Help Center</h1>
        <div className="max-w-4xl">

          <div className="grid md:grid-cols-3 gap-6">{[{title: 'FAQs', desc: 'Common questions', icon: '❓'}, {title: 'Live Chat', desc: '24/7 support', icon: '💬'}, {title: 'Submit Complaint', desc: 'Report issues', icon: '📝'}].map(item => <div key={item.title} className="card text-center"><div className="text-4xl mb-3">{item.icon}</div><h3 className="font-semibold text-lg mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>)}</div>
        </div>
      </div>
    </>
  );
};

export default HelpCenterPage;
