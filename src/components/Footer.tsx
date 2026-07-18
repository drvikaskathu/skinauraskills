import { MapPin, Mail, Phone, MessageCircle, Youtube, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-gradient-to-b from-[hsl(260_24%_8%)] to-[hsl(260_24%_4%)] text-white/80 pt-16 pb-12 border-t border-white/5 relative overflow-hidden">
    {/* Decorative premium background glow blobs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

    {/* Elegant thin gradient border line at top */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-accent/40" />

    <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/5">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Skin Aura Skill Academy" 
              className="h-14 w-auto filter brightness-100 invert transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs font-light">
            Professional aesthetic dermatology and cosmetology training by Dr Jasdeep Kaur. Empowering the next generation of certified skin therapists.
          </p>
          <div className="flex gap-3 pt-2">
            {[
              { href: "https://youtube.com/@skinauraclinic?si=W8u4_mwseJ8JCpeS", icon: Youtube, label: "YouTube", color: "hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 hover:text-[#FF0000]" },
              { href: "https://www.instagram.com/sabclinicggn?igsh=MXZ0cG5ycGtzbHFqMw==", icon: Instagram, label: "Instagram", color: "hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 hover:text-[#E1306C]" },
              { href: "https://www.facebook.com/sabclinicggn", icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:text-[#1877F2]" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ${s.color}`}
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Learning Hub Links Column */}
        <div className="space-y-6">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Learning Hub
          </h4>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "#about" },
              { label: "Courses", href: "#courses" },
              { label: "Training Centre", href: "#training" },
              { label: "Clinic Services", href: "#clinic" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group flex items-center text-xs sm:text-sm text-white/60 hover:text-primary transition-all duration-300 tracking-wide font-light"
                >
                  <span className="w-0 group-hover:w-2.5 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "All Courses", href: "https://learn.skinauraskillacademy.com/s/store/courses/All%20Courses" },
              { label: "SAB Clinic", href: "https://www.sabclinic.com/" },
              { label: "Dr Jasdeep Kaur Portal", href: "https://www.drjasdeepkaur.com/" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-xs sm:text-sm text-white/60 hover:text-primary transition-all duration-300 tracking-wide font-light"
                >
                  <span className="w-0 group-hover:w-2.5 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <span className="truncate">{l.label}</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Contact Us
          </h4>
          <div className="space-y-4 text-xs sm:text-sm text-white/60">
            <div className="flex items-start gap-3">
              <MapPin className="h-4.5 w-4.5 mt-0.5 shrink-0 text-accent" />
              <a
                href="https://maps.app.goo.gl/1jEtrbu2ZCHBugX76"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors leading-relaxed font-light hover:underline underline-offset-4"
              >
                H.N. 7311, GF & Basement, behind Supermart 2, DLF Phase IV, Sector 43, Gurugram, Haryana 122009
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 text-accent shrink-0" />
              <a href="mailto:connect@sabclinic.com" className="hover:text-primary transition-colors font-light">
                connect@sabclinic.com
              </a>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/5">
              <a
                href="https://api.whatsapp.com/send/?phone=918586844718&text=Hi%2C+I+want+to+know+more+about+Skin+Aura+Skill+Academy+courses.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-xs sm:text-sm font-bold text-green-400 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 fill-green-400/10" />
                +91 85868 44718 (WhatsApp)
              </a>
              
              <div className="flex flex-col gap-2 pl-1 pt-1">
                <a
                  href="tel:+918586844718"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/60 transition-colors font-light"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-accent/50" />
                  Call: +91 85868 44718
                </a>
                <a
                  href="tel:+919217175260"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/60 transition-colors font-light"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-accent/50" />
                  Call: +91 92171 75260
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embed map and copyright line */}
      <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-[11px] text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Skin Aura Skill Academy. All rights reserved.
          </p>
          <p className="text-[10px] text-white/20 font-light tracking-wide">
            Designed for excellence in Medical Cosmetology & Aesthetic Medicine.
          </p>
        </div>
        
        {/* Rounded Map Container - elegant & centered next to text, or clean responsive fit */}
        <div className="w-full md:w-96 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] shrink-0 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(217,43,96,0.1)]">
          <iframe
            title="Skin Aura Skill Academy – Location Map"
            src="https://www.google.com/maps?q=H.N.+7311,+behind+Supermart+2,+DLF+Phase+IV,+Sector+43,+Gurugram,+Haryana+122009&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.1) invert(0.9) contrast(1.2)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
