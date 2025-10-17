import { Download, FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CVDownload = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Assuming CV file is in public folder
    const link = document.createElement("a");
    link.href = "/cv-resume.pdf"; // Update this path if your CV file has a different name
    link.download = "Arman_Wiranda_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Download My CV
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Get a detailed overview of my skills, experience, and projects. Feel free to download and share!
            </p>
          </div>

          {/* CV Preview Section */}
          <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Curriculum Vitae</h2>
                <p className="text-foreground/60">Professional Summary & Portfolio Highlights</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground/60">Last Updated</p>
                <p className="font-semibold">October 2025</p>
              </div>
            </div>

            {/* CV Preview Content (you can customize this) */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Technical Skills</h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• Frontend: React, Next.js, Tailwind CSS, Blade Component, Bootstrap</li>
                    <li>• Backend: Laravel, PHP</li>
                    <li>• Database: MySQL</li>
                    <li>• Tools: Git</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Experience</h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• Full Stack Developer (2+ years)</li>
                    <li>• UI/UX Design Enthusiast</li>
                    <li>• Open Source Contributor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(250_90%_65%/0.5)] transition-all group px-8 py-4"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              Download CV (PDF)
            </Button>
            <p className="text-xs text-foreground/50 mt-4">
              File size: ~2MB • Format: PDF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownload;
