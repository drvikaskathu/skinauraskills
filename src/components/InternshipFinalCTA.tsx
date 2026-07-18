import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const InternshipFinalCTA = () => (
  <section className="py-10 md:py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(342_15%_95%)] via-background to-background relative overflow-hidden border-t border-black/5 border-b border-black/5" aria-label="Apply for Internship – Final Call to Action">
    {/* Soft light glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-6 glass-card border-black/5 rounded-[3rem] p-8 md:p-14 shadow-xl relative bg-white"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" /> Direct Enrollment
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Don't Just Learn Skin — <br />
          <span className="text-gradient-gold">Master It</span> with Real Experience
        </h2>
        
        <p className="text-foreground/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Limited clinical slots are available to guarantee personalized training on live lasers and real patients. Secure your seat today and transform your career path.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102">
            <a href="#internship-pricing">Apply for Internship Now</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-transform duration-300 hover:scale-102">
            <a
              href="https://api.whatsapp.com/send/?phone=918586844718&text=Hi%2C+I+want+to+know+more+about+Skin+Aura+Skill+Academy+courses.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4.5 w-4.5 text-green-500 fill-green-500" />
              WhatsApp Counsellor
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InternshipFinalCTA;
