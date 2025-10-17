import { Download, Code2, Palette, Zap, CreditCard, MailIcon, DatabaseIcon, Code, GitBranch } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import profileImg from "@/assets/Profilee.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React & Next.js", level: 40, icon: Code2 },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Blade Component", level: 95, icon: Code },
    { name: "Laravel", level: 95, icon: Code2 },
    { name: "Tailwind CSS", level: 95, icon: Palette },
    { name: "JavaScript", level: 85, icon: Code2 },
    { name: "PHP", level: 96, icon: Code2 },
    { name: "MySQL", level: 96, icon: DatabaseIcon },
    { name: "Payment Gateway", level: 85, icon: CreditCard },
    { name: "Mailtrap", level: 80, icon: MailIcon },
     { name: "Git", level: 90, icon: GitBranch },
      { name: "Performance", level: 90, icon: Zap },
    
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 animate-glow-pulse" />
              <img
                src={profileImg}
                alt="Randa - Web Developer"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold mb-2 text-lg">About Me</p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Crafting Digital Experiences
              </h2>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed">
              I'm a passionate web developer with 3+ years of experience creating
              award-winning digital experiences. I specialize in building modern,
              performant websites and applications that users love.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed">
              My approach combines cutting-edge technology with thoughtful design,
              ensuring every project not only looks stunning but performs flawlessly.
            </p>

            {/* Skills */}
            <div className="space-y-4 pt-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-primary" size={20} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-6 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(250_90%_65%/0.5)] transition-all group"
              asChild
            >
              <RouterLink to="/cv">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download CV
              </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
