import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, DollarSign } from "lucide-react";

const plans = [
  {
    name: "15 Days Intensive",
    price: "₹34,999",
    badge: null,
    applyLink: "https://learn.skinauraskillacademy.com/courses/15-Days-Intensive-Clinical-Cosmetology-Internship-69e1f0c66796fbaa62bf0c43",
    applyButtonClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-sm shadow-amber-500/10",
    features: [
      "Fast-track hands-on exposure",
      "Basic to intermediate procedures",
      "Ideal for cosmetic beginners",
      "Professional certificate of completion",
    ],
  },
  {
    name: "1 Month Advanced",
    price: "₹49,999",
    badge: "Most Recommended",
    applyLink: "https://learn.skinauraskillacademy.com/courses/1-Month-Advanced-Aesthetic-Internship-69e1f59a5b09ebe2717c4c83",
    applyButtonClass: "bg-gradient-to-r from-primary to-rose-600 hover:from-primary/95 hover:to-rose-700 text-white border-0 shadow-md shadow-primary/25",
    features: [
      "Deeper clinical practice",
      "Advanced procedures & confidence building",
      "Extended real patient interaction",
      "Priority certification + doubt support",
    ],
  },
  {
    name: "2 Months Pro",
    price: "₹69,999",
    badge: "Best Value & Career Path",
    applyLink: "https://learn.skinauraskillacademy.com/courses/2-Months-Pro-Job-Ready-Skin-Therapist-Internship-69e1f70c9c7e7867ab1886e2",
    applyButtonClass: "bg-gradient-to-r from-accent to-amber-500 hover:from-accent hover:to-amber-600 text-white border-0 shadow-lg shadow-accent/25",
    features: [
      "Complete job-ready skin therapist path",
      "Maximum real clinical patient exposure",
      "Priority certificate + job placement assistance",
      "1-on-1 private mentorship sessions",
    ],
  },
];

const InternshipPricing = () => (
  <section id="internship-pricing" className="py-10 md:py-16 bg-background relative overflow-hidden" aria-label="Internship Pricing Plans">
    {/* Soft light glow */}
    <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <DollarSign className="h-4.5 w-4.5 text-primary" /> Investment in Your Future
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Choose Your Clinical Exposure Level
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative rounded-3xl border overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between bg-white ${
              i === 2
                ? "border-accent/40 ring-2 ring-accent/10 shadow-accent/5"
                : i === 1
                ? "border-primary/40 ring-2 ring-primary/5 shadow-primary/5"
                : "border-black/5"
            }`}
          >
            {/* Custom highlight badge */}
            {plan.badge && (
              <div
                className={`absolute top-0 right-0 text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-2xl flex items-center gap-1.5 ${
                  i === 2
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <Star className="h-3 w-3 fill-current animate-pulse" />
                {plan.badge}
              </div>
            )}
            
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2">{plan.name}</h3>
                <div className="w-8 h-0.5 bg-black/10" />
              </div>

              <p
                className={`text-4xl md:text-5xl font-bold ${
                  i === 2 ? "text-gradient-gold" : i === 1 ? "text-gradient-rose" : "text-foreground"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {plan.price}
              </p>
              
              <ul className="space-y-3.5 border-t border-black/5 pt-6">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                    <Check
                      className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${
                        i === 2 ? "text-accent" : i === 1 ? "text-primary" : "text-amber-500"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 space-y-3">
              <Button
                className={`w-full py-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${plan.applyButtonClass}`}
                size="lg"
                asChild
              >
                <a href={plan.applyLink} target={plan.applyLink.startsWith("http") ? "_blank" : undefined} rel={plan.applyLink.startsWith("http") ? "noopener noreferrer" : undefined}>
                  Apply Now
                </a>
              </Button>
              <Button 
                className="w-full py-6 rounded-full text-xs font-bold uppercase tracking-wider border-black/10 text-foreground/80 hover:bg-black/5 hover:text-black transition-all duration-300" 
                size="lg" 
                variant="outline" 
                asChild
              >
                <a
                  href="https://wa.me/919050224433?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20Internship%20Program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to Counsellor
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InternshipPricing;
