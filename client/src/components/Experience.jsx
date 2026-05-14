import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">02.</span> My Journey
        </h2>

        <div className="[&_.vertical-timeline::before]:bg-cyan-400/30">
          <VerticalTimeline>
            {experienceData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                contentStyle={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: '16px',
                  boxShadow: 'none',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(34, 211, 238, 0.35)' }}
                dateClassName="text-slate-300 font-mono text-base"
                iconStyle={{
                  background: '#0f172a',
                  color: '#22d3ee',
                  border: '2px solid #22d3ee',
                  boxShadow: '0 0 0 4px rgba(34, 211, 238, 0.10)',
                }}
                icon={
                  <div className="h-full w-full flex items-center justify-center text-cyan-400">
                    {item.icon ? <item.icon className="w-5 h-5" /> : (
                      <span className="font-mono text-xs px-2">{item.iconText}</span>
                    )}
                  </div>
                }
              >
                <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-slate-300 text-base mt-1">{item.subtitle}</h4>
                
                {item.description && (
                  <p className="text-slate-400 text-lg leading-relaxed mt-4">{item.description}</p>
                )}

                {item.results && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.results.map((res, idx) => (
                      <div 
                        key={idx} 
                        className="relative group bg-[#0f172a]/80 border border-slate-800 border-t-2 border-t-cyan-400 
                                   rounded-xl p-5 flex flex-col items-center justify-center h-28 
                                   shadow-xl shadow-black/40 backdrop-blur-md overflow-hidden"
                      >
                        {/* Glassmorphism Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />
                        
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono text-center relative z-10">
                          {res.subject}
                        </p>
                        <p className="text-3xl font-bold text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {res.grade}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {item.statistics && (
                  <div className="mt-6 bg-cyan-400/5 border border-cyan-400/10 rounded-xl py-3 px-6 text-center backdrop-blur-sm">
                    <p className="text-sm font-mono text-cyan-400/90 tracking-wider uppercase">
                      {item.statistics}
                    </p>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
