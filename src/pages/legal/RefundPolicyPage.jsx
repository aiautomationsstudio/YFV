import React from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - YFV Platform</title>
        <meta name="description" content="Cancellation and refunds" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Refund Policy</h1>
        <div className="max-w-4xl">

          <div className="card"><h2 className="text-2xl font-semibold mb-4">Refund Policy</h2><div className="space-y-4 text-gray-700"><p>Cancellations must be made at least 24 hours before the appointment for a full refund.</p><ul className="list-disc list-inside space-y-2"><li>Full refund: 24+ hours before</li><li>50% refund: 12-24 hours before</li><li>No refund: Less than 12 hours</li></ul></div></div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;
