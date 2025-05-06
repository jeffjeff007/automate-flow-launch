
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC<{ id?: string }> = ({ id }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please tell us about your automation needs",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically submit to your backend or a service like Formspree
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleCall = () => {
    // Open Google Calendar scheduling page in a new tab
    window.open("https://calendar.app.google/UM4k5z9Wd23gasp77", "_blank");
  };

  return (
    <section id={id} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 card-shadow">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-automation-darkText">Let's Automate Your Workflows</h2>
            <p className="text-gray-600">
              Ready to save time and scale your business? Let's talk about your automation needs.
            </p>
          </div>
          
          <div className="mb-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-12 rounded-lg border-gray-300 focus:border-automation-blue"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your automation needs"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 rounded-lg border-gray-300 focus:border-automation-blue"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-automation-blue hover:bg-blue-700 text-white font-medium py-6 rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </div>
          
          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Rather talk directly?</p>
            <Button 
              variant="outline" 
              className="border-automation-blue text-automation-blue hover:bg-blue-50 font-medium rounded-lg flex items-center mx-auto"
              onClick={scheduleCall}
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
