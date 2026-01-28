import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, User, Code, Briefcase, FolderOpen, GraduationCap, Mail, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-background/95 to-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
              <span className="text-lg font-bold text-white">CS</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-foreground">Chidambaram S</h2>
              <p className="text-xs text-primary font-medium">Software Engineer</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-foreground hover:bg-primary hover:text-white transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center group"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              ) : (
                <Sun className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-foreground hover:bg-primary hover:text-white transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              ) : (
                <Menu className="w-5 h-5 group-hover:rotate-180 transition-transform" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/50">
          <div 
            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
            style={{ 
              width: `${(navItems.findIndex(item => item.id === activeSection) + 1) * (100 / navItems.length)}%` 
            }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">CS</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Chidambaram Senapathy</h2>
                    <p className="text-sm text-primary font-medium">Full Stack Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Crafting digital experiences with code & creativity
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-6 overflow-y-auto">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary' 
                            : 'hover:bg-accent text-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive 
                              ? 'bg-gradient-to-br from-primary to-purple-500 text-white' 
                              : 'bg-accent text-foreground/60 group-hover:text-primary'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'
                        }`} />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">2+</p>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>
            </nav>

            {/* Footer CTA */}
            <div className="p-6 border-t border-border/50">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Connect
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Chidambaram S
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}