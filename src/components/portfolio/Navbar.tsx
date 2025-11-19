import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            PL
          </button>

          <div className="hidden md:flex items-center gap-6">
            {["home", "about", "skills", "experience", "projects", "blog", "notes", "resume"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors capitalize"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            variant="outline"
            size="sm"
            className="hover:glow-primary transition-all"
          >
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
