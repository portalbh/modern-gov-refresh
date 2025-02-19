
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Hospital, Calendar, FileText, Heart, AlertCircle } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Banner */}
      <div className="bg-sage-500 text-white p-2 text-center animate-fade-down">
        <div className="container flex items-center justify-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <span>Emergency: Call 999 for immediate medical assistance</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container py-12 lg:py-24 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            Your Health, Our Priority
          </h1>
          <p className="text-lg text-muted-foreground">
            Access healthcare services, find information, and stay updated with the Ministry of Health, Bahrain
          </p>
          <div className="flex items-center max-w-md mx-auto">
            <Input
              placeholder="Search for services, information..."
              className="rounded-r-none focus-visible:ring-0 border-r-0"
            />
            <Button
              className="rounded-l-none bg-sage-500 hover:bg-sage-600"
              size="icon"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
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

      {/* News & Updates */}
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

      {/* Emergency Contact */}
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
    </div>
  );
};

export default Index;
