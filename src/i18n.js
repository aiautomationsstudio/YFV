import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Yellow Fever Vaccination Platform",
      "home": "Home",
      "about": "About",
      "centres": "Centres",
      "book_appointment": "Book Appointment",
      "validate_certificate": "Validate Certificate",
      "login": "Login",
      "register": "Register"
    }
  },
  hi: {
    translation: {
      "welcome": "येलो फीवर टीकाकरण मंच में आपका स्वागत है",
      "home": "होम",
      "about": "के बारे में",
      "centres": "केंद्र",
      "book_appointment": "अपॉइंटमेंट बुक करें",
      "validate_certificate": "प्रमाणपत्र सत्यापित करें",
      "login": "लॉगिन",
      "register": "रजिस्टर करें"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
