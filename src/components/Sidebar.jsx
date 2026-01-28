import { Moon, Sun, Mail, Phone, MapPin, Linkedin, Github, Download, Sparkles, ChevronRight, Home, Code, Briefcase, FolderOpen, GraduationCap, User, Award, Loader2, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { api } from '../services/api';
import { useState } from 'react';

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const navItems = [
    { id: 'about', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleResumeDownload = async () => {
    try {
      setDownloading(true);
      setDownloadSuccess(false);
      setDownloadError('');
      
      // Use the API service to download resume
      const result = await api.downloadResume();
      
      // Show success message
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
      
    } catch (error) {
      console.error('Resume download error:', error);
      setDownloadError('Failed to download resume. Please try again.');
      
      // Fallback: Try direct download from public folder
      setTimeout(() => {
        try {
          const link = document.createElement('a');
          link.href = '/Chidambaram_Resume.pdf';
          link.download = 'Chidambaram_Senapathy_Resume.pdf';
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError);
        }
      }, 100);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-background via-background to-background/95 border-r border-border/50 overflow-y-auto flex flex-col z-40">
      {/* Success Message */}
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

      {/* Error Message */}
      {downloadError && (
        <div className="fixed top-4 right-4 z-50 animate-slide-down">
          <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <span className="text-sm font-medium text-red-600">
              {downloadError}
            </span>
          </div>
        </div>
      )}

      {/* Profile Section */}
      <div className="p-8 border-b border-border/50">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">CS</span>
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-4 border-background flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-foreground mb-1">
          Chidambaram Senapathy
        </h2>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Award className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium text-primary">
            Associate Software Engineer
          </p>
        </div>
        <p className="text-sm text-center text-muted-foreground leading-relaxed">
          Full Stack Developer specializing in JavaScript, Node.js, and React. Passionate about building scalable applications and optimizing backend systems.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 px-2">NAVIGATION</h3>
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
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
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
        </div>

        {/* Quick Contact */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 px-2">CONTACT INFO</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-foreground/70">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <a 
                href="mailto:chidambaramsenapathy@gmail.com"
                className="hover:text-primary transition-colors"
              >
                chidambaramsenapathy@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground/70">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <a 
                href="tel:+918667877957"
                className="hover:text-primary transition-colors"
              >
                +91 86678 77957
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground/70">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span>Namakkal, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Footer Actions */}
      <div className="p-6 border-t border-border/50 space-y-4">
        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href="https://linkedin.com/in/chidambaram-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/chidambaram-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-500/5 border border-gray-500/20 flex items-center justify-center text-foreground hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:chidambaramsenapathy@gmail.com"
            className="flex-1 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Resume Download Button */}
        <button
          onClick={handleResumeDownload}
          disabled={downloading}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 border border-border text-foreground hover:border-primary transition-all duration-300 flex items-center justify-center gap-3"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <>
              <Moon className="w-4 h-4" />
              <span className="font-medium">Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              <span className="font-medium">Light Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Add CSS animation for success message */}
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