import React from 'react';
import { Helmet } from 'react-helmet-async';

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - YFV Platform</title>
        <meta name="description" content="Step-by-step guide" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">How It Works</h1>
        <div className="max-w-4xl">

          <div className="space-y-8">
            {[
              {step: 1, title: 'Register', desc: 'Create your account with basic details'},
              {step: 2, title: 'Book Appointment', desc: 'Choose centre and time slot'},
              {step: 3, title: 'Make Payment', desc: 'Secure online payment'},
              {step: 4, title: 'Get Vaccinated', desc: 'Visit centre on scheduled date'},
              {step: 5, title: 'Download Certificate', desc: 'Receive digital certificate instantly'}
            ].map(item => (
              <div key={item.step} className="card flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksPage;
