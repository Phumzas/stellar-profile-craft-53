
import { Mail, Linkedin, Github, MapPin, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "phumzamelinda@gmail.com",
    href: "mailto:phumzamelinda@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Phumza Sotyantya",
    href: "https://za.linkedin.com/in/phumza-sotyantya-44929427a"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/phumzasotyantya",
    href: "https://github.com/phumzasotyantya"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gqeberha, Eastern Cape, South Africa",
    href: null
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about creating <span className="text-primary font-semibold">impactful applications</span> and always interested in new opportunities 
            and collaborations. Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate on <span className="text-primary font-semibold">AI/ML solutions</span>, 
                need IT support, or just want to connect with a fellow developer, I'd love to hear from you. 
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-hover hover-glow rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        {contact.label}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium hover-scale"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4">Professional Profiles</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" asChild className="hover-scale hover-glow rounded-full">
                  <a href="https://za.linkedin.com/in/phumza-sotyantya-44929427a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover-scale hover-glow rounded-full">
                  <a href="https://github.com/phumzasotyantya" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Let's Build Something Amazing Together</CardTitle>
                <CardDescription>
                  Ready to collaborate on impactful projects that make a difference
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What I Bring:</h3>
                  <ul className="space-y-3">
                    {[
                      "Systems Development expertise with hands-on IT support experience",
                      "AI/ML knowledge with practical Python development skills",
                      "Passion for creating accessible tech solutions",
                      "Collaborative mindset with mentorship experience",
                      "Focus on solving real-world problems through technology"
                    ].map((point, index) => (
                      <li key={index} className="flex items-start group hover-scale" style={{ animationDelay: `${0.1 * index}s` }}>
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    Looking forward to connecting with you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
