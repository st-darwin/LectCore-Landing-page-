import { useState } from 'react';
import { ShieldCheck, Zap, Globe, Cpu, Award, Users, BookOpen, Activity, TrendingUp } from 'lucide-react';

const Badges = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'departments' | 'reps'>('all');

  const trustedStats = [
    { label: "Active Students", value: "2,500+", change: "+18% this semester", icon: Users, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
    { label: "Course Slides Shared", value: "14,000+", change: "Real-time indexed", icon: BookOpen, color: "text-sky-600 bg-sky-50 border-sky-100" },
    { label: "Group Chat Spams Saved", value: "99.9%", change: "Zero noise filter", icon: Zap, color: "text-amber-600 bg-amber-50 border-amber-100" },
    { label: "Campus Departments", value: "18+", change: "Fully integrated", icon: Globe, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  ];

  const departmentPills = [
    { name: "Computer Science Dept", icon: Cpu, count: "840+ Students", highlight: "border-indigo-200 bg-indigo-50/40 text-indigo-900" },
    { name: "Faculty of Science", icon: Zap, count: "1,420+ Students", highlight: "border-amber-200 bg-amber-50/40 text-amber-900" },
    { name: "Campus Tech Hub", icon: Globe, count: "650+ Developers", highlight: "border-sky-200 bg-sky-50/40 text-sky-900" },
    { name: "Verified Course Reps", icon: ShieldCheck, count: "42 Reps Active", highlight: "border-emerald-200 bg-emerald-50/40 text-emerald-900" },
  ];

  return (
    <section id="excel" className="py-20 border-y border-slate-200/60 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 backdrop-blur-sm relative overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Header & Interactive Filter Switcher */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] font-semibold text-indigo-700">
            <Activity size={13} className="animate-pulse text-indigo-600" />
            <span>Live Campus Network Status</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Powering Academic Excellence Across Departments
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500">
            Say goodbye to endless scrolling in WhatsApp groups. Here is how LectCore keeps students connected and organized.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              Overview Stats
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'departments' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              Active Nodes & Hubs
            </button>
          </div>
        </div>

        {/* Dynamic Content Switch based on Tab */}
        {activeTab === 'all' ? (
          /* Statistics Grid with hover tilt and interactive glow */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {trustedStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative p-6 rounded-3xl bg-white/90 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-indigo-200 transition-all duration-300 backdrop-blur-md text-left overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors pointer-events-none -z-10" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${stat.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <TrendingUp size={11} />
                      {stat.change}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          /* Department Hub Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 animate-in fade-in zoom-in-95 duration-300">
            {departmentPills.map((dept, idx) => {
              const IconComp = dept.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border shadow-2xs transition-all duration-300 hover:shadow-md text-left flex flex-col justify-between ${dept.highlight}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-white/80 shadow-xs flex items-center justify-center">
                      <IconComp size={20} className="text-slate-800" />
                    </div>
                    <Award size={18} className="opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{dept.name}</h4>
                    <p className="text-xs font-semibold opacity-75 mt-1">{dept.count}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Verification Banner */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-slate-600 text-xs font-medium">
          <ShieldCheck size={16} className="text-indigo-600" />
          <span>All departmental files are cryptographically verified and checked against spam or unverified uploads.</span>
        </div>

      </div>
    </section>
  );
};

export default Badges;