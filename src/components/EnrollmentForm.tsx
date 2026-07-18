import { CounsellingDialog } from "@/components/CounsellingDialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

const EnrollmentForm = () => {
  return (
    <section id="apply" className="py-10 sm:py-16 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 glass-card border-black/5 rounded-[3rem] p-8 md:p-14 shadow-sm bg-white">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mx-auto animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
            Start Your <span className="text-gradient-gold font-bold italic font-sans">Aesthetic Career</span> Journey
          </h2>
          
          <p className="max-w-xl mx-auto text-muted-foreground text-xs sm:text-sm sm:text-base leading-relaxed">
            Tell us about your educational background — our specialist academic team will guide you to the right certification within 24 hours.
          </p>

          <CounsellingDialog>
            <Button size="lg" className="mt-4 py-6 rounded-full px-8 text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-103">
              <Calendar className="w-4 h-4 mr-2" /> Apply for Counselling
            </Button>
          </CounsellingDialog>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;
