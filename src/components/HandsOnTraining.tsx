import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Users, Building, Star, Sparkles, ChevronRight, Grid } from "lucide-react";
import machine1 from "@/assets/training-machine-1.jpg";
import machine2 from "@/assets/training-machine-2.jpg";
import machine3 from "@/assets/training-machine-3.jpg";
import machine4 from "@/assets/training-machine-4.jpg";
import machine5 from "@/assets/training-machine-5.jpg";
import photo1 from "@/assets/Female_Students.jpg";
import photo2 from "@/assets/training-photo-2.jpg";
import photo3 from "@/assets/training-photo-3.jpg";
import photo4 from "@/assets/training-photo-4.jpg";
import photo5 from "@/assets/training-photo-5.jpg";
import photo6 from "@/assets/certificated.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "machines" | "sessions";
};

const galleryItems: GalleryItem[] = [
  { src: machine1, alt: "Q Switch Laser", caption: "Q Switch Laser", category: "machines" },
  { src: machine2, alt: "Soprano Ice Platinum for laser hair reduction", caption: "Soprano Ice Platinum", category: "machines" },
  { src: machine3, alt: "HydraFacial Elite machine", caption: "HydraFacial Elite", category: "machines" },
  { src: machine4, alt: "Cooltech for fat freezing", caption: "Cooltech", category: "machines" },
  { src: machine5, alt: "Viora for fat contouring", caption: "Viora", category: "machines" },
  { src: photo2, alt: "MNRF Vivace machine", caption: "MNRF Vivace", category: "machines" },
  { src: photo3, alt: "Botox training session", caption: "Botox Training", category: "sessions" },
  { src: photo4, alt: "Fillers training session", caption: "Fillers Training", category: "sessions" },
  { src: photo5, alt: "Live filler training on patient at Skin Aura", caption: "Live Filler Demo", category: "sessions" },
  { src: photo6, alt: "Certificate distribution to trainee at Skin Aura", caption: "Certification Ceremony", category: "sessions" },
];

const HandsOnTraining = () => {
  const [activeTab, setActiveTab] = useState<"all" | "machines" | "sessions">("all");

  const filteredItems = galleryItems.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section id="training" className="py-10 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Top Split Layout: Text/Card on Left, Clinic Collage on Right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">

          {/* Left Column: Heading copy & detail card */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
                <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Real Clinical Exposure
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">
                Hands-On Training Centre
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full" />
              <p className="text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
                Gain real-world clinical experience and boost your confidence by training inside a fully operational, premium cosmetology and neurosurgery center.
              </p>
            </motion.div>

            {/* Redesigned Premium Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#FAF8F5] to-white border border-accent/20 rounded-3xl p-6 md:p-8 shadow-sm hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Building className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Primary Training Centre</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                Skin Aura Brain & Spine Neuro Centre
              </h3>

              <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                Under Direct Mentorship of Dr Jasdeep Kaur & Dr Vikas Kathuria
              </p>

              <a
                href="https://maps.app.goo.gl/u7P7hBmmfRok9p5N9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground/80 hover:text-accent font-medium group/map transition-colors"
              >
                <MapPin className="h-4.5 w-4.5 text-accent shrink-0 transition-transform duration-300 group-hover/map:-translate-y-0.5" />
                <span>DLF Phase IV, Gurugram, Haryana 122009</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover/map:opacity-100 transition-opacity ml-1" />
              </a>
            </motion.div>

            {/* Feature quick tags with icons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs text-foreground/80 font-medium hover:border-accent/30 transition-colors">
                <Zap className="h-3.5 w-3.5 text-accent animate-pulse" />
                Advanced Lasers & Devices
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs text-foreground/80 font-medium hover:border-accent/30 transition-colors">
                <Users className="h-3.5 w-3.5 text-accent animate-pulse" />
                Real Clinical Patients
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Visual Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full flex justify-center py-6 order-1 lg:order-2"
          >
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white group">
              {/* Main Background Image (Clinic Trainee Setup) */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
                <img
                  src={photo1}
                  alt="Skin Aura Clinical Cosmetology Practice"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Foreground Image (HydraFacial Elite Setup) */}
              <div className="absolute -bottom-6 -left-6 w-[50%] aspect-square rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden hidden sm:block z-20 hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
                <img
                  src={machine3}
                  alt="Clinical HydraFacial Training Device"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Stats/Highlight Tag */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 bg-white/85 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-lg">
                <div className="p-1.5 rounded-lg bg-accent/15 text-accent shrink-0">
                  <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-extrabold tracking-widest text-accent">Technology</p>
                  <h3 className="text-xs font-bold text-foreground leading-none mt-0.5">10+ Clinical Devices</h3>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Gallery: Tabs & Filterable Showcase */}
        <div className="space-y-8">
          {/* Tab Selector */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 border-b border-black/5 pb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "all"
                ? "bg-accent text-white shadow-md shadow-accent/10"
                : "bg-white border border-black/5 hover:border-accent/40 text-foreground/75"
                }`}
            >
              <Grid className="h-4 w-4" />
              All Media
            </button>
            <button
              onClick={() => setActiveTab("machines")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "machines"
                ? "bg-accent text-white shadow-md shadow-accent/10"
                : "bg-white border border-black/5 hover:border-accent/40 text-foreground/75"
                }`}
            >
              <Zap className="h-4 w-4" />
              Advanced Technology
            </button>
            <button
              onClick={() => setActiveTab("sessions")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "sessions"
                ? "bg-accent text-white shadow-md shadow-accent/10"
                : "bg-white border border-black/5 hover:border-accent/40 text-foreground/75"
                }`}
            >
              <Users className="h-4 w-4" />
              Live Training
            </button>
          </div>

          {/* Filtered Grid Gallery with transitions */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.figure
                  layout
                  key={item.caption}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white border border-black/5 rounded-2xl shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-square bg-secondary/20 overflow-hidden relative border-b border-black/5">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    />
                  </div>
                  <figcaption className="px-3 py-3.5 text-center text-[10px] sm:text-xs font-semibold text-foreground/80 min-h-[2.5rem] flex items-center justify-center tracking-wide leading-snug">
                    {item.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HandsOnTraining;
