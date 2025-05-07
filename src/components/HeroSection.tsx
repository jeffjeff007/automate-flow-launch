import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const { scrollToSection } = useScroll();

  const openGoogleCalendar = () => {
    // Open Google Calendar scheduling link in a new tab
    window.open("https://calendar.app.google/UM4k5z9Wd23gasp77", "_blank");
  };

  return (
    <section id={id} className="relative overflow-hidden py-20 md:py-28 bg-white grid-pattern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-automation-blue to-automation-purple bg-clip-text text-transparent animate-fade-in">
            J&O Automation Agency: Automate Smarter with AI + No-Code Workflows
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            We help teams save time and scale faster using Zapier, Make, n8n, and OpenAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-automation-blue hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-lg flex items-center gap-2"
              onClick={openGoogleCalendar}
            >
              <Calendar className="w-5 h-5" />
              Book a Free Automation Audit
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-automation-blue text-automation-blue hover:bg-blue-50 font-medium px-8 py-6 rounded-lg"
              onClick={() => scrollToSection('projects')}
            >
              See My Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-automation-blue opacity-5 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-automation-purple opacity-5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
