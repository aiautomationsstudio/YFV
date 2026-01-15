import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Camera, CheckCircle, AlertCircle, Loader2, QrCode, FileText } from 'lucide-react';

const CertificateValidatorPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [certificateNumber, setCertificateNumber] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [validationMethod, setValidationMethod] = useState('manual'); // 'manual' or 'qr'
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleValidate = () => {
    setError('');

    // Validation
    if (!certificateNumber.trim() && !uploadedFile) {
      setError('Please enter a certificate number or upload a QR code');
      return;
    }

    if (certificateNumber.trim().length < 8) {
      setError('Certificate number must be at least 8 characters');
      return;
    }

    setIsValidating(true);

    // Simulate API call
    setTimeout(() => {
      setIsValidating(false);
      
      // Navigate to validation result page with certificate data
      navigate('/validate-certificate/result', {
        state: {
          certificateNumber: certificateNumber || 'YFV-2026-12345',
          validationMethod: validationMethod,
          timestamp: new Date().toISOString()
        }
      });
    }, 1500);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size must be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file (PNG, JPG, JPEG)');
        return;
      }

      setUploadedFile(file);
      setValidationMethod('qr');
      setError('');
      
      // Auto-extract certificate number from QR (simulated)
      setCertificateNumber('YFV-2026-' + Math.floor(Math.random() * 90000 + 10000));
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleCameraCapture = () => {
    // In a real app, this would open the device camera
    alert('Camera functionality will be available in the mobile app. For now, please upload an image of the QR code.');
    triggerFileUpload();
  };

  return (
    <>
      <Helmet>
        <title>Validate Certificate - YFV Platform | Verify Yellow Fever Vaccination Certificate</title>
        <meta name="description" content="Verify the authenticity of Yellow Fever vaccination certificates. Scan QR code or enter certificate number for instant validation. No login required." />
        <meta name="keywords" content="yellow fever certificate validation, verify vaccination certificate, QR code scanner, certificate authentication" />
        <link rel="canonical" href="https://yfvplatform.gov.in/validate-certificate" />
      </Helmet>

      <div className="page-container">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="section-title">Validate Certificate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verify the authenticity of Yellow Fever vaccination certificates instantly
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Main Validation Card */}
          <div className="card">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="text-brand-700" size={40} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Verify Vaccination Certificate</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Scan QR code or enter certificate number to verify authenticity
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r flex items-start space-x-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Manual Entry Section */}
              <div>
                <label htmlFor="certificateNumber" className="block text-sm font-medium mb-2 flex items-center">
                  <FileText size={18} className="mr-2 text-brand-700" />
                  Certificate Number
                </label>
                <input
                  type="text"
                  id="certificateNumber"
                  value={certificateNumber}
                  onChange={(e) => {
                    setCertificateNumber(e.target.value.toUpperCase());
                    setError('');
                    setValidationMethod('manual');
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleValidate();
                    }
                  }}
                  className="input-field"
                  placeholder="e.g., YFV-2026-12345"
                  disabled={isValidating}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter the certificate number found on your vaccination certificate
                </p>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
                </div>
              </div>

              {/* QR Code Upload Section */}
              <div>
                <label className="block text-sm font-medium mb-3 flex items-center">
                  <QrCode size={18} className="mr-2 text-brand-700" />
                  Scan QR Code
                </label>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isValidating}
                />

                {!uploadedFile ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Upload Button */}
                    <button
                      type="button"
                      onClick={triggerFileUpload}
                      disabled={isValidating}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-500 hover:bg-brand-50 transition-all text-center group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <QrCode className="w-12 h-12 mx-auto text-gray-400 group-hover:text-brand-600 mb-2 transition-colors" />
                      <p className="text-gray-600 font-medium group-hover:text-brand-700">Upload QR Image</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG (Max 5MB)</p>
                    </button>

                    {/* Camera Button */}
                    <button
                      type="button"
                      onClick={handleCameraCapture}
                      disabled={isValidating}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-accent-500 hover:bg-accent-50 transition-all text-center group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Camera className="w-12 h-12 mx-auto text-gray-400 group-hover:text-accent-600 mb-2 transition-colors" />
                      <p className="text-gray-600 font-medium group-hover:text-accent-700">Capture with Camera</p>
                      <p className="text-xs text-gray-500 mt-1">Use device camera</p>
                    </button>
                  </div>
                ) : (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={24} />
                        <div>
                          <p className="font-medium text-green-900">{uploadedFile.name}</p>
                          <p className="text-sm text-green-700">QR code uploaded successfully</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedFile(null);
                          setCertificateNumber('');
                          setValidationMethod('manual');
                        }}
                        className="text-sm text-green-700 hover:text-green-900 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleValidate}
                disabled={isValidating || (!certificateNumber.trim() && !uploadedFile)}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Validating Certificate...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    <span>Verify Certificate</span>
                  </>
                )}
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                🔒 All validations are secure and logged for audit purposes
              </p>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* How it Works */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-semibold mb-3 text-blue-900 flex items-center">
                <CheckCircle size={20} className="mr-2" />
                How to Validate?
              </h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Scan the QR code on the certificate using your device camera</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Or manually enter the certificate number</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System will instantly verify authenticity and validity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No login required for validation</span>
                </li>
              </ul>
            </div>

            {/* Security Info */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold mb-3 text-green-900 flex items-center">
                <CheckCircle size={20} className="mr-2" />
                Security & Privacy
              </h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IHR-2005 compliant certificate validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Blockchain-based verification system</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time database cross-check</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forgery detection algorithms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 card bg-gray-50">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you're having trouble validating a certificate or need assistance:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/help" className="btn-outline text-center flex-1">
                Visit Help Center
              </a>
              <a href="/contact" className="btn-outline text-center flex-1">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateValidatorPage;