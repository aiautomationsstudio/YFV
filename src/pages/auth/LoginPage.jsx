import React from 'react';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - YFV Platform</title>
        <meta name="description" content="Sign in to your account" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Login</h1>
        <div className="max-w-4xl">

          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div><input type="email" className="input-field" placeholder="Email or Mobile" /></div>
              <div><input type="password" className="input-field" placeholder="Password" /></div>
              <button type="submit" className="btn-primary w-full">Sign In</button>
              <p className="text-center text-sm"><a href="/forgot-password" className="text-brand-700">Forgot Password?</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
