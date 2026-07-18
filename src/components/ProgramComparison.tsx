import { motion } from "framer-motion";
import { Check, X, Shield, Star, Award, GraduationCap, Building } from "lucide-react";

interface ComparisonRow {
  feature: string;
  desc: string;
  workshop: string;
  standard: string;
  sasa: string;
  isHighlight?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Instructors & Mentorship",
    desc: "Who leads the lectures and hands-on sessions?",
    workshop: "Freelance trainers / non-medical consultants",
    standard: "General academy lecturers (non-practicing)",
    sasa: "Dr Jasdeep Kaur (MD Dermatologist, 15+ Yrs Exp) & Dr Vikas Kathuria (Senior Neurosurgeon)",
    isHighlight: true,
  },
  {
    feature: "Clinical Practice Basis",
    desc: "What do trainees practice on?",
    workshop: "Dummy heads, silicon pads, or peer-on-peer observation",
    standard: "Very limited model practice, mostly textbook theory",
    sasa: "100% real patient clinical cases inside a fully-equipped medical neurology & dermatology clinic",
    isHighlight: true,
  },
  {
    feature: "Advanced Medical Lasers",
    desc: "Hands-on calibration on aesthetic devices?",
    workshop: "Demo-only or basic beauty-grade tools",
    standard: "Shared device observations, minimal direct usage",
    sasa: "Direct clinical operation of Soprano Platinum, Q-Switch laser, Cooltech fat freezing, and Vivace MNRF",
    isHighlight: false,
  },
  {
    feature: "Accreditation & Trust",
    desc: "How recognized is the certificate?",
    workshop: "Unaccredited workshop attendance certificate",
    standard: "Standard local academy diploma",
    sasa: "Dual certified from Skin Aura Clinic & Skill Academy + Dun & Bradstreet registered (D-U-N-S® 87-422-3559)",
    isHighlight: true,
  },
  {
    feature: "Curriculum Scope",
    desc: "Structure of learning pathway?",
    workshop: "Single topic (e.g., just Botox or just Peels) in 1 day",
    standard: "Generic salon-focused beauty training syllabus",
    sasa: "5 Levels of modular growth (basic anatomy to advanced clinical treatments + clinic business masterclass)",
    isHighlight: false,
  },
  {
    feature: "Learning Support",
    desc: "Support resources & tools?",
    workshop: "Printout handout sheet, no follow-up support",
    standard: "Traditional paper books or basic web portal",
    sasa: "24/7 Premium responsive LMS mobile app, interactive case reviews, quizzes, and live doubt-clearing panels",
    isHighlight: false,
  },
  {
    feature: "Placement & Business Guidance",
    desc: "Help with jobs or launching a clinic?",
    workshop: "None",
    standard: "Standard job board references",
    sasa: "100% placement assistance, interview prep, plus equipment sourcing & clinic launch blueprint",
    isHighlight: true,
  },
];

export default function ProgramComparison() {
  return (
    <section id="compare" className="py-10 md:py-16 bg-background relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
            <Shield className="h-4.5 w-4.5 text-primary" /> Strategic Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">
            How We Compare
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            See why medical practitioners and beauty aspirants choose Skin Aura Skill Academy over standard classroom academies and short workshops.
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 backdrop-blur-md shadow-lg">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gradient-to-r from-[#F5F0E9] to-[#FAF8F5] border-b border-black/5">
                <th className="p-6 text-sm font-bold text-foreground w-[22%]">Features & Details</th>
                <th className="p-6 text-sm font-bold text-muted-foreground w-[24%] text-center">
                  <div className="flex flex-col items-center">
                    <span className="p-2 rounded-xl bg-black/5 text-muted-foreground mb-2">
                      <Award className="h-5 w-5" />
                    </span>
                    <span>Short-Term Workshops</span>
                    <span className="text-[10px] font-semibold text-muted-foreground/60 mt-0.5">Dermacurve Style</span>
                  </div>
                </th>
                <th className="p-6 text-sm font-bold text-muted-foreground w-[24%] text-center">
                  <div className="flex flex-col items-center">
                    <span className="p-2 rounded-xl bg-black/5 text-muted-foreground mb-2">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <span>Standard Academies</span>
                    <span className="text-[10px] font-semibold text-muted-foreground/60 mt-0.5">Alive Institute Style</span>
                  </div>
                </th>
                <th className="p-6 text-sm font-bold text-accent w-[30%] text-center bg-accent/5 border-l border-r border-accent/20">
                  <div className="flex flex-col items-center">
                    <span className="p-2 rounded-xl bg-accent text-white mb-2 shadow-sm animate-pulse">
                      <Building className="h-5 w-5" />
                    </span>
                    <span className="font-bold text-foreground text-base">Skin Aura Skill Academy</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent mt-0.5">Our Clinic Programs</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-black/5 transition-colors duration-200 hover:bg-black/2 ${
                    row.isHighlight ? "bg-accent/[0.01]" : ""
                  }`}
                >
                  <td className="p-6 border-r border-black/5">
                    <p className="font-bold text-foreground text-xs sm:text-sm tracking-tight">{row.feature}</p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{row.desc}</p>
                  </td>
                  <td className="p-6 text-center text-xs text-muted-foreground/90 leading-relaxed border-r border-black/5 bg-white/40">
                    <div className="flex flex-col items-center gap-2">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>{row.workshop}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center text-xs text-muted-foreground/90 leading-relaxed border-r border-black/5 bg-white/40">
                    <div className="flex flex-col items-center gap-2">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>{row.standard}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center text-xs font-medium text-foreground leading-relaxed bg-accent/[0.04] border-l border-r border-accent/20">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600 shrink-0 stroke-[3px]" />
                      <strong className="text-foreground tracking-wide">{row.sasa}</strong>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Collapses into side-by-side cards */}
        <div className="lg:hidden space-y-8">
          {comparisonData.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              {row.isHighlight && (
                <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-2xl bg-accent text-[9px] font-bold text-white uppercase tracking-wider">
                  Key Distinction
                </div>
              )}
              <h3 className="font-bold text-foreground text-sm tracking-tight">{row.feature}</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{row.desc}</p>
              
              <div className="grid gap-4 mt-6 pt-4 border-t border-black/5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <X className="h-3.5 w-3.5 text-red-400 shrink-0" />
                    <span>Short-Term Workshops (Dermacurve Style)</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground pl-5.5 leading-relaxed">{row.workshop}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <X className="h-3.5 w-3.5 text-red-400 shrink-0" />
                    <span>Standard Academies (Alive Style)</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground pl-5.5 leading-relaxed">{row.standard}</p>
                </div>

                <div className="space-y-1 bg-accent/5 p-3 rounded-xl border border-accent/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 stroke-[3.5px]" />
                    <span>SASA Elite Clinic Programs</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground pl-6 leading-relaxed">{row.sasa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
