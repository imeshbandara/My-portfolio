import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const DEFAULT_RSS_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imeshbandara';

function stripHtml(html = '') {
  return html.replace(/<[^>]*>?/gm, '').trim();
}

const BlogSection = ({ variant = 'section', limit = 6 }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const rssUrl = DEFAULT_RSS_URL;

  useEffect(() => {
    let cancelled = false;

    const fetchMedium = async () => {
      try {
        const res = await axios.get(rssUrl);
        if (cancelled) return;
        setArticles(res?.data?.items ?? []);
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        if (cancelled) return;
        setError('Failed to load articles. Please try again later.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchMedium();
    return () => {
      cancelled = true;
    };
  }, [rssUrl]);

  const visibleArticles = useMemo(() => {
    const n = typeof limit === 'number' ? limit : 6;
    return (articles ?? []).slice(0, Math.max(0, n));
  }, [articles, limit]);

  const containerClassName =
    variant === 'page' ? 'max-w-6xl mx-auto' : 'max-w-6xl mx-auto px-4 md:px-12';

  const inner = (
    <>
      <header className="mb-12">
        <h2 className="text-4xl font-bold text-white flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Blog
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mt-3">
          Latest articles synced from my Medium profile.
        </p>
      </header>

      {loading ? (
        <div className="text-center text-white">Loading articles...</div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-red-200">
          {error}
        </div>
      ) : visibleArticles.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-[#111c33] p-6 text-slate-300">
          No articles found yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((post) => {
            const date = post?.pubDate ? new Date(post.pubDate) : null;
            const thumbnail = post?.thumbnail || '';
            const excerpt = stripHtml(post?.description || '');

            return (
              <article
                key={post.guid || post.link}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#111c33] hover:border-cyan-500/60 transition"
              >
                <div className="aspect-[16/9] w-full bg-[#0b1223] overflow-hidden">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={post?.title || 'Medium article thumbnail'}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-500 font-mono text-base">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-5">
                    <div className="text-cyan-400 font-mono text-sm">
                    {date ? date.toLocaleDateString() : '—'}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition">
                    {post?.title}
                  </h3>
                  {excerpt ? (
                      <p className="mt-3 text-slate-400 text-base leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  ) : null}

                  <div className="mt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 font-mono text-base hover:underline"
                    >
                      Read on Medium →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );

  if (variant === 'page') {
    return (
      <div className="min-h-screen bg-[#0f172a] pt-32 px-6">
        <div className={containerClassName}>{inner}</div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-24">
      <div className={containerClassName}>{inner}</div>
    </section>
  );
};

export default BlogSection;
