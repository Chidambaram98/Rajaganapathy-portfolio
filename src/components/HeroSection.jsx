import { Download, Eye, ChevronDown,Smartphone,Upload,Layers, Sparkles, Code, Server, Database, Zap, Loader2, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { api } from '../services/api'; 
import resumePDF from "../assets/raja_ganapathy_resume.pdf";

export function HeroSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeDownload = async () => {
    try {
      setDownloading(true);
      setDownloadSuccess(false);

      // Try Local Resume First
        const link = document.createElement("a");
          link.href = "/raja_ganapathy_resume.pdf"; 
        link.download = "Raja_Ganapathy_Resume.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadSuccess(true);
    } catch (localError) {
      console.warn("Local resume failed. Trying API...", localError);

      try {
        await api.downloadResume();
        setDownloadSuccess(true);
      } catch (apiError) {
        console.error("API download failed:", apiError);
        alert(
          "Unable to download resume. Please try again or email me at rajaganapathy032@gmail.com"
        );
      }
    } finally {
      setDownloading(false);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">Associate Software Engineer</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                <span className="block">Raja Ganapathy</span>
                {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                  Senapathy
                </span> */}
              </h1>
              
              <div className="h-12 mb-4">
                <TypeAnimation
                  sequence={[
                    'Associate Software Engineer',
                    1500,
                    'Flutter Developer',
                    1500,
                    'Mobile App Developer',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium"
                  repeat={Infinity}
                />
              </div>
            </div>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
            Building scalable cross-platform mobile applications with <span className="text-primary font-semibold">Flutter</span> and <span className="text-primary font-semibold">Dart</span>. 
            Passionate about clean architecture, efficient state management, and seamless <span className="text-primary font-semibold">REST API integration</span> to deliver high-performance Android and iOS apps.
          </p>

           {/* Tech Badges */}
            <div className="flex flex-wrap gap-3">
              {['Flutter', 'Dart', 'Riverpod', 'GetX', 'REST APIs', 'Dio', 'Firebase', 'Git'].map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full backdrop-blur-sm hover:border-primary/40 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <Eye className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-semibold">View Portfolio</span>
              </button>

              <button
                onClick={handleResumeDownload}
                disabled={downloading}
                className="group relative px-8 py-4 bg-card/50 backdrop-blur-sm border-2 border-primary/30 text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {downloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    <span className="font-semibold">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="font-semibold">Download Resume</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 w-64 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-primary/30 rotate-6 animate-float">
                <div className="p-6">
                  <Code className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Flutter Developer</h3>
                  <p className="text-sm text-foreground/70">Flutter, Dart, Riverpod</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-64 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-300/30 -rotate-6 animate-float-delayed">
                <div className="p-6">
                  <Server className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Architecture</h3>
                  <p className="text-sm text-foreground/70">5+ Production Apps</p>
                </div>
              </div>

              {/* Center Profile Card */}
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-card via-card/90 to-card/80 rounded-3xl border border-border/50 shadow-2xl backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl font-bold text-white">RG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Raja Ganapathy D</h3>
                  <p className="text-primary font-medium">Associate Software Engineer</p>
                  <p className="text-sm text-muted-foreground mt-4 text-center">CAFS Infotech Pvt Ltd | Mar 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-24 pt-12 border-t border-border/50">

          {[
            { value: '2+', label: 'Years Experience', icon: Zap, color: 'text-yellow-500' },
            { value: '5+', label: 'Production Apps', icon: Smartphone, color: 'text-primary' },
            { value: 'Android & iOS', label: 'App Deployment', icon: Upload, color: 'text-blue-500' },
            { value: '8+', label: 'Flutter Tech Stack', icon: Layers, color: 'text-cyan-500' },
          ].map((stat, index) => (
            
            <div
              key={index}
              className="group h-full min-h-[140px] p-6 bg-card/30 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 animate-slide-up flex flex-col justify-between"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'bg-')}/10 border ${stat.color.replace('text-', 'border-')}/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors break-words">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-20px) rotate(-6deg); }
        }
        @keyframes slide-down {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 1.5s;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--primary)/0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)/0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}