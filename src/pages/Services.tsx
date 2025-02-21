
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, HandshakeIcon, Factory } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Business Services",
      description: "Professional consulting and business development services",
      icon: <Briefcase className="w-12 h-12 text-sage-600" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Healthcare Facilities",
      description: "State-of-the-art medical centers and clinics",
      icon: <Building2 className="w-12 h-12 text-sage-600" />,
      image: "https://picsum.photos/1200/400?random=2"
    },
    {
      title: "Partnership Programs",
      description: "Collaborative healthcare initiatives and partnerships",
      icon: <HandshakeIcon className="w-12 h-12 text-sage-600" />,
      image: "https://picsum.photos/1200/400?random=3"
    },
    {
      title: "Medical Equipment",
      description: "Modern medical equipment and supplies",
      icon: <Factory className="w-12 h-12 text-sage-600" />,
      image: "https://picsum.photos/1200/400?random=4"
    }
  ];

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-sage-900">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Services Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center" data-translate="our_services">
            Our Services
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-sage-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center" data-translate="why_choose_us">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2" data-translate="expertise">Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300" data-translate="expertise_description">
                Our team consists of highly qualified professionals
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" data-translate="modern_facilities">Modern Facilities</h3>
              <p className="text-gray-600 dark:text-gray-300" data-translate="facilities_description">
                State-of-the-art equipment and facilities
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" data-translate="patient_care">Patient Care</h3>
              <p className="text-gray-600 dark:text-gray-300" data-translate="care_description">
                Dedicated to providing the best patient care
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
