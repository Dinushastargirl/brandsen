import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { NAV_LINKS, LOGO_URL } from "@/src/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Navigation Aligned LEFT */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  location.pathname === link.href ? "text-brand-blue" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                {link.megaMenu && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Mega Menu */}
              {link.megaMenu && (
                <AnimatePresence>
                  {activeMegaMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-4 w-[800px]"
                    >
                      <div className="glass-dark rounded-2xl p-8 grid grid-cols-4 gap-8 shadow-2xl">
                        {link.megaMenu.map((category) => (
                          <div key={category.category}>
                            <h3 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">
                              {category.category}
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    to={`/services/${item.slug}`}
                                    className="text-sm text-white/60 hover:text-brand-blue transition-colors block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Logo Aligned RIGHT */}
        <Link to="/" className="flex items-center">
          <img 
            src={LOGO_URL} 
            alt="Brandsen" 
            className="h-8 w-auto invert brightness-0" 
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-2xl font-bold tracking-tighter">BRANDSEN</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="text-2xl font-bold text-white"
                  >
                    {link.name}
                  </Link>
                  {link.megaMenu && (
                    <div className="mt-4 pl-4 space-y-2 border-l border-white/10">
                      {link.megaMenu.flatMap(c => c.items).slice(0, 5).map(item => (
                        <Link
                          key={item.slug}
                          to={`/services/${item.slug}`}
                          className="block text-white/50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
