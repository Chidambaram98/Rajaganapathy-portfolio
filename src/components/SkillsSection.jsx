import { Zap, Code, Server, Database, Terminal, Cpu, Layers, Palette } from 'lucide-react';

export function SkillsSection() {
  const techCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js', 'JavaScript', 'HTML5', 'CSS3', 
        'Tailwind CSS', 'Material UI'
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Node.js', 'Express.js','Java', 'Spring Boot', 'PHP'
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        'MongoDB', 'MySQL'
      ]
    },
    {
      title: 'Tools & Others',
      icon: Terminal,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Git', 'GitHub', 'Postman', 'Puppeteer', 
        'JWT', 'OAuth'
      ]
    }
  ];

  const allTech = [
    'JavaScript', 'Node.js', 'React', 'Express.js',
    'MongoDB', 'MySQL',  'HTML5/CSS3',
    'Tailwind CSS', 'Git', 'Postman', 'Puppeteer',
    'Java', 'PHP', 'JWT',
    'Spring Boot'
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl  px-6 w-full mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category-wise Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 bg-gradient-to-r from-background/50 to-background/30 border border-border/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Technologies Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Complete Tech Stack</h3>
            <p className="text-muted-foreground">Technologies I've worked with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allTech.map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-gradient-to-br from-background/50 to-background/30 border border-border/50 rounded-xl text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-foreground group-hover:text-primary transition-colors">
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}