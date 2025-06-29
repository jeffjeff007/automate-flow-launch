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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
            <div className="flex items-center justify-center bg-white rounded-lg py-4 px-6 card-shadow border border-gray-100 hover:border-automation-blue/20 hover:shadow-md transition-all duration-300 cursor-pointer group h-full min-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="text-automation-blue">
                  {icon}
                </div>
                <span className="font-medium text-automation-darkText whitespace-nowrap">{name}</span>
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
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        
        <div className="relative">
          <Carousel
            plugins={[autoplay.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.reset()}
          >
            <CarouselContent className="-ml-4">
              {techTools.map((tech, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <TechBadge 
                    name={tech.name} 
                    description={tech.description} 
                    icon={tech.icon}
                    url={tech.url}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
