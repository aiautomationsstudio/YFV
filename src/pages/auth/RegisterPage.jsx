import React from 'react';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register - YFV Platform</title>
        <meta name="description" content="Create your account" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Register</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
            <form className="space-y-4">
              <div><input type="text" className="input-field" placeholder="Full Name" /></div>
              <div><input type="email" className="input-field" placeholder="Email" /></div>
              <div><input type="tel" className="input-field" placeholder="Mobile Number" /></div>
              <div><input type="password" className="input-field" placeholder="Password" /></div>
              <div><input type="password" className="input-field" placeholder="Confirm Password" /></div>
              <button type="submit" className="btn-primary w-full">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
