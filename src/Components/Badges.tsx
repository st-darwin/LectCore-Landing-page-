import { useState } from 'react';
import { ShieldCheck, Zap, Globe, Cpu, Award, Users, BookOpen, Activity, TrendingUp, Sparkles } from 'lucide-react';

const Badges = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'departments'>('all');

  const trustedStats = [
    { label: "Active Students", value: "2,500+", change: "+18% this semester", icon: Users, color: "text-indigo-600 bg-indigo-50/80 border-indigo-100/80" },
    { label: "Course Slides Shared", value: "14,000+", change: "Real-time indexed", icon: BookOpen, color: "text-sky-600 bg-sky-50/80 border-sky-100/80" },
    { label: "Group Chat Spams Saved", value: "99.9%", change: "Zero noise filter", icon: Zap, color: "text-amber-600 bg-amber-50/80 border-amber-100/80" },
    { label: "Campus Departments", value: "18+", change: "Fully integrated", icon: Globe, color: "text-emerald-600 bg-emerald-50/80 border-emerald-100/80" },
  ];

  const departmentPills = [
    { name: "Computer Science Dept", icon: Cpu, count: "840+ Students", highlight: "border-indigo-200/80 bg-gradient-to-br from-indigo-50/60 to-white text-indigo-950" },
    { name: "Faculty of Science", icon: Zap, count: "1,420+ Students", highlight: "border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-white text-amber-950" },
    { name: "Campus Tech Hub", icon: Globe, count: "650+ Developers", highlight: "border-sky-200/80 bg-gradient-to-br from-sky-50/60 to-white text-sky-950" },
    { name: "Verified Course Reps", icon: ShieldCheck, count: "42 Reps Active", highlight: "border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 to-white text-emerald-950" },
  ];

  return (
    <section id="excel" className="py-20 sm:py-28 border-y border-slate-200/60 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 backdrop-blur-md relative overflow-hidden">
      
      {/* Background Soft Ambient Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[400px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-12">
        
        {/* Section Header & Interactive Filter Switcher */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-100 text-[11px] font-semibold text-indigo-700 shadow-2xs backdrop-blur-md">
            <Activity size={13} className="animate-pulse text-indigo-600 shrink-0" />
            <span>Live Campus Network Status</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Powering Academic Excellence Across Departments
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed px-2 sm:px-0">
            Say goodbye to endless scrolling in Telegram groups. Here is how LectCore keeps students connected and organized.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 cursor-pointer shadow-2xs ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]' 
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              Overview Stats
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 cursor-pointer shadow-2xs ${
                activeTab === 'departments' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]' 
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              Active Nodes & Hubs
            </button>
          </div>
        </div>

        {/* Dynamic Content Switch based on Tab */}
        <div className="transition-all duration-500">
          {activeTab === 'all' ? (
            /* Statistics Grid with hover tilt and interactive glow */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2 animate-in fade-in duration-300">
              {trustedStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="group relative p-6 rounded-3xl bg-white/90 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-indigo-200/80 transition-all duration-300 backdrop-blur-md text-left overflow-hidden hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl group-hover:bg-indigo-100/80 transition-colors pointer-events-none -z-10" />
                    
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-inner ${stat.color}`}>
                        <IconComponent size={21} />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/80 shadow-2xs">
                        <TrendingUp size={11} className="shrink-0" />
                        {stat.change}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {stat.value}
                    </h3>
                    
                    <p className="text-xs font-semibold text-slate-500 mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Department Hub Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2 animate-in fade-in duration-300">
              {departmentPills.map((dept, idx) => {
                const IconComp = dept.icon;
                return (
                  <div 
                    key={idx}
                    className={`group p-6 rounded-3xl border shadow-2xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex flex-col justify-between ${dept.highlight}`}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp size={21} className="text-slate-800" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/60 border border-slate-200/50 flex items-center justify-center">
                        <Award size={15} className="text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{dept.name}</h4>
                      <p className="text-xs font-semibold opacity-75 mt-1">{dept.count}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Verification Banner */}
        <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs text-slate-600 text-xs font-medium backdrop-blur-md max-w-2xl mx-auto text-left">
          <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0 border border-indigo-100">
            <ShieldCheck size={16} />
          </div>
          <span>All departmental files are cryptographically verified and checked against spam or unverified uploads.</span>
        </div>

      </div>
    </section>
  );
};

export default Badges;