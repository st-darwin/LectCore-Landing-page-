import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Funsho",
      role: "Computer Science Student",
      quote: "LectCore completely saved us from scrolling through 400 Telegram messages just to find assignment prompts. Everything is right where it needs to be.",
      department: "Computer Science",
      rating: 5,
    },
    {
      name: "Tochukwu",
      role: "Software Developer & Student",
      quote: "The interface is lightning-fast and clean. Tracking assignment grades right after submitting to lecturers makes semester stress practically zero.",
      department: "Software Engineering",
      rating: 5,
    },
    {
      name: "Glory",
      role: "Campus Peer",
      quote: "Being able to see verified announcements instantly without fake panic rumors going around is a game changer for our whole department.",
      department: "Computer Science",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Star size={14} className="text-indigo-600 fill-indigo-600" />
            <span>Loved by Students</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Hear from students already cruising through their semesters.
          </h2>
          
          <p className="text-sm text-slate-500 leading-relaxed">
            Discover why students across departments are leaving messy group chats behind for LectCore.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="relative p-8 rounded-3xl bg-white/80 border border-slate-200/80 shadow-2xl shadow-indigo-500/5 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-indigo-200 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-indigo-200" />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 size={13} className="text-indigo-600" />
                  </h4>
                  <p className="text-[11px] text-slate-500">{review.role}</p>
                </div>
                <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                  {review.department}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;