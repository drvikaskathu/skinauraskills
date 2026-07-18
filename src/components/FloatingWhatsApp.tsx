import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=918586844718&text=Hi%2C+I+want+to+know+more+about+Skin+Aura+Skill+Academy+courses.&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 group flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    {/* Floating glow circle */}
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none scale-105" />
    <MessageCircle className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:rotate-6" />
  </a>
);

export default FloatingWhatsApp;
