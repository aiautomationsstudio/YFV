import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-brand-700 border-b border-brand-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white text-brand-700 p-2 rounded-lg font-bold text-xl shadow-sm">
              YFV
            </div>
            <span className="hidden md:block font-semibold text-lg tracking-wide">
              Yellow Fever Vaccination
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-accent-200 transition-colors">
              {t('home')}
            </Link>
            <Link to="/centres" className="hover:text-accent-200 transition-colors">
              {t('centres')}
            </Link>
            <Link to="/book-appointment" className="hover:text-accent-200 transition-colors">
              {t('book_appointment')}
            </Link>
            <Link to="/validate-certificate" className="hover:text-accent-200 transition-colors">
              {t('validate_certificate')}
            </Link>
            <Link to="/help" className="hover:text-accent-200 transition-colors">
              Help
            </Link>
            <Link 
              to="/login" 
              className="bg-brand-800 hover:bg-brand-900 px-4 py-2 rounded-md transition-colors shadow-inner flex items-center space-x-2"
            >
              <User size={16} />
              <span>{t('login')}</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-brand-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/centres"
              className="block px-4 py-2 hover:bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('centres')}
            </Link>
            <Link
              to="/book-appointment"
              className="block px-4 py-2 hover:bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('book_appointment')}
            </Link>
            <Link
              to="/validate-certificate"
              className="block px-4 py-2 hover:bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('validate_certificate')}
            </Link>
            <Link
              to="/help"
              className="block px-4 py-2 hover:bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Help
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 bg-brand-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('login')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
