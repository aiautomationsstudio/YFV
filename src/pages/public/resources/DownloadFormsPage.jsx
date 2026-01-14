import React from 'react';
import { Helmet } from 'react-helmet-async';

const DownloadFormsPage = () => {
  return (
    <>
      <Helmet>
        <title>Download Forms - YFV Platform</title>
        <meta name="description" content="Forms and documents" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Download Forms</h1>
        <div className="max-w-4xl">

          <div className="space-y-4">{['Consent Form', 'Medical Screening Form', 'Adverse Event Report Form'].map(form => <div key={form} className="card flex justify-between items-center"><span className="font-semibold">{form}</span><button className="btn-primary text-sm">Download PDF</button></div>)}</div>
        </div>
      </div>
    </>
  );
};

export default DownloadFormsPage;
