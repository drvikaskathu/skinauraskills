import { motion } from "framer-motion";
import { Award } from "lucide-react";

const FlagshipProgram = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden" aria-label="Flagship Internship Program Details">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative bg-white"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
        
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 mb-2">
          <Award className="h-4.5 w-4.5 text-primary" /> Our Flagship Program
        </span>
        
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 tracking-tight leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skin Therapist Internship Program – <br />
          <span className="text-gradient-gold">Clinical & Zone-Based Training</span>
        </h2>
        
        <div className="space-y-4 text-foreground/80 text-sm sm:text-base leading-relaxed">
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
    </div>
  </section>
);

export default FlagshipProgram;
