import { ExternalLink, Zap, Shield, Smartphone, BarChart3, Users, Globe } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Cafs Money',
      description: [
        'Developed a production-grade Flutter fintech application for mutual fund and SIP tracking in a product-based environment.',
        'Implemented REST API integration using Dio and state management with Riverpod, focusing on performance, scalability, and clean architecture.'
      ],
      playstore: 'https://play.google.com/store/apps/details?id=com.cafsindia.cmf&hl=en_IN',
      appstore: 'https://apps.apple.com/ng/app/cafs-money-mutual-fund-sip/id6745786727',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cafs 360',
      description: [
        'Contributed to a Flutter mobile application providing 360-degree financial services and customer engagement features.',
        'Implemented API-driven modules, optimized screen navigation, and ensured performance.'
      ],
      playstore: 'https://play.google.com/store/apps/details?id=com.cafs.cafs360&hl=en_IN',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Collman HR',
      description: [
        'Developed a Flutter-based HR application focused on internal workforce operations and employee self-service features.',
        'Owned feature-level development, debugging, and UI optimization to deliver a stable production release.'
      ],
      playstore: 'https://play.google.com/store/apps/details?id=com.cafsinfotech.collman&hl=en_IN',
      appstore: 'https://apps.apple.com/ng/app/collman-hr/id6756573031',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Smart HRMS',
      description: [
        'Built a Flutter-based HRMS mobile application supporting employee management, payroll workflows, and attendance tracking.',
        'Developed modular UI components and integrated APIs to ensure secure data flow, performance efficiency, and scalable architecture.'
      ],
      playstore: 'https://play.google.com/store/apps/details?id=com.cafsinfotech.smarthrms&hl=en_IN',
      appstore: 'https://apps.apple.com/ng/app/smart-hrms-hr-payroll/id6749928457',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'ARTHA',
      description: [
        'Designed and developed a Flutter front-end–only calculator application focused on mutual fund investment calculations.',
        'Implemented complex UI logic and reusable widgets to deliver accurate calculations and a clean, intuitive user experience.'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
    }
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Mobile Products</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Applications</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-ready Flutter applications available on Play Store & App Store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-8">

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <ul className="mb-6 list-disc pl-5">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-foreground/80 leading-relaxed mb-[10px]">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 flex-wrap">
                    {project.playstore && (
                      <a
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:opacity-90 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Play Store
                      </a>
                    )}

                    {project.appstore && (
                      <a
                        href={project.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        App Store
                      </a>
                    )}
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
