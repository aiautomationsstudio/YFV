import React from 'react';
import { Helmet } from 'react-helmet-async';

const VerifyOTPPage = () => {
  return (
    <>
      <Helmet>
        <title>Verify OTP - YFV Platform</title>
        <meta name="description" content="Enter verification code" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Verify OTP</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Verify OTP</h2>
            <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your mobile</p>
            <form className="space-y-4">
              <div className="flex justify-center space-x-2">
                {[1,2,3,4,5,6].map(i => <input key={i} type="text" maxLength="1" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg" />)}
              </div>
              <button type="submit" className="btn-primary w-full">Verify</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTPPage;
