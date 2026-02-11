import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor's Degree in Chemical Engineering",
      institution: 'Agni College of Technology',
      location: 'OMR, Thalambur, Chennai',
      period: "Aug 2016 – Mar 2020",
      description:
        'Completed undergraduate studies in Chemical Engineering with a strong foundation in analytical thinking, process optimization, and systematic problem-solving methodologies.',
      color: 'from-blue-500 to-cyan-500',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: 'Ownership Excellence Award',
      description:
        'Recognized for accountability, proactive initiative, and consistently delivering high-impact results in a product-based development environment.',
      icon: Trophy
    }
  ];

  return (
    <section id="education" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Education</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Background</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational foundation that shaped analytical and structured problem-solving skills
          </p>
        </div>

        {/* Education Card */}
        <div className="mb-20">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} p-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {edu.degree}
                </h3>

                <div className="space-y-3 mb-6 text-foreground/70">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Awards Section */}
        <div className="relative">

          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-pink-400/10 blur-3xl opacity-40 rounded-3xl"></div>

          <div className="relative bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-pink-500/5 border border-yellow-400/30 rounded-3xl p-12 text-center shadow-2xl">

            {/* Section Title */}
            <h3 className="text-3xl font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500">
                Awards & Recognition
              </span>
            </h3>

            <p className="text-muted-foreground mb-12">
              Professional achievements and recognition
            </p>

            {/* Center Award Card */}
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-yellow-400/40 rounded-2xl p-10 shadow-xl hover:shadow-yellow-500/20 transition-all duration-500"
                >
                  <div className="flex flex-col items-center">

                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {achievement.title}
                    </h4>

                    <p className="text-foreground/80 leading-relaxed max-w-xl">
                      {achievement.description}
                    </p>

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
