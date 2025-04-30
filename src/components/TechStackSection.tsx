
import React from "react";

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg py-4 px-6 card-shadow border border-gray-100">
      <span className="font-medium text-automation-darkText">{name}</span>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  const techTools = [
    "Make",
    "Zapier",
    "n8n",
    "Airtable",
    "Google Workspace",
    "OpenAI",
    "Slack",
    "Notion"
  ];

  return (
    <section className="py-16 bg-automation-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-automation-darkText">Tech Stack</h2>
          <p className="text-gray-600">Platforms and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techTools.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
