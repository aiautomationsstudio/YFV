import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password - YFV Platform</title>
        <meta name="description" content="Create new password" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Reset Password</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Password</h2>
            <form className="space-y-4">
              <div><input type="password" className="input-field" placeholder="New Password" /></div>
              <div><input type="password" className="input-field" placeholder="Confirm Password" /></div>
              <button type="submit" className="btn-primary w-full">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
