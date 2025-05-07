
import React from "react";
import { Timer, CheckCheck, ArrowRight, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-1.5 bg-gradient-to-r from-automation-blue to-automation-purple" />
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-automation-blue/10 p-3 text-automation-blue">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-automation-darkText mb-1">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BenefitsSection: React.FC<{ id?: string }> = ({ id }) => {
  const benefits = [
    {
      icon: <Timer className="w-5 h-5" />,
      title: "Time Savings",
      description: "Reclaim hours each week by eliminating repetitive manual tasks"
    },
    {
      icon: <CheckCheck className="w-5 h-5" />,
      title: "Reduced Manual Errors",
      description: "Minimize mistakes that occur from manual data entry and repetitive processes"
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Increased Efficiency",
      description: "Streamline workflows to accomplish more with your existing team"
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Improved Data Flow",
      description: "Ensure information moves seamlessly between your business systems"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost Reduction",
      description: "Lower operational costs by automating time-consuming tasks"
    }
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-automation-darkText">Why Automate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's how automation can transform your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
