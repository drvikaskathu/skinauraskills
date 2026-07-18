import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, GraduationCap } from "lucide-react";
import level1 from "@/assets/course-level-1.png";
import level2 from "@/assets/course-level-2.png";
import level3 from "@/assets/course-level-3.png";
import level4 from "@/assets/course-level-4.png";
import level5 from "@/assets/course-level-5.png";
import webinar from "@/assets/webinar.png";

const courses = [
  { 
    img: level1, 
    title: "Level 1 – Foundation", 
    desc: "Foundation Skin & Clinic Assistant", 
    details: "Master skin anatomy, sterile protocols, client consultation, hygiene standards, and basic medi-facials.", 
    duration: "1 Month", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 4.8 
  },
  { 
    img: level2, 
    title: "Level 2 – Intermediate", 
    desc: "Advanced Aesthetic Assistant", 
    details: "Advance to chemical peeling, microdermabrasion, hydrafacial mechanics, and basic laser safety procedures.", 
    duration: "2 Months", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 4.9 
  },
  { 
    img: level3, 
    title: "Level 3 – Silver Membership", 
    desc: "Silver Membership for Doctors", 
    details: "Detailed aesthetic practice modules for medicos: lasers, PRP, chemical peeling, and skin condition treatment plans.", 
    duration: "3 Months", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 4.8 
  },
  { 
    img: level4, 
    title: "Level 4 – Diamond Membership", 
    desc: "Diamond Membership for Doctors", 
    details: "Premium aesthetic medicine training including microneedling radiofrequency (MNRF), fat freezing, and anti-aging care.", 
    duration: "6 Months", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 4.9 
  },
  { 
    img: level5, 
    title: "Level 5 – Quantum Membership", 
    desc: "Quantum Membership for Clinic Founders", 
    details: "Exclusive clinic management, marketing, equipment sourcing, neuro-aesthetic training, and business growth masterclass.", 
    duration: "1 Year", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 5.0 
  },
  { 
    img: webinar, 
    title: "Webinar", 
    desc: "Live Interactive Webinar", 
    details: "Live, intensive interactive online training focusing on acne, pigmentation, or laser science questions.", 
    duration: "2 Hours", 
    instructor: "Dr Jasdeep Kaur", 
    rating: 4.7 
  },
];

const CoursesSection = () => (
  <section id="courses" className="py-10 md:py-16 bg-background relative overflow-hidden" aria-label="Courses">
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <GraduationCap className="h-4.5 w-4.5 text-primary" /> Popular Courses
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Our Top Courses</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group glass-card border-black/5 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent/30 hover:shadow-[0_15px_40px_rgba(192,135,40,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between bg-white"
          >
            <div>
              {/* Image Showcase */}
              <div className="aspect-video bg-secondary/30 overflow-hidden relative border-b border-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
                <img
                  src={c.img}
                  alt={`${c.title} – ${c.desc} by ${c.instructor}`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-100"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>

              {/* Course Detail text */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300 text-base sm:text-lg leading-snug tracking-tight">
                    {c.title}
                  </h3>
                </div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider">
                  {c.duration}
                </div>
                <p className="text-foreground/90 font-medium text-xs">
                  {c.desc}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {c.details}
                </p>
              </div>
            </div>

            {/* Ratings & CTA footer */}
            <div className="p-6 pt-0 space-y-4">
              <div className="flex items-center justify-between border-t border-black/5 pt-4">
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  Instructor: <span className="text-foreground">{c.instructor}</span>
                </p>
                <div className="flex items-center gap-0.5" aria-label={`Rating: ${c.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-3 w-3 ${si < Math.floor(c.rating) ? "text-accent fill-accent" : "text-black/10"}`}
                    />
                  ))}
                  <span className="text-[10px] text-accent font-bold ml-1">{c.rating}</span>
                </div>
              </div>

              <Button size="sm" className="w-full py-5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-all duration-300" asChild>
                <a href="https://learn.skinauraskillacademy.com/s/store" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                </a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300">
          <a href="https://learn.skinauraskillacademy.com/s/store/courses/All%20Courses" target="_blank" rel="noopener noreferrer">
            View All Courses <ArrowRight className="ml-2 h-4.5 w-4.5 animate-pulse" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CoursesSection;
