import { ExternalLink, Github, Zap, Users, Shield, Globe, BarChart3, Lock, Cpu, Database } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'CAFS360 - CRM System',
      description: 'Comprehensive CRM system for BPO operations with client management, lead tracking, and automated workflow features. Handles multiple user roles and complex business logic.',
      technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'JavaScript', 'Puppeteer'],
      link: '#',
      github: '#',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      stats: [
        { label: 'Performance', value: '30% Faster' },
        { label: 'Automation', value: '70% Reduced' },
        { label: 'Modules', value: '5+' }
      ]
    },
    {
      title: 'CAFS Money - Investment Platform',
      description: 'Investment tracking and portfolio management application with real-time data updates, transaction history, and detailed analytics dashboard.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Charts.js', 'REST APIs'],
      link: '#',
      github: '#',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      stats: [
        { label: 'Accuracy', value: '99.9%' },
        { label: 'Real-time', value: 'Live Data' },
        { label: 'Security', value: 'High' }
      ]
    },
    {
      title: 'Vault - Secure Data Management',
      description: 'Secure data storage and management system with encryption, role-based access control, and audit logging. Focus on data security and compliance.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'AES Encryption', 'JWT', 'Security'],
      link: '#',
      github: '#',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      stats: [
        { label: 'Security', value: 'Enterprise' },
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Access Levels', value: '4' }
      ]
    },
    {
      title: 'Demo Travel Website',
      description: 'Responsive travel booking website with destination browsing, package details, booking forms, and interactive maps. Modern UI with smooth animations.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Google Maps API'],
      link: '#',
      github: '#',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      stats: [
        { label: 'Responsive', value: '100%' },
        { label: 'Pages', value: '10+' },
        { label: 'Animations', value: 'Smooth' }
      ]
    }
  ];

  const projectStats = [
    { icon: Zap, label: 'Projects Completed', value: '5+', color: 'text-blue-500' },
    { icon: Cpu, label: 'Technologies Used', value: '8+', color: 'text-purple-500' },
    { icon: Database, label: 'Databases', value: '3+', color: 'text-green-500' },
    { icon: Shield, label: 'Security Focused', value: '100%', color: 'text-orange-500' },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'bg-')}/10 ${stat.color.replace('text-', 'border-')}/20 border`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} rounded-full -translate-y-24 translate-x-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-3`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {project.stats.map((stat, statIndex) => (
                              <span
                                key={statIndex}
                                className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-primary/5 to-primary/10 text-primary rounded-full"
                              >
                                {stat.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-sm bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div className="px-8 py-6 border-t border-border/50 bg-gradient-to-r from-background/20 to-background/10">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          className="group/link flex items-center gap-2 text-primary hover:text-purple-500 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          className="group/link flex items-center gap-2 text-primary hover:text-purple-500 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Source Code</span>
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {project.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-right">
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                            <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl">
            <Zap className="w-6 h-6 text-primary" />
            <p className="text-lg font-medium text-foreground">
              Interested in my work? <span className="text-primary font-semibold">Let's build something amazing!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}