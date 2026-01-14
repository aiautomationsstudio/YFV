import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Shield, Award, ArrowRight, Users, Building2, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Yellow Fever Vaccination Platform - Official Government Portal</title>
        <meta name="description" content="Official platform for Yellow Fever Vaccination in India. Book appointments, validate certificates, and find vaccination centres." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Yellow Fever Vaccination Platform
              </h1>
              <p className="text-xl mb-8 text-brand-100">
                Official SaaS-based integrated digital solution by Ministry of Health and Family Welfare, Government of India
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-secondary text-center">
                  Book Appointment Now
                </Link>
                <Link to="/centres" className="btn-outline text-center bg-white text-brand-700">
                  Find Centres
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-400" size={24} />
                    <span className="text-lg">IHR-2005 Compliant Certificates</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-400" size={24} />
                    <span className="text-lg">Real-time Slot Booking</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-400" size={24} />
                    <span className="text-lg">Digital Certificate with QR</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-400" size={24} />
                    <span className="text-lg">Multi-lingual Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose YFV Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's first comprehensive digital solution for Yellow Fever Vaccination management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-brand-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600 text-sm">
                Book appointments online with real-time slot availability across all centres
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Certificates</h3>
              <p className="text-gray-600 text-sm">
                Digital certificates with QR code verification and blockchain security
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Centres</h3>
              <p className="text-gray-600 text-sm">
                Access vaccination centres across India with real-time availability status
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">IHR Compliant</h3>
              <p className="text-gray-600 text-sm">
                Internationally recognized certificates following IHR-2005 standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/book-appointment" className="group">
              <div className="card hover:shadow-xl transition-all cursor-pointer border-2 border-transparent group-hover:border-brand-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Book Appointment</h3>
                  <ArrowRight className="text-brand-700 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600">
                  Schedule your vaccination at the nearest centre with available slots
                </p>
              </div>
            </Link>

            <Link to="/validate-certificate" className="group">
              <div className="card hover:shadow-xl transition-all cursor-pointer border-2 border-transparent group-hover:border-accent-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Validate Certificate</h3>
                  <ArrowRight className="text-accent-600 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600">
                  Verify the authenticity of vaccination certificates using QR code
                </p>
              </div>
            </Link>

            <Link to="/convert-card" className="group">
              <div className="card hover:shadow-xl transition-all cursor-pointer border-2 border-transparent group-hover:border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Convert Physical Card</h3>
                  <ArrowRight className="text-green-600 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600">
                  Convert your existing physical vaccination card to digital certificate
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-brand-200">Vaccination Centres</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-brand-200">Vaccinations Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-brand-200">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-brand-200">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
