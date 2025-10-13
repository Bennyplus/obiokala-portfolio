import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_0e1gijo"; // From EmailJS Services
    const templateId = "template_qjzpcax"; // From EmailJS Templates
    const publicKey = "Chk_g47SmP4MXGUcY"; // From EmailJS Account > API Keys

    if (!form.current) {
      toast({
        title: "Error",
        description: "Form not found. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          toast({
            title: "Failed to send",
            description: "Please try again or contact me directly.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-dark-space">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-black text-foreground text-center mb-4">
            Let's Work Together
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>

          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-6 bg-dark-surface p-8 rounded-lg border border-border"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-heading">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-heading">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-heading">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="bg-background border-border text-foreground focus:border-primary focus:ring-primary min-h-[150px]"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading text-lg h-12 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Fryo21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/francis-obiokala-8604b329b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
             
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-sm order-first md:order-none">
              © 2025 Francis Obiokala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;