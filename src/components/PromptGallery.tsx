
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Code, Palette, Layout, Briefcase, Award, MessageCircle } from "lucide-react";

const prompts = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Clean, modern, lovable design with smooth animations",
    icon: Layout,
    fullPrompt: "Design a personal portfolio website with a clean, modern, and lovable design style. Prioritize smooth animations, soft rounded corners, engaging hover effects, and a responsive layout. Support both light and dark modes using a blue, white, and black color palette."
  },
  {
    id: 2,
    title: "Hero Section Design",
    description: "Creative welcome with animated profile and CTAs",
    icon: Palette,
    fullPrompt: "Create a hero section that welcomes visitors with a creative headline, a friendly animated profile image, and two call-to-action buttons. Apply smooth fade-in animations and hover glow effects."
  },
  {
    id: 3,
    title: "About Me Section",
    description: "Personable bio with skill badges and highlights",
    icon: Code,
    fullPrompt: "Design a personable About Me section with a soft blue highlight for keywords and animated skill badges. Ensure the section is friendly, clean, and uses a grid-based layout."
  },
  {
    id: 4,
    title: "Project Showcase",
    description: "Animated cards with hover effects and links",
    icon: Briefcase,
    fullPrompt: "Build a project showcase using animated cards that scale slightly on hover with a soft blue glow. Each card should display a project image, title, tech stack, and clickable GitHub or live links. Apply staggered fade-in animations."
  },
  {
    id: 5,
    title: "Certificates Section",
    description: "Clean clickable cards with hover scaling",
    icon: Award,
    fullPrompt: "Design a certificates section with clean, clickable cards that link to each certificate. Apply hover scaling and subtle glowing effects. Layout should be a responsive grid with good spacing and smooth fade-in animations."
  },
  {
    id: 6,
    title: "Contact Me Section",
    description: "Minimal form with smooth animations",
    icon: MessageCircle,
    fullPrompt: "Create a clean, minimal contact form with smooth input focus animations and a blue send button. Include a warm closing message like 'I'd love to connect with you!' Add fade-in animations and hover effects for the submit button."
  }
];

export const PromptGallery = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<typeof prompts[0] | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Custom <span className="text-gradient">Lovable Prompts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of carefully crafted prompts that showcase modern web design principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prompts.map((prompt, index) => (
            <Card 
              key={prompt.id} 
              className="card-hover hover-glow cursor-pointer animate-fade-in-up rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedPrompt(prompt)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <prompt.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{prompt.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {prompt.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="hover-scale">
                  Click to expand
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedPrompt && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <selectedPrompt.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{selectedPrompt.title}</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedPrompt(null)}
                  className="hover-scale"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-xl">
                  <p className="text-sm leading-relaxed">{selectedPrompt.fullPrompt}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
