import ctaImage from "../assets/Icons/ctaImage.png";
import { ArrowRight,  Check } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative p-6 sm:p-10 lg:p-16 rounded-[2.5rem] bg-gradient-to-b from-white via-slate-50/60 to-indigo-50/20 border border-slate-200/60 shadow-2xl shadow-slate-200/30 overflow-hidden backdrop-blur-2xl">
        
        {/* Soft, Layered Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Cool, Soft, Sleek Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Backglow blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-3xl filter blur-2xl -z-10 transform scale-95" />
              
              {/* Neat floating card frame around the image */}
              <div className="p-3 sm:p-4 rounded-3xl bg-white/70 border border-slate-200/80 shadow-xl shadow-indigo-950/[0.03] backdrop-blur-md">
                <img 
                  src={ctaImage} 
                  alt="Platform Illustration" 
                  className="relative w-full h-auto object-contain rounded-2xl transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content & Single CTA Button */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/80 text-[11px] sm:text-xs font-semibold text-indigo-600 shadow-2xs">
              
              <span>🚀 Get Started Today</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug sm:leading-tight text-slate-900">
              Transform Your Academic Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">LectCore</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Join thousands of students experiencing zero-friction communication, organized resources, and streamlined university workflows. Step into a smarter way to manage your semester.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span>Instant access to course materials and faculty channels</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span>Real-time notifications and secure broadcast updates</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-3">
              <a 
                href="#signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30  group"
              >
                <span>Get Started</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;