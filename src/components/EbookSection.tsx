import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import ebookCover from "@/assets/ebook-acne-decoded.jpg";

const EbookSection = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <BookOpen className="h-4.5 w-4.5 text-primary" /> Free Learning Resource
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Download Our eBook</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-12 gap-10 items-center max-w-6xl mx-auto glass-card border-black/5 rounded-[3rem] p-8 md:p-12 shadow-md relative bg-white"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
        
        {/* Book Cover Visual Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Elegant book visual glow */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/5 to-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 border border-accent/20 rounded-2xl scale-102 translate-x-1.5 translate-y-1.5 pointer-events-none" />
            <img
              src={ebookCover}
              alt="Acne Decoded – eBook by Dr Jasdeep Kaur"
              className="relative w-56 md:w-68 rounded-2xl shadow-lg border border-black/5 transition-transform duration-500 group-hover:scale-102 filter brightness-100"
            />
          </div>
        </div>

        {/* Details Copy Panel */}
        <div className="md:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-accent">
            <BookOpen className="h-4.5 w-4.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Acne Guide Series</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Acne Decoded</h3>
          
          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
            Discover why acne happens, what actually works clinically, and the common skincare mistakes beginners should absolutely avoid.
          </p>
          
          <p className="text-muted-foreground text-xs leading-relaxed">
            Written by <strong className="text-foreground font-semibold">Dr Jasdeep Kaur</strong>, Senior Dermatologist & Founder of Skin Aura Skill Academy.
          </p>
          
          <div className="grid grid-cols-3 gap-2 border-t border-b border-black/5 py-4 my-2">
            <div className="text-center">
              <span className="text-accent text-xs font-bold uppercase tracking-wider block">🎓 Doctor-Led</span>
            </div>
            <div className="text-center border-l border-black/5">
              <span className="text-accent text-xs font-bold uppercase tracking-wider block">✨ Evidence-Based</span>
            </div>
            <div className="text-center border-l border-black/5">
              <span className="text-accent text-xs font-bold uppercase tracking-wider block">🛡️ Beginner-Safe</span>
            </div>
          </div>

          <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md shadow-green-500/10 transition-all duration-300 hover:scale-102">
            <a href="https://learn.skinauraskillacademy.com/products/ACNE-DECODED-Free-e-Book-by-Dr-Jasdeep-Kaur-6993faf80044ed7a53941884" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
              <Download className="h-4.5 w-4.5" />
              Download Free eBook
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EbookSection;
