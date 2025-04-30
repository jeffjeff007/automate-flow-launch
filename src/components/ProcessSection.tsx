
import React from "react";
import { Phone, Settings, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-automation-blue mb-4 card-shadow hover:shadow-md transition-shadow duration-300">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-automation-purple text-white flex items-center justify-center text-xs font-medium">
          {number}
        </div>
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

const ProcessSection: React.FC<{ id?: string }> = ({ id }) => {
  const { scrollToSection } = useScroll();

  return (
    <section id={id} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-automation-darkText">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My streamlined process to transform your manual workflows into automated systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <ProcessStep
            number={1}
            icon={<Phone className="w-6 h-6" />}
            title="Discovery Call"
            description="We identify your needs and automation opportunities in your existing processes"
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-gray-300" />
          </div>
          
          <ProcessStep
            number={2}
            icon={<Settings className="w-6 h-6" />}
            title="Workflow Design + Build"
            description="I design and build your custom automation using the best tools for your needs"
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-gray-300" />
          </div>
          
          <ProcessStep
            number={3}
            icon={<Play className="w-6 h-6" />}
            title="Test, Train, and Deploy"
            description="We test thoroughly, train your team, and deploy your automation into production"
          />
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-automation-blue hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-lg"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk Automation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
