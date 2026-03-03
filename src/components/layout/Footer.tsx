import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, BRAND_NAME } from "@/src/lib/constants";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <img 
                src={LOGO_URL} 
                alt={BRAND_NAME} 
                className="h-8 w-auto invert brightness-0" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-2xl font-bold tracking-tighter">{BRAND_NAME}</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Engineering digital growth through performance-driven ecosystems and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Digital Marketing", "Branding & Creative", "Web & App Dev", "Software & IT"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/50 hover:text-brand-blue transition-colors text-sm flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Work", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white/50 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Get the latest insights on digital transformation.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button className="absolute right-2 top-2 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between pt-12 border-t border-white/5 text-white/30 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
