import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle, Download, Share2, Printer, ArrowLeft, Calendar, MapPin, FileText, Shield, User } from 'lucide-react';

const ValidationResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Get data from navigation state
  const validationData = location.state || {};
  const { certificateNumber, validationMethod, timestamp } = validationData;

  // Simulated certificate data (in real app, this would come from API)
  const [certificateData, setCertificateData] = useState(null);
  const [validationStatus, setValidationStatus] = useState('valid'); // 'valid', 'invalid', 'expired'

  useEffect(() => {
    // If no data passed, redirect back to validator
    if (!certificateNumber) {
      navigate('/validate-certificate');
      return;
    }

    // Simulate API call to fetch certificate details
    setTimeout(() => {
      // Mock certificate data
      setCertificateData({
        certificateNo: certificateNumber,
        status: 'Active',
        name: 'Rahul Sharma',
        passportNo: 'Z1234567',
        dateOfBirth: '15 Jan 1990',
        nationality: 'Indian',
        vaccinationDate: '05 Jan 2026',
        validFrom: '15 Jan 2026',
        validUntil: 'Lifetime',
        centre: 'AIIMS Delhi, New Delhi',
        centreAddress: 'Ansari Nagar, New Delhi - 110029',
        batchNumber: 'YFV-BATCH-2026-001',
        vaccineType: 'Yellow Fever Vaccine (Live Attenuated)',
        manufacturer: 'Sanofi Pasteur',
        administratorName: 'Dr. Anjali Verma',
        issueDate: '05 Jan 2026',
        validationMethod: validationMethod,
        verifiedAt: new Date().toLocaleString(),
        qrCode: true,
        digitalSignature: true,
        blockchainVerified: true
      });
      setValidationStatus('valid');
      setIsLoading(false);
    }, 800);
  }, [certificateNumber, navigate, validationMethod]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In real app, this would generate and download PDF
    alert('Validation report will be downloaded as PDF');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Certificate Validation Result',
        text: `Yellow Fever Certificate ${certificateNumber} is valid`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      alert('Share functionality not supported on this browser');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-brand-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-gray-700">Verifying Certificate...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Validation Result - {certificateNumber} | YFV Platform</title>
        <meta name="description" content={`Yellow Fever Certificate ${certificateNumber} validation result - ${validationStatus}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="page-container">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/validate-certificate" 
            className="inline-flex items-center text-brand-700 hover:text-brand-800 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Validate Another Certificate
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Validation Status Card */}
          {validationStatus === 'valid' ? (
            <div className="card border-2 border-green-500 mb-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  Certificate is Valid
                </h1>
                <p className="text-gray-600 text-lg">
                  This is an authentic Yellow Fever vaccination certificate
                </p>
                <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
                  <Shield size={16} />
                  <span>Verified on {certificateData?.verifiedAt}</span>
                </div>
              </div>

              {/* Verification Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-6 pb-6 border-b border-green-200">
                <span className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>QR Code Verified</span>
                </span>
                <span className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>Digital Signature Valid</span>
                </span>
                <span className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>Blockchain Verified</span>
                </span>
              </div>

              {/* Certificate Details */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                {/* Certificate Number */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Certificate Number</p>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">{certificateData?.certificateNo}</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                      {certificateData?.status}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center text-brand-700">
                    <User size={20} className="mr-2" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-semibold text-gray-900">{certificateData?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Passport Number</p>
                      <p className="font-semibold text-gray-900">{certificateData?.passportNo}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-semibold text-gray-900">{certificateData?.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nationality</p>
                      <p className="font-semibold text-gray-900">{certificateData?.nationality}</p>
                    </div>
                  </div>
                </div>

                {/* Vaccination Details */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center text-brand-700">
                    <Calendar size={20} className="mr-2" />
                    Vaccination Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Vaccination Date</p>
                      <p className="font-semibold text-gray-900">{certificateData?.vaccinationDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valid From</p>
                      <p className="font-semibold text-gray-900">{certificateData?.validFrom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valid Until</p>
                      <p className="font-semibold text-green-700">{certificateData?.validUntil}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Vaccine Type</p>
                      <p className="font-semibold text-gray-900">{certificateData?.vaccineType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Batch Number</p>
                      <p className="font-semibold text-gray-900">{certificateData?.batchNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Manufacturer</p>
                      <p className="font-semibold text-gray-900">{certificateData?.manufacturer}</p>
                    </div>
                  </div>
                </div>

                {/* Vaccination Centre */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center text-brand-700">
                    <MapPin size={20} className="mr-2" />
                    Vaccination Centre
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Centre Name</p>
                      <p className="font-semibold text-gray-900">{certificateData?.centre}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-900">{certificateData?.centreAddress}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Administered By</p>
                      <p className="font-semibold text-gray-900">{certificateData?.administratorName}</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Metadata */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center text-brand-700">
                    <FileText size={20} className="mr-2" />
                    Certificate Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Issue Date</p>
                      <p className="font-semibold text-gray-900">{certificateData?.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Validation Method</p>
                      <p className="font-semibold text-gray-900 capitalize">{certificateData?.validationMethod}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button 
                  onClick={handlePrint}
                  className="btn-outline flex items-center justify-center space-x-2"
                >
                  <Printer size={20} />
                  <span>Print Report</span>
                </button>
                <button 
                  onClick={handleDownload}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download PDF</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="btn-outline flex items-center justify-center space-x-2"
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ) : validationStatus === 'invalid' ? (
            <div className="card border-2 border-red-500 mb-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <XCircle className="text-red-600" size={48} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                  Certificate is Invalid
                </h1>
                <p className="text-gray-600 text-lg">
                  This certificate could not be verified in our system
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-red-900">Possible Reasons:</h3>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• Certificate number does not exist in our database</li>
                  <li>• Certificate has been revoked or cancelled</li>
                  <li>• Invalid or tampered QR code</li>
                  <li>• Certificate issued by unauthorized centre</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="card border-2 border-yellow-500 mb-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="text-yellow-600" size={48} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-2">
                  Certificate Expired
                </h1>
                <p className="text-gray-600 text-lg">
                  This certificate is no longer valid
                </p>
              </div>
            </div>
          )}

          {/* Important Notice */}
          <div className="card bg-blue-50 border-l-4 border-blue-500">
            <h3 className="font-semibold mb-2 text-blue-900">Important Notice</h3>
            <p className="text-sm text-blue-800 mb-3">
              This validation result is for informational purposes only. Always verify with immigration authorities at your destination country.
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Validation results are recorded for audit purposes</li>
              <li>• This is not a replacement for the original certificate</li>
              <li>• Different countries may have different requirements</li>
              <li>• Contact your embassy for specific travel requirements</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mt-6 card bg-gray-50">
            <h3 className="font-semibold mb-3">Need Additional Information?</h3>
            <p className="text-sm text-gray-600 mb-4">
              For queries about this certificate or validation process:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/help" className="btn-outline text-center flex-1">
                Visit Help Center
              </Link>
              <Link to="/contact" className="btn-outline text-center flex-1">
                Contact Support
              </Link>
              <Link to="/centres" className="btn-outline text-center flex-1">
                Find Centres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidationResultPage;