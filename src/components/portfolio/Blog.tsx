import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "How I Built an AI-Powered Portfolio Chatbot with Spring AI",
      summary:
        "A deep dive into building an intelligent chatbot using Spring AI, RAG pipelines, and pgvector for semantic search. Learn how to automate resume queries with contextual accuracy.",
      date: "January 15, 2025",
      readTime: "8 min read",
      tags: ["Java", "Spring AI", "RAG", "PostgreSQL"],
    },
    {
      title: "Securing REST APIs with JWT, SAST, and DAST",
      summary:
        "Best practices for hardening REST APIs using JWT authentication, integrating SAST/DAST security scans, and implementing OWASP security principles in production environments.",
      date: "December 10, 2024",
      readTime: "6 min read",
      tags: ["Security", "APIs", "DevOps", "Java"],
    },
    {
      title: "From Monolith to Microservices: Lessons from My Projects",
      summary:
        "Practical insights on refactoring legacy monolithic applications into distributed microservices using Spring Boot, Docker, and Kubernetes. Real-world challenges and solutions.",
      date: "November 5, 2024",
      readTime: "10 min read",
      tags: ["Microservices", "Spring Boot", "Docker", "Architecture"],
    },
    {
      title: "Optimizing PostgreSQL Performance for High-Traffic Applications",
      summary:
        "Techniques for database optimization including query tuning, indexing strategies, connection pooling, and caching to reduce latency by 27% in production systems.",
      date: "October 20, 2024",
      readTime: "7 min read",
      tags: ["PostgreSQL", "Performance", "Backend"],
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Blog</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts on software engineering, backend systems, and cloud-native development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Card
                key={post.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="pt-2">{post.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary transition-colors"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
