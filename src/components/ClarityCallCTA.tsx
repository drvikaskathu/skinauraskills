import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Stethoscope, Phone, Users, Clock, MessageCircle, Star } from "lucide-react";

const WHATSAPP_STUDENT_GROUP = "https://chat.whatsapp.com/Gx3fqR5cCdMCjWAMXgtv17?mode=gi_t";
const WHATSAPP_DOCTOR_GROUP = "https://chat.whatsapp.com/GB4QiX0mWK0GhDs77nAJ8q?mode=gi_t";

const paths = [
  {
    icon: GraduationCap,
    title: "For 12th Pass Students",
    subtitle: "Start Your Skin Therapist Career",
    desc: "Confused about how to start a career in aesthetics after 12th? Book a clarity call with our team and get personalised guidance.",
    benefits: [
      "Understand the full course structure",
      "Learn about career opportunities & salary",
      "Get answers to all your questions",
    ],
    whatsappLink: WHATSAPP_STUDENT_GROUP,
    accentBorder: "border-primary/20",
  },
  {
    icon: Stethoscope,
    title: "For Doctors",
    subtitle: "Expand Into Aesthetic Medicine",
    desc: "Want to add aesthetic dermatology to your practice? Join our exclusive group for doctors and attend a clarity session.",
    benefits: [
      "Explore aesthetic medicine opportunities",
      "Learn about hands-on clinical training",
      "Connect with fellow medical professionals",
    ],
    whatsappLink: WHATSAPP_DOCTOR_GROUP,
    accentBorder: "border-accent/20",
  },
];

const ClarityCallCTA = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Take the First Step
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">
          Book Your Clarity Call
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Not sure which path is right for you? Join our WhatsApp group for a group clarity session and get all your doubts cleared.
        </p>
      </motion.div>

      {/* Highlights */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs text-foreground/80 font-bold tracking-wide uppercase">
          <Clock className="h-4 w-4 text-accent" />
          15-Minute Session
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs text-foreground/80 font-bold tracking-wide uppercase">
          <Users className="h-4 w-4 text-accent" />
          Live on WhatsApp
        </div>
      </div>

      {/* Two Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {paths.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`glass-card rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 border-2 ${p.accentBorder} flex flex-col justify-between bg-white`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 shrink-0 shadow-sm">
                  <p.icon className="h-7 w-7 text-primary animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-gradient-gold font-bold uppercase tracking-wider mt-0.5">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">{p.desc}</p>

              <ul className="space-y-3 mb-8 border-t border-black/5 pt-5">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                    <MessageCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button size="lg" className="w-full py-6 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md shadow-green-500/10 transition-transform duration-300 hover:scale-102 flex items-center justify-center gap-2" asChild>
                <a href={p.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Users className="h-4.5 w-4.5 text-white fill-white" />
                  Join Now
                </a>
              </Button>
              <p className="text-[10px] text-muted-foreground text-center mt-2.5 font-bold uppercase tracking-wider">
                Join WhatsApp Group → Attend Clarity Webinar
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClarityCallCTA;
