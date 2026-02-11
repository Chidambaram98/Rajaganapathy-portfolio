import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Sparkles,
  ChevronRight,
  Home,
  Code,
  Briefcase,
  FolderOpen,
  GraduationCap,
  User,
  Award,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { id: "about", label: "Home", icon: Home },
    { id: "synopsis", label: "Synopsis", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleResumeDownload = async () => {
    try {
      setDownloading(true);
      setDownloadSuccess(false);
      setDownloadError("");

      const link = document.createElement("a");
      link.href = "/raja_ganapathy_resume.pdf"; 
      link.download = "Raja_Ganapathy_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error("Resume download failed:", error);
      setDownloadError("Unable to download resume. Please try again.");
      setTimeout(() => setDownloadError(""), 3000);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-background via-background to-background/95 border-r border-border/50 overflow-y-auto flex flex-col z-40">
      
      {/* SUCCESS MESSAGE */}
      {downloadSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-slide-down">
          <div className="flex items-center gap-2 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-green-600">
              Resume download started!
            </span>
          </div>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {downloadError && (
        <div className="fixed top-4 right-4 z-50 animate-slide-down">
          <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm">
            <span className="text-sm font-medium text-red-600">
              {downloadError}
            </span>
          </div>
        </div>
      )}

      {/* PROFILE SECTION */}
      <div className="p-8 border-b border-border/50">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">RG</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-foreground mb-1">
          Raja Ganapathy D
        </h2>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Award className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium text-primary">
            Associate Software Engineer
          </p>
        </div>

        <p className="text-sm text-center text-muted-foreground leading-relaxed">
          Flutter Developer specializing in Dart and cross-platform mobile app
          development. Focused on scalable architecture, performance
          optimization, and secure API integration.
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 px-2">
          NAVIGATION
        </h3>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-accent text-foreground hover:text-primary transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* FOOTER */}
      <div className="p-6 border-t border-border/50 space-y-4">
        
        {/* SOCIAL LINKS */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/raja-ganapathy-d-4341332a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:rajaganapathy032@gmail.com"
            className="flex-1 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* RESUME BUTTON */}
        <button
          onClick={handleResumeDownload}
          disabled={downloading}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Download Resume
            </>
          )}
        </button>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="w-full h-12 rounded-xl bg-accent border border-border hover:border-primary transition-all duration-300 flex items-center justify-center gap-3"
        >
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4" />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              Light Mode
            </>
          )}
        </button>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </aside>
  );
}
