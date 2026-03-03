import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/src/components/layout/Layout";
import { SERVICES_DATA, NAV_LINKS } from "@/src/lib/constants";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export function Services() {
  const { slug } = useParams();
  
  // If no slug, show all services overview
  if (!slug) {
    return (
      <Layout>
        <section className="pt-40 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-24">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Our <span className="text-blue-gradient">Solutions</span>.
              </h1>
              <p className="text-xl text-white/50">
                Comprehensive digital technology services designed for enterprise-level growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {NAV_LINKS.find(l => l.name === "Services")?.megaMenu?.map((category, i) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-12 rounded-[40px]"
                >
                  <h3 className="text-[10px] font-bold tracking-widest text-brand-blue uppercase mb-8">
                    {category.category}
                  </h3>
                  <ul className="space-y-6">
                    {category.items.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/services/${item.slug}`} className="group flex items-center justify-between">
                          <span className="text-2xl font-bold group-hover:text-brand-blue transition-colors">{item.name}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Find service in mega menu if not in SERVICES_DATA
  const megaMenu = NAV_LINKS.find(l => l.name === "Services")?.megaMenu;
  const serviceInfo = megaMenu?.flatMap(c => c.items).find(i => i.slug === slug);

  if (!serviceInfo) return <Layout><div className="pt-32 px-6">Service not found</div></Layout>;

  return (
    <Layout>
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-6 block">Service Excellence</span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                {serviceInfo.name}
              </h1>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">
                We specialize in high-performance {serviceInfo.name.toLowerCase()} solutions that drive measurable business outcomes. Our approach combines technical precision with creative strategy.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all">
                  Get a Quote
                </button>
                <button className="border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                  Case Studies
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-brand-blue/20 blur-[120px] rounded-full" />
              <div className="relative h-full w-full glass rounded-[40px] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426`}
                  alt={serviceInfo.name}
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { title: "Data Driven", desc: "Every decision is backed by comprehensive analytics and market research.", icon: BarChart3 },
              { title: "Scalable Tech", desc: "Built on modern infrastructure that grows with your business.", icon: Zap },
              { title: "Secure & Reliable", desc: "Enterprise-grade security protocols and 99.9% uptime guarantee.", icon: Shield }
            ].map((feature, i) => (
              <div key={i} className="glass p-10 rounded-[32px]">
                <feature.icon className="w-10 h-10 text-brand-blue mb-8" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-32">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Discovery", desc: "Deep dive into your business goals and market landscape." },
                { step: "02", title: "Strategy", desc: "Crafting a tailored roadmap for your digital success." },
                { step: "03", title: "Execution", desc: "High-precision implementation by our expert teams." },
                { step: "04", title: "Optimization", desc: "Continuous monitoring and data-driven improvements." }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-bold text-white/5 mb-6">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
