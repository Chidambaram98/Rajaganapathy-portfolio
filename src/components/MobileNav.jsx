import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  User,
  Home,
  Code,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'Home', icon: Home },
    { id: 'synopsis', label: 'Synopsis', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // ✅ FIXED SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120; // height of fixed header
      const scrollPosition = window.scrollY + headerOffset;

      let currentSection = navItems[0].id;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED SCROLL FUNCTION (header offset handled)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-md">
        <div className="flex items-center justify-between px-4 py-3.5">
          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md">
              <span className="text-lg font-bold text-white">RG</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-foreground">
                Rajaganapathy
              </h2>
              <p className="text-xs text-primary font-medium">
                Flutter Developer
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-5 h-5 rotate-90 transition-transform" />
              ) : (
                <Menu className="w-5 h-5 transition-transform" />
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-border">
          <div
            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
            style={{
              width: `${
                ((navItems.findIndex(
                  (item) => item.id === activeSection
                ) +
                  1) *
                  100) /
                navItems.length
              }%`
            }}
          />
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-all duration-300 ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col pt-20">

          {/* Tagline */}
          <div className="px-6 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              Building scalable and high-performance mobile applications
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-6 overflow-y-auto">
            <ul className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full px-4 py-4 rounded-2xl flex items-center justify-between transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30 text-primary shadow-md'
                          : 'hover:bg-accent text-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive
                              ? 'bg-gradient-to-br from-primary to-purple-500 text-white'
                              : 'bg-accent text-muted-foreground'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">
                          {item.label}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isActive
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Quick Stats */}
            <div className="mt-8 p-5 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl text-center shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">2+</p>
                  <p className="text-xs text-muted-foreground">Years Exp</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">5+</p>
                  <p className="text-xs text-muted-foreground">Live Apps</p>
                </div>
              </div>
            </div>
          </nav>

          {/* FOOTER */}
          <div className="p-6 border-t border-border">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Let's Connect
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Rajaganapathy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
