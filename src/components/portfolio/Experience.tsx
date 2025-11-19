import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "University of Cincinnati",
      location: "Cincinnati, OH",
      period: "July 2024 – August 2025",
      highlights: [
        "Engineered distributed backend services using Java, Spring Boot, and REST APIs, improving system uptime to 99.3% and powering high-traffic UC Library workflows.",
        "Designed automated deployment pipelines using Docker, GitHub Actions, and Linux scripting, reducing deployment overhead by 41% and increasing release velocity.",
        "Implemented secure API gateways using JWT, enforced SAST/DAST scans, and resolved critical vulnerabilities, strengthening application security posture.",
        "Enhanced performance through caching, DB query optimization, and service refactoring, reducing request latency by 27%.",
      ],
      tags: ["Java", "Spring Boot", "REST APIs", "Docker", "CI/CD", "JWT", "SAST/DAST"],
    },
    {
      title: "Software Development Associate",
      company: "WCY Solutions Pvt. Ltd",
      location: "Hyderabad, TS",
      period: "June 2022 – December 2023",
      highlights: [
        "Developed modular microservices using Java Spring Boot and integrated MongoDB for scalable data persistence, improving system throughput for production clients.",
        "Collaborated with QA & DevOps in Agile sprints, contributing to stable, versioned releases and increasing delivery quality by 24%.",
        "Refactored legacy codebases and optimized middleware logic, reducing defect recurrence by 31% and modernizing internal services.",
      ],
      tags: ["Java", "Spring Boot", "MongoDB", "Microservices", "Agile"],
    },
    {
      title: "Software Engineer Intern",
      company: "WestAgileLabs",
      location: "Hyderabad, TS",
      period: "January 2022 – April 2022",
      highlights: [
        "Developed core backend modules using Java, JDBC, and MySQL, automating business workflows and improving cross-module data consistency.",
        "Optimized APIs and SQL queries, lowering data-fetch time by 28% and improving downstream application responsiveness.",
        "Contributed to system integrations, bug fixes, and SDLC enhancements while collaborating with product and QA teams.",
      ],
      tags: ["Java", "JDBC", "MySQL", "APIs"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border">
              <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-primary to-accent animate-timeline-draw" />
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background animate-dot-pulse group-hover:scale-150 group-hover:shadow-glow transition-all duration-300" 
                    style={{ animationDelay: `${index * 0.3 + 0.5}s` }} />

                  <Card className="md:ml-20 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-glow-card hover:-translate-x-2 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-gradient transition-all duration-300">
                            <Briefcase className="h-5 w-5 text-primary animate-icon-bounce group-hover:rotate-12 transition-all duration-300" 
                              style={{ animationDelay: `${index * 0.3 + 0.3}s` }} />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary/50 w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="text-muted-foreground flex gap-2 animate-bullet-fade group-hover:translate-x-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 0.3 + idx * 0.1}s` }}
                          >
                            <span className="text-primary mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs group-hover:scale-110 transition-all duration-300 animate-badge-wave"
                            style={{ animationDelay: `${index * 0.3 + tagIndex * 0.05}s` }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
