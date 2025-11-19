import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Microservices", "REST APIs", "Hibernate", "JPA", "JDBC", "Maven"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Bootstrap"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Linux", "CI/CD"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      title: "Security",
      skills: ["SAST", "DAST", "OWASP", "JWT/Auth", "API Hardening"],
      color: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Kafka basics", "Agile/Scrum"],
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      title: "Other",
      skills: ["Distributed Systems", "JUnit", "Mockito", "System Design"],
      color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <Card
                key={group.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`${group.color} hover:scale-110 transition-transform cursor-default`}
                      >
                        {skill}
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

export default Skills;
