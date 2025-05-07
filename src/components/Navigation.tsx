
import React from "react";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Calendar, Home } from "lucide-react";

const Navigation: React.FC = () => {
  const { scrollToSection } = useScroll();

  const openGoogleCalendar = () => {
    window.open("https://calendar.app.google/UM4k5z9Wd23gasp77", "_blank");
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-automation-blue to-automation-purple bg-clip-text text-transparent mb-4 sm:mb-0">
          J&O Automation Agency
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-automation-blue flex items-center gap-1 transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-automation-blue transition-colors"
          >
            Projects
          </button>
          <Button 
            onClick={openGoogleCalendar}
            variant="outline"
            size="sm"
            className="border-automation-blue text-automation-blue hover:bg-blue-50"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Schedule a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
