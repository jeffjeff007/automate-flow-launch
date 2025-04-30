
import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
