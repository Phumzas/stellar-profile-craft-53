
import { ExternalLink, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Technical Support Fundamentals",
    provider: "Google",
    year: "2025",
    url: null
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Google", 
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/verify/LQN1L3JZ7QVF?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Python for Data Science and AI",
    provider: "Coursera",
    year: "2025",
    url: null
  },
  {
    title: "Developing Interpersonal Skills",
    provider: "United Latino Students Association",
    year: "2025",
    url: null
  },
  {
    title: "Machine Learning Basics",
    provider: "United Latino Students Association",
    year: "2025", 
    url: null
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "United Latino Students Association",
    year: "2025",
    url: null
  },
  {
    title: "Trustworthy Generative AI",
    provider: "United Latino Students Association",
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/verify/RX61K2ZAWQ74?trk=public_profile_see-credential"
  },
  {
    title: "Verbal Communications and Presentation Skills",
    provider: "United Latino Students Association",
    year: "2025",
    url: null
  },
  {
    title: "Artificial Intelligence Fundamentals",
    provider: "IBM",
    year: "2025",
    url: null
  }
];

export const CertificatesSection = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional <span className="text-gradient">Certificates</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <Card key={index} className="card-hover hover-glow rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm group" style={{ animationDelay: `${0.1 * index}s` }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 leading-tight">
                {cert.title}
              </CardTitle>
              <CardDescription className="text-sm font-medium text-primary">
                {cert.provider}
              </CardDescription>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {cert.year}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              {cert.url ? (
                <Button variant="outline" size="sm" asChild className="w-full hover-scale hover-glow rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground italic">
                  Certificate Available
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
