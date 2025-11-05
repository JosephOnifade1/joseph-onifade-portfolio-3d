import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Let's Build Something <span className="text-gradient-gold">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to collaborations, job opportunities, or creative projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4">
                Get in <span className="text-gradient-cyan">Touch</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to connect with fellow creators, potential clients, 
                and companies looking for someone who can bring their digital vision to life.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow" size="icon" asChild>
                  <a
                    href="https://github.com/josephonifade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </Button>
                <Button variant="glow" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/josephonifade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button variant="glow" size="icon" asChild>
                  <a
                    href="https://twitter.com/josephonifade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </Button>
                <Button variant="glow" size="icon" asChild>
                  <a
                    href="mailto:joseph@example.com"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-lg mb-3">What I'm looking for</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Frontend development roles in innovative companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▸</span>
                  <span>Freelance projects involving 3D web experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Collaborations on creative tech projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
