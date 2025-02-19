
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
};

const translations = {
  en: {
    'home': 'Home',
    'services': 'Services',
    'public_health': 'Public Health',
    'about_us': 'About Us',
    'contact': 'Contact',
    'emergency_call': 'Emergency: Call 999 for immediate medical assistance',
    'health_priority': 'Your Health, Our Priority',
    'search_placeholder': 'Search for services, information...',
    'quick_services': 'Quick Services',
    'latest_updates': 'Latest Updates',
    'upcoming_events': 'Upcoming Events',
    'book_appointment': 'Book Appointment',
    'find_facility': 'Find Facility',
    'medical_records': 'Medical Records',
    'health_programs': 'Health Programs',
    // Add more translations as needed
  },
  ar: {
    'home': 'الرئيسية',
    'services': 'الخدمات',
    'public_health': 'الصحة العامة',
    'about_us': 'من نحن',
    'contact': 'اتصل بنا',
    'emergency_call': 'للطوارئ: اتصل على 999 للمساعدة الطبية الفورية',
    'health_priority': 'صحتك أولويتنا',
    'search_placeholder': 'ابحث عن الخدمات والمعلومات...',
    'quick_services': 'خدمات سريعة',
    'latest_updates': 'آخر التحديثات',
    'upcoming_events': 'الفعاليات القادمة',
    'book_appointment': 'حجز موعد',
    'find_facility': 'البحث عن مرفق صحي',
    'medical_records': 'السجلات الطبية',
    'health_programs': 'البرامج الصحية',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
