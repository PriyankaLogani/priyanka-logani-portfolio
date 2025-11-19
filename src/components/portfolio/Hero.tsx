import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const roles = [
    "Software Engineer",
    "Java Backend Developer",
    "Full-Stack Developer",
    "Cloud-Native Developer",
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = ["Java", "Spring", "React", "Docker", "AWS", "PostgreSQL"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Priyanka Logani</span>
            </h1>
            
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground transition-all duration-500">
                {roles[currentRole]}
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Software Engineer with hands-on experience in building scalable backend systems and microservices 
            using Java and Spring Boot, integrating secure APIs, and deploying cloud-native applications with CI/CD. 
            I enjoy combining clean architecture with practical automation and AI-powered tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="glow-primary hover:scale-105 transition-transform"
            >
              View Projects
            </Button>
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              variant="outline"
              size="lg"
              className="hover:glow-primary transition-all"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/priyankalogani", "_blank")}
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://linkedin.com/in/priyankalogani", "_blank")}
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>

          {/* Floating tech icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            {techIcons.map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-card/50 border border-border rounded-lg text-sm font-medium animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
