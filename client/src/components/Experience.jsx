import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="text-5xl font-bold text-white mb-12 flex items-center justify-center">
         
          <span className="cosmic-text">My Journey</span>
        </h2>

        <div className="[&_.vertical-timeline::before]:bg-gradient-to-b [&_.vertical-timeline::before]:from-cyan-400 [&_.vertical-timeline::before]:via-indigo-500 [&_.vertical-timeline::before]:to-purple-600 [&_.vertical-timeline::before]:left-1/2 [&_.vertical-timeline::before]:-translate-x-1/2 [&_.vertical-timeline::before]:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          <VerticalTimeline>
            {experienceData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                contentStyle={{
                  background: 'rgba(2, 6, 23, 0.4)',
                  backdropFilter: 'blur(12px)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
                dateClassName="text-slate-300 font-mono text-base"
                iconStyle={{
                  background: '#030712',
                  color: '#22d3ee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 4px #22d3ee, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
                }}
                icon={
                  <div className="flex items-center justify-center w-full h-full text-cyan-400 text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                    {item.icon ? <item.icon /> : (
                      <span className="font-mono text-xs px-2">{item.iconText}</span>
                    )}
                  </div>
                }
              >
                <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
                <h4 className="text-cyan-400/80 text-base mt-1 font-medium">{item.subtitle}</h4>
                
                {item.description && (
                  <p className="text-slate-400 text-lg leading-relaxed mt-4">{item.description}</p>
                )}

                {item.results && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.results.map((res, idx) => (
                      <div 
                        key={idx} 
                        className="relative group glass-card border-t-2 border-t-cyan-400 
                                   rounded-xl p-5 flex flex-col items-center justify-center h-28 
                                   transition-all duration-300 hover:border-t-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] overflow-hidden"
                      >
                        {/* Glassmorphism Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />
                        
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono text-center relative z-10">
                          {res.subject}
                        </p>
                        <p className="text-3xl font-bold text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:text-purple-400">
                          {res.grade}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {item.statistics && (
                  <div className="mt-6 bg-cyan-400/5 border border-white/5 rounded-xl py-3 px-6 text-center backdrop-blur-sm">
                    <p className="text-sm font-mono text-cyan-400/90 tracking-wider uppercase drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
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
