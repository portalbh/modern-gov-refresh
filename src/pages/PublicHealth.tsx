
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PublicHealth = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const healthPrograms = [
    {
      title: 'immunization_services',
      description: 'immunization_description',
      location: t('health_centers'),
    },
    {
      title: 'maternal_child_health',
      description: 'maternal_description',
      location: t('health_centers'),
    },
    {
      title: 'chronic_disease',
      description: 'chronic_description',
      location: t('health_centers'),
    },
    {
      title: 'health_education',
      description: 'education_description',
      location: t('health_centers'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-sage-500 text-white py-12">
        <div className="container">
          <Button 
            variant="ghost" 
            className="text-white mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_to_home')}
          </Button>
          <h1 className="text-4xl font-bold mb-4">{t('public_health_services')}</h1>
          <p className="text-lg opacity-90">
            {t('public_health_description')}
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthPrograms.map((program) => (
            <Card key={program.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{t(program.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t(program.description)}</p>
                <div className="flex items-center text-sm text-sage-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {program.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-sage-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t('contact_department')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('contact_description')}
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
                  <span>{t('health_centers')}</span>
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
