import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "randamoonton@gmail.com",
      link: "mailto:hello@randa.dev",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 878-5537-9985",
      link: "tel:+6287855379985",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "East Lombok, Indonesia",
      link: "#",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <p className="text-accent font-semibold mb-2 text-lg">Get In Touch</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Work Together
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all group hover:shadow-[0_0_20px_hsl(250_90%_65%/0.2)]"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">{info.title}</p>
                    <p className="text-lg font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <p className="text-foreground/70 mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 font-semibold">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(250_90%_65%/0.5)] transition-all group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
