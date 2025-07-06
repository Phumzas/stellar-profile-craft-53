
import { ExternalLink, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certificates = [
  { title: "Introduction to Front-End Development", url: "https://coursera.org/share/05874fb6938a604948072a667ce24c9b" },
  { title: "Programming with JavaScript", url: "https://coursera.org/share/9ba60cbf88d0b7a09a2cf060d2986675" },
  { title: "Version Control", url: "https://coursera.org/share/21ad68f86b2a9357b89267ad2ec3e103" },
  { title: "HTML and CSS in Depth", url: "https://coursera.org/share/51f023b222aac78f65e77b21037a95e5" },
  { title: "React Basics", url: "https://coursera.org/share/233501e0fd9adddd0fedd0947d9acf90" },
  { title: "Advanced React", url: "https://coursera.org/share/18303167034a950885ea14b3bda5113a" },
  { title: "Principles of UX/UI Design", url: "https://coursera.org/share/fcb670c76957102db38bc2967a1945d7" },
  { title: "Introduction to Back-End Development", url: "https://coursera.org/share/10837c4f7b990c65e68a5b85f1a4cee3" },
  { title: "Programming in Python", url: "https://coursera.org/share/6073ed566cb296973eb7247b47a1e580" },
  { title: "Django Application Development", url: "https://coursera.org/share/cdb667eef605801ff64089d1b758a362" },
  { title: "APIs", url: "https://coursera.org/share/bde2cba901b2d3eef5c9e3f4b7e31903" },
  { title: "SQL and Databases", url: "https://coursera.org/share/15a242bf20ab9579f22d2926a94c4fe5" },
  { title: "Introduction to Cloud Computing", url: "https://coursera.org/share/bdae222d2476020ce93d921b89aae032" },
  { title: "Agile Methodologies", url: "https://coursera.org/share/39f44100639729944582c1dd220c6333" },
  { title: "Coding Interview Preparation", url: "https://coursera.org/share/8bb97a5dccdd41296104659d8ce363ae" }
];

export const CertificatesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey of continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="card-hover hover-glow animate-fade-in-up rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild 
                  className="hover-scale hover-glow rounded-full"
                  size="sm"
                >
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
