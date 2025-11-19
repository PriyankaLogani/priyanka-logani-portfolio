import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Portfolio Chatbot",
      description: "Intelligent chatbot using Spring AI with RAG pipeline for contextual portfolio queries",
      tech: ["Java", "Spring AI", "Python", "RAG", "PostgreSQL", "Docker"],
      highlights: [
        "Designed an intelligent chatbot using Spring AI with a RAG pipeline to answer portfolio/resume queries with contextual accuracy",
        "Implemented pgvector-based vector indexing, improving semantic retrieval quality by 46%",
        "Automated resume-tailoring workflows, reducing manual customization effort by 51% with dynamic Q&A generation",
      ],
      tags: ["Backend", "AI", "Full-Stack"],
      date: "July 2025",
    },
    {
      title: "Investigating Salary Trends",
      description: "Analysis of 12.4K+ job postings examining correlation between employer ratings and salaries",
      tech: ["Python", "SQL", "ETL", "Matplotlib", "Seaborn"],
      highlights: [
        "Analyzed 12.4K+ job postings and company reviews to examine correlation between employer ratings and offered salaries across industries",
        "Designed SQL queries and Python ETL pipelines to preprocess structured/unstructured salary data, improving data accuracy by 27.6%",
        "Built dashboards and visualizations with Matplotlib/Seaborn, enabling recruiters and job seekers to make informed decisions",
        "Identified patterns such as companies with ratings above 4.0 offering 16.8% higher median salaries",
      ],
      tags: ["Data Analysis", "Backend", "Visualization"],
      date: "April 2025",
    },
    {
      title: "Smart Email Assistant",
      description: "NLP-powered email classification and auto-reply engine with real-time dashboards",
      tech: ["Java", "Spring AI", "RAG", "PostgreSQL", "Docker", "NLP"],
      highlights: [
        "Built an NLP-powered email classification and auto-reply engine integrating REST APIs with dashboards for real-time visibility",
        "Integrated Spring AI and RAG for context-aware email understanding and response generation",
        "Automated high-volume email responses, improving response time and reducing manual workload",
      ],
      tags: ["Backend", "AI", "Productivity"],
      date: "March 2025",
    },
    {
      title: "Pomodoro Study Tool",
      description: "Real-time collaborative study timer with secure authentication and CI/CD",
      tech: ["React", "Firebase", "JWT", "GitHub Actions"],
      highlights: [
        "Built real-time collaborative study timers with Firebase integration",
        "Implemented secure authentication using JWT for user session management",
        "Integrated CI/CD pipelines with GitHub Actions for automated deployments",
      ],
      tags: ["Full-Stack", "Productivity", "Frontend"],
      date: "2024",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing backend engineering, AI integration, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.05] hover:shadow-glow-card hover:-translate-y-3 group relative overflow-hidden ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg animate-border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary animate-icon-bounce group-hover:rotate-12 transition-all duration-300" />
                        <Badge variant="outline" className="text-xs group-hover:scale-110 transition-all duration-300">
                          {project.date}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs group-hover:scale-110 transition-all duration-300 animate-badge-wave"
                        style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm text-muted-foreground flex gap-2 animate-bullet-fade group-hover:translate-x-1 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.2 + idx * 0.1}s` }}
                      >
                        <span className="text-primary mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        className="bg-primary/10 text-primary border-primary/20 text-xs group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300"
                        variant="outline"
                        style={{ transitionDelay: `${tagIndex * 0.05}s` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
