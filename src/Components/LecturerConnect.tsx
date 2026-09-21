import { MessageSquare, Send, CheckCheck, Sparkles, ArrowRight } from 'lucide-react';

const LecturerConnect = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative p-6 sm:p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-100/80 shadow-2xl shadow-indigo-500/5 overflow-hidden backdrop-blur-md">
        
        {/* Background Soft Glow Accents */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] sm:text-xs font-semibold text-indigo-700 shadow-2xs">
              <Sparkles size={13} className="text-indigo-600" />
              <span>Direct Academic Channel</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug sm:leading-tight text-slate-900">
              Direct Communication with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 underline decoration-indigo-200 decoration-wavy underline-offset-8">Lecturers</span>, zero friction.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              No more wondering if your course rep delivered your question. LectCore features a dedicated secure messaging channel that lets you reach out, ask academic queries, and receive verified responses directly from your department faculty.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  ✓
                </div>
                <span>Direct thread access to course advisers and professors</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  ✓
                </div>
                <span>Official read-receipts and broadcast confirmations</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  ✓
                </div>
                <span>Zero spam, toxic chatter, or irrelevant group noise</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a 
                href="#get-started"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 group"
              >
                <span>Try Lecturer Chat Live</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Chat Mockup Card (Mobile Optimized) */}
          <div className="lg:col-span-6 w-full">
            <div className="p-4 sm:p-6 rounded-3xl bg-white/90 border border-slate-200/80 shadow-xl shadow-slate-200/50 backdrop-blur-xl space-y-3.5 sm:space-y-4 text-left">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4 gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-md shadow-indigo-500/20 shrink-0">
                    Dr.A
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">Dr. Adebayo (CSC201)</p>
                    <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      Active Now • Office Hours
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100 font-semibold shrink-0">
                  Secure
                </span>
              </div>

              {/* Chat Messages Body */}
              <div className="space-y-3 sm:space-y-4 py-1 sm:py-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                    You
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl rounded-tl-none bg-indigo-50 border border-indigo-100 text-[11px] sm:text-xs text-slate-800 max-w-[85%] leading-relaxed font-medium">
                    Good evening Sir, please regarding the pointers assignment due Friday, can we use custom header files?
                  </div>
                </div>

                <div className="flex items-start gap-2 justify-end">
                  <div className="p-3 sm:p-3.5 rounded-2xl rounded-tr-none bg-slate-900 text-white text-[11px] sm:text-xs max-w-[85%] space-y-1.5 shadow-md">
                    <p className="leading-relaxed">Yes, custom header files are allowed as long as you document the function signatures clearly in your report.</p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-indigo-300 pt-0.5 font-medium">
                      <span>Delivered</span>
                      <CheckCheck size={12} className="text-indigo-400" />
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold shadow-xs">
                    Dr.A
                  </div>
                </div>
              </div>

              {/* Chat Input Mock */}
              <div className="pt-1 sm:pt-2 flex items-center gap-2">
                <div className="flex-1 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs text-slate-400 flex items-center justify-between min-w-0">
                  <span className="truncate">Type a message to your lecturer...</span>
                  <MessageSquare size={14} className="text-slate-400 shrink-0 ml-1" />
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 cursor-pointer flex items-center justify-center shrink-0">
                  <Send size={15} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LecturerConnect;