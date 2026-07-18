import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Stethoscope, Zap, Award, BookOpen, Star, ShieldCheck } from "lucide-react";
import internshipHeroImg from "@/assets/internship-hero.png";

const highlights = [
  { icon: Stethoscope, text: "Live Patient Exposure" },
  { icon: Zap, text: "Hands-On Laser & Aesthetic Training" },
  { icon: Award, text: "Certification + Career Support" },
  { icon: BookOpen, text: "Dermatologist-Guided Learning" },
];

const InternshipHero = () => (
  <section className="relative py-10 md:py-16 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_30%_95%)] via-background to-background border-t border-black/5 border-b border-black/5" aria-label="Skin Therapist Internship Program">
    {/* Soft light glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0 w-fit"
          >
            <Star className="h-3.5 w-3.5 fill-current animate-spin" /> Flagship Internship Program
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight"
          >
            Skin Therapist <br className="hidden sm:inline" />
            Internship Program – <br />
            <span className="text-gradient-gold font-bold">Learn, Practice & Earn</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Step into the world of advanced cosmetology with premium clinical internships and structured hands-on guidance. Move beyond simple worksheets and become a fully certified, job-ready skincare therapist.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
          >
            <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102">
              <a href="#internship-pricing">Apply for Internship</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-transform duration-300 hover:scale-102">
              <a href="https://wa.me/919050224433?text=Hi%2C%20I%20want%20to%20book%20free%20counselling%20for%20the%20Internship%20Program" target="_blank" rel="noopener noreferrer">
                Book Free Counselling
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Visual Image Block */}
        <div className="lg:col-span-5 relative flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[440px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] group bg-white"
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
            <div className="absolute inset-2 border border-accent/20 rounded-[1.75rem] z-20 pointer-events-none" />
            
            <img
              src={internshipHeroImg}
              alt="Skin Therapist Internship Clinical Training"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-103"
              loading="eager"
            />

            {/* Floating Glassmorphism Tag */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-md">
              <div className="p-2 rounded-lg bg-accent/15 text-accent">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-accent mb-0.5">Real Experience</p>
                <h3 className="text-sm font-bold text-foreground leading-tight">Clinical Mentorship</h3>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Highlights Grid Section below split hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-16 md:pt-20"
      >
        {highlights.map((h, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 glass-card glass-card-hover border-black/5 rounded-2xl p-5 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
              <h.icon className="h-5.5 w-5.5 text-primary" />
            </div>
            <span className="text-foreground/90 text-xs sm:text-sm font-semibold tracking-wide leading-snug">{h.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default InternshipHero;
