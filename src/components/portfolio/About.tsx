import { Card } from "@/components/ui/card";
import { MapPin, Target, Sparkles } from "lucide-react";

const About = () => {
  const facts = [
    { icon: MapPin, label: "Based in", value: "Cincinnati, OH" },
    { icon: Target, label: "Focus", value: "Java Backend, Full-Stack, Cloud" },
    { icon: Sparkles, label: "Interests", value: "Developer Productivity, Automation, AI Tools" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineer specializing in building robust, scalable backend systems with 
                <span className="text-foreground font-semibold"> Java, Spring Boot, and modern microservices architecture</span>. 
                My experience spans from developing distributed systems at the University of Cincinnati to optimizing 
                production-grade microservices at WCY Solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a strong focus on <span className="text-foreground font-semibold">API security, CI/CD automation, 
                and cloud-native deployments</span> using Docker, Kubernetes, and AWS. My work has improved system uptime 
                to 99.3%, reduced deployment overhead by 41%, and strengthened security postures through SAST/DAST integration.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond backend engineering, I'm passionate about leveraging <span className="text-foreground font-semibold">AI-powered 
                tools and automation</span> to enhance developer productivity and build intelligent systems that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4 animate-scale-in">
              {facts.map((fact, index) => (
                <Card
                  key={fact.label}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <fact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="text-lg font-semibold">{fact.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
