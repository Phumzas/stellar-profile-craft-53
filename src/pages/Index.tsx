
import { HeroSection } from "@/components/HeroSection";
import { PromptGallery } from "@/components/PromptGallery";
import { CertificatesSection } from "@/components/CertificatesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PromptGallery />
      <CertificatesSection />
    </div>
  );
};

export default Index;
