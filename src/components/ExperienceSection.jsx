import { Briefcase, Calendar, TrendingUp, Users, Code, Zap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'CAFS Organization - Chennai, India',
      period: 'Aug 2024 – Oct 2025',
      type: 'Full-time',
      icon: Briefcase,
      color: 'from-primary to-blue-600',
      achievements: [
        'Developed and optimized backend APIs using Node.js, Express.js, and MongoDB',
        'Improved system response time by 25-30% through performance tuning',
        'Automated repetitive operational tasks using Puppeteer',
        'Mentored interns and supported team knowledge-sharing initiatives',
        'Enhanced application stability through debugging and database optimization'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Puppeteer', 'JavaScript']
    },
    {
      title: 'Software Engineer Intern',
      company: 'CAFS Organization - Chennai, India',
      period: 'Jan 2024 – Aug 2024',
      type: 'Internship',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Assisted in full-stack development of CRM modules',
        'Worked on frontend interfaces using React.js',
        'Participated in database query optimization',
        'Contributed to system debugging and testing',
        'Learned and applied best practices in software development'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable applications and optimizing backend systems
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative group ${isEven ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300`}>
                    <Icon className="w-3 h-3 text-white m-auto mt-0.5" />
                  </div>

                  <div className={`ml-12 md:ml-0 bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up ${
                    isEven ? 'md:mr-8' : 'md:ml-8'
                  }`} style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.title}</h3>
                          <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          <span className="font-semibold">{exp.company}</span>
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

                    {/* Stats */}
                    {index === 0 && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-bold text-foreground">25-30%</p>
                            <p className="text-xs text-muted-foreground">Performance Boost</p>
                          </div>
                          <div className="text-center p-3 bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20 rounded-xl">
                            <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-foreground">Team</p>
                            <p className="text-xs text-muted-foreground">Mentoring</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}