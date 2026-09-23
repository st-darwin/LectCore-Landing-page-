
import { Zap, Megaphone, ClipboardList, FileText, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

const RealTIme = () => {
  const syncFeatures = [
    {
      icon: <Megaphone className="w-5 h-5 text-purple-400" />,
      title: 'Class Announcements',
      description: 'Instant broadcast alerts pushed directly to student notification trays the moment a lecturer publishes them.',
      badge: 'Real-time Push',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-amber-400" />,
      title: 'Assignments & Deadlines',
      description: 'New tasks and upcoming due dates sync across dashboards automatically with live countdown trackers.',
      badge: 'Auto-Sync',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: 'Course Materials & Slides',
      description: 'Uploaded lecture notes and PDFs appear immediately in student libraries without manual page refreshes.',
      badge: 'Instant Access',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: 'Submission Statuses',
      description: 'Real-time tracking confirms when assignments are successfully delivered and logged into the database.',
      badge: 'Live Status',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Event-Driven Architecture</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Everything Synchronized in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Real-Time</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Eliminate communication gaps. Announcements, assignment drops, file uploads, and submission states link together seamlessly to power a live academic notification hub.
          </p>
        </div>

        {/* Feature Grid & Visual Sync Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards List (4 Features) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {syncFeatures.map((feat, index) => (
              <div 
                key={index}
                className="group p-6 rounded-[2rem] bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/50 shadow-inner">
                      {feat.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${feat.badgeColor}`}>
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Live Sync Activity Mockup Widget */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 shadow-2xl backdrop-blur-2xl overflow-hidden">
              
              {/* Decorative Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">client.subscribe()</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <RefreshCw className="w-3 h-3 animate-spin" /> Live Stream
                </span>
              </div>

              {/* Simulated Live Stream Events Feed */}
              <div className="py-6 space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/40 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-200 truncate">New Broadcast Posted</p>
                      <span className="text-[10px] text-slate-500">Just now</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">CSC 201: Mid-semester test schedule update</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/40 flex items-start gap-3 opacity-90">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <ClipboardList className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-200 truncate">Assignment Assigned</p>
                      <span className="text-[10px] text-slate-500">2m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">Data Structures Lab 3 submission open</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/40 flex items-start gap-3 opacity-75">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-200 truncate">Material Uploaded</p>
                      <span className="text-[10px] text-slate-500">15m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">Chapter 4 Slide Deck added to repository</p>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Callout */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Zero-latency database websockets</span>
                <span className="text-indigo-400 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                  Explore docs <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RealTIme;