import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LanguageSelector from './components/common/LanguageSelector';

// Public Home & Information Pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import YellowFeverInfoPage from './pages/public/YellowFeverInfoPage';
import FAQPage from './pages/public/FAQPage';
import GuidelinesPage from './pages/public/GuidelinesPage';
import ContactPage from './pages/public/ContactPage';

// Vaccination Centre Pages
import CentreLocatorPage from './pages/public/centres/CentreLocatorPage';
import CentreListPage from './pages/public/centres/CentreListPage';
import CentreDetailsPage from './pages/public/centres/CentreDetailsPage';

// Appointment Booking
import BookAppointmentPage from './pages/public/booking/BookAppointmentPage';
import SelectCentrePage from './pages/public/booking/SelectCentrePage';
import SelectSlotPage from './pages/public/booking/SelectSlotPage';
import AppointmentConfirmationPage from './pages/public/booking/AppointmentConfirmationPage';

// Certificate Validation
import CertificateValidatorPage from './pages/public/validation/CertificateValidatorPage';
import ValidationResultPage from './pages/public/validation/ValidationResultPage';

// Digital Card Conversion
import CardConversionPage from './pages/public/conversion/CardConversionPage';
import ConversionStatusPage from './pages/public/conversion/ConversionStatusPage';

// Authentication
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import VerifyOTPPage from './pages/auth/VerifyOTPPage';
import AadhaarAuthPage from './pages/auth/AadhaarAuthPage';

// Resources
import HowItWorksPage from './pages/public/resources/HowItWorksPage';
import VaccinationProcessPage from './pages/public/resources/VaccinationProcessPage';
import TravelRequirementsPage from './pages/public/resources/TravelRequirementsPage';
import DocumentChecklistPage from './pages/public/resources/DocumentChecklistPage';
import DownloadFormsPage from './pages/public/resources/DownloadFormsPage';

// Support
import HelpCenterPage from './pages/public/support/HelpCenterPage';
import LiveChatPage from './pages/public/support/LiveChatPage';
import SubmitComplaintPage from './pages/public/support/SubmitComplaintPage';
import TrackComplaintPage from './pages/public/support/TrackComplaintPage';

// Legal
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsConditionsPage from './pages/legal/TermsConditionsPage';
import RefundPolicyPage from './pages/legal/RefundPolicyPage';
import DisclaimerPage from './pages/legal/DisclaimerPage';
import AccessibilityPage from './pages/legal/AccessibilityPage';

// Emergency & Campaigns
import EmergencyVaccinationPage from './pages/public/emergency/EmergencyVaccinationPage';
import CampaignsPage from './pages/public/campaigns/CampaignsPage';

// News
import NewsPage from './pages/public/news/NewsPage';
import AnnouncementsPage from './pages/public/news/AnnouncementsPage';
import PressReleasesPage from './pages/public/news/PressReleasesPage';

// Error Pages
import NotFoundPage from './pages/errors/NotFoundPage';
import MaintenancePage from './pages/errors/MaintenancePage';
import UnauthorizedPage from './pages/errors/UnauthorizedPage';

// Loading Component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-lg font-medium text-gray-700">Loading Yellow Fever Platform...</p>
      <p className="text-sm text-gray-500 mt-2">Please wait</p>
    </div>
  </div>
);

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            
            <main className="flex-grow">
              <Routes>
                {/* Home & Information */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/yellow-fever-info" element={<YellowFeverInfoPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/guidelines" element={<GuidelinesPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Centres */}
                <Route path="/centres" element={<CentreLocatorPage />} />
                <Route path="/centres/list" element={<CentreListPage />} />
                <Route path="/centres/:centreId" element={<CentreDetailsPage />} />

                {/* Appointment Booking */}
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
                <Route path="/book-appointment/select-centre" element={<SelectCentrePage />} />
                <Route path="/book-appointment/select-slot/:centreId" element={<SelectSlotPage />} />
                <Route path="/book-appointment/confirmation/:bookingId" element={<AppointmentConfirmationPage />} />

                {/* Certificate Validation */}
                <Route path="/validate-certificate" element={<CertificateValidatorPage />} />
                <Route path="/validate-certificate/result" element={<ValidationResultPage />} />

                {/* Card Conversion */}
                <Route path="/convert-card" element={<CardConversionPage />} />
                <Route path="/convert-card/status/:requestId" element={<ConversionStatusPage />} />

                {/* Authentication */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                <Route path="/verify-otp" element={<VerifyOTPPage />} />
                <Route path="/aadhaar-auth" element={<AadhaarAuthPage />} />

                {/* Resources */}
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/vaccination-process" element={<VaccinationProcessPage />} />
                <Route path="/travel-requirements" element={<TravelRequirementsPage />} />
                <Route path="/document-checklist" element={<DocumentChecklistPage />} />
                <Route path="/download-forms" element={<DownloadFormsPage />} />

                {/* Support */}
                <Route path="/help" element={<HelpCenterPage />} />
                <Route path="/help/live-chat" element={<LiveChatPage />} />
                <Route path="/help/submit-complaint" element={<SubmitComplaintPage />} />
                <Route path="/help/track-complaint" element={<TrackComplaintPage />} />

                {/* Emergency & Campaigns */}
                <Route path="/emergency-vaccination" element={<EmergencyVaccinationPage />} />
                <Route path="/campaigns" element={<CampaignsPage />} />

                {/* News */}
                <Route path="/news" element={<NewsPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/press-releases" element={<PressReleasesPage />} />

                {/* Legal */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />

                {/* Error Pages */}
                <Route path="/maintenance" element={<MaintenancePage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
            <LanguageSelector />
          </div>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
