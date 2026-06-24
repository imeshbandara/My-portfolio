import React from 'react';
import { blogData } from '../data/portfolioData';
import { FiArrowRight } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Centered Heading */}
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center justify-center">
           
          <span className="cosmic-text">Useful Reads</span>
        </h2>
          <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Insights, tutorials, and perspectives on modern software development.
          </p>
        </header>

        {/* Modern Box Layout (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-[#1e293b] rounded-2xl border border-slate-700/50 overflow-hidden hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500"
            >
              {/* Featured Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent opacity-60" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-slate-500 text-xs font-mono">{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-cyan-400/70 text-[10px] uppercase tracking-widest font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group/btn hover:gap-3 transition-all duration-300"
                  >
                    Read More 
                    <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
