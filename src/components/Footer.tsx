import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ArmnnWrndaa
            </h3>
            <p className="text-foreground/60">
              Building exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["about", "portfolio", "skills", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-foreground/60 hover:text-primary transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-foreground/60">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_hsl(250_90%_65%/0.3)] transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_hsl(250_90%_65%/0.3)] transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_hsl(250_90%_65%/0.3)] transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@randa.dev"
                className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_hsl(250_90%_65%/0.3)] transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} armnn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:shadow-[0_0_30px_hsl(250_90%_65%/0.5)] transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={24} />
      </button>
    </footer>
  );
};

export default Footer;
