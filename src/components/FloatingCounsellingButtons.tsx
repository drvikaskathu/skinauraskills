import { CounsellingDialog } from "@/components/CounsellingDialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FloatingCounsellingButtons = () => {
  return (
    <>
      {/* Bottom-right floating button (mobile: above WhatsApp) */}
      <div className="fixed bottom-24 right-4 z-40 sm:hidden">
        <CounsellingDialog>
          <Button
            size="sm"
            className="rounded-full h-11 px-4 shadow-2xl bg-primary hover:bg-primary/95 text-primary-foreground text-[10px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Sparkles className="w-4 h-4 mr-1.5" /> Apply
          </Button>
        </CounsellingDialog>
      </div>

      {/* Bottom-right floating button (desktop: above WhatsApp) */}
      <div className="fixed bottom-24 right-6 z-40 hidden sm:block">
        <CounsellingDialog>
          <Button
            size="lg"
            className="rounded-full h-12 px-6 shadow-2xl bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-103"
          >
            <Sparkles className="w-4 h-4 mr-2" /> Apply for Counselling
          </Button>
        </CounsellingDialog>
      </div>
    </>
  );
};

export default FloatingCounsellingButtons;
