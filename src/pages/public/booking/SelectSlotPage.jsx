import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, Mail, CreditCard, Shield, ChevronRight, Info } from 'lucide-react';

const BookAppointmentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    passportNumber: '',
    nationality: 'Indian',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    medicalConditions: '',
    allergies: '',
    previousVaccinations: ''
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
      if (age < 9) {
        newErrors.dateOfBirth = 'Must be at least 9 months old for vaccination';
      }
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.passportNumber.trim()) {
      newErrors.passportNumber = 'Passport number is required';
    } else if (!/^[A-Z][0-9]{7}$/.test(formData.passportNumber)) {
      newErrors.passportNumber = 'Invalid passport format (e.g., Z1234567)';
    }

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9][0-9]{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[1-9][0-9]{5}$/.test(formData.pincode)) {
      newErrors.pincode = 'Invalid pincode';
    }

    return newErrors;
  };

  const handleNextStep = () => {
    let validationErrors = {};
    
    if (currentStep === 1) {
      validationErrors = validateStep1();
    } else if (currentStep === 2) {
      validationErrors = validateStep2();
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateStep2();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store booking data in sessionStorage
    sessionStorage.setItem('bookingData', JSON.stringify(formData));
    
    // Navigate to centre selection
    navigate('/book-appointment/select-centre');
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Puducherry', 'Jammu and Kashmir', 'Ladakh'
  ];

  return (
    <>
      <Helmet>
        <title>Book Yellow Fever Vaccination Appointment - YFV Platform</title>
        <meta name="description" content="Book your Yellow Fever vaccination appointment online. Fill personal details, select centre and time slot for vaccination." />
        <meta name="keywords" content="yellow fever vaccination, book appointment, vaccination centre, India" />
        <link rel="canonical" href="https://yfvplatform.gov.in/book-appointment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Steps */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-brand-700 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
              
              {[
                { num: 1, label: 'Personal Info' },
                { num: 2, label: 'Contact Details' },
                { num: 3, label: 'Medical History' }
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                      currentStep >= step.num 
                        ? 'bg-brand-700 text-white shadow-lg scale-110' 
                        : 'bg-white text-gray-400 border-2 border-gray-300'
                    }`}
                  >
                    {step.num}
                  </div>
                  <span className={`mt-2 text-xs sm:text-sm font-medium hidden sm:block ${
                    currentStep >= step.num ? 'text-brand-700' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Form Card */}
          <div className="card">
            <div className="border-b border-gray-200 pb-6 mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {currentStep === 1 && 'Personal Information'}
                {currentStep === 2 && 'Contact & Address Details'}
                {currentStep === 3 && 'Medical Information'}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {currentStep === 1 && 'Please provide your personal details as per your travel documents'}
                {currentStep === 2 && 'Enter your contact information and residential address'}
                {currentStep === 3 && 'Share your medical history for safe vaccination'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User size={16} className="mr-2 text-brand-700" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="As per Passport"
                        className={`input-field ${errors.fullName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <Info size={14} className="mr-1" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Calendar size={16} className="mr-2 text-brand-700" />
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        max={new Date().toISOString().split('T')[0]}
                        className={`input-field ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                      />
                      {errors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={`input-field ${errors.gender ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && (
                        <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <CreditCard size={16} className="mr-2 text-brand-700" />
                        Passport Number *
                      </label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        placeholder="Z1234567"
                        className={`input-field uppercase ${errors.passportNumber ? 'border-red-500' : ''}`}
                        maxLength={8}
                      />
                      {errors.passportNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.passportNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nationality *
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="input-field"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-brand-700 p-4 rounded">
                    <div className="flex">
                      <Info className="text-brand-700 flex-shrink-0 mt-0.5" size={20} />
                      <div className="ml-3">
                        <h3 className="text-sm font-semibold text-brand-900">Important Information</h3>
                        <p className="text-sm text-brand-800 mt-1">
                          Please ensure all details match your passport exactly. Any mismatch may cause issues during international travel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Address */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Phone size={16} className="mr-2 text-brand-700" />
                        Mobile Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          maxLength={10}
                          className={`input-field rounded-l-none ${errors.mobile ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail size={16} className="mr-2 text-brand-700" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Residential Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House No, Street, Landmark"
                        rows={3}
                        className={`input-field resize-none ${errors.address ? 'border-red-500' : ''}`}
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter City"
                        className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`input-field ${errors.state ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select State</option>
                        {indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="110001"
                        maxLength={6}
                        className={`input-field ${errors.pincode ? 'border-red-500' : ''}`}
                      />
                      {errors.pincode && (
                        <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Medical Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <div className="flex">
                      <Shield className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                      <div className="ml-3">
                        <h3 className="text-sm font-semibold text-yellow-900">Medical Screening</h3>
                        <p className="text-sm text-yellow-800 mt-1">
                          This information is crucial for your safety. Please provide accurate medical history.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have any chronic medical conditions?
                      </label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        placeholder="E.g., Diabetes, Hypertension, Heart Disease (Leave blank if none)"
                        rows={3}
                        className="input-field resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Any known allergies?
                      </label>
                      <textarea
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        placeholder="E.g., Egg allergy, Drug allergies (Leave blank if none)"
                        rows={3}
                        className="input-field resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous vaccinations in last 30 days?
                      </label>
                      <textarea
                        name="previousVaccinations"
                        value={formData.previousVaccinations}
                        onChange={handleInputChange}
                        placeholder="List any vaccines received in the last month (Leave blank if none)"
                        rows={3}
                        className="input-field resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3">Vaccination Eligibility Criteria:</h4>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Age: 9 months and above</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Not pregnant or planning pregnancy within 4 weeks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>No severe immunodeficiency disorders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>No history of severe allergic reactions to vaccines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="btn-outline w-full sm:w-auto order-2 sm:order-1"
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-primary w-full sm:flex-1 flex items-center justify-center order-1 sm:order-2"
                  >
                    Continue to Next Step
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary w-full sm:flex-1 flex items-center justify-center order-1 sm:order-2"
                  >
                    Proceed to Select Centre
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help? Call our helpline: 
              <a href="tel:1800XXXXXXX" className="text-brand-700 font-semibold ml-2 hover:underline">
                1800-XXX-XXXX
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentPage;