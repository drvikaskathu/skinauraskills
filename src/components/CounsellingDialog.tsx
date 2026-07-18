import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Sparkles } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255),
  background: z.string().min(1, "Please select your background"),
  experience: z.string().min(1, "Please select your experience"),
  level: z.string().min(1, "Please select your current level"),
  income: z.string().min(1, "Please select an income range"),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

interface CounsellingDialogProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export const CounsellingDialog = ({ children, onOpenChange }: CounsellingDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        errs[err.path[0] as string] = err.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thank you! 🌸",
        description: "Our academy counsellor will reach out within 24 hours.",
      });
      setForm({});
      handleOpenChange(false);
    }, 1000);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-black/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative">
        <div className="mb-6 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Direct Admissions
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Start Your <span className="text-gradient-gold">Aesthetic Career</span> Journey
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto">
            Fill in the information below – a course advisor will reach out within 24 hours.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Full Name</label>
              <Input
                placeholder="Your name"
                value={form.name ?? ""}
                onChange={(e) => update("name", e.target.value)}
                className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground placeholder:text-muted-foreground/60"
              />
              {errors.name && <p className="text-[11px] text-destructive font-bold mt-1">{errors.name}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Phone Number</label>
              <Input
                placeholder="+91 …"
                value={form.phone ?? ""}
                onChange={(e) => update("phone", e.target.value)}
                className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground placeholder:text-muted-foreground/60"
                inputMode="tel"
              />
              {errors.phone && <p className="text-[11px] text-destructive font-bold mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Email Address</label>
            <Input
              placeholder="you@example.com"
              type="email"
              value={form.email ?? ""}
              onChange={(e) => update("email", e.target.value)}
              className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground placeholder:text-muted-foreground/60"
              inputMode="email"
            />
            {errors.email && <p className="text-[11px] text-destructive font-bold mt-1">{errors.email}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Educational Background</label>
              <Select value={form.background ?? ""} onValueChange={(v) => update("background", v)}>
                <SelectTrigger className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground">
                  <SelectValue placeholder="Select background" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-black/10">
                  <SelectItem value="12th-pass" className="text-sm hover:bg-black/5">12th Pass Student</SelectItem>
                  <SelectItem value="graduate" className="text-sm hover:bg-black/5">Graduate (Non-Medical)</SelectItem>
                  <SelectItem value="paramedical" className="text-sm hover:bg-black/5">Paramedical / Nursing</SelectItem>
                  <SelectItem value="bams-bhms" className="text-sm hover:bg-black/5">BAMS / BHMS / BDS</SelectItem>
                  <SelectItem value="mbbs" className="text-sm hover:bg-black/5">MBBS / Medical Graduate</SelectItem>
                  <SelectItem value="md-derm" className="text-sm hover:bg-black/5">MD Dermatology</SelectItem>
                  <SelectItem value="other" className="text-sm hover:bg-black/5">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.background && <p className="text-[11px] text-destructive font-bold mt-1">{errors.background}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Cosmetic Experience</label>
              <Select value={form.experience ?? ""} onValueChange={(v) => update("experience", v)}>
                <SelectTrigger className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground">
                  <SelectValue placeholder="Are you a fresher?" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-black/10">
                  <SelectItem value="fresher" className="text-sm hover:bg-black/5">Complete Fresher</SelectItem>
                  <SelectItem value="less-1" className="text-sm hover:bg-black/5">Less than 1 year</SelectItem>
                  <SelectItem value="1-3" className="text-sm hover:bg-black/5">1 – 3 years</SelectItem>
                  <SelectItem value="3-plus" className="text-sm hover:bg-black/5">3+ years experienced</SelectItem>
                </SelectContent>
              </Select>
              {errors.experience && <p className="text-[11px] text-destructive font-bold mt-1">{errors.experience}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Current Skill Level</label>
              <Select value={form.level ?? ""} onValueChange={(v) => update("level", v)}>
                <SelectTrigger className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground">
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-black/10">
                  <SelectItem value="beginner" className="text-sm hover:bg-black/5">Beginner — Just starting out</SelectItem>
                  <SelectItem value="intermediate" className="text-sm hover:bg-black/5">Intermediate — Basic knowledge</SelectItem>
                  <SelectItem value="advanced" className="text-sm hover:bg-black/5">Advanced — Currently practicing</SelectItem>
                  <SelectItem value="expert" className="text-sm hover:bg-black/5">Expert — Looking to upskill</SelectItem>
                </SelectContent>
              </Select>
              {errors.level && <p className="text-[11px] text-destructive font-bold mt-1">{errors.level}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Monthly Income Target</label>
              <Select value={form.income ?? ""} onValueChange={(v) => update("income", v)}>
                <SelectTrigger className="rounded-xl bg-white border-black/10 focus:border-accent/40 text-sm text-foreground">
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-black/10">
                  <SelectItem value="none" className="text-sm hover:bg-black/5">No income yet (Student)</SelectItem>
                  <SelectItem value="lt-25k" className="text-sm hover:bg-black/5">Below ₹25,000</SelectItem>
                  <SelectItem value="25-50k" className="text-sm hover:bg-black/5">₹25,000 – ₹50,000</SelectItem>
                  <SelectItem value="50k-1l" className="text-sm hover:bg-black/5">₹50,000 – ₹1,00,000</SelectItem>
                  <SelectItem value="1-2l" className="text-sm hover:bg-black/5">₹1,00,000 – ₹2,00,000</SelectItem>
                  <SelectItem value="2l-plus" className="text-sm hover:bg-black/5">Above ₹2,00,000</SelectItem>
                </SelectContent>
              </Select>
              {errors.income && <p className="text-[11px] text-destructive font-bold mt-1">{errors.income}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-wider text-foreground/60 block">Your Career Goals (optional)</label>
            <Textarea
              placeholder="Tell us what you'd like to achieve in the cosmetology space…"
              value={form.message ?? ""}
              onChange={(e) => update("message", e.target.value)}
              className="rounded-xl bg-white border border-black/10 focus:border-accent/40 text-sm text-foreground min-h-[70px] placeholder:text-muted-foreground/60"
            />
          </div>

          <Button type="submit" className="w-full py-6 rounded-full text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102" disabled={loading}>
            {loading ? "Submitting Inquiry..." : "Apply for Counselling"}
          </Button>

          <p className="text-[9px] text-muted-foreground text-center font-bold uppercase tracking-wider pt-2">
            By submitting, you agree to be contacted by Skin Aura Skill Academy advisors.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
