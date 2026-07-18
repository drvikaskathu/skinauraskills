import { motion } from "framer-motion";
import {
  Stethoscope, Zap, FlaskConical, Palette, Search, MessageSquare,
  SmilePlus, Scissors, Sparkles, Star, ShieldCheck
} from "lucide-react";
import clinicalImg from "@/assets/training-photo-5.jpg";
import faceImg from "@/assets/training-photo-2.jpg";
import hairImg from "@/assets/hair-zone.png";
import bodyImg from "@/assets/training-machine-2.jpg";

const clinicalItems = [
  { icon: Stethoscope, text: "Live patient consultation & case handling" },
  { icon: Zap, text: "Hands-on laser hair reduction training" },
  { icon: FlaskConical, text: "Chemical peels & medi-facials" },
  { icon: Palette, text: "Acne & pigmentation treatment protocols" },
  { icon: Search, text: "Skin analysis & treatment planning" },
  { icon: MessageSquare, text: "Client communication & clinic workflow" },
];

const zones = [
  { icon: SmilePlus, zone: "Face Zone", desc: "Acne, pigmentation, anti-aging, and facial peels", image: faceImg },
  { icon: Scissors, zone: "Hair Zone", desc: "PRP basics, scalp care, and hair restoration", image: hairImg },
  { icon: Sparkles, zone: "Body Zone", desc: "Laser hair reduction and body pigmentation", image: bodyImg },
];

const ProgramStructure = () => (
  <section className="py-10 md:py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] to-background border-t border-black/5 border-b border-black/5" aria-label="Program Structure – Clinical Internship Training">
    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      
      {/* Flagship Program Intro card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto glass-card border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative bg-white mb-16"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
        
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 mb-2">
          <Star className="h-4.5 w-4.5 text-primary fill-primary animate-pulse" /> Our Flagship Program
        </span>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mt-3 mb-6 tracking-tight leading-snug">
          Skin Therapist Internship Program – <br />
          <span className="text-gradient-gold font-bold">Clinical & Zone-Based Training</span>
        </h2>
        
        <div className="space-y-4 text-foreground/85 text-xs sm:text-sm sm:text-base leading-relaxed">
          <p>
            This advanced <strong>internship program at SkinAura Skill Academy</strong> is designed for aspiring skin therapists
            who want <strong>real clinical experience in dermatology and cosmetology</strong>. Unlike theoretical courses, this program
            focuses on <strong>hands-on training, live patient interaction</strong>, and practical exposure to advanced aesthetic procedures
            including <strong>laser treatments, acne management, pigmentation correction</strong>, and <strong>medi-facials</strong>.
          </p>
          <p>
            Students are trained under expert supervision in a <strong>real clinic setup</strong>, ensuring they become confident,
            skilled, and job-ready professionals in the field of <strong>clinical cosmetology</strong>.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Program Structure
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
          What You'll Master
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Clinical Training Grid Block */}
      <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto mb-20">
        
        {/* Left Column: Topics list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 border-b border-black/5 pb-4">
            <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold">01</span>
            Clinical Internship Training
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {clinicalItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 glass-card glass-card-hover border-black/5 rounded-2xl p-4 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground/90 text-xs sm:text-sm font-semibold leading-relaxed self-center">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Featured Image */}
        <div className="lg:col-span-5 relative flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[420px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.05)] group bg-white"
          >
            {/* Overlay and double border */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
            <div className="absolute inset-2 border border-primary/20 rounded-[1.75rem] z-20 pointer-events-none" />
            
            <img
              src={clinicalImg}
              alt="Clinical Internship Practice"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />

            {/* Floating Glassmorphic Tag */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-md">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-0.5">Hands-On Practice</p>
                <h3 className="text-sm font-bold text-foreground leading-tight">Live Clinical Patients</h3>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Zone-Based Hands-On Training Block */}
      <div className="max-w-6xl mx-auto border-t border-black/5 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-12 max-w-2xl"
        >
          <h3 className="text-2xl font-bold text-foreground flex items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">02</span>
            Zone-Based Hands-On Training
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Students receive focused, step-by-step hands-on training across different skin treatment zones.
            This structured approach ensures <strong className="text-foreground font-semibold">mastery in each domain</strong> instead of random learning.
          </p>
        </motion.div>

        {/* 3-Column Grid for Zones */}
        <div className="grid md:grid-cols-3 gap-8">
          {zones.map((z, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card glass-card-hover border-black/5 rounded-[2rem] overflow-hidden shadow-sm flex flex-col justify-between bg-white"
            >
              <div>
                {/* Zone Image Header */}
                <div className="aspect-[4/3] overflow-hidden relative bg-muted border-b border-black/5">
                  <img
                    src={z.image}
                    alt={`${z.zone} Clinical Training`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-75 pointer-events-none" />
                </div>

                {/* Overlapping Icon Badge */}
                <div className="mt-[-24px] ml-6 relative z-10 p-2.5 rounded-xl bg-white shadow-md border border-black/5 w-fit text-accent flex items-center justify-center">
                  <z.icon className="h-5 w-5" />
                </div>

                {/* Details */}
                <div className="px-6 pt-4 pb-6">
                  <h4 className="text-foreground font-bold text-base sm:text-lg mb-2 tracking-wide">{z.zone}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{z.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default ProgramStructure;
