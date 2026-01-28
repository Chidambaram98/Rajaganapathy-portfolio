import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: 'B.E Mechanical Engineering',
      institution: 'Angel College of Engineering and Technology',
      location: 'Tamil Nadu, India',
      period: '2015 – 2019',
      score: '68%',
      description: 'Graduated with strong analytical and problem-solving skills. Developed a foundation in systematic thinking and technical analysis.',
      type: 'degree',
      color: 'from-blue-500 to-cyan-500',
      icon: GraduationCap
    },
    {
      degree: 'Java Full Stack Developer',
      institution: 'UNIQ Technologies',
      location: 'T-Nagar, Chennai, Tamil Nadu',
      period: '2023 – 2024',
      score: 'Certificate',
      description: 'Comprehensive training in Java, Spring Boot, React, MySQL, and modern web development practices. Completed multiple hands-on projects.',
      type: 'certification',
      color: 'from-purple-500 to-pink-500',
      icon: Award
    }
  ];

  const achievements = [
    {
      title: 'Mechanical to Software',
      description: 'Successfully transitioned from mechanical engineering to software development',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      title: 'Full Stack Certification',
      description: 'Certified Java Full Stack Developer with hands-on project experience',
      icon: Trophy,
      color: 'text-purple-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Constantly updating skills with latest technologies and frameworks',
      icon: Award,
      color: 'text-green-500'
    }
  ];

  return (
    <section id="education" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Certification</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional training that shaped my technical journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} p-3`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full mb-2">
                          {edu.type === 'degree' ? 'Degree' : 'Certification'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-full">
                        <span className="text-sm font-bold text-green-600">{edu.score}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Status</span>
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-600 rounded-full">
                        {edu.type === 'degree' ? 'Completed' : 'Certified'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Key Achievements</h3>
            <p className="text-muted-foreground">Milestones in my learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-background/50 to-background/30 border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${achievement.color.replace('text-', 'bg-')}/10 border ${achievement.color.replace('text-', 'border-')}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        {achievement.description}
                      </p>
                    </div>
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