import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, FileText, Upload, X, CheckCircle, Info } from 'lucide-react';

const SubmitComplaintPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    complaintType: '',
    subject: '',
    bookingId: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    priority: 'medium'
  });
  const [attachments, setAttachments] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const complaintTypes = [
    { value: '', label: 'Select complaint type' },
    { value: 'booking', label: 'Booking Issue' },
    { value: 'payment', label: 'Payment Issue' },
    { value: 'centre', label: 'Centre Related' },
    { value: 'certificate', label: 'Certificate Issue' },
    { value: 'technical', label: 'Technical Problem' },
    { value: 'staff', label: 'Staff Behavior' },
    { value: 'facility', label: 'Facility & Infrastructure' },
    { value: 'other', label: 'Other' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', color: 'text-gray-600' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
    { value: 'high', label: 'High', color: 'text-orange-600' },
    { value: 'urgent', label: 'Urgent', color: 'text-red-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      const isValidType = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'].includes(file.type);
      return isValidSize && isValidType;
    });

    if (validFiles.length + attachments.length > 3) {
      alert('Maximum 3 files allowed');
      return;
    }

    setAttachments(prev => [...prev, ...validFiles]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.complaintType) {
      newErrors.complaintType = 'Please select a complaint type';
    }
    if (!formData.subject || formData.subject.trim().length < 10) {
      newErrors.subject = 'Subject must be at least 10 characters';
    }
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.description || formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const complaintId = 'CMP-' + Date.now().toString().slice(-6);
      setIsSubmitting(false);
      // Navigate to track complaint page with success message
      navigate('/help/track-complaint', { 
        state: { 
          complaintId, 
          success: true,
          message: 'Your complaint has been successfully submitted'
        } 
      });
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Submit Complaint - YFV Platform | Report Issues</title>
        <meta name="description" content="Submit your complaints and feedback about Yellow Fever Vaccination services. Get quick resolution to booking, payment, and service issues." />
        <meta name="keywords" content="submit complaint, report issue, YFV feedback, vaccination complaint, customer support" />
      </Helmet>

      <div className="page-container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="section-title">Submit Complaint</h1>
          <p className="text-gray-600 text-lg">
            We value your feedback. Please provide details about your issue and we'll resolve it promptly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Important Information Banner */}
          <div className="card bg-blue-50 border-l-4 border-blue-500 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Before submitting a complaint:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Check our <a href="/faq" className="underline hover:text-blue-600">FAQ section</a> for common solutions</li>
                  <li>Provide as much detail as possible for faster resolution</li>
                  <li>Include booking/certificate reference numbers if applicable</li>
                  <li>You will receive a complaint ID to track your issue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complaint Form */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                <FileText className="text-brand-700" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Complaint Details</h2>
                <p className="text-sm text-gray-600">All fields marked with * are mandatory</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Complaint Type and Priority */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complaint Type *
                  </label>
                  <select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleInputChange}
                    className={`input-field ${errors.complaintType ? 'border-red-500' : ''}`}
                  >
                    {complaintTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.complaintType && (
                    <p className="text-red-600 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.complaintType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level *
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    {priorityLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your issue"
                  maxLength={100}
                  className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                />
                <div className="flex justify-between mt-1">
                  {errors.subject ? (
                    <p className="text-red-600 text-xs flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.subject}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs">Minimum 10 characters</p>
                  )}
                  <p className="text-gray-500 text-xs">{formData.subject.length}/100</p>
                </div>
              </div>

              {/* Booking ID (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booking/Certificate ID (Optional)
                </label>
                <input
                  type="text"
                  name="bookingId"
                  value={formData.bookingId}
                  onChange={handleInputChange}
                  placeholder="e.g., YFV-2026-12345 or CVT-2026-001"
                  className="input-field"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Include your booking or certificate reference number if applicable
                </p>
              </div>

              {/* Personal Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        maxLength={10}
                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="6"
                  maxLength={1000}
                  placeholder="Please provide a detailed description of your issue including:&#10;- What happened?&#10;- When did it occur?&#10;- What was the expected outcome?&#10;- Any error messages received?"
                  className={`input-field ${errors.description ? 'border-red-500' : ''}`}
                ></textarea>
                <div className="flex justify-between mt-1">
                  {errors.description ? (
                    <p className="text-red-600 text-xs flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.description}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs">Minimum 20 characters</p>
                  )}
                  <p className="text-gray-500 text-xs">{formData.description.length}/1000</p>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-500 transition-colors">
                  <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600 mb-1">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    PNG, JPG, PDF (Max 5MB per file, 3 files maximum)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/jpg,application/pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="btn-outline cursor-pointer inline-block"
                  >
                    Choose Files
                  </label>
                </div>

                {/* Attachments List */}
                {attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="text-gray-500" size={20} />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I confirm that the information provided is accurate and I agree to the{' '}
                    <a href="/terms-conditions" className="text-brand-700 hover:underline">
                      Terms & Conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={20} />
                      <span>Submit Complaint</span>
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  You will receive a complaint ID via email and SMS
                </p>
              </div>
            </form>
          </div>

          {/* Additional Help */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card bg-brand-50 border-l-4 border-brand-500">
              <h3 className="font-semibold text-brand-900 mb-2">Need Immediate Help?</h3>
              <p className="text-sm text-brand-800 mb-3">
                Call our helpline for urgent issues
              </p>
              <p className="text-lg font-bold text-brand-700">1800-XXX-XXXX</p>
              <p className="text-xs text-brand-600 mt-1">Available 24/7</p>
            </div>

            <div className="card bg-green-50 border-l-4 border-green-500">
              <h3 className="font-semibold text-green-900 mb-2">Track Your Complaint</h3>
              <p className="text-sm text-green-800 mb-3">
                Already submitted a complaint?
              </p>
              <a
                href="/help/track-complaint"
                className="text-green-700 hover:text-green-800 font-semibold text-sm flex items-center"
              >
                Track Status →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitComplaintPage;