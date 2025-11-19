import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Tag } from "lucide-react";

const Notes = () => {
  const notes = [
    {
      title: "Kubernetes Deployment Strategies",
      preview: "Quick reference for rolling updates, blue-green deployments, and canary releases in Kubernetes...",
      tags: ["Kubernetes", "DevOps", "CI/CD"],
    },
    {
      title: "Java Stream API Patterns",
      preview: "Useful stream operations for data processing: collectors, filters, maps, and flatMaps with examples...",
      tags: ["Java", "Backend"],
    },
    {
      title: "PostgreSQL Query Optimization Tips",
      preview: "EXPLAIN ANALYZE, proper indexing strategies, query planning, and common anti-patterns to avoid...",
      tags: ["PostgreSQL", "SQL", "Performance"],
    },
    {
      title: "AWS EC2 Instance Sizing Guide",
      preview: "How to choose the right EC2 instance type based on workload: compute, memory, storage-optimized...",
      tags: ["AWS", "Cloud"],
    },
    {
      title: "Spring Boot Security Best Practices",
      preview: "JWT configuration, CORS setup, method security, password encoding, and OWASP compliance...",
      tags: ["Spring Boot", "Security", "Java"],
    },
    {
      title: "Docker Multi-Stage Builds",
      preview: "Optimizing Docker images with multi-stage builds to reduce size and improve build times...",
      tags: ["Docker", "DevOps"],
    },
    {
      title: "Linux Commands Cheat Sheet",
      preview: "Essential Linux commands for developers: grep, find, awk, sed, systemctl, and more...",
      tags: ["Linux", "DevOps"],
    },
    {
      title: "REST API Design Principles",
      preview: "RESTful conventions, HTTP methods, status codes, versioning strategies, and pagination patterns...",
      tags: ["APIs", "Backend"],
    },
    {
      title: "Git Workflow Best Practices",
      preview: "Branching strategies, commit conventions, PR reviews, and maintaining clean history...",
      tags: ["Git", "DevOps"],
    },
  ];

  return (
    <section id="notes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Digital Garden</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick notes, snippets, and learning references from my engineering journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {notes.map((note, index) => (
              <Card
                key={note.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="space-y-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {note.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{note.preview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
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

export default Notes;
