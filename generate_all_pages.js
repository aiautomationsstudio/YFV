const fs = require('fs');
const path = require('path');

const pageTemplate = (pageName, title, description, content) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${pageName} = () => {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">${title.replace(' - YFV Platform', '')}</h1>
        ${content}
      </div>
    </>
  );
};

export default ${pageName};
`;

const pages = {
  'public/FAQPage.jsx': {
    name: 'FAQPage',
    title: 'Frequently Asked Questions - YFV Platform',
    description: 'Find answers to common questions about Yellow Fever vaccination',
    content: `
        <div className="max-w-4xl space-y-6">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Who needs Yellow Fever vaccination?</h3>
            <p className="text-gray-600">
              Travelers visiting Yellow Fever endemic countries or territories must have a valid vaccination certificate.
              Check with your destination country's requirements before traveling.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">How do I book an appointment?</h3>
            <p className="text-gray-600">
              You can book an appointment online through our platform by selecting a vaccination centre,
              choosing an available slot, and completing the payment process.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Is the digital certificate valid internationally?</h3>
            <p className="text-gray-600">
              Yes, our digital certificates are IHR-2005 compliant and recognized by WHO member countries worldwide.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">What documents do I need for vaccination?</h3>
            <p className="text-gray-600">
              You need a valid passport, Aadhaar card or government-issued ID, and your booking confirmation.
            </p>
          </div>
        </div>
    `
  },
  
  'public/GuidelinesPage.jsx': {
    name: 'GuidelinesPage', 
    title: 'Vaccination Guidelines - YFV Platform',
    description: 'Official guidelines for Yellow Fever vaccination in India',
    content: `
        <div className="max-w-4xl space-y-6">
          <div className="card bg-brand-50">
            <h2 className="text-xl font-semibold mb-4">Before Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Carry valid identification documents (Passport/Aadhaar)</li>
              <li>Arrive 15 minutes before your scheduled appointment</li>
              <li>Inform about any allergies or medical conditions</li>
              <li>Bring booking confirmation (SMS/Email/Print)</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">During Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Complete the medical screening form</li>
              <li>Consult with the healthcare provider if needed</li>
              <li>Receive vaccination from authorized personnel</li>
              <li>Wait for 30 minutes post-vaccination for observation</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">After Vaccination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Download digital certificate immediately</li>
              <li>Certificate becomes valid after 10 days</li>
              <li>Valid for lifetime (as per WHO guidelines)</li>
              <li>Report any adverse reactions to the centre</li>
            </ul>
          </div>
        </div>
    `
  },

  'public/ContactPage.jsx': {
    name: 'ContactPage',
    title: 'Contact Us - YFV Platform',
    description: 'Get in touch with us for support and queries',
    content: `
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
    `
  }
};

Object.entries(pages).forEach(([filepath, config]) => {
  const fullPath = path.join('/home/claude/yfv-platform/src/pages', filepath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const content = pageTemplate(config.name, config.title, config.description, config.content);
  fs.writeFileSync(fullPath, content);
  console.log(`Created: ${filepath}`);
});

console.log('\\nPage generation complete!');
