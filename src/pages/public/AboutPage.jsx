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
