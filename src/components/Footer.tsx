
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-medium text-xl text-automation-blue">Automate Flow</p>
            <p className="text-gray-500 text-sm mt-2">Powered by AI & Automation</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@automateflow.com" 
              className="text-gray-600 hover:text-automation-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-automation-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-automation-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Automate Flow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
