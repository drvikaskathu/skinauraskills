import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, BookOpen, UserCheck, ArrowRight } from "lucide-react";
import chemicalPeels from "@/assets/chemical-peels.png";
import laserLhr from "@/assets/laser-hair-reduction.png";
import prpHair from "@/assets/prp-hair-therapy.png";
import antiAging from "@/assets/anti-aging-procedures.png";
import acneExt from "@/assets/acne-treatment.png";
import pigmentTrea from "@/assets/pigmentation-treatment.png";

interface Workshop {
  title: string;
  img: string;
  duration: string;
  level: string;
  desc: string;
  highlights: string[];
}

const workshops: Workshop[] = [
  {
    title: "Chemical Peels & Acid Chemistry",
    img: chemicalPeels,
    duration: "2 Days Practical",
    level: "Basic to Intermediate",
    desc: "Master skin preparation, neutralizer chemistry, depth scaling, and application of glycolic, salicylic, and yellow peels.",
    highlights: ["Skin priming prep", "Neutralizer application", "Post-peel barrier repair"],
  },
  {
    title: "Clinical Laser Hair Reduction (LHR)",
    img: laserLhr,
    duration: "3 Days Practical",
    level: "Intermediate to Doctor Level",
    desc: "Gain hands-on operating experience with diode laser tech, Soprano Ice Platinum calibration, and skin-type safety protocols.",
    highlights: ["Soprano Ice calibration", "Patch testing standards", "Fluence adjustments"],
  },
  {
    title: "PRP & GFC Hair Restoration",
    img: prpHair,
    duration: "1 Day Intensive",
    level: "Doctors & Aestheticians",
    desc: "Learn sterile phlebotomy, centrifuge calibration, plasma separation, and growth factor delivery on live patients.",
    highlights: ["Centrifuge settings", "Scalp injection grids", "Post-therapy care plans"],
  },
  {
    title: "Advanced Acne & Scar Management",
    img: acneExt,
    duration: "2 Days Intensive",
    level: "Foundation & Intermediate",
    desc: "Learn dermatological extractions, comedone removal protocols, high-frequency sanitization, and topical clinical regimens.",
    highlights: ["Comedone extraction", "High-frequency systems", "Active acne management"],
  },
  {
    title: "Dermacosmetic Pigmentation Solutions",
    img: pigmentTrea,
    duration: "2 Days Intensive",
    level: "Intermediate",
    desc: "Learn clinical peeling protocols, melasma diagnosis, Q-Switch laser calibration, and protective epidermal barriers.",
    highlights: ["Melasma treatment protocols", "Q-Switch laser settings", "Barrier recovery focus"],
  },
  {
    title: "Anti-Aging & RF Skin Tightening",
    img: antiAging,
    duration: "3 Days Doctor Level",
    level: "Advanced (Doctors Only)",
    desc: "Observe and calibrate Microneedling Radiofrequency (MNRF), skin lifting, Viora fat contouring, and anti-aging serum infusions.",
    highlights: ["Vivace MNRF operation", "Tissue heating safety", "Facial remodeling grids"],
  },
];

export default function ClinicWorkshops() {
  return (
    <section id="workshops" className="py-10 md:py-16 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] to-background relative overflow-hidden border-t border-b border-black/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="h-4.5 w-4.5 text-primary" /> Practical Modules
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">
            Clinical Workshops
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Gain hyper-targeted, hands-on clinical skills in these standalone modules, working directly on patients under specialist guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((w, idx) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group glass-card border-black/5 rounded-3xl overflow-hidden shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Visual Image Header */}
                <div className="aspect-[4/3] bg-secondary/30 overflow-hidden relative border-b border-black/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-[9px] font-bold uppercase tracking-wider text-accent">
                    {w.level}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1.5 text-accent">
                    <Calendar className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{w.duration}</span>
                  </div>

                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300 text-base sm:text-lg leading-snug tracking-tight">
                    {w.title}
                  </h3>

                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {w.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-black/5">
                    {w.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-[11px] text-foreground/80 font-medium">
                        <UserCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 pt-0">
                <Button size="sm" className="w-full py-5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/95 text-primary-foreground shadow-sm transition-all duration-300" asChild>
                  <a href="#enroll-form">
                    Inquire About Workshop
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300">
            <a href="#enroll-form" className="flex items-center gap-2">
              Request Full Curriculum <ArrowRight className="h-4.5 w-4.5 animate-pulse" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
