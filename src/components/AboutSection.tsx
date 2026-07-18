import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Sparkles, Youtube, Instagram, Facebook } from "lucide-react";
import drJasdeep from "@/assets/dr-jasdeep.png";
import drVikas from "@/assets/dr-vikas-kathuria.png";

const doctors = [
  {
    name: "Dr Jasdeep Kaur",
    title: "MBBS, DDVL – Dermatologist & Cosmetologist",
    role: "Founder, Skin Aura Skill Academy",
    tag: "Founder & Lead Mentor",
    location: "DLF Phase IV, Gurugram",
    mapLink: "https://maps.app.goo.gl/u7P7hBmmfRok9p5N9",
    image: drJasdeep,
    shortBio:
      "Dr Jasdeep Kaur is a trusted dermatologist and cosmetologist on a mission to train the next generation of aesthetic professionals. With over 15 years of clinical practice and having treated more than 13,000+ patients, she brings unmatched real-world expertise to every training session.",
    fullBio:
      "She runs an advanced laser aesthetic practice at DLF Phase IV, Gurugram and has personally mentored hundreds of skin therapists and doctors in aesthetic medicine. She is a Certified Cosmetologist with 15+ years of experience, Founder of Skin Aura Brain and Spine Neuro Centre, and the Author of Acne Decoded.",
    socials: [
      { icon: Youtube, href: "https://youtube.com/@skinauraclinic" },
      { icon: Instagram, href: "https://instagram.com/sabclinicggn" },
      { icon: Facebook, href: "https://facebook.com/SkinAuraBrainAndSpineNeuroCentre" },
    ],
  },
  {
    name: "Dr Vikas Kathuria",
    title: "MBBS, MS, M.Ch (Neurosurgery)",
    role: "Operative Section Instructor | Senior Consultant, Max Hospital, Gurgaon",
    tag: "Clinical Neurosurgery Instructor",
    location: "DLF Phase IV, Gurugram",
    mapLink: "https://maps.app.goo.gl/u7P7hBmmfRok9p5N9",
    image: drVikas,
    shortBio:
      "Dr Vikas Kathuria is a distinguished neurosurgeon in India with over 22 years of experience, recognised as one of the top neurosurgeons in Gurgaon and the Delhi NCR region. He specialises in surgical treatment of the brain and spine and has treated 1.5 lakh+ patients.",
    fullBio:
      "Dr Vikas completed his MBBS and M.S. from PGI Rohtak, Haryana, followed by super-specialisation in Neurosurgery from Sheth V.S. General Hospital & Medical College, Ahmedabad. He also holds a Neuroendoscopy Fellowship from NSCB Govt. Medical College, Jabalpur.\n\nHis areas of expertise include brain tumour surgeries, brain haemorrhage treatment, Deep Brain Stimulation (DBS) for movement disorders, trauma surgeries for severe head injuries, and spine surgeries for lumbar and cervical disorders. He is a specialist in Spinal Cord Stimulation, Peripheral Nerve Surgery, Neuropathy & Neuropsychiatry.\n\nDr Vikas is a proud member of the Neurological Society of India (NSI), the Neuro Spinal Surgeons Association (NSSA), and the Indian Medical Association (IMA). His approachable demeanour and commitment to excellence have made him one of the most sought-after neurosurgeons in India.",
    socials: [],
  },
];

const DoctorCard = ({ doctor }: { doctor: (typeof doctors)[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card glass-card-hover border-black/5 rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col justify-between bg-white h-full relative"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />

      <div>
        {/* Profile Image Frame */}
        <div className="aspect-[4/3] w-full overflow-hidden relative bg-muted border-b border-black/5">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80 pointer-events-none" />
          
          {/* Floating Role Tag */}
          <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-[10px] font-bold uppercase tracking-wider text-accent shadow-sm">
            {doctor.tag}
          </div>
        </div>

        {/* Details & Biography */}
        <div className="p-6 md:p-8 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">{doctor.name}</h3>
            <p className="text-gradient-gold text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">{doctor.title}</p>
            <p className="text-muted-foreground text-[11px] italic mt-0.5 leading-snug">{doctor.role}</p>
            
            <a
              href={doctor.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-[11px] font-semibold mt-2.5 hover:underline tracking-wide"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {doctor.location}
            </a>
          </div>

          <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">{doctor.shortBio}</p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-muted-foreground text-xs leading-relaxed border-t border-black/5 pt-4 mt-3 space-y-3">
                  {doctor.fullBio.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-primary hover:bg-primary/5 px-4 py-2 rounded-full border border-primary/20 text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
        >
          {expanded ? "Read Less" : "Read More"}
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        {doctor.socials && doctor.socials.length > 0 && (
          <div className="flex gap-2">
            {doctor.socials.map((s, si) => {
              const Icon = s.icon;
              return (
                <a
                  key={si}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/5 border border-black/5 text-foreground/60 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1">
          <Sparkles className="h-4.5 w-4.5 text-primary animate-pulse" /> Meet Your Mentors
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">About Us</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name} doctor={doctor} />
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
