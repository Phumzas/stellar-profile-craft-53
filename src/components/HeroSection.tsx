
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Phumza Melinda</span>
            <br />
            <span className="text-foreground">Sotyantya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring Software Developer & IT Support Associate
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about building impactful applications and providing technical solutions. 
            Experienced in online learning systems, AI/ML technologies, and helping students succeed 
            through accessible technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild className="hover:text-primary">
              <a href="https://za.linkedin.com/in/phumza-sotyantya-44929427a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:text-primary">
              <a href="https://github.com/Phumzas" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:text-primary">
              <Link to="/contact">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
