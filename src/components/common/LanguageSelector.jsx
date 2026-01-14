import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-brand-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-brand-100"
          title="Change Language"
        >
          <Globe size={24} />
        </button>

        {isOpen && (
          <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[200px]">
            <div className="p-2 bg-brand-50 border-b border-brand-100">
              <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
                Select Language
              </p>
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2.5 hover:bg-brand-50 transition-colors text-sm ${
                  i18n.language === lang.code ? 'bg-brand-100 text-brand-700 font-semibold' : 'text-gray-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.nativeName}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
