
import React from "react";
import { FileText, Mail, Database, CheckCheck, Bot, Link, Users } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, example }) => {
  return (
    <div className="bg-white rounded-xl p-6 gradient-card-bg card-shadow border border-gray-100 hover:border-automation-blue/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg cursor-pointer group">
      <div className="mb-4 rounded-full bg-automation-blue/10 w-12 h-12 flex items-center justify-center text-automation-blue group-hover:bg-automation-blue/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-automation-darkText group-hover:text-automation-blue transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-gray-500 text-xs italic">Example: {example}</p>
    </div>
  );
};

const ServicesSection: React.FC<{ id?: string }> = ({ id }) => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Management Automation",
      description: "Automate your lead capture, qualification, and follow-up processes",
      example: "Automatically routing leads to the right sales rep based on criteria and sending personalized follow-ups"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRM Integrations",
      description: "Connect your lead forms and customer data with popular CRM platforms",
      example: "Connecting a lead form to HubSpot or Salesforce"
    },
    {
      icon: <CheckCheck className="w-6 h-6" />,
      title: "E-commerce Workflows",
      description: "Streamline your online store operations with automated processes",
      example: "Automating order fulfillment notifications"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Marketing Automation",
      description: "Create personalized marketing sequences that run on autopilot",
      example: "Setting up automated email sequences based on user behavior"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Data Synchronization",
      description: "Keep your data consistent across all your business applications",
      example: "Syncing customer data between your CRM and email marketing platform"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailor-made automation solutions for your unique workflows",
      example: "Building a custom approval system for your specific business process"
    }
  ];

  return (
    <section id={id} className="py-20 bg-automation-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-automation-darkText">What I Automate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Custom automation solutions that save your team time and reduce manual work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              example={service.example}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
