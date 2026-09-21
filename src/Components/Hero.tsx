import {  ArrowRight, CheckCircle2, FileText, Download, Users, Bell } from 'lucide-react';
import heroImage from "../assets/Icons/heroImage.png";

const Hero = () => {
  return (
    <section className="relative mt-16 md:mt-14 pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Soft Glow & Grid Accents */}
      <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/70 to-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Live Dynamic Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-50/90 border border-indigo-100/80 text-xs font-semibold text-indigo-700 shadow-2xs backdrop-blur-md">
         
            <span className="tracking-wide">The Ultimate Web App for Students</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 font-bold leading-[1.12]">
            Tired of looking for Slides in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 underline decoration-indigo-200 decoration-wavy decoration-1 underline-offset-8">Group chats?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            LectCore centralizes departmental lectures, real-time assignment drops, and course material into one lightning-fast, zero-clutter platform designed to keep you ahead.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a 
              href="#get-started"
              className="px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
            >
              <span>Get Started Free</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:border-slate-300 flex items-center justify-center gap-2"
            >
              <span>Explore Features</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-200/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-indigo-600" />
              <span>Instant Real-Time Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-indigo-600" />
              <span>Zero Group Chat Hassle</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-indigo-600" />
              <span>Free Forever for Students</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image / Interactive Mockup Preview with Floating Cards */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Backdrop Gradient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-15 pointer-events-none" />

            {/* Floating Notification Card 1 (Top Left) */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl animate-bounce duration-1000">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Bell size={18} />
              </div>
              <div className="text-left pr-2">
                <p className="text-[11px] font-bold text-slate-900">New Slide Dropped!</p>
                <p className="text-[10px] text-slate-500">CSC201_Lecture_4.pdf</p>
              </div>
            </div>

            {/* Floating Notification Card 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Users size={18} />
              </div>
              <div className="text-left pr-2">
                <p className="text-[11px] font-bold text-slate-900">142 Peers Active</p>
                <p className="text-[10px] text-emerald-600 font-medium">Syncing live feed</p>
              </div>
            </div>

            {/* Main Preview Container */}
            <div className="relative rounded-3xl p-3 bg-white/70 backdrop-blur-2xl border border-slate-200/80 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 relative group">
                
                {/* Hero Asset or Fallback */}
                <img 
                  src={heroImage} 
                  alt="LectCore Dashboard Preview" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Built-in fallback mockup visual if image asset is missing */}
                <div className="p-6 text-left text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-500/30">lectcore://portal/feed</span>
                  </div>
                  <div className="space-y-2.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">DataStructures_Notes.pdf</p>
                          <p className="text-[10px] text-slate-400">Uploaded 2 mins ago • Dr. Ade</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-indigo-300 font-medium px-2 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30">View</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                          <Download size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">MTH203_Assignment_3.pdf</p>
                          <p className="text-[10px] text-slate-400">Due Friday, 11:59 PM</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-300 font-medium px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30">Download</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;