
import React from "react";
import { ArrowRight, Zap, Bot, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, techStack }) => {
  const handleViewDetails = () => {
    // You can replace this with a modal or link to a dedicated page
    alert(`View details for ${title}`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow border border-gray-100 hover:border-automation-blue/30 transition-all duration-300">
      <div className="bg-gradient-to-r from-automation-blue to-automation-purple p-6 text-white flex items-center">
        <div className="bg-white/20 rounded-full p-2 mr-3">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="inline-flex text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button 
          variant="outline"
          size="sm"
          className="text-automation-blue border-automation-blue hover:bg-blue-50 mt-2 w-full flex justify-center items-center"
          onClick={handleViewDetails}
        >
          View Details <ArrowRight className="ml-1 w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<{ id?: string }> = ({ id }) => {
  const projects = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Sales Document Automation",
      description: "Created a workflow that automatically generates custom sales proposals when new opportunities reach a specific stage in the CRM.",
      techStack: ["Make", "Google Docs", "HubSpot", "OpenAI"]
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Customer Support AI Assistant",
      description: "Built an AI chatbot that handles common customer support requests and integrates with the company's knowledge base.",
      techStack: ["Zapier", "OpenAI", "Slack", "Notion"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Cross-Platform Data Sync",
      description: "Developed a bi-directional sync between Airtable and a custom CRM, ensuring data consistency across platforms.",
      techStack: ["n8n", "Airtable", "API", "Webhooks"]
    }
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-automation-darkText">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recent automation solutions I've built for clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-automation-blue font-medium hover:text-blue-700 transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
