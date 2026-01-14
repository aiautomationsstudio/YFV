import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - YFV Platform</title>
        <meta name="description" content="Get in touch with us for support and queries" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Helpline (Toll-Free)</p>
                  <p className="text-lg font-semibold text-brand-700">1800-XXX-XXXX</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Support</p>
                  <p className="text-lg font-semibold text-brand-700">support@yfvplatform.gov.in</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Office Hours</p>
                  <p className="text-lg font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-lg mb-4">Ministry Address</h3>
              <p className="text-gray-600">
                Ministry of Health and Family Welfare<br />
                Nirman Bhawan<br />
                New Delhi - 110011<br />
                India
              </p>
            </div>
          </div>

          <div className="card mt-8">
            <h3 className="font-semibold text-lg mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="input-field" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="input-field" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="input-field" rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default ContactPage;
