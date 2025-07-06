import { Code, Database, Globe, Smartphone, Server, Palette, Users, BookOpen, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Programming & Development",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "AI/ML", "Machine Learning", "Automation"]
  },
  {
    category: "Technical Skills", 
    icon: Monitor,
    skills: ["Computer Literacy", "Problem Solving", "Systems Development", "Online Learning Platforms"]
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Interpersonal Skills", "Teamwork", "Communication", "Time Management"]
  },
  {
    category: "Languages",
    icon: Globe,
    skills: ["English", "isiXhosa"]
  },
  {
    category: "Education & Support",
    icon: BookOpen,
    skills: ["Academic Guidance", "Student Support", "Peer Mentoring", "Digital Literacy"]
  },
  {
    category: "Web Technologies",
    icon: Database,
    skills: ["React", "Node.js", "HTML/CSS", "Responsive Design", "Modern Web Development"]
  }
];

const experience = [
  {
    role: "IT Support Associate",
    company: "CAPACITI | Gqeberha, Eastern Cape",
    period: "May 2024 - Present",
    achievements: [
      "Gained practical experience building Python-based medias",
      "Completed certified online courses in ML through Coursera, enhancing technical problem-solving skills and automation knowledge"
    ]
  },
  {
    role: "Peer Advisor",
    company: "Boston City College | East London, Eastern Cape", 
    period: "January 2024 - June 2024",
    achievements: [
      "Assisted peers become familiar with online learning platforms, offering one-on-one guidance and troubleshooting assistance",
      "Provided free academic support to fellow students assisting with coursework and study strategies",
      "Fostered a supportive learning environment, improving digital literacy and academic confidence among students"
    ]
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IT Support Associate and systems development graduate passionate about creating accessible tech solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Avatar Section */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src="/lovable-uploads/65253e85-ee9e-4fbf-953e-cff7c3775bd3.png"
                    alt="Phumza Melinda Sotyantya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="hover:text-foreground transition-colors duration-300">
                  I'm an aspiring software developer with experience as an IT Support Associate and 
                  systems development graduate. My passion lies in creating impactful applications 
                  and providing technical solutions that make technology more accessible to everyone.
                </p>
                <p className="hover:text-foreground transition-colors duration-300">
                  With hands-on experience in online learning systems and AI/ML technologies, I bring 
                  a unique perspective to software development. I've gained practical skills in Python, 
                  machine learning, and automation while helping students navigate digital learning environments.
                </p>
                <p className="hover:text-foreground transition-colors duration-300">
                  My background in peer mentoring and academic support has taught me the importance of 
                  user-centered design and accessible technology solutions that truly serve people's needs.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Career Objectives</h3>
              <ul className="space-y-3">
                {[
                  "Build impactful applications that solve real-world problems",
                  "Leverage AI/ML technologies to create intelligent solutions",
                  "Continue learning and growing in software development",
                  "Empower individuals through accessible technology solutions"
                ].map((objective, index) => (
                  <li key={index} className="flex items-start group hover:scale-105 transition-transform duration-200" style={{ animationDelay: `${0.1 * index}s` }}>
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="text-center">
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">Diploma in Systems Development</CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                Boston City Campus | East London, Eastern Cape
              </CardDescription>
              <Badge variant="outline" className="w-fit mx-auto mt-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                2021-2024
              </Badge>
            </CardHeader>
          </Card>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <skillGroup.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
