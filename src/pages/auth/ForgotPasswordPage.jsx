import React from 'react';
import { Helmet } from 'react-helmet-async';

const ForgotPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password - YFV Platform</title>
        <meta name="description" content="Reset your password" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Forgot Password</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
            <form className="space-y-4">
              <div><input type="email" className="input-field" placeholder="Enter your email" /></div>
              <button type="submit" className="btn-primary w-full">Send Reset Link</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
