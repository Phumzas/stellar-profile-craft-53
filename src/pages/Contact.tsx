
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
    value: "View My GitHub",
    href: "https://github.com/Phumzas"
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
                  <a href="https://github.com/Phumzas" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible. 
                  Whether it's about collaboration, projects, or just to say hello!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="rounded-xl focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="rounded-xl focus:ring-primary/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="rounded-xl focus:ring-primary/20" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Collaboration" className="rounded-xl focus:ring-primary/20" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or how we can work together..."
                      className="min-h-[120px] rounded-xl focus:ring-primary/20"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group hover-scale hover-glow rounded-full">
                    <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>
                
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    I'd love to connect with you!
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
