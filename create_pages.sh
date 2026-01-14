#!/bin/bash

# Create all page files with sample content

# Public Pages
cat > /home/claude/yfv-platform/src/pages/public/AboutPage.jsx << 'ENDFILE'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - YFV Platform</title>
        <meta name="description" content="Learn about the Yellow Fever Vaccination Platform and our mission" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">About YFV Platform</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-gray-600 mb-8">
            The Yellow Fever Vaccination Platform is India's first comprehensive digital solution for managing Yellow Fever vaccinations.
            Developed under the Ministry of Health and Family Welfare, we aim to provide seamless vaccination services to international travelers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card">
              <Target className="text-brand-700 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, efficient, and secure yellow fever vaccination services across India.
              </p>
            </div>

            <div className="card">
              <Users className="text-accent-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital health platform for international vaccination requirements.
              </p>
            </div>

            <div className="card">
              <Award className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
              <p className="text-gray-600">
                IHR-2005 compliant certificates with blockchain security and WHO recognition.
              </p>
            </div>

            <div className="card">
              <Heart className="text-red-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
              <p className="text-gray-600">
                Ensuring safety, transparency, and accessibility for all citizens and travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
ENDFILE

cat > /home/claude/yfv-platform/src/pages/public/YellowFeverInfoPage.jsx << 'ENDFILE'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Info, Globe } from 'lucide-react';

const YellowFeverInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Yellow Fever Information - YFV Platform</title>
        <meta name="description" content="Learn about Yellow Fever disease, symptoms, prevention, and vaccination requirements" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">What is Yellow Fever?</h1>
        
        <div className="max-w-4xl space-y-8">
          <div className="card bg-yellow-50 border-l-4 border-yellow-500">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Important Information</h3>
                <p className="text-gray-700">
                  Yellow Fever is a serious viral disease transmitted by mosquitoes. Vaccination is mandatory for travelers
                  to certain countries and regions.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Info className="mr-2 text-brand-700" size={24} />
              About the Disease
            </h2>
            <p className="text-gray-600 mb-4">
              Yellow Fever is an acute viral hemorrhagic disease transmitted by infected Aedes aegypti mosquitoes.
              The disease is endemic to tropical areas of Africa and Central and South America.
            </p>
            <p className="text-gray-600">
              Symptoms include fever, headache, jaundice, muscle pain, nausea, vomiting and fatigue.
              A small proportion of patients develop severe symptoms and approximately half of those die within 7 to 10 days.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2 text-brand-700" size={24} />
              Vaccination Requirements
            </h2>
            <p className="text-gray-600 mb-4">
              Many countries require proof of Yellow Fever vaccination as a condition of entry, particularly if you are
              coming from or have transited through a Yellow Fever endemic area.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Vaccination certificate is valid for life (as per WHO guidelines)</li>
              <li>Certificate becomes valid 10 days after vaccination</li>
              <li>Must be administered at an authorized vaccination centre</li>
              <li>IHR-2005 compliant certificate required for international travel</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default YellowFeverInfoPage;
ENDFILE

# Continue with more files...
echo "Created About and Yellow Fever Info pages"
