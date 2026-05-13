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
                  background: '#111c33',
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
                  <div className="h-full w-full flex items-center justify-center font-mono text-xs px-2 text-cyan-400">
                    {item.iconText}
                  </div>
                }
              >
                <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-slate-300 text-base mt-1">{item.subtitle}</h4>
                <p className="text-slate-400 text-lg leading-relaxed mt-4">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
