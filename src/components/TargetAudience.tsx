import { motion } from "framer-motion";
import { GraduationCap, Heart, Sparkles, Users, BookOpen, Briefcase, Star } from "lucide-react";

const segments = [
  {
    emoji: "🎀",
    title: "For 12th Pass Female Students",
    points: [
      { icon: Heart, text: "Start your career in cosmetology & skincare" },
      { icon: Sparkles, text: "No prior experience required" },
      { icon: Users, text: "Learn + Practice + Earn pathway" },
      { icon: GraduationCap, text: "Build confidence with real patients" },
    ],
  },
  {
    emoji: "💉",
    title: "Skin Therapist Internship",
    points: [
      { icon: Briefcase, text: "15-Day, 1-Month & 2-Month clinical plans" },
      { icon: Sparkles, text: "Hands-on laser, peels & medi-facial training" },
      { icon: Users, text: "Zone-based mastery: Face, Hair & Body" },
      { icon: GraduationCap, text: "Certification + placement support" },
    ],
  },
  {
    emoji: "🎓",
    title: "For Graduates / Postgraduates",
    points: [
      { icon: BookOpen, text: "Convert theory into practical expertise" },
      { icon: Briefcase, text: "Ideal for aspiring skin therapists & aestheticians" },
      { icon: Sparkles, text: "Clinical internship with advanced dermatology exposure" },
      { icon: GraduationCap, text: "Fast-track your career in clinical cosmetology" },
    ],
  },
];

const TargetAudience = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden" aria-label="Who Should Join – Target Audience">
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Who Is This For?
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Find Your Path in Clinical Cosmetology
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card border-black/5 rounded-3xl p-8 shadow-sm hover:border-accent/25 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="text-4xl mb-4">{seg.emoji}</div>
            <h3 className="text-lg font-bold text-foreground tracking-tight mb-6">{seg.title}</h3>
            
            <ul className="space-y-4">
              {seg.points.map((p, pi) => (
                <li key={pi} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed self-center">{p.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudience;
