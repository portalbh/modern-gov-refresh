import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Phone,
  Hospital,
  Calendar,
  FileText,
  Heart,
  AlertCircle,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  ChevronLeft,
  Menu,
  Clock,
  MapPin,
  User,
  LifeBuoy
} from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://picsum.photos/1200/400?random=1",
      title: "COVID-19 Vaccination Drive",
      description: "Get vaccinated at your nearest health center"
    },
    {
      image: "https://picsum.photos/1200/400?random=2",
      title: "Mental Health Awareness Month",
      description: "Join our awareness sessions"
    },
    {
      image: "https://picsum.photos/1200/400?random=3",
      title: "New Medical Center Opening",
      description: "State-of-the-art facilities in Manama"
    }
  ];

  const quickServices = [
    { icon: Calendar, title: "Book Appointment", description: "Schedule a visit with our healthcare providers" },
    { icon: Hospital, title: "Find Facility", description: "Locate nearest healthcare centers" },
    { icon: FileText, title: "Medical Records", description: "Access your health documents" },
    { icon: Heart, title: "Health Programs", description: "View preventive healthcare initiatives" },
  ];

  const news = [
    {
      title: "COVID-19 Vaccination Update",
      date: "March 15, 2024",
      category: "Health Alert",
      content: "Latest information about vaccination programs and booster shots.",
    },
    {
      title: "New Health Center Opening",
      date: "March 14, 2024",
      category: "Announcement",
      content: "A new primary healthcare center opening in Manama.",
    },
    {
      title: "Mental Health Awareness Week",
      date: "March 13, 2024",
      category: "Event",
      content: "Join us for workshops and sessions on mental well-being.",
    },
  ];

  const quickLinks = [
    { title: 'patient_portal', icon: User },
    { title: 'emergency_services', icon: LifeBuoy },
    { title: 'visiting_hours', icon: Clock },
    { title: 'find_doctor', icon: User },
    { title: 'health_centers', icon: MapPin },
    { title: 'contact_us', icon: Mail },
  ];

  const upcomingEvents = [
    { date: "Mar 20", title: "Diabetes Awareness Workshop", location: "Manama Health Center" },
    { date: "Mar 22", title: "Blood Donation Drive", location: "Riffa Health Center" },
    { date: "Mar 25", title: "Pediatric Health Day", location: "Children's Hospital" },
    { date: "Mar 28", title: "Mental Health Seminar", location: "Medical Complex" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white dark:bg-sage-800 border-b dark:border-sage-700">
        <div className="container">
          <div className="py-2 border-b dark:border-sage-700 flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                80001234
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                info@moh.gov.bh
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-sage-100 dark:hover:bg-sage-700 rounded-full"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="p-2 hover:bg-sage-100 dark:hover:bg-sage-700 rounded-full"
              >
                <Languages className="h-4 w-4" />
              </button>
              <Facebook className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Instagram className="h-4 w-4" />
            </div>
          </div>

          <div className="py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-sage-600 dark:text-sage-300">MOH Bahrain</div>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <nav className={`lg:flex gap-6 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white dark:bg-sage-800 border-b p-4 shadow-lg' : 'hidden'} lg:relative lg:bg-transparent lg:border-none lg:shadow-none lg:p-0`}>
              <a href="/" className="block py-2 hover:text-sage-600 dark:text-sage-200 dark:hover:text-white">{t('home')}</a>
              <a href="#" className="block py-2 hover:text-sage-600 dark:text-sage-200 dark:hover:text-white">{t('services')}</a>
              <a href="/public-health" className="block py-2 hover:text-sage-600 dark:text-sage-200 dark:hover:text-white">{t('public_health')}</a>
              <a href="#" className="block py-2 hover:text-sage-600 dark:text-sage-200 dark:hover:text-white">{t('about_us')}</a>
              <a href="#" className="block py-2 hover:text-sage-600 dark:text-sage-200 dark:hover:text-white">{t('contact')}</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-sage-500 text-white p-2 text-center animate-fade-down">
        <div className="container flex items-center justify-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <span>{t('emergency_call')}</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <section className="container py-8 animate-fade-up">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link) => (
            <Card key={link.title} className="hover:bg-sage-50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <link.icon className="h-6 w-6 text-sage-500 mb-2" />
                <span className="text-sm font-medium">{t(link.title)}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-8 animate-fade-up">
        <h2 className="text-2xl font-semibold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-sage-500 font-semibold mb-2">{event.date}</div>
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 lg:py-24 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            {t('health_priority')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('access_healthcare')}
          </p>
          <div className="flex items-center max-w-md mx-auto">
            <Input
              placeholder={t('search_placeholder')}
              className="rounded-r-none focus-visible:ring-0 border-r-0"
            />
            <Button className="rounded-l-none bg-sage-500 hover:bg-sage-600" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12 bg-sage-50 rounded-3xl animate-fade-up">
        <h2 className="text-2xl font-semibold text-center mb-8">Quick Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickServices.map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-sage-500" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 animate-fade-up">
        <h2 className="text-2xl font-semibold text-center mb-8">Latest Updates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.title} className="transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-sage-50">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 mb-12 animate-fade-up">
        <Card className="bg-sage-50">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">24/7 Health Hotline</h3>
              <p className="text-muted-foreground">
                Get immediate assistance from our healthcare professionals
              </p>
            </div>
            <Button className="bg-sage-500 hover:bg-sage-600">
              <Phone className="mr-2 h-4 w-4" />
              Call 80001234
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-sage-800 text-white pt-12 pb-6">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('about_moh')}</h3>
              <p className="text-sage-200">
                {t('about_moh_description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sage-200 hover:text-white">{t('health_centers')}</a></li>
                <li><a href="#" className="text-sage-200 hover:text-white">{t('medical_services')}</a></li>
                <li><a href="#" className="text-sage-200 hover:text-white">{t('emergency_services')}</a></li>
                <li><a href="#" className="text-sage-200 hover:text-white">{t('contact_us')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact_info')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sage-200">
                  <Phone className="h-4 w-4" />
                  80001234
                </li>
                <li className="flex items-center gap-2 text-sage-200">
                  <Mail className="h-4 w-4" />
                  info@moh.gov.bh
                </li>
                <li className="flex items-center gap-2 text-sage-200">
                  <MapPin className="h-4 w-4" />
                  Manama, Bahrain
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('follow_us')}</h3>
              <div className="flex gap-4">
                <a href="#" className="text-sage-200 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-sage-200 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-sage-200 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-sage-700 pt-6 text-center text-sage-300">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
