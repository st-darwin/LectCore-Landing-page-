import { BookOpen, BellRing, ShieldCheck, Zap, Users, ArrowUpRight, Megaphone, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: BookOpen,
      title: "Centralized Slide Repository",
      description: "Never hunt through 500-message Telegram threads again. Every lecture note, PDF, and past question is indexed by course code and date.",
      badge: "Instant Access",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
      span: "lg:col-span-7",
    },
    {
      icon: BellRing,
      title: "Real-Time Assignment Alerts",
      description: "Get push and feed updates the exact second a lecturer drops an assignment or changes a submission deadline.",
      badge: "Zero Missed Deadlines",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      span: "lg:col-span-5",
    },
    {
      icon: Megaphone,
      title: "Instant Announcements Hub",
      description: "Never miss venue changes, pop-up test notices, or emergency lecture rescheduling broadcasted straight to your dashboard.",
      badge: "Live Feed",
      color: "text-purple-600 bg-purple-50 border-purple-100",
      span: "lg:col-span-5",
    },
    {
      icon: CheckCircle2,
      title: "Assignment Grading & Feedback",
      description: "Submit coursework instantly and track your status as lecturers review, score, and leave direct notes on your submissions.",
      badge: "Live Grades",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      span: "lg:col-span-7",
    },
    {
      icon: ShieldCheck,
      title: "Verified Course Rep Channel",
      description: "Say goodbye to rumors and fake panic. Only trusted, official course reps can broadcast official timetable changes and updates.",
      badge: "100% Reliable",
      color: "text-teal-600 bg-teal-50 border-teal-100",
      span: "lg:col-span-6",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Search",
      description: "Type any keyword—like 'CSC201 pointers' or 'MTH203 integration'—and jump straight to the exact page in seconds.",
      badge: "Blazing Fast",
      color: "text-sky-600 bg-sky-50 border-sky-100",
      span: "lg:col-span-6",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Users size={14} className="text-indigo-600" />
            <span>Built by Students, for Students</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to ace your semester, zero clutter.
          </h2>
          
          <p className="text-sm text-slate-500 leading-relaxed">
            LectCore replaces messy group chats and scattered flash drives with an organized, high-performance academic operating system.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {featuresList.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={idx}
                className={`${feature.span} group relative p-8 rounded-3xl bg-white/80 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-indigo-200 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-indigo-50/60 rounded-full blur-3xl group-hover:bg-indigo-100 transition-all pointer-events-none -z-10" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feature.color} shadow-2xs`}>
                      <IconComponent size={22} />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      {feature.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <span>{feature.title}</span>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Optional mini interactive footer line inside card */}
                <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-indigo-600">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore module &rarr;
                  </span>
                  <span className="text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;