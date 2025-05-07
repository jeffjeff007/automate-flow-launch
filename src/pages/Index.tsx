
import React from "react";
import Navigation from "@/components/Navigation";
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
      <Navigation />
      <main>
        <HeroSection id="home" />
        <ServicesSection id="services" />
        <ProcessSection id="process" />
        <ProjectsSection id="projects" />
        <TechStackSection id="tech-stack" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
