import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creative Web Developer";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Animated Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-20 animate-gradient-shift"
          style={{
            background: "var(--gradient-hero)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up">
          <p className="text-accent text-lg md:text-xl mb-4 font-medium">
            Hi, I'm Armnn
          </p>
          
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {displayText}
            <span className={`${isTypingComplete ? "animate-pulse" : ""}`}>|</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building stunning, interactive web experiences that push the boundaries of design and technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_hsl(250_90%_65%/0.6)] transition-all group text-base md:text-lg px-8 py-6"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary hover:bg-primary/10 hover:text-white text-base md:text-lg px-8 py-6"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:randamoonton@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
