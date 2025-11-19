import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Blog from "@/components/portfolio/Blog";
import Notes from "@/components/portfolio/Notes";
import Resume from "@/components/portfolio/Resume";
import Footer from "@/components/portfolio/Footer";
import TechBackground from "@/components/portfolio/TechBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <TechBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Notes />
        <Resume />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
