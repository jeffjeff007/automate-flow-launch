
import React from "react";
import { FileText, Mail, Database, CheckCheck, Bot } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 gradient-card-bg card-shadow border border-gray-100 hover:border-automation-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
      <div className="mb-4 rounded-full bg-automation-blue/10 w-12 h-12 flex items-center justify-center text-automation-blue">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-automation-darkText">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Generation",
      description: "Automate creation of contracts, proposals, and reports with dynamic data",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI Email Assistants",
      description: "Smart email responders and follow-ups that sound like your team wrote them",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRM & Database Sync",
      description: "Keep your customer data in sync across all your platforms automatically",
    },
    {
      icon: <CheckCheck className="w-6 h-6" />,
      title: "Approval Workflows",
      description: "Streamline approvals with automated routing and notifications",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Chatbots & Agents",
      description: "Custom AI assistants that handle customer inquiries and internal processes",
    }
  ];

  return (
    <section className="py-20 bg-automation-lightGray">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
