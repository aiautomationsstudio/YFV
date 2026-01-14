# Yellow Fever Vaccination Platform - React Application

A comprehensive SaaS-based integrated digital solution for Yellow Fever Vaccination management in India.

## 📋 Project Overview

This is the official React.js web application for the Yellow Fever Vaccination Platform, developed for the Ministry of Health and Family Welfare, Government of India. The platform provides end-to-end digital services for vaccination booking, certificate management, and centre operations.

## 🚀 Features

- **Multi-lingual Support** (English, Hindi, and 10+ regional languages)
- **Responsive Design** with Tailwind CSS
- **SEO Optimized** with React Helmet Async
- **Accessibility Compliant** (GIGW 3.0)
- **IHR-2005 Compliant** certificate system
- **Real-time Slot Booking**
- **QR Code Certificate Validation**
- **Digital Card Conversion**
- **Secure Payment Integration**

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18.2.0
- **Routing:** React Router DOM 6.20.0
- **Styling:** Tailwind CSS 3.3.6
- **Icons:** Lucide React 0.294.0
- **SEO:** React Helmet Async 2.0.4
- **i18n:** react-i18next 13.5.0
- **HTTP Client:** Axios 1.6.2

### Build Tools
- **Bundler:** Vite 5.0.8
- **PostCSS:** 8.4.32
- **Autoprefixer:** 10.4.16

## 📁 Project Structure

```
yfv-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── common/
│   │       └── LanguageSelector.jsx
│   │
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── YellowFeverInfoPage.jsx
│   │   │   ├── FAQPage.jsx
│   │   │   ├── GuidelinesPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   │
│   │   │   ├── centres/
│   │   │   │   ├── CentreLocatorPage.jsx
│   │   │   │   ├── CentreListPage.jsx
│   │   │   │   └── CentreDetailsPage.jsx
│   │   │   │
│   │   │   ├── booking/
│   │   │   │   ├── BookAppointmentPage.jsx
│   │   │   │   ├── SelectCentrePage.jsx
│   │   │   │   ├── SelectSlotPage.jsx
│   │   │   │   └── AppointmentConfirmationPage.jsx
│   │   │   │
│   │   │   ├── validation/
│   │   │   │   ├── CertificateValidatorPage.jsx
│   │   │   │   └── ValidationResultPage.jsx
│   │   │   │
│   │   │   ├── conversion/
│   │   │   │   ├── CardConversionPage.jsx
│   │   │   │   └── ConversionStatusPage.jsx
│   │   │   │
│   │   │   ├── resources/
│   │   │   │   ├── HowItWorksPage.jsx
│   │   │   │   ├── VaccinationProcessPage.jsx
│   │   │   │   ├── TravelRequirementsPage.jsx
│   │   │   │   ├── DocumentChecklistPage.jsx
│   │   │   │   └── DownloadFormsPage.jsx
│   │   │   │
│   │   │   ├── support/
│   │   │   │   ├── HelpCenterPage.jsx
│   │   │   │   ├── LiveChatPage.jsx
│   │   │   │   ├── SubmitComplaintPage.jsx
│   │   │   │   └── TrackComplaintPage.jsx
│   │   │   │
│   │   │   ├── emergency/
│   │   │   │   └── EmergencyVaccinationPage.jsx
│   │   │   │
│   │   │   ├── campaigns/
│   │   │   │   └── CampaignsPage.jsx
│   │   │   │
│   │   │   └── news/
│   │   │       ├── NewsPage.jsx
│   │   │       ├── AnnouncementsPage.jsx
│   │   │       └── PressReleasesPage.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   ├── ResetPasswordPage.jsx
│   │   │   ├── VerifyOTPPage.jsx
│   │   │   └── AadhaarAuthPage.jsx
│   │   │
│   │   ├── legal/
│   │   │   ├── PrivacyPolicyPage.jsx
│   │   │   ├── TermsConditionsPage.jsx
│   │   │   ├── RefundPolicyPage.jsx
│   │   │   ├── DisclaimerPage.jsx
│   │   │   └── AccessibilityPage.jsx
│   │   │
│   │   └── errors/
│   │       ├── NotFoundPage.jsx
│   │       ├── MaintenancePage.jsx
│   │       └── UnauthorizedPage.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── utils/
│   ├── hooks/
│   ├── services/
│   ├── contexts/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── i18n.js
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Color Palette

**Primary (MoHFW Blue)**
- brand-700: `#0369a1` - Main navigation and primary actions
- brand-500 to brand-900: Shades for various UI elements

**Accent (Bio-Hazard Amber)**
- accent-500: `#f59e0b` - Secondary actions and highlights

**Semantic Colors**
- Success: `#10b981`
- Warning: `#f97316`
- Danger: `#ef4444`

### Typography

- **UI Font:** Inter (sans-serif)
- **Certificate Font:** Merriweather (serif)

### Custom CSS Classes

```css
.btn-primary      - Primary action button
.btn-secondary    - Secondary action button
.btn-outline      - Outlined button
.card             - Card container
.input-field      - Form input field
.section-title    - Page section title
.page-container   - Main page container
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd yfv-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Available Routes

### Public Routes
- `/` - Home Page
- `/about` - About Us
- `/yellow-fever-info` - Yellow Fever Information
- `/faq` - Frequently Asked Questions
- `/guidelines` - Vaccination Guidelines
- `/contact` - Contact Us

### Centre Routes
- `/centres` - Centre Locator (Map View)
- `/centres/list` - All Centres List
- `/centres/:centreId` - Centre Details

### Booking Routes
- `/book-appointment` - Start Booking
- `/book-appointment/select-centre` - Select Centre
- `/book-appointment/select-slot/:centreId` - Select Time Slot
- `/book-appointment/confirmation/:bookingId` - Confirmation

### Certificate Routes
- `/validate-certificate` - Validate Certificate
- `/validate-certificate/result` - Validation Result

### Conversion Routes
- `/convert-card` - Convert Physical Card
- `/convert-card/status/:requestId` - Conversion Status

### Authentication Routes
- `/register` - User Registration
- `/login` - User Login
- `/forgot-password` - Forgot Password
- `/reset-password/:token` - Reset Password
- `/verify-otp` - Verify OTP
- `/aadhaar-auth` - Aadhaar Authentication

### Resource Routes
- `/how-it-works` - How It Works
- `/vaccination-process` - Vaccination Process
- `/travel-requirements` - Travel Requirements
- `/document-checklist` - Document Checklist
- `/download-forms` - Download Forms

### Support Routes
- `/help` - Help Center
- `/help/live-chat` - Live Chat
- `/help/submit-complaint` - Submit Complaint
- `/help/track-complaint` - Track Complaint

### Legal Routes
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions
- `/refund-policy` - Refund Policy
- `/disclaimer` - Disclaimer
- `/accessibility` - Accessibility Statement

### Other Routes
- `/emergency-vaccination` - Emergency Vaccination
- `/campaigns` - Vaccination Campaigns
- `/news` - News & Updates
- `/announcements` - Announcements
- `/press-releases` - Press Releases

## 🔐 Security Features

- End-to-end encryption
- Secure payment gateway integration
- Session management
- CSRF protection
- XSS protection
- SQL injection prevention

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Screen reader compatible
- Keyboard navigation
- High contrast mode
- Font size adjustment
- Multi-language support

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimized
- Desktop optimized
- Progressive Web App (PWA) ready

## 🌍 Internationalization (i18n)

Currently supports:
- English (en)
- Hindi (hi)

Can be extended to support 10+ regional languages.

## 📦 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.yfvplatform.gov.in
VITE_PAYMENT_GATEWAY_KEY=your_key_here
VITE_GOOGLE_MAPS_API_KEY=your_key_here
```

## 🧪 Testing

```bash
# Run tests (to be configured)
npm test

# Run tests with coverage
npm run test:coverage
```

## 📈 Performance Optimization

- Code splitting
- Lazy loading
- Image optimization
- CDN integration
- Caching strategy
- Bundle size optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is developed for the Ministry of Health and Family Welfare, Government of India.

## 📞 Support

- **Helpline:** 1800-XXX-XXXX
- **Email:** support@yfvplatform.gov.in
- **Website:** https://yfvplatform.gov.in

## 👥 Team

Developed for Ministry of Health and Family Welfare (MoHFW), Government of India

## 🔄 Version History

- **v1.0.0** (January 2026) - Initial release

## 📚 Documentation

For detailed documentation, visit:
- [API Documentation](docs/api.md)
- [User Guide](docs/user-guide.md)
- [Developer Guide](docs/developer-guide.md)
- [Deployment Guide](docs/deployment.md)

## 🎯 Roadmap

- [ ] Mobile app (Android/iOS)
- [ ] Blockchain integration for certificates
- [ ] AI-powered chatbot
- [ ] Multi-disease vaccination support
- [ ] International expansion

---

**Ministry of Health and Family Welfare**  
Government of India  
© 2026 All Rights Reserved
