
import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechBadgeProps {
  name: string;
  description: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, description }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center bg-white rounded-lg py-4 px-6 card-shadow border border-gray-100 hover:border-automation-blue/20 hover:shadow-md transition-all duration-300 cursor-pointer">
            <span className="font-medium text-automation-darkText">{name}</span>
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
      description: "Visual automation platform for creating complex workflows"
    },
    {
      name: "Zapier",
      description: "Connect apps and automate workflows with no-code"
    },
    {
      name: "n8n",
      description: "Open-source workflow automation tool"
    },
    {
      name: "Airtable",
      description: "Flexible database and spreadsheet hybrid"
    },
    {
      name: "Google Workspace",
      description: "Cloud-based productivity and collaboration tools"
    },
    {
      name: "OpenAI",
      description: "Advanced AI models for text, code, and images"
    },
    {
      name: "Slack",
      description: "Business communication and collaboration platform"
    },
    {
      name: "Notion",
      description: "All-in-one workspace for notes, docs, and project management"
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
            <TechBadge key={index} name={tech.name} description={tech.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
