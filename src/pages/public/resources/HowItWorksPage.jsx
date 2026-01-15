import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Calendar, 
  CreditCard, 
  Syringe, 
  Download, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  FileText,
  MapPin,
  Bell,
  Smartphone
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description: 'Register on the platform with your basic details including name, mobile number, email, and identification documents.',
      icon: UserPlus,
      color: 'bg-blue-100 text-blue-700',
      details: [
        'Provide personal information',
        'Upload passport or Aadhaar',
        'Verify mobile with OTP',
        'Set up secure password'
      ],
      duration: '2-3 minutes',
      link: '/register'
    },
    {
      number: 2,
      title: 'Find & Select Centre',
      description: 'Browse vaccination centres near you using our interactive map or list view. Check real-time availability and centre details.',
      icon: MapPin,
      color: 'bg-green-100 text-green-700',
      details: [
        'Search by location',
        'View centre details',
        'Check availability status',
        'Compare multiple centres'
      ],
      duration: '3-5 minutes',
      link: '/centres'
    },
    {
      number: 3,
      title: 'Book Your Slot',
      description: 'Choose your preferred date and time from available slots. You can book for yourself or multiple family members.',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-700',
      details: [
        'Select convenient date',
        'Choose time slot',
        'Book for family members',
        'Add to calendar'
      ],
      duration: '2 minutes',
      link: '/book-appointment'
    },
    {
      number: 4,
      title: 'Make Secure Payment',
      description: 'Complete payment using any of our secure payment options including UPI, cards, net banking, or digital wallets.',
      icon: CreditCard,
      color: 'bg-amber-100 text-amber-700',
      details: [
        'Multiple payment options',
        'Secure gateway',
        'Instant confirmation',
        'GST invoice provided'
      ],
      duration: '1-2 minutes',
      link: null
    },
    {
      number: 5,
      title: 'Get Vaccinated',
      description: 'Visit the centre on your scheduled date with required documents. Medical screening will be done before vaccination.',
      icon: Syringe,
      color: 'bg-red-100 text-red-700',
      details: [
        'Arrive 15 mins early',
        'Medical screening',
        'Receive vaccination',
        '30-min observation period'
      ],
      duration: '45-60 minutes',
      link: null
    },
    {
      number: 6,
      title: 'Download Certificate',
      description: 'Receive your IHR-2005 compliant digital certificate instantly with QR code. Valid for lifetime as per WHO guidelines.',
      icon: Download,
      color: 'bg-green-100 text-green-700',
      details: [
        'Digital certificate with QR',
        'Download PDF',
        'Add to digital wallet',
        'Valid from day 10'
      ],
      duration: 'Instant',
      link: null
    }
  ];

  const additionalFeatures = [
    {
      icon: Bell,
      title: 'Automated Reminders',
      description: 'Get SMS and email reminders 24 hours and 2 hours before your appointment'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Access',
      description: 'Access all features on-the-go with our mobile application for Android and iOS'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'All your data is encrypted and stored securely following government standards'
    },
    {
      icon: FileText,
      title: 'Digital Records',
      description: 'Access your vaccination history and certificates anytime, anywhere'
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - Yellow Fever Vaccination Platform | Step-by-Step Guide</title>
        <meta name="description" content="Complete step-by-step guide to book Yellow Fever vaccination appointment, get vaccinated, and download your digital certificate. Easy process from registration to certification." />
        <meta name="keywords" content="yellow fever vaccination process, how to book appointment, vaccination steps, digital certificate, IHR-2005 certificate" />
      </Helmet>

      <div className="page-container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your Yellow Fever vaccination certificate is simple and straightforward. 
            Follow these 6 easy steps to complete your vaccination journey.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="bg-brand-50 rounded-lg p-4 text-center border border-brand-100">
            <div className="text-3xl font-bold text-brand-700 mb-1">6</div>
            <div className="text-sm text-gray-600">Simple Steps</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center border border-green-100">
            <div className="text-3xl font-bold text-green-700 mb-1">~60</div>
            <div className="text-sm text-gray-600">Minutes Total</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-100">
            <div className="text-3xl font-bold text-purple-700 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Online Access</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-100">
            <div className="text-3xl font-bold text-amber-700 mb-1">100%</div>
            <div className="text-sm text-gray-600">Digital Process</div>
          </div>
        </div>

        {/* Main Steps Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-brand-300 to-brand-100"></div>
                  )}

                  <div className="card hover:shadow-xl transition-all group">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                            {step.number}
                          </div>
                          <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${step.color} rounded-full flex items-center justify-center shadow-md`}>
                            <Icon size={20} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 md:ml-4">
                            <Clock size={16} />
                            <span className="whitespace-nowrap">{step.duration}</span>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        {step.link && (
                          <Link 
                            to={step.link}
                            className="inline-flex items-center space-x-2 text-brand-700 hover:text-brand-800 font-semibold transition-colors group"
                          >
                            <span>Start This Step</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Features */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Additional Features
            </h2>
            <p className="text-gray-600">
              Making your vaccination experience seamless and convenient
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-brand-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Notes */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-lg text-yellow-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Your certificate becomes valid 10 days after vaccination date</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Certificate is valid for lifetime as per WHO guidelines (IHR-2005)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Bring valid passport or Aadhaar card on vaccination day</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Arrive 15 minutes before your scheduled appointment time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Inform about any allergies or medical conditions during screening</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-brand-50 rounded-xl p-8 border border-brand-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Have Questions?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Find answers to common questions or get in touch with our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/faq" className="btn-primary text-center">
                View FAQs
              </Link>
              <Link to="/help" className="btn-outline text-center">
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
              Book your Yellow Fever vaccination appointment now and get your digital certificate in just a few simple steps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment" className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all inline-flex items-center justify-center space-x-2">
                <Calendar size={20} />
                <span>Book Appointment Now</span>
              </Link>
              <Link to="/centres" className="bg-white text-brand-700 hover:bg-brand-50 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all inline-flex items-center justify-center space-x-2">
                <MapPin size={20} />
                <span>Find Centres</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksPage;