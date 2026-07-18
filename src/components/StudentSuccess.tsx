import { useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import priyaImg from "@/assets/priya-s.png";
import anitaImg from "@/assets/anita-k.png";
import nehaImg from "@/assets/neha-m.png";
import simranImg from "@/assets/simran-t.png";

import drAnu from "@/assets/dr-anu-kapoor.jpg";
import drMegha from "@/assets/dr-megha-modi.jpg";
import drPramil from "@/assets/dr-pramil-sharma.jpg";
import drJasdeep from "@/assets/dr-jasdeep.jpg";

const studentTestimonials = [
  { name: "Priya S.", role: "Skin Therapist", location: "Delhi", img: priyaImg, text: "The hands-on training at Skin Aura gave me the confidence to work independently at a top dermatology clinic. Dr Jasdeep's guidance was invaluable." },
  { name: "Anita K.", role: "Laser Technician", location: "Faridabad", img: anitaImg, text: "From a 12th pass student to a certified laser technician – Skin Aura Skill Academy transformed my career." },
  { name: "Neha M.", role: "Aesthetic Therapist", location: "Jaipur", img: nehaImg, text: "I had no idea what career to choose after 12th. Skin Aura showed me a path I never knew existed and now I earn well doing what I love." },
  { name: "Simran T.", role: "Skin Care Specialist", location: "Chandigarh", img: simranImg, text: "The practical sessions and real patient exposure made all the difference. I got placed even before completing my course!" },
];

const doctorTestimonials = [
  { name: "Dr Meena R.", role: "Aesthetic Doctor", location: "Noida", img: drMegha, text: "As an MBBS graduate, this training opened a whole new career path for me. The clinical exposure was unmatched." },
  { name: "Dr Arjun P.", role: "Dermatologist", location: "Gurgaon", img: drPramil, text: "The advanced aesthetic procedures training was exactly what I needed to expand my practice. Highly recommended for doctors." },
  { name: "Dr Kavita S.", role: "General Physician", location: "Mumbai", img: drAnu, text: "I wanted to add aesthetics to my clinic. The structured curriculum and live demonstrations gave me the skills and confidence to do so." },
  { name: "Dr Rohan B.", role: "Cosmetic Surgeon", location: "Pune", img: drJasdeep, text: "Excellent faculty and world-class protocols. This program is a must for any doctor looking to enter the aesthetic space." },
];

type Testimonial = typeof studentTestimonials[0];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="glass-card border-black/5 rounded-[2rem] p-6 shadow-sm min-w-[300px] w-[340px] md:w-[380px] shrink-0 snap-center flex items-start gap-4 hover:border-accent/30 transition-all duration-300 bg-white">
    {/* Profile Photo */}
    <div className="w-14 h-14 rounded-full overflow-hidden border border-accent/20 shrink-0 shadow-sm">
      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
    </div>
    {/* Content details */}
    <div className="flex-1 min-w-0 space-y-2">
      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Alumna • {t.location}</p>
      <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed italic">"{t.text}"</p>
      <div>
        <p className="text-accent font-bold text-sm tracking-tight">{t.name}</p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{t.role}</p>
      </div>
    </div>
  </div>
);

const ScrollRow = ({ items, icon: Icon, title }: { items: Testimonial[]; icon: typeof GraduationCap; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{title}</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full bg-white border-black/5 hover:bg-black/5 text-foreground hover:text-black" onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft className="h-4.5 w-4.5" />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full bg-white border-black/5 hover:bg-black/5 text-foreground hover:text-black" onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight className="h-4.5 w-4.5" />
          </Button>
        </div>
      </div>
      <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: "none" }}>
        {items.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </div>
  );
};

const StudentSuccess = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Our Students' Reviews
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Testimonials</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Stats counter cells */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto my-12 border-t border-b border-black/5 py-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-gradient-gold">500+</p>
          <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-2">Therapists Trained</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center border-l border-black/5">
          <p className="text-3xl md:text-5xl font-bold text-gradient-rose">200+</p>
          <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-2">Doctors Trained</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center border-l border-black/5">
          <p className="text-3xl md:text-5xl font-bold text-gradient-gold">13,000+</p>
          <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-2">Patients Treated</p>
        </motion.div>
      </div>

      <ScrollRow items={studentTestimonials} icon={GraduationCap} title="Skincare & Cosmetology Alumni" />
      <ScrollRow items={doctorTestimonials} icon={Stethoscope} title="Medical Practitioners" />
    </div>
  </section>
);

export default StudentSuccess;
