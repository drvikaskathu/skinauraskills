import { motion } from "framer-motion";
import { Zap, Stethoscope, ShieldCheck, Building2, Landmark, MapPin } from "lucide-react";
import teamPhoto from "@/assets/maam-pic.jpg";
import trainingPhoto5 from "@/assets/training-photo-5.jpg";

const trustPoints = [
  {
    icon: Zap,
    text: "Hands-on calibration of advanced machinery like Soprano Platinum, Q-Switch lasers, Viora contouring, and Vivace MNRF."
  },
  {
    icon: Stethoscope,
    text: "Engage in real patient cases daily, shadowing live diagnosis, patient history taking, and setting customized treatments."
  },
  {
    icon: ShieldCheck,
    text: "Get supervised 1-on-1 feedback from Dr. Jasdeep Kaur and guest instructors, verifying your clinical techniques."
  },
  {
    icon: Building2,
    text: "Practice in a premium, sterile, state-of-the-art clinical facility located in Sector 43, DLF Phase IV, Gurugram."
  },
];

const AuthorityTrust = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden" aria-label="Authority & Trust – Train in a Real Clinic">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Left Column: Content & Trust points */}
        <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
              <Landmark className="h-4.5 w-4.5 text-primary" /> Real Clinic. Real Training.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">
              Train Inside a Real Dermatology Clinic
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
            <p className="text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
              Get your clinical training at{" "}
              <strong className="text-gradient-gold font-bold">Skin Aura Brain & Spine Neuro Centre, Gurugram</strong> –
              a fully-equipped dermatology, cosmetology, and neurosurgery clinic with cutting-edge medical technology.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {trustPoints.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex items-start gap-4 glass-card border-black/5 rounded-2xl p-4 text-left hover:border-accent/30 hover:shadow-md transition-all duration-300 bg-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <t.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <span className="text-foreground/90 text-xs sm:text-sm font-semibold leading-relaxed self-center">{t.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Photo Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative w-full flex justify-center py-6 order-1 lg:order-2"
        >
          {/* Subtle gold aura background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white group">
            {/* Main Background Image (Clinic Team) */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
              <img
                src={teamPhoto}
                alt="Skin Aura Clinical Mentors and Trainees"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Overlapping Foreground Image (Live patient training) */}
            <div className="absolute -bottom-6 -left-6 w-[55%] aspect-square rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden hidden sm:block z-20 hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
              <img
                src={trainingPhoto5}
                alt="Hands-on Cosmetology Laser Training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Glassmorphic Location Tag */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 bg-white/85 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-lg">
              <div className="p-1.5 rounded-lg bg-accent/15 text-accent shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-extrabold tracking-widest text-accent">Location</p>
                <h3 className="text-xs font-bold text-foreground leading-none mt-0.5">DLF Phase IV, Gurugram</h3>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AuthorityTrust;
