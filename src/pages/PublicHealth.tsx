
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PublicHealth = () => {
  const navigate = useNavigate();

  const healthPrograms = [
    {
      title: "Immunization Services",
      description: "Comprehensive vaccination programs for all age groups",
      location: "All Primary Health Centers",
    },
    {
      title: "Maternal & Child Health",
      description: "Prenatal care, well-baby clinics, and pediatric services",
      location: "Women & Children's Centers",
    },
    {
      title: "Chronic Disease Management",
      description: "Diabetes, hypertension, and other chronic conditions",
      location: "Specialized Care Units",
    },
    {
      title: "Health Education",
      description: "Community workshops and awareness programs",
      location: "Community Centers",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-sage-500 text-white py-12">
        <div className="container">
          <Button 
            variant="ghost" 
            className="text-white mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-4">Public Health Services</h1>
          <p className="text-lg opacity-90">
            Comprehensive healthcare services for the community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthPrograms.map((program) => (
            <Card key={program.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-sage-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {program.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-sage-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Public Health Department</h2>
                <p className="text-muted-foreground mb-6">
                  Get in touch with our public health specialists for more information about our services and programs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sage-500" />
                  <span>80001234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sage-500" />
                  <span>publichealth@moh.gov.bh</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sage-500" />
                  <span>Public Health Building, Manama, Bahrain</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublicHealth;
