import { useState, useEffect, useRef } from "react";
import { Code2, Palette, Database, GitBranch, CreditCard, Mail, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, Tailwind CSS, JavaScript, Blade Component, Bootstrap",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Responsive Design, User Interface",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Backend & Laravel",
    description: "PHP, Laravel, Blade Components",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database",
    description: "MySQL, Database Management",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git, GitHub, Collaboration",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Payment Gateway, Secure Transactions",
    color: "from-pink-500 to-rose-500",
  },
];


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <p className="text-accent font-semibold mb-2 text-lg">What I Do</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Skills & Expertise
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Full-stack capabilities with a focus on creating exceptional user experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(250_90%_65%/0.2)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                />
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="text-primary" size={32} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-foreground/70">{skill.description}</p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div
          className={`mt-24 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          
          <div className="space-y-8">
            {[
              {
                year: "2025 - Present",
                title: "Full Stack Web Developer And Freelance",
                company: "Ftwodev",
                description: "Building modern, performant websites and applications",
              },
              {
                year: "2024 - 2025",
                title: "Full Stack Web Developer",
                company: "BlocDev",
                description: "Built scalable web applications with my mentor",
              },
              {
                year: "2023 - 2024",
                title: "Project Self",
                company: "-",
                description: "Developed a website for my portfolio",
              },
              {
                year: "2022 - 2023",
                title: "Learning Web Development",
                company: "-",
                description: "Learning web development",
              }
            ].map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="space-y-2">
                  <p className="text-accent font-semibold">{exp.year}</p>
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
