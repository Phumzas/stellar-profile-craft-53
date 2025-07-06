
import { ExternalLink, Github, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Accessibility Voice AI (Group Project)",
    description: "A collaborative Accessibility Voice AI project focused on improving voice-assisted technology for people with disabilities. This project demonstrates the power of AI in making digital spaces more accessible.",
    videoUrl: "https://www.youtube.com/embed/57-Mm3HstZc",
    technologies: ["AI/ML", "Voice Recognition", "Accessibility", "Python", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/Lisekho3/ai-accessebility-project-34",
    featured: true,
    hasVideo: true
  },
  {
    title: "Specific Sector AI Prototype",
    description: "Developed an AI prototype focused on the education sector as part of 'The Elements' team project. This innovative solution demonstrates AI applications in educational contexts.",
    videoUrl: "https://www.youtube.com/embed/HfF3JSBga3k",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    liveUrl: "https://ai-accessebility-project-34.vercel.app/",
    githubUrl: "https://github.com/Lisekho3/ai-accessebility-project-34",
    featured: true,
    hasVideo: true
  },
  {
    title: "Image Content Generator",
    description: "Developed an AI-powered image content generator using Gradio and Hugging Face Spaces. This tool leverages machine learning to create dynamic visual content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "Gradio", "Hugging Face"],
    liveUrl: "https://huggingface.co/spaces/leo11000/content",
    githubUrl: "https://github.com/Phumzas",
    featured: true
  },
  {
    title: "PS Resume Maker",
    description: "AI-driven resume builder that generates ATS-friendly CVs with smart templates. Designed to help job seekers create professional resumes optimized for applicant tracking systems.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    technologies: ["AI/ML", "Resume Templates", "ATS Optimization"],
    liveUrl: "https://crafted-career-resume.lovable.app/",
    githubUrl: "https://github.com/Phumzas",
    featured: true
  },
  {
    title: "AI Concept Chatbot",
    description: "Conversational chatbot built on Botpress for interactive learning. This educational tool provides an engaging way for users to learn through AI-powered conversations.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    technologies: ["Botpress", "Conversational AI", "Interactive Learning"],
    liveUrl: "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/17/03/20250517031541-XWVYDKY6.json",
    githubUrl: "https://github.com/Phumzas",
    featured: true
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my AI and software development projects, demonstrating expertise in 
            machine learning, web development, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                {project.hasVideo ? (
                  <div className="w-full h-48 group-hover:scale-105 transition-transform duration-500">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={project.title}
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <Code2 className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-200">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild className="flex-1 hover:scale-105 transition-transform duration-200">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.title.includes("Chatbot") ? "Try Chatbot" : "Live Demo"}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className={`${project.liveUrl ? "flex-1" : "w-full"} hover:scale-105 transition-transform duration-200`}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                      Project showcase
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work and connect?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <a href="https://github.com/Phumzas" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View My GitHub Profile
              </a>
            </Button>
            <Button variant="default" size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <a href="https://drive.google.com/file/d/1_kTtUQ1nO_w6LehcZkyblocN3jnp_Ni7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
