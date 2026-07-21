import { motion } from "framer-motion";
import { Award, Monitor, FileCheck, Users, Sparkles } from "lucide-react";
import drJasdeep from "@/assets/dr-jasdeep-hero.jpg";
import lmsMockup from "@/assets/img7.jpg";
import handsOn from "@/assets/internship-hero.png";
import alumniTeam from "@/assets/feature_maam.jpg";

const features = [
  {
    icon: Award,
    img: drJasdeep,
    title: "Expert Faculty",
    desc: "Learn directly from Dr Jasdeep Kaur with 15+ years of real clinical dermatology practice.",
    tag: "15+ Yrs Exp",
    color: "from-accent/15 to-accent/5 border-accent/20 text-accent",
    glow: "hover:shadow-accent/5",
    imgPos: "object-top",
  },
  {
    icon: Monitor,
    img: lmsMockup,
    title: "Learn Anytime",
    desc: "Access HD video modules, quizzes, and curriculum at your own pace via our premium responsive LMS.",
    tag: "24/7 Access",
    color: "from-primary/15 to-primary/5 border-primary/20 text-primary",
    glow: "hover:shadow-primary/5",
    imgPos: "object-left-top",
  },
  {
    icon: FileCheck,
    img: handsOn,
    title: "Hands-On Practice",
    desc: "Gain clinical confidence working with live patients, medical lasers, and real clinical workflows.",
    tag: "100% Practical",
    color: "from-accent/15 to-accent/5 border-accent/20 text-accent",
    glow: "hover:shadow-accent/5",
    imgPos: "object-center",
  },
  {
    icon: Users,
    img: alumniTeam,
    title: "500+ Alumni",
    desc: "Join a premium community of successfully placed skin therapists and medical practitioners.",
    tag: "Career Ready",
    color: "from-primary/15 to-primary/5 border-primary/20 text-primary",
    glow: "hover:shadow-primary/5",
    imgPos: "object-center",
  },
];

const FeatureStrip = () => (
  <section className="relative py-10 md:py-16 bg-[hsl(40_20%_96%)] z-20 overflow-hidden border-t border-b border-black/5">
    {/* Soft glowing ambient background blobs */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-accent/5 blur-[100px] pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className={`group relative bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:border-black/10 transition-all duration-300 flex flex-col justify-between ${f.glow}`}
          >
            <div>
              {/* Image Showcase Container */}
              <div className="aspect-[4/3] bg-secondary/30 overflow-hidden relative border-b border-black/5">
                {/* Subtle dark gradient overlay to blend image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={f.img}
                  alt={f.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 ${f.imgPos}`}
                  loading="lazy"
                />

                {/* Floating Icon badge on top of image */}
                <div className={`absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 rounded-xl bg-white/95 backdrop-blur border border-white/20 shadow-md transition-all duration-500 group-hover:scale-110`}>
                  <div className={`flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-br ${f.color}`}>
                    <f.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-4">
                {/* Tag / Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[9px] font-extrabold uppercase tracking-wider text-foreground/60 w-fit">
                  <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                  {f.tag}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors duration-300 tracking-tight leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Accent line */}
            <div className="px-6 pb-6">
              <div className="w-10 h-1 bg-accent/20 rounded-full group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureStrip;
