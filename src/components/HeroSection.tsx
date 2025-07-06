
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
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover-scale hover-glow">
                <img
                  src="/lovable-uploads/65253e85-ee9e-4fbf-953e-cff7c3775bd3.png"
                  alt="Phumza Melinda Sotyantya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-gradient">Phumza Melinda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A Systems Development Graduate and aspiring IT specialist passionate about using
            <span className="text-primary font-semibold"> digital tools, AI/ML innovations, and user-centered design</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            I love building digital experiences that are not only functional but also meaningful and delightful to use, 
            creating impactful, accessible technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group hover-scale hover-glow rounded-full">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group hover-scale hover-glow rounded-full" asChild>
              <Link to="/contact">
                Contact Me
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button variant="ghost" size="sm" asChild className="hover-scale hover-glow rounded-full">
              <a href="https://za.linkedin.com/in/phumza-sotyantya-44929427a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover-scale hover-glow rounded-full">
              <a href="https://github.com/Phumzas" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover-scale hover-glow rounded-full">
              <a href="https://drive.google.com/file/d/1_kTtUQ1nO_w6LehcZkyblocN3jnp_Ni7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
              </a>
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
