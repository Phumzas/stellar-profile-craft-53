
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Angular"]
  },
  {
    category: "Backend Development", 
    icon: Server,
    skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Progressive Web Apps"]
  },
  {
    category: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Firebase"]
  },
  {
    category: "Tools & Languages",
    icon: Code,
    skills: ["JavaScript", "Python", "Java", "Git", "Linux", "DevOps"]
  },
  {
    category: "Design & UX",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Accessibility"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with a drive for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-primary font-bold">PS</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated software engineer with a passion for creating innovative digital solutions 
                  that solve real-world problems. My journey in technology began with a curiosity about how 
                  things work and evolved into a comprehensive skill set spanning full-stack development.
                </p>
                <p>
                  With experience in modern web technologies, mobile development, and cloud solutions, 
                  I bring a holistic approach to every project. I believe in writing clean, maintainable 
                  code and creating user experiences that are both functional and delightful.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Career Objectives</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build scalable applications that positively impact users' lives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuously learn and adapt to emerging technologies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contribute to innovative projects in a collaborative environment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentor other developers and give back to the tech community
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <skillGroup.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
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
