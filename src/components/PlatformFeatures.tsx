import { motion } from "framer-motion";
import { CheckCircle2, MonitorPlay, BookOpen, Bell, Video, Lightbulb, Award, Users, Star } from "lucide-react";
import lmsMockup from "@/assets/lms-mockup.png";

const features = [
  { icon: MonitorPlay, text: "Online Video Lectures" },
  { icon: BookOpen, text: "Quiz & Assignments" },
  { icon: Bell, text: "Alerts & Notifications" },
  { icon: Video, text: "Live Interactive Classes" },
  { icon: Lightbulb, text: "Cutting-Edge Curriculum" },
  { icon: Award, text: "Expert Specialist Faculty" },
  { icon: Users, text: "Student Discussion Forums" },
  { icon: CheckCircle2, text: "Affordable Fee Structures" },
];

const PlatformFeatures = () => (
  <section className="py-10 md:py-16 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] to-background relative overflow-hidden border-t border-black/5 border-b border-black/5">
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Beautiful Mock App Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 relative flex justify-center items-center py-6 md:py-0"
        >
          {/* Outer glow aura */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent blur-2xl opacity-60 pointer-events-none" />
          
          <div className="relative w-full max-w-[480px] rounded-3xl overflow-visible border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white p-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(192,135,40,0.08)] group">
            {/* Top Bar Mock Controls */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
              <div className="flex items-center gap-1.5 select-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="px-3 py-0.5 rounded-full bg-black/5 border border-black/5 text-[9px] text-foreground/45 tracking-wider font-mono select-none">
                learn.skinauraskillacademy.com
              </div>
            </div>

            {/* Main image window */}
            <div className="relative rounded-2xl overflow-hidden border border-black/5 shadow-inner bg-secondary/10 aspect-[16/10]">
              <img 
                src={lmsMockup} 
                alt="Skin Aura Academy LMS Portal" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              {/* Image Vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Live Video Indicator */}
            <div className="absolute -bottom-6 -left-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl p-3 shadow-lg animate-float select-none">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 relative">
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500" />
                <Video className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-foreground leading-tight">Live Gurugram Feed</p>
                <p className="text-[9px] text-muted-foreground font-semibold">Real-Time Clinical Demos</p>
              </div>
            </div>

            {/* Floating Card 2: Student Score Badge */}
            <div className="absolute -top-6 -right-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl p-3 shadow-lg animate-float [animation-delay:1.5s] select-none">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Star className="h-4 w-4 fill-emerald-600/20" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-foreground leading-tight">Assignment Score: 98%</p>
                <p className="text-[9px] text-muted-foreground font-semibold">Level 2 Chemical Peels</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Platform Features Checklists */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 space-y-6"
        >
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
              <Star className="h-4 w-4 text-primary fill-primary" /> Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground tracking-tight">Platform Features</h2>
            <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed">
            Our state-of-the-art Learning Management System (LMS) gives you the tools to master professional dermatology at your own convenience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                {/* Specific custom styled icon for each item */}
                <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-300">
                  <f.icon className="h-4.5 w-4.5 text-accent" />
                </div>
                <span className="text-foreground/85 text-xs sm:text-sm font-semibold tracking-wide">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
