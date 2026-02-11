import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { HeroSection } from './components/HeroSection';
import { ProfessionalSynopsis } from './components/ProfessionalSynopsis'; 
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">

        <MobileNav />

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="lg:ml-72 overflow-x-hidden pt-[73px] lg:pt-0">

          <HeroSection />

          {/* ✅ Professional Synopsis Added Here */}
          <ProfessionalSynopsis />

          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />

        </main>
      </div>
    </ThemeProvider>
  );
}
