import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Award, Briefcase, Code } from "lucide-react";

const Resume = () => {
  const highlights = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "3+ Years",
    },
    {
      icon: Code,
      label: "Core Skills",
      value: "Java, Spring Boot, AWS",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "AWS SAA-C03, MTA Java",
    },
    {
      icon: FileText,
      label: "Focus Areas",
      value: "Backend, Microservices, Security",
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Resume</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="pt-6 space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Priyanka Logani</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Software Engineer with hands-on experience designing scalable backend systems, distributed 
                    microservices, and secure cloud-native applications. Specialized in Java, Spring Boot, REST APIs, 
                    React, CI/CD automation, and API security (SAST/DAST, JWT).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center p-4 bg-muted/50 rounded-lg border border-border"
                    >
                      <item.icon className="h-6 w-6 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-center">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    size="lg"
                    className="glow-primary hover:scale-105 transition-transform"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Certifications & Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">AWS Certified Solutions Architect – Associate (SAA-C03)</p>
                      <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Google Cloud Data and Storage Foundations</p>
                      <p className="text-sm text-muted-foreground">Google Cloud</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Penetration Testing: Advanced Kali Linux</p>
                      <p className="text-sm text-muted-foreground">Security Certification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">MTA: Introduction to Programming Using Java</p>
                      <p className="text-sm text-muted-foreground">Microsoft – Certified 2022</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
