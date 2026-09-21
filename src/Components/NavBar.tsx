import { useState, useEffect } from 'react';
import {  Menu, X, ArrowRight } from 'lucide-react';
import { navItems } from '../Utils/Constants';
import logo from "../assets/Icons/logo1.png"

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to trigger width/style transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 py-0 md:py-3 pointer-events-none">
      <div 
        className={`pointer-events-auto w-full transition-all duration-500 ease-in-out backdrop-blur-xl bg-white/80 border shadow-xs ${
          isScrolled 
            ? 'max-w-5xl mt-3  rounded-2xl md:rounded-full border-slate-200/80 shadow-indigo-500/5 py-2.5 px-4 md:px-6 shadow-lg' 
            : 'max-w-7xl rounded-2xl mt-1 border-b border-slate-200/60 py-4 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-2xl  text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <img src={logo} className='rounded-lg' alt="" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-slate-900">
                LectCore
              </span>
              <span className="block text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
                The Ultimate Study app
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-white transition-all shadow-2xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#get-started"
              className="px-5 py-2.5 rounded-xl bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-600 border border-indigo-100/80 text-xs font-semibold transition-all shadow-2xs hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 transition-colors border border-slate-200/50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Overlay Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 mx-2 sm:mx-4 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 pointer-events-auto">
            <nav className="flex flex-col space-y-1.5 text-sm font-medium text-slate-600">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={index} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-indigo-50/60 hover:text-indigo-600 transition-colors flex items-center gap-3 group"
                  >
                    {IconComponent && (
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <IconComponent size={15} />
                      </div>
                    )}
                    <span className="text-xs font-semibold">{item.label}</span>
                  </a>
                );
              })}
            </nav>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col">
              <a 
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-xs font-semibold text-indigo-600 bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-100 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;