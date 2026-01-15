import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageCircle, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronRight,
  BookOpen,
  Video,
  Download,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'booking',
      title: 'Booking & Appointments',
      icon: BookOpen,
      color: 'blue',
      topics: [
        'How to book an appointment',
        'Rescheduling appointments',
        'Cancellation policy',
        'Payment issues'
      ]
    },
    {
      id: 'certificate',
      title: 'Certificates',
      icon: FileText,
      color: 'green',
      topics: [
        'Download digital certificate',
        'Certificate validation',
        'Physical card conversion',
        'Certificate not received'
      ]
    },
    {
      id: 'account',
      title: 'Account & Login',
      icon: Users,
      color: 'purple',
      topics: [
        'Registration process',
        'Password reset',
        'Update profile',
        'Aadhaar authentication'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: AlertCircle,
      color: 'orange',
      topics: [
        'Website issues',
        'Mobile app problems',
        'Payment gateway errors',
        'Browser compatibility'
      ]
    }
  ];

  const faqs = [
    {
      category: 'booking',
      question: 'How do I book a Yellow Fever vaccination appointment?',
      answer: 'To book an appointment: 1) Register/Login to your account, 2) Navigate to "Book Appointment", 3) Enter your details, 4) Select a vaccination centre, 5) Choose an available time slot, 6) Complete the payment process. You will receive a confirmation via SMS and email.'
    },
    {
      category: 'booking',
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time. Login to your account, go to "My Appointments", and click on "Reschedule" or "Cancel". Cancellations made 24+ hours before the appointment receive a full refund, 12-24 hours receive 50%, and less than 12 hours are non-refundable.'
    },
    {
      category: 'certificate',
      question: 'How do I download my vaccination certificate?',
      answer: 'After vaccination, your digital certificate will be available immediately. Login to your account, go to "My Certificates", and click "Download PDF". You can also access it via the email/SMS link sent to you. The certificate includes a QR code for verification.'
    },
    {
      category: 'certificate',
      question: 'Is the digital certificate valid for international travel?',
      answer: 'Yes, our digital certificates are IHR-2005 compliant and recognized by WHO member countries worldwide. The certificate becomes valid 10 days after vaccination and is valid for lifetime as per WHO guidelines.'
    },
    {
      category: 'certificate',
      question: 'How can I convert my physical vaccination card to digital?',
      answer: 'Go to "Convert Physical Card" in the menu, upload clear photos of both sides of your card, provide your identification details, and submit for verification. Processing takes 2-3 working days. You\'ll be notified via SMS/email once your digital certificate is ready.'
    },
    {
      category: 'account',
      question: 'What documents do I need for registration?',
      answer: 'You need a valid Passport (mandatory for international travel), Aadhaar Card or government-issued ID, active mobile number, and email address. During vaccination, bring your booking confirmation and the same identification documents.'
    },
    {
      category: 'booking',
      question: 'What is the cost of Yellow Fever vaccination?',
      answer: 'The vaccination cost varies by state and centre, typically ranging from ₹300-₹500. The exact price will be displayed during the booking process. Payment can be made via UPI, net banking, credit/debit cards, or digital wallets.'
    },
    {
      category: 'technical',
      question: 'I\'m having trouble making payment. What should I do?',
      answer: 'If payment fails: 1) Check your internet connection, 2) Ensure sufficient balance in your account, 3) Try a different payment method, 4) Clear browser cache and retry, 5) Try a different browser. If the issue persists, contact our support team at support@yfvplatform.gov.in or call our helpline.'
    }
  ];

  const quickLinks = [
    { title: 'Download Consent Form', icon: Download, link: '/download-forms' },
    { title: 'Centre Locator', icon: MapPin, link: '/centres' },
    { title: 'Vaccination Guidelines', icon: BookOpen, link: '/guidelines' },
    { title: 'Travel Requirements', icon: ExternalLink, link: '/travel-requirements' }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Helpline (Toll-Free)',
      detail: '1800-XXX-XXXX',
      available: 'Mon-Sat: 9 AM - 6 PM',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'support@yfvplatform.gov.in',
      available: 'Response within 24 hours',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      detail: 'Chat with support agent',
      available: '24/7 Available',
      color: 'purple',
      link: '/help/live-chat'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Help Center - YFV Platform | Support & Assistance</title>
        <meta name="description" content="Get help with Yellow Fever vaccination bookings, certificates, and technical support. FAQs, live chat, and contact information available." />
        <meta name="keywords" content="YFV help, vaccination support, booking help, certificate assistance" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-brand-100 max-w-2xl mx-auto">
              Find answers to your questions or get in touch with our support team
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search for help topics, FAQs, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:ring-4 focus:ring-accent-200 focus:outline-none shadow-xl"
              />
            </div>
            {searchQuery && (
              <div className="mt-4 text-sm text-brand-100">
                Found {searchedFaqs.length} result{searchedFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                green: 'bg-green-100 text-green-600 border-green-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200'
              };

              const content = (
                <div className="card hover:shadow-xl transition-all cursor-pointer border-2 hover:border-brand-500">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2 ${colorClasses[method.color]}`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{method.detail}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {method.available}
                  </p>
                </div>
              );

              return method.link ? (
                <Link key={index} to={method.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Support Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`card text-left transition-all ${
                    isSelected 
                      ? 'border-2 border-brand-600 shadow-lg' 
                      : 'hover:shadow-lg border-2 border-transparent'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    category.color === 'green' ? 'bg-green-100 text-green-600' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <ChevronRight size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  {category.topics.length > 3 && (
                    <p className="text-xs text-gray-500 mt-2">+{category.topics.length - 3} more topics</p>
                  )}
                </button>
              );
            })}
          </div>
          
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-brand-700 font-medium hover:text-brand-900 flex items-center"
            >
              ← View All Categories
            </button>
          )}
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <Link to="/faq" className="text-brand-700 font-medium hover:text-brand-900 flex items-center">
              View All FAQs <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          {searchedFaqs.length === 0 ? (
            <div className="card text-center py-12">
              <HelpCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or browse by category</p>
            </div>
          ) : (
            <div className="space-y-4">
              {searchedFaqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between text-left"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
                      {expandedFaq !== index && (
                        <p className="text-sm text-gray-500 line-clamp-1">{faq.answer}</p>
                      )}
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`flex-shrink-0 text-brand-700 transition-transform ${
                        expandedFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      <div className="mt-4 flex items-center space-x-4 text-sm">
                        <button className="flex items-center text-green-600 hover:text-green-700">
                          <CheckCircle size={16} className="mr-1" />
                          Helpful
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                          <MessageCircle size={16} className="mr-1" />
                          Contact Support
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={index}
                  to={link.link}
                  className="card hover:shadow-lg transition-all border-2 border-transparent hover:border-brand-500 flex items-center space-x-3"
                >
                  <div className="bg-brand-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={20} className="text-brand-700" />
                  </div>
                  <span className="font-medium">{link.title}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'How to Book an Appointment', duration: '2:30' },
              { title: 'Downloading Your Certificate', duration: '1:45' },
              { title: 'Converting Physical Card', duration: '3:15' }
            ].map((video, index) => (
              <div key={index} className="card group cursor-pointer hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg h-40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Video size={32} className="text-brand-700 ml-1" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{video.title}</h3>
                <p className="text-sm text-gray-500">Duration: {video.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-brand-100">
          <div className="text-center max-w-2xl mx-auto">
            <MessageCircle size={48} className="mx-auto text-brand-700 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help/live-chat" className="btn-primary">
                <MessageCircle size={20} className="inline mr-2" />
                Start Live Chat
              </Link>
              <Link to="/help/submit-complaint" className="btn-outline">
                <FileText size={20} className="inline mr-2" />
                Submit a Ticket
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HelpCenterPage;