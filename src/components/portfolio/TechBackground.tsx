import { Code2, Database, Cloud, GitBranch, Server, Cpu, Lock, Terminal, Package, Boxes, Braces, FileCode, Workflow, Globe } from "lucide-react";

const TechBackground = () => {
  const techIcons = [
    { Icon: Code2, size: 64, top: "10%", left: "5%", duration: 25, delay: 0 },
    { Icon: Database, size: 48, top: "20%", left: "85%", duration: 30, delay: 2 },
    { Icon: Cloud, size: 72, top: "15%", left: "45%", duration: 35, delay: 1 },
    { Icon: GitBranch, size: 56, top: "35%", left: "15%", duration: 28, delay: 3 },
    { Icon: Server, size: 60, top: "45%", left: "75%", duration: 32, delay: 1.5 },
    { Icon: Cpu, size: 52, top: "55%", left: "10%", duration: 27, delay: 2.5 },
    { Icon: Lock, size: 48, top: "65%", left: "80%", duration: 29, delay: 0.5 },
    { Icon: Terminal, size: 64, top: "70%", left: "35%", duration: 33, delay: 4 },
    { Icon: Package, size: 56, top: "25%", left: "65%", duration: 26, delay: 3.5 },
    { Icon: Boxes, size: 68, top: "80%", left: "60%", duration: 31, delay: 1 },
    { Icon: Braces, size: 52, top: "5%", left: "75%", duration: 28, delay: 2 },
    { Icon: FileCode, size: 60, top: "50%", left: "50%", duration: 34, delay: 0 },
    { Icon: Workflow, size: 56, top: "85%", left: "20%", duration: 30, delay: 3 },
    { Icon: Globe, size: 64, top: "40%", left: "90%", duration: 29, delay: 1.5 },
    { Icon: Code2, size: 48, top: "75%", left: "5%", duration: 27, delay: 4 },
    { Icon: Database, size: 56, top: "30%", left: "30%", duration: 32, delay: 0.5 },
    { Icon: Cloud, size: 52, top: "60%", left: "40%", duration: 26, delay: 2.5 },
    { Icon: Server, size: 64, top: "90%", left: "85%", duration: 35, delay: 1 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {techIcons.map((item, index) => {
        const { Icon, size, top, left, duration, delay } = item;
        return (
          <div
            key={index}
            className="absolute opacity-[0.08] animate-float-tech"
            style={{
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon
              size={size}
              className="text-primary animate-rotate-slow"
              strokeWidth={1.5}
              style={{
                animationDuration: `${duration * 2}s`,
                animationDelay: `${delay}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechBackground;
