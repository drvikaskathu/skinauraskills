import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Training Centre", href: "#training" },
  { label: "Clinic Services", href: "#clinic" },
  { label: "Contact Us", href: "#contact" },
];

const LOGIN_URL = "https://learn.skinauraskillacademy.com/";

const LoginButton = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
  <a
    href={LOGIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`relative inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-[0_4px_12px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
  >
    <span className="absolute inset-0 rounded-full ring-2 ring-emerald-400/40 animate-ping opacity-20" />
    <span className="relative flex items-center gap-1">
      LMS Login
      <ArrowUpRight className="h-3.5 w-3.5" />
    </span>
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-black/5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 max-w-6xl">
        <a href="#" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-102">
          {/* Logo is kept normal (no invert) for light mode so it displays original colors */}
          <img src={logo} alt="Skin Aura Skill Academy" className="h-10 sm:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-black/5 backdrop-blur-md border border-black/5 px-6 py-2 rounded-full">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors relative group py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <LoginButton />
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-3">
          <LoginButton className="text-[10px] px-3.5 py-1.5" />
          <button
            className="p-2 rounded-full bg-black/5 border border-black/5 text-foreground/90 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-xl"
          >
            <div className="container mx-auto px-4 md:px-8 max-w-6xl py-6 flex flex-col gap-4">
              {navLinks.map((l, index) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-foreground/85 hover:text-primary py-2 border-b border-black/5 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
