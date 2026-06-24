import { experienceData } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-12">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.35em] text-cyan-400/70 uppercase mb-3">
            Career Trajectory
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="cosmic-text">My Journey</span>
          </h2>
        </div>

        <ol className="relative">
          {/* central spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] overflow-hidden">
            <span className="journey-pulse" />
          </div>

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={item.id}
                className="relative mb-14 last:mb-0 md:grid md:grid-cols-2 md:gap-x-16"
              >
                {/* waypoint node */}
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10 block w-3.5 h-3.5 rotate-45 bg-[#030712] border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />

                <div
                  className={
                    isLeft
                      ? 'pl-12 md:pl-0 md:col-start-1 md:pr-12'
                      : 'pl-12 md:col-start-2 md:pl-12'
                  }
                >
                  {/* connector tick toward the spine - desktop only */}
                  <span
                    className={
                      isLeft
                        ? 'hidden md:block absolute top-3.5 right-0 h-px w-8 bg-gradient-to-l from-cyan-400/70 to-transparent'
                        : 'hidden md:block absolute top-3.5 left-0 h-px w-8 bg-gradient-to-r from-cyan-400/70 to-transparent'
                    }
                  />

                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-cyan-400/40">
                    {/* corner brackets - signature HUD accent */}
                    <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl pointer-events-none" />
                    <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl pointer-events-none" />

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-lg shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                        {item.icon ? (
                          <item.icon />
                        ) : (
                          <span className="font-mono text-[10px] px-1">{item.iconText}</span>
                        )}
                      </span>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400/70 uppercase">
                        {String(index + 1).padStart(2, '0')} / {item.date}
                      </p>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md">
                      {item.title}
                    </h3>
                    <h4 className="text-cyan-400/80 text-sm md:text-base mt-1 font-medium">
                      {item.subtitle}
                    </h4>

                    {item.description && (
                      <p className="text-slate-400 text-base leading-relaxed mt-4">
                        {item.description}
                      </p>
                    )}

                    {item.results && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.results.map((res, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-lg border border-white/5 bg-black/30 py-3 px-2 text-center overflow-hidden group/stat"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />
                            <p className="relative text-[9px] text-slate-500 uppercase tracking-[0.15em] font-mono mb-1">
                              {res.subject}
                            </p>
                            <p className="relative text-2xl font-bold text-cyan-400 group-hover/stat:text-purple-400 group-hover/stat:scale-110 transition-all duration-300">
                              {res.grade}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.statistics && (
                      <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/5 bg-cyan-400/5 px-4 py-2.5 backdrop-blur-sm">
                        <span className="text-cyan-400 font-mono text-xs">&gt;</span>
                        <p className="text-xs md:text-sm font-mono text-cyan-300/90 tracking-wide">
                          {item.statistics}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .journey-pulse {
          position: absolute;
          left: 50%;
          top: 0;
          width: 8px;
          height: 8px;
          transform: translateX(-50%);
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 14px 4px rgba(34, 211, 238, 0.85);
          animation: journey-travel 7s linear infinite;
        }
        @keyframes journey-travel {
          0% { top: -2%; opacity: 0; }
          6% { opacity: 1; }
          94% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .journey-pulse { animation: none; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;