import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import lmsMockup from "@/assets/lms-mockup.png";
import { Smartphone, Star, CheckCircle } from "lucide-react";

const CTASection = () => (
  <section className="py-10 md:py-16 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] via-background to-background border-t border-black/5 border-b border-black/5">
    {/* Soft light glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[130px] opacity-70 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text and CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="h-3.5 w-3.5" /> Mobile Friendly LMS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
            Access Your Courses <br />
            <span className="text-gradient-gold font-bold">Anytime, Anywhere</span>
          </h2>
          
          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
            Skin Aura Skill Academy's premium educational portal is fully optimized for all devices. Learn on your phone, tablet, or desktop – at your own convenience.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-foreground/80 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4.5 w-4.5 text-accent" /> Free Mobile Learning App
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4.5 w-4.5 text-accent" /> Offline Mode Support
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102">
              <a href="https://learn.skinauraskillacademy.com/s/store" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-transform duration-300 hover:scale-102">
              <a href="https://learn.skinauraskillacademy.com" target="_blank" rel="noopener noreferrer">
                Apply for Training
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <div className="md:col-span-5 relative flex justify-center items-center w-full mt-8 md:mt-0">
          {/* Background decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          {/* The Smartphone Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] group bg-white z-10"
          >
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
            <div className="absolute inset-2 border border-accent/20 rounded-[1.75rem] z-20 pointer-events-none" />
            
            <img
              src={lmsMockup}
              alt="LMS Mobile Dashboard Mockup"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
          </motion.div>

          {/* Floating Badge 1 - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -top-3 -left-4 z-20 bg-white/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-xl shadow-md hidden sm:flex items-center gap-2"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-foreground tracking-wider uppercase">24/7 Portal</span>
          </motion.div>

          {/* Floating Badge 2 - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-3 -right-4 z-20 bg-white/85 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl shadow-md hidden sm:flex items-center gap-2"
          >
            <div className="p-1 rounded-lg bg-primary/10 text-primary">
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
            <span className="text-[10px] font-bold text-foreground tracking-wider uppercase">HD Videos</span>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default CTASection;
