
import { ArrowUpRight } from 'lucide-react';
import logo from "../assets/Icons/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-gradient-to-b from-transparent via-slate-50/50 to-indigo-50/20 text-slate-600 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/60">
        
        {/* Brand & Description */}
        <div className="md:col-span-6 space-y-4 text-left">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="LectCore Logo " className="w-7 h-7 object-contain rounded-lg" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              LectCore
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
             The Utlimate Study App
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Streamlining university workflows, direct faculty communication, and course resources into a single friction-free experience.
          </p>
        </div>

        {/* Quick Links & Social Connect */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8 text-left">
          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#signup" className="hover:text-indigo-600 transition-colors">Get Started</a>
              </li>
            </ul>
          </div>

          {/* Socials / Developer Contact */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Connect</p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {/* LinkedIn */}
              <li>
                <a 
                  href="https://www.linkedin.com/in/uzoma-solomon-3291113a1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 fill-slate-400 group-hover:fill-indigo-600 transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 fill-slate-400 group-hover:fill-indigo-600 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>

              {/* Telegram */}
              <li>
                <a 
                  href="https://t.me/darwin_the_creator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 fill-slate-400 group-hover:fill-indigo-600 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.259.259-.531.259l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  <span>Telegram</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 fill-slate-400 group-hover:fill-indigo-600 transition-colors" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {currentYear} LectCore. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with care for students & faculty
        </p>
      </div>
    </footer>
  );
};

export default Footer;