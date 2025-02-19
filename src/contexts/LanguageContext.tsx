
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
    'patient_portal': 'Patient Portal',
    'emergency_services': 'Emergency Services',
    'visiting_hours': 'Visiting Hours',
    'find_doctor': 'Find a Doctor',
    'health_centers': 'Health Centers',
    'contact_us': 'Contact Us',
    'back_to_home': 'Back to Home',
    'about_moh': 'About MOH',
    'about_moh_description': 'The Ministry of Health, Bahrain is committed to providing high-quality healthcare services to all residents.',
    'quick_links': 'Quick Links',
    'medical_services': 'Medical Services',
    'contact_info': 'Contact Info',
    'follow_us': 'Follow Us',
    'copyright': '© 2024 Ministry of Health, Kingdom of Bahrain. All rights reserved.',
    'public_health_services': 'Public Health Services',
    'public_health_description': 'Comprehensive healthcare services for the community',
    'immunization_services': 'Immunization Services',
    'immunization_description': 'Comprehensive vaccination programs for all age groups',
    'maternal_child_health': 'Maternal & Child Health',
    'maternal_description': 'Prenatal care, well-baby clinics, and pediatric services',
    'chronic_disease': 'Chronic Disease Management',
    'chronic_description': 'Diabetes, hypertension, and other chronic conditions',
    'health_education': 'Health Education',
    'education_description': 'Community workshops and awareness programs',
    'contact_department': 'Contact Public Health Department',
    'contact_description': 'Get in touch with our public health specialists for more information about our services and programs.',
    'access_healthcare': 'Access healthcare services, find information, and stay updated with the Ministry of Health, Bahrain',
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
    'patient_portal': 'بوابة المريض',
    'emergency_services': 'خدمات الطوارئ',
    'visiting_hours': 'ساعات الزيارة',
    'find_doctor': 'ابحث عن طبيب',
    'health_centers': 'المراكز الصحية',
    'contact_us': 'اتصل بنا',
    'back_to_home': 'العودة للرئيسية',
    'about_moh': 'عن وزارة الصحة',
    'about_moh_description': 'تلتزم وزارة الصحة في البحرين بتقديم خدمات رعاية صحية عالية الجودة لجميع المقيمين.',
    'quick_links': 'روابط سريعة',
    'medical_services': 'الخدمات الطبية',
    'contact_info': 'معلومات الاتصال',
    'follow_us': 'تابعنا',
    'copyright': '© 2024 وزارة الصحة، مملكة البحرين. جميع الحقوق محفوظة.',
    'public_health_services': 'خدمات الصحة العامة',
    'public_health_description': 'خدمات رعاية صحية شاملة للمجتمع',
    'immunization_services': 'خدمات التطعيم',
    'immunization_description': 'برامج تطعيم شاملة لجميع الفئات العمرية',
    'maternal_child_health': 'صحة الأم والطفل',
    'maternal_description': 'رعاية ما قبل الولادة وعيادات الأطفال وخدمات طب الأطفال',
    'chronic_disease': 'إدارة الأمراض المزمنة',
    'chronic_description': 'السكري وارتفاع ضغط الدم وغيرها من الحالات المزمنة',
    'health_education': 'التثقيف الصحي',
    'education_description': 'ورش عمل مجتمعية وبرامج توعوية',
    'contact_department': 'اتصل بإدارة الصحة العامة',
    'contact_description': 'تواصل مع متخصصي الصحة العامة للحصول على مزيد من المعلومات حول خدماتنا وبرامجنا.',
    'access_healthcare': 'الوصول إلى الخدمات الصحية، والعثور على المعلومات، والبقاء على اطلاع مع وزارة الصحة، البحرين',
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
