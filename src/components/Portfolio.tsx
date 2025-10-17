import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import project1 from "@/assets/AlphaTech.png";
import project2 from "@/assets/BatikSasambo.png";
import project3 from "@/assets/PiciaBakery.png";

const projects = [
  {
    id: 1,
    title: "AlphaTech",
    category: "Web Development",
    description: `AlphaTech is a web project developed by our Informatics class as an integrated platform for managing website content`,
    image: project1,  
    tags: ["JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://alpha-tech-informatics.kesug.com",
    github: "https://github.com/Randa23356",
  },
  {
    id: 2,
    title: "Batik Sasambo",
    category: "Web Development",
    description: "A stylish purple-themed marketplace for authentic Sasambo batik. Showcases cultural elegance with buttons to view collections and learn more about the brand. Ideal for local craft or fashion businesses.",
    image: project2,
    tags: ["Laravel", "Tailwind CSS", "MySQL" , "Payment Gateway" , "Blade Component" , "Mailtrap"],
    link: "#",
    github: "https://github.com/Randa23356",
  },
  {
    id: 3,
    title: "Picia Bakery",
    category: "Web Development",
    description: "An orange-themed bakery website highlighting fresh, high-quality bread and cakes. Features simple navigation, call-to-action buttons, and a warm, inviting design suited for bakeries and cafés.",
    image: project3,
    tags: ["Laravel", "Tailwind CSS", "MySQL" , "Payment Gateway" , "Blade Component"],
    link: "#",
    github: "https://github.com/Randa23356",
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
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

  const categories = ["All", "Web Development", "Mobile App"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <p className="text-accent font-semibold mb-2 text-lg">My Work</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern design and cutting-edge technology
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? "bg-gradient-to-r from-primary to-accent"
                  : "border-primary hover:bg-primary/10 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_hsl(250_90%_65%/0.3)] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 bg-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-accent rounded-full hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <p className="text-accent text-sm font-semibold">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
