import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/src/components/layout/Layout";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { STATS } from "@/src/lib/constants";

export function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-brand-blue mb-6">
                Engineering Digital Growth
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                Building <span className="text-blue-gradient">Performance</span> Driven Ecosystems.
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
                We bridge the gap between technology and business growth. Brandsen is a global digital technology agency specializing in high-scale ecosystems that convert.
              </p>
              <div className="flex flex-col sm:row items-center gap-6">
                <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center group hover:bg-brand-blue hover:text-white transition-all">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                  <span className="font-bold text-sm">Watch Showreel</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Our Core <span className="text-white/40 italic">Expertise</span>
              </h2>
              <p className="text-white/50 text-lg">
                We provide end-to-end digital solutions that scale. From strategy to deployment, we are your technology partner.
              </p>
            </div>
            <button className="text-sm font-bold border-b border-brand-blue pb-1 hover:text-brand-blue transition-colors">
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Digital Marketing", desc: "Performance-driven campaigns that deliver measurable ROI.", icon: "📈" },
              { title: "Web Development", desc: "Scalable, high-performance web applications built for growth.", icon: "💻" },
              { title: "Brand Strategy", desc: "Crafting identities that resonate in a digital-first world.", icon: "🎨" }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-3xl group cursor-pointer"
              >
                <div className="text-4xl mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Learn More <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Timelines vary based on complexity, but a standard corporate website takes 6-8 weeks, while complex web applications can take 3-6 months." },
              { q: "Do you offer post-launch support?", a: "Yes, we provide comprehensive maintenance and support packages to ensure your digital ecosystem remains secure and performant." },
              { q: "What industries do you specialize in?", a: "We work across various sectors including SaaS, E-commerce, Fintech, and Enterprise IT." }
            ].map((faq, i) => (
              <details key={i} className="group glass rounded-2xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-white/50 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/10 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8">Ready to engineer your <span className="text-blue-gradient">growth</span>?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join 400+ brands that have scaled their digital presence with Brandsen.
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-blue hover:text-white transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
