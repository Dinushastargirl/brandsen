import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/src/components/layout/Layout";
import { Briefcase, Heart, Zap, Globe, ArrowRight, Upload } from "lucide-react";

export function Careers() {
  return (
    <Layout>
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Join the <span className="text-blue-gradient">Future</span>.
            </h1>
            <p className="text-xl text-white/50">
              We're looking for visionaries, engineers, and creators who want to build the next generation of digital ecosystems.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { title: "Remote First", desc: "Work from anywhere in the world with our distributed team.", icon: Globe },
              { title: "Growth Mindset", desc: "Generous learning budget and mentorship programs.", icon: Zap },
              { title: "Health & Wellness", desc: "Comprehensive health insurance and wellness perks.", icon: Heart },
              { title: "Impactful Work", desc: "Build technology that scales and makes a real difference.", icon: Briefcase }
            ].map((benefit, i) => (
              <div key={i} className="glass p-8 rounded-3xl">
                <benefit.icon className="w-8 h-8 text-brand-blue mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-32">
            <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
            <div className="space-y-4">
              {[
                { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Remote / Colombo" },
                { title: "UI/UX Product Designer", type: "Full-time", location: "Remote" },
                { title: "Performance Marketing Manager", type: "Full-time", location: "Colombo" },
                { title: "Technical Content Strategist", type: "Contract", location: "Remote" }
              ].map((job, i) => (
                <div key={i} className="glass p-8 rounded-3xl flex flex-col md:row items-center justify-between gap-6 hover:border-brand-blue transition-colors cursor-pointer group">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold group-hover:bg-brand-blue group-hover:text-white transition-all">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="glass rounded-[40px] p-8 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Can't find a role? Send us your CV.</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors" />
                <input placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="relative border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-brand-blue transition-colors cursor-pointer group">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                <Upload className="w-8 h-8 mx-auto mb-4 text-white/20 group-hover:text-brand-blue transition-colors" />
                <p className="text-white/40">Drop your CV here or <span className="text-white">browse files</span></p>
                <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest">PDF, DOCX (MAX 5MB)</p>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
