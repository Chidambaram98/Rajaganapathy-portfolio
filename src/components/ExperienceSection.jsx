import { Briefcase, Calendar, TrendingUp, Award, Smartphone, Zap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'CAFS Infotech Pvt Ltd - Chennai, India',
      period: 'Mar 2024 – Present',
      type: 'Full-time',
      icon: Briefcase,
      color: 'from-primary to-blue-600',
      achievements: [
        'Developed scalable Flutter applications for Android and iOS platforms',
        'Owned features from requirement analysis to production deployment',
        'Integrated REST APIs using Dio with secure authentication and interceptors',
        'Implemented Riverpod for scalable state management',
        'Managed Play Store and App Store release cycles',
        'Contributed to clean architecture and performance optimization'
      ],
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'Firebase']
    }
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-ready cross-platform mobile applications
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            
            return (
              <div key={index} className="relative group">
                
                <div className="bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.title}</h3>
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-primary font-semibold mb-1">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats Section */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
                        <Smartphone className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="text-2xl font-bold text-foreground">5+</p>
                        <p className="text-xs text-muted-foreground">Production Apps</p>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20 rounded-xl">
                        <Award className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-foreground">Award</p>
                        <p className="text-xs text-muted-foreground">Ownership Excellence</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
