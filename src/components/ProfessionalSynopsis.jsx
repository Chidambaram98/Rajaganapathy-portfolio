import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProfessionalSynopsis() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    "2+ years of professional experience in Flutter application development using Dart, building scalable, production-ready mobile applications for Android and iOS.",
    "Hands-on experience in end-to-end mobile app development lifecycle, including feature development, testing, deployment, and Play Store / App Store release management.",
    "Worked on 5+ mobile applications in a product-based company, owning features from requirement analysis to production deployment.",
    "Strong experience in RESTful API integration using Dio, including API consumption, authentication, interceptors, error handling, and response parsing.",
    "Implemented state management using setState and Riverpod, improving application scalability, performance, and code maintainability.",
    "Designed and maintained scalable base project architecture, including reusable widgets, modular folder structures, and shared utilities.",
    "Actively involved in code reviews, ensuring adherence to Flutter best practices, clean architecture principles, and performance optimization.",
    "Developed responsive and adaptive UI components to deliver consistent user experiences across multiple screen sizes and device types.",
    "Proficient in Git version control, including branching strategies, pull requests, merge conflict resolution, and collaborative workflows.",
    "Recognized as an Ownership Award Winner for demonstrating strong feature ownership, accountability, and delivering high-impact product features.",
    "Firebase Notifications – Familiar with integrating Firebase Cloud Messaging (FCM) for push notifications in Flutter apps.",
    "Quick to adapt to new technologies and frameworks, with a continuous focus on performance, scalability, and product quality."
  ];

  return (
    <section
      id="synopsis"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/10 -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Professional Synopsis
          </h2>

          {/* Decorative Gradient Line */}
          <div className="w-28 h-1 mx-auto mt-5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full" />

          {/* Subtitle */}
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-medium">
            Career Summary & Technical Expertise
          </p>
        </div>

        {/* ================= CARD ================= */}
        <div
          className={`relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl shadow-2xl p-10 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Left Gradient Border */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-l-3xl animate-pulse" />

          {/* Scrollable Content */}
          <div className="max-h-[500px] overflow-y-auto pr-4 space-y-6 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent">

            {points.map((text, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 transition-all duration-700 hover:translate-x-2 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Icon */}
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
