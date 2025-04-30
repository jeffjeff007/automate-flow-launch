
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 card-shadow">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-automation-darkText">Let's Automate Your Workflows</h2>
            <p className="text-gray-600">
              Ready to save time and scale your business? Let's talk about your automation needs.
            </p>
          </div>
          
          <div className="mb-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Company Name"
                  className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your automation needs"
                  className="w-full h-32 rounded-lg border-gray-300 focus:border-automation-blue"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-automation-blue hover:bg-blue-700 text-white font-medium py-6 rounded-lg"
              >
                Submit Request
              </Button>
            </form>
          </div>
          
          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Rather talk directly?</p>
            <Button 
              variant="outline" 
              className="border-automation-blue text-automation-blue hover:bg-blue-50 font-medium rounded-lg flex items-center mx-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
