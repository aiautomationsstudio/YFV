import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Shield, 
  Award, 
  ArrowRight, 
  Users, 
  Building2, 
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  Globe,
  Phone,
  Mail,
  FileText,
  Search,
  QrCode,
  AlertCircle,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Yellow Fever Vaccination Platform - Official Government Portal | Book YFV Online</title>
        <meta name="description" content="Official Yellow Fever Vaccination platform by Ministry of Health & Family Welfare, Govt of India. Book appointments, validate certificates, find centres. IHR-2005 compliant digital certificates." />
        <meta name="keywords" content="yellow fever vaccination, YFV certificate, vaccination centres India, IHR-2005, travel vaccination, MoHFW, government vaccination portal" />
        <meta property="og:title" content="Yellow Fever Vaccination Platform - Official Government Portal" />
        <meta property="og:description" content="Book Yellow Fever vaccination appointments online. Find centres, validate certificates, and get IHR-2005 compliant digital certificates." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yfvplatform.gov.in" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 size={16} className="text-accent-400" />
                <span className="text-sm font-medium text-brand-100">Ministry of Health & Family Welfare</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Yellow Fever
                <span className="block text-accent-400">Vaccination Platform</span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 text-brand-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                India's first comprehensive digital solution for Yellow Fever vaccination management. 
                Book appointments, validate certificates, and access authorized centres nationwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  to="/book-appointment" 
                  className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Appointment Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link 
                  to="/centres" 
                  className="inline-flex items-center justify-center bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl border-2 border-white"
                >
                  <MapPin className="mr-2" size={20} />
                  Find Centres
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>150+ Centres</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>IHR-2005 Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>50K+ Vaccinations</span>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Platform Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-accent-500 p-2 rounded-lg flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">IHR-2005 Compliant</h4>
                      <p className="text-sm text-brand-100">Internationally recognized digital certificates</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real-time Booking</h4>
                      <p className="text-sm text-brand-100">Instant slot confirmation and updates</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-purple-500 p-2 rounded-lg flex-shrink-0">
                      <QrCode size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">QR Certificate</h4>
                      <p className="text-sm text-brand-100">Secure digital verification system</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Multi-lingual Support</h4>
                      <p className="text-sm text-brand-100">Available in 10+ Indian languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for Yellow Fever vaccination in one place
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Book Appointment Card */}
            <Link to="/book-appointment" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-brand-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brand-100 p-3 rounded-lg group-hover:bg-brand-200 transition-colors">
                    <Calendar className="text-brand-700" size={28} />
                  </div>
                  <ArrowRight className="text-brand-700 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-700">Book Appointment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Schedule your vaccination at the nearest authorized centre with real-time slot availability
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-brand-700 font-medium">Get started →</span>
                </div>
              </div>
            </Link>

            {/* Validate Certificate Card */}
            <Link to="/validate-certificate" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-accent-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-100 p-3 rounded-lg group-hover:bg-accent-200 transition-colors">
                    <Shield className="text-accent-600" size={28} />
                  </div>
                  <ArrowRight className="text-accent-600 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-700">Validate Certificate</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Verify authenticity of vaccination certificates using QR code or certificate number
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-accent-600 font-medium">Verify now →</span>
                </div>
              </div>
            </Link>

            {/* Convert Physical Card */}
            <Link to="/convert-card" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-green-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Download className="text-green-600" size={28} />
                  </div>
                  <ArrowRight className="text-green-600 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-700">Convert Physical Card</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Convert your existing physical vaccination card to a secure digital certificate
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-green-600 font-medium">Convert now →</span>
                </div>
              </div>
            </Link>

            {/* Find Centres */}
            <Link to="/centres" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-purple-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <MapPin className="text-purple-600" size={28} />
                  </div>
                  <ArrowRight className="text-purple-600 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700">Find Centres</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Locate authorized vaccination centres near you with real-time status updates
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-purple-600 font-medium">Search centres →</span>
                </div>
              </div>
            </Link>

            {/* Help & Support */}
            <Link to="/help" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-blue-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Phone className="text-blue-600" size={28} />
                  </div>
                  <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700">Help & Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get assistance through FAQs, live chat, or submit complaints for quick resolution
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-blue-600 font-medium">Get help →</span>
                </div>
              </div>
            </Link>

            {/* Yellow Fever Info */}
            <Link to="/yellow-fever-info" className="group">
              <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-orange-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <FileText className="text-orange-600" size={28} />
                  </div>
                  <ArrowRight className="text-orange-600 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-700">About Yellow Fever</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn about the disease, symptoms, prevention, and vaccination requirements
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-orange-600 font-medium">Learn more →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 mb-4">
              <Award size={16} />
              <span className="text-sm font-semibold">Trusted by Thousands</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose YFV Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's first comprehensive digital solution for Yellow Fever Vaccination management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-time slot availability and instant confirmation for hassle-free appointments
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-400 to-accent-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Verified</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Blockchain-secured digital certificates with QR code verification system
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Access</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                150+ authorized centres across 25+ states with consistent service quality
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform shadow-lg">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">IHR Compliant</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Internationally recognized certificates following IHR-2005 standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 5-step process to get your Yellow Fever vaccination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-300 via-accent-300 to-green-300" style={{ width: '80%', left: '10%' }}></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-brand-200 h-full">
                <div className="bg-brand-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg">
                  1
                </div>
                <h3 className="font-semibold text-center mb-2">Register</h3>
                <p className="text-gray-600 text-sm text-center">
                  Create account with Aadhaar or Passport
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-accent-200 h-full">
                <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg">
                  2
                </div>
                <h3 className="font-semibold text-center mb-2">Find Centre</h3>
                <p className="text-gray-600 text-sm text-center">
                  Choose from 150+ authorized centres
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200 h-full">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg">
                  3
                </div>
                <h3 className="font-semibold text-center mb-2">Book Slot</h3>
                <p className="text-gray-600 text-sm text-center">
                  Select date and time that suits you
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-200 h-full">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg">
                  4
                </div>
                <h3 className="font-semibold text-center mb-2">Get Vaccinated</h3>
                <p className="text-gray-600 text-sm text-center">
                  Visit centre on scheduled date
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200 h-full">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg">
                  5
                </div>
                <h3 className="font-semibold text-center mb-2">Get Certificate</h3>
                <p className="text-gray-600 text-sm text-center">
                  Receive digital certificate instantly
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-800">
              Learn more about the process
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-700 to-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Platform Impact
            </h2>
            <p className="text-brand-100 text-lg">
              Real-time statistics showing our commitment to public health
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-3">
                <Building2 className="text-accent-400" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">150+</div>
              <div className="text-brand-200 text-sm sm:text-base">Vaccination Centres</div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-3">
                <Users className="text-green-400" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50K+</div>
              <div className="text-brand-200 text-sm sm:text-base">Vaccinations Done</div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-purple-400" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">25+</div>
              <div className="text-brand-200 text-sm sm:text-base">States Covered</div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="text-blue-400" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.5%</div>
              <div className="text-brand-200 text-sm sm:text-base">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Banner */}
      <section className="py-8 bg-yellow-50 border-y-2 border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <AlertCircle className="text-white" size={28} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Important Travel Information</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Yellow Fever vaccination is mandatory for travelers to certain countries. 
                The certificate becomes valid 10 days after vaccination and is valid for lifetime (as per WHO guidelines).
              </p>
            </div>
            <Link 
              to="/travel-requirements" 
              className="flex-shrink-0 btn-primary text-sm whitespace-nowrap"
            >
              Check Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from travelers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-gradient-to-br from-brand-50 to-blue-50 border-2 border-brand-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Extremely convenient platform! Booked my appointment in minutes and got the digital certificate immediately after vaccination. Perfect for my Africa trip planning."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Priya Desai</h4>
                  <p className="text-sm text-gray-600">Bangalore, Karnataka</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "The QR certificate verification is brilliant! Airport officials verified my certificate in seconds. The whole process was smooth and professional."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Amit Kumar</h4>
                  <p className="text-sm text-gray-600">Delhi NCR</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Finally, a government platform that actually works! No long queues, easy online payment, and instant digital certificate. Highly recommended for all travelers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-accent-500 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Vaccinated?
          </h2>
          <p className="text-xl mb-8 text-accent-100 max-w-2xl mx-auto">
            Join thousands of travelers who have trusted YFV Platform for their Yellow Fever vaccination needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-appointment" 
              className="inline-flex items-center justify-center bg-white text-accent-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <Calendar className="mr-2" size={20} />
              Book Your Appointment
            </Link>
            <Link 
              to="/centres" 
              className="inline-flex items-center justify-center bg-accent-700 hover:bg-accent-800 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg border-2 border-white/20 text-lg"
            >
              <Search className="mr-2" size={20} />
              Find Centres Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Helpline */}
            <div className="card text-center bg-white hover:shadow-xl transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-brand-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Helpline</h3>
              <p className="text-2xl font-bold text-brand-700 mb-2">1800-XXX-XXXX</p>
              <p className="text-gray-600 text-sm">Toll-free support available anytime</p>
            </div>

            {/* Email Support */}
            <div className="card text-center bg-white hover:shadow-xl transition-shadow">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-lg font-semibold text-accent-600 mb-2">support@yfvplatform.gov.in</p>
              <p className="text-gray-600 text-sm">Response within 24 hours</p>
            </div>

            {/* FAQs */}
            <div className="card text-center bg-white hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <Link to="/faq" className="text-lg font-semibold text-green-600 hover:text-green-700 mb-2 block">
                Browse FAQs →
              </Link>
              <p className="text-gray-600 text-sm">Find instant answers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;