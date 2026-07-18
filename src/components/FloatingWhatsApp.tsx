import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918586844718";

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Skin%20Aura%20Skill%20Academy%20courses.`}
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
