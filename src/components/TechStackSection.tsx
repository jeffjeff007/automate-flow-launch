
import React from "react";
import { 
  Database, 
  Code, 
  FileJson, 
  MessageSquare, 
  BookOpen, 
  Cloud, 
  Bot,
  Briefcase 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechBadgeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, description, icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center bg-white rounded-lg py-4 px-6 card-shadow border border-gray-100 hover:border-automation-blue/20 hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="text-automation-blue">
                {icon}
              </div>
              <span className="font-medium text-automation-darkText">{name}</span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TechStackSection: React.FC<{ id?: string }> = ({ id }) => {
  const techTools = [
    {
      name: "Make",
      description: "Visual automation platform for creating complex workflows",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "Zapier",
      description: "Connect apps and automate workflows with no-code",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      name: "n8n",
      description: "Open-source workflow automation tool",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "Airtable",
      description: "Flexible database and spreadsheet hybrid",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "Google Workspace",
      description: "Cloud-based productivity and collaboration tools",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "OpenAI",
      description: "Advanced AI models for text, code, and images",
      icon: <Bot className="w-5 h-5" />
    },
    {
      name: "Slack",
      description: "Business communication and collaboration platform",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      name: "Notion",
      description: "All-in-one workspace for notes, docs, and project management",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id={id} className="py-16 bg-automation-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-automation-darkText">Tech Stack</h2>
          <p className="text-gray-600">Platforms and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techTools.map((tech, index) => (
            <TechBadge 
              key={index} 
              name={tech.name} 
              description={tech.description} 
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
