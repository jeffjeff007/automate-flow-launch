
import React from "react";
import { 
  Database, 
  Code, 
  FileJson, 
  MessageSquare, 
  BookOpen, 
  Cloud, 
  Bot,
  Briefcase,
  ExternalLink
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface TechBadgeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, description, icon, url }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block h-full"
          >
            <div className="flex items-center justify-center bg-white rounded-lg py-4 px-6 card-shadow border border-gray-100 hover:border-automation-blue/20 hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
              <div className="flex items-center gap-3">
                <div className="text-automation-blue">
                  {icon}
                </div>
                <span className="font-medium text-automation-darkText">{name}</span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </a>
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
      icon: <Code className="w-5 h-5" />,
      url: "https://www.make.com"
    },
    {
      name: "Zapier",
      description: "Connect apps and automate workflows with no-code",
      icon: <Cloud className="w-5 h-5" />,
      url: "https://www.zapier.com"
    },
    {
      name: "n8n",
      description: "Open-source workflow automation tool",
      icon: <Code className="w-5 h-5" />,
      url: "https://n8n.io"
    },
    {
      name: "Airtable",
      description: "Flexible database and spreadsheet hybrid",
      icon: <Database className="w-5 h-5" />,
      url: "https://www.airtable.com"
    },
    {
      name: "Google Workspace",
      description: "Cloud-based productivity and collaboration tools",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 15.5v-7c0-.65.37-1.23.96-1.5l6-3c.59-.28 1.28-.19 1.77.23l6 5C21.24 14.56 21.5 15.27 21.5 16v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12L3.5 7.5M11.5 12l5.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      url: "https://workspace.google.com"
    },
    {
      name: "OpenAI",
      description: "Advanced AI models for text, code, and images",
      icon: <Bot className="w-5 h-5" />,
      url: "https://openai.com"
    },
    {
      name: "Slack",
      description: "Business communication and collaboration platform",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "https://slack.com"
    },
    {
      name: "Notion",
      description: "All-in-one workspace for notes, docs, and project management",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.notion.so"
    }
  ];

  return (
    <section id={id} className="py-16 bg-automation-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-automation-darkText">Tech Stack</h2>
          <p className="text-gray-600">Platforms and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-fr">
          {techTools.map((tech, index) => (
            <div key={index} className="h-full">
              <TechBadge 
                name={tech.name} 
                description={tech.description} 
                icon={tech.icon}
                url={tech.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
