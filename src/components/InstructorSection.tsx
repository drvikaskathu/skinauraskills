import { motion } from "framer-motion";
import { Youtube, Instagram, Facebook, MapPin, Award } from "lucide-react";
import drJasdeep from "@/assets/dr-jasdeep.jpg";
import drVikas from "@/assets/dr-vikas-kathuria.png";

const instructors = [
  {
    name: "Dr Jasdeep Kaur",
    title: "MBBS, DDVL – Dermatologist & Cosmetologist",
    role: "Aesthetic Dermatology Director",
    location: "Skin Aura Brain & Spine Neuro Centre, DLF Phase IV, Gurugram",
    mapLink: "https://maps.app.goo.gl/u7P7hBmmfRok9p5N9",
    image: drJasdeep,
    socials: [
      { icon: Youtube, href: "https://youtube.com/@skinauraclinic" },
      { icon: Instagram, href: "https://instagram.com/sabclinicggn" },
      { icon: Facebook, href: "https://facebook.com/SkinAuraBrainAndSpineNeuroCentre" },
    ],
  },
  {
    name: "Dr Vikas Kathuria",
    title: "MBBS, MS, M.Ch (Neurosurgery)",
    role: "Clinical Neurosurgery & Operative Director",
    location: "Skin Aura Brain & Spine Neuro Centre, DLF Phase IV, Gurugram",
    mapLink: "https://maps.app.goo.gl/u7P7hBmmfRok9p5N9",
    image: drVikas,
    socials: [],
  },
];

const InstructorSection = () => (
  <section className="py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_30%_96%)] via-background to-background relative overflow-hidden border-t border-black/5 border-b border-black/5">
    {/* Soft light blur */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Award className="h-4.5 w-4.5 text-primary" /> Expert Faculty
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Your Instructors</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center space-y-4"
          >
            {/* Instructor Photo with rotating-type luxury glow */}
            <div className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64 mb-6">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/5 to-accent/10 blur-lg opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-accent/20 rounded-full scale-102 pointer-events-none" />
              <img
                src={inst.image}
                alt={inst.name}
                className="relative w-full h-full rounded-full object-cover border border-black/5 shadow-md filter brightness-100"
              />
            </div>

            <h3 className="font-bold text-foreground text-lg sm:text-xl tracking-tight">{inst.name}</h3>
            <p className="text-gradient-gold text-xs sm:text-sm font-semibold uppercase tracking-wider">{inst.title}</p>
            <p className="text-muted-foreground text-[10px] sm:text-xs font-bold uppercase tracking-widest">{inst.role}</p>
            
            <a
              href={inst.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-foreground/80 text-xs hover:text-accent transition-colors max-w-sm mx-auto"
            >
              <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="leading-snug">{inst.location}</span>
            </a>

            {inst.socials.length > 0 && (
              <div className="flex justify-center gap-3 pt-2">
                {inst.socials.map((s, si) => (
                  <a
                    key={si}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-black/5 border border-black/5 text-foreground/60 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <s.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorSection;
