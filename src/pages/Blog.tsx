import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/src/components/layout/Layout";
import { BLOG_POSTS } from "@/src/lib/blogData";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export function Blog() {
  const { slug } = useParams();

  if (slug) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return <Layout><div className="pt-32 px-6">Post not found</div></Layout>;

    return (
      <Layout>
        <section className="pt-40 pb-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-blue mb-6">
                <span className="bg-brand-blue/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-white/40">{post.date}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 leading-[1.1]">
                {post.title}
              </h1>
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover rounded-[40px] mb-16"
                referrerPolicy="no-referrer"
              />
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  {post.content}
                </p>
                {/* More content would go here in a real app */}
                <div className="h-px bg-white/10 my-12" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div>
                      <p className="font-bold">Brandsen Editorial</p>
                      <p className="text-xs text-white/40">Technical Content Strategist</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {/* Social Share Icons */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Insights & <span className="text-blue-gradient">Innovation</span>.
            </h1>
            <p className="text-xl text-white/50">
              Stay ahead of the curve with our latest thoughts on technology, branding, and digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/40 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    Read Article <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
