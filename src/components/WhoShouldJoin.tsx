import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, CheckCircle2, Sparkles, Compass } from "lucide-react";
import photo1 from "@/assets/Female_Students.jpg";
import photo2 from "@/assets/training-photo-2.jpg";
import photo3 from "@/assets/training-photo-3.jpg";

const studentPaths = [
  "Comprehensive hands-on training (no science background needed)",
  "Learn 20+ clinic cosmetic treatments including advanced medi-facials",
  "Full support for job interviews and guaranteed placement assistance",
  "Become a certified Skin Therapist, Laser Tech, or Clinic Assistant"
];

const internshipPaths = [
  "Choose from 15-Day, 1-Month, or 2-Month clinical programs",
  "100% practice on real clinical patient cases under dermatologist supervision",
  "Master zone-based treatments: Face (acne/peels), Hair (PRP/growth), and Body (lasers)",
  "Earn double certification from Skin Aura Clinic & the Skill Academy"
];

const doctorPaths = [
  "Designed for MBBS, BAMS, BHMS, BDS & Foreign Medical Graduates",
  "Learn how to diagnose skin conditions & plan aesthetic cosmetic protocols",
  "Hands-on practice on live cosmetic lasers, peels & clinical cosmetology",
  "Expert guidance on setting up an independent aesthetic practice from scratch"
];

const WhoShouldJoin = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Compass className="h-4.5 w-4.5 text-primary" /> Career Pathways
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Who Should Join?</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Students */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group glass-card glass-card-hover border-black/5 rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col justify-between bg-white"
        >
          <div>
            {/* Visual Image Header */}
            <div className="aspect-[4/3] overflow-hidden relative bg-muted border-b border-black/5">
              <img
                src={photo1}
                alt="12th Pass Female Students Cosmetology Training"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-75 pointer-events-none" />
            </div>

            {/* Overlapping Icon Badge */}
            <div className="mt-[-28px] ml-8 relative z-10 p-3.5 rounded-2xl bg-white shadow-md border border-black/5 w-fit text-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6" />
            </div>

            <div className="px-8 pt-4 pb-6">
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">12th Pass Female Students</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Build a secure, high-paying career in the booming cosmetology industry with job-oriented, hands-on clinical training.
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <ul className="space-y-3 pt-4 border-t border-black/5">
              {studentPaths.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Center: Internship Program (Highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative glass-card border-primary/30 rounded-[2.5rem] overflow-hidden shadow-[0_15px_45px_rgba(217,43,96,0.06)] lg:scale-105 z-20 flex flex-col justify-between bg-white"
        >
          {/* Highlight Badge on top border */}
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-xl bg-primary text-[9px] font-bold uppercase tracking-widest text-white shadow-sm z-30">
            Flagship Program
          </div>

          <div>
            {/* Visual Image Header */}
            <div className="aspect-[4/3] overflow-hidden relative bg-muted border-b border-primary/10">
              <img
                src={photo2}
                alt="Skin Therapist Internship Clinical Device Practice"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Overlapping Icon Badge */}
            <div className="mt-[-28px] ml-8 relative z-10 p-3.5 rounded-2xl bg-gradient-to-br from-primary to-primary/90 shadow-md shadow-primary/20 text-white flex items-center justify-center w-fit animate-float">
              <Sparkles className="h-6 w-6" />
            </div>

            <div className="px-8 pt-4 pb-6">
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">Skin Therapist Internship</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Gain confidence under specialist guidance. Move beyond simple theory and work with real lasers, medi-facials, and clinical workflows.
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <ul className="space-y-3 pt-4 border-t border-black/5">
              {internshipPaths.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5 animate-pulse" />
                  <strong>{p}</strong>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Doctors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group glass-card glass-card-hover border-black/5 rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col justify-between bg-white"
        >
          <div>
            {/* Visual Image Header */}
            <div className="aspect-[4/3] overflow-hidden relative bg-muted border-b border-black/5">
              <img
                src={photo3}
                alt="Doctors and Medicos Dermatology Training"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-75 pointer-events-none" />
            </div>

            {/* Overlapping Icon Badge */}
            <div className="mt-[-28px] ml-8 relative z-10 p-3.5 rounded-2xl bg-white shadow-md border border-black/5 w-fit text-primary flex items-center justify-center">
              <Stethoscope className="h-6 w-6" />
            </div>

            <div className="px-8 pt-4 pb-6">
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">For Doctors & Medicos</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Unlock prestigious, independent opportunities in medical cosmetology, lasers, and clinic setups.
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <ul className="space-y-3 pt-4 border-t border-black/5">
              {doctorPaths.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhoShouldJoin;
