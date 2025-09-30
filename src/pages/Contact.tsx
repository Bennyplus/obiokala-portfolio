import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
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

          <form onSubmit={handleSubmit} className="space-y-6 bg-dark-surface p-8 rounded-lg border border-border">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-heading">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border text-foreground focus:border-primary focus:ring-primary min-h-[150px]"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading text-lg h-12"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
