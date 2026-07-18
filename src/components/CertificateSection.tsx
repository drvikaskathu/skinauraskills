import { motion } from "framer-motion";

const CertificateSection = () => (
  <section className="py-10 md:py-16 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="bg-gradient-to-r from-[#F5F0E9] to-[#FAF8F5] border border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Text Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
              Skin Aura Skill Academy — A Trusted Name in Aesthetic Education
            </h2>
            
            <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
              Skin Aura Skill Academy is proud to be recognized as one of India's most progressive and trusted institutions in beauty, wellness, and aesthetic medicine training. With a growing network of professionals and alumni, our academy stands for excellence, integrity, and career-driven education.
            </p>
            
            <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
              What does this mean for you as a student? When you train at SASA, you're learning from a reputable brand that's shaping the future of the aesthetic industry. Our certified programs and hands-on teaching methods are designed to give you a strong edge in both national and international career opportunities. As we continue to expand our curriculum and upgrade our infrastructure, your journey with us becomes even more future-ready and globally aligned.
            </p>
          </motion.div>

          {/* Right Column: D&B Certificate Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center w-full"
          >
            {/* Certificate visual mockup with vector green & gold curves */}
            <div className="relative w-full max-w-[460px] aspect-[1.414/1] bg-white border border-black/10 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden p-[4%] flex flex-col justify-between items-center text-center">
              
              {/* Top-Left Green/Gold Corner decoration */}
              <div className="absolute top-0 left-0 w-[30%] h-[30%] overflow-hidden pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M 0 0 L 100 0 C 80 40, 40 80, 0 100 Z" fill="#0A3622" />
                  <path d="M 0 100 C 40 80, 80 40, 100 0 L 105 0 C 85 45, 45 85, 0 105 Z" fill="#C08728" />
                </svg>
              </div>

              {/* Bottom-Right Green/Gold Corner decoration */}
              <div className="absolute bottom-0 right-0 w-[30%] h-[30%] overflow-hidden pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full rotate-180" preserveAspectRatio="none">
                  <path d="M 0 0 L 100 0 C 80 40, 40 80, 0 100 Z" fill="#0A3622" />
                  <path d="M 0 100 C 40 80, 80 40, 100 0 L 105 0 C 85 45, 45 85, 0 105 Z" fill="#C08728" />
                </svg>
              </div>

              {/* Inner Frame Border */}
              <div className="absolute inset-[3%] border border-[#0A3622]/10 rounded-xl pointer-events-none" />

              {/* Top Logo Area */}
              <div className="z-10 mt-[2%] flex flex-col items-center">
                <h4 className="text-[3.2vw] md:text-[14px] font-bold text-[#0A3622] tracking-[0.15em] font-sans">
                  SKIN AURA
                </h4>
                <p className="text-[1.8vw] md:text-[7.5px] text-[#0A3622] font-semibold tracking-[0.25em] uppercase mt-0.5">
                  SKIN • HAIR • LASER • CLINIC
                </p>
              </div>

              {/* Certificate Content */}
              <div className="z-10 w-full px-[5%] space-y-1 md:space-y-1.5 mt-[1%]">
                <p className="text-[2vw] md:text-[8px] text-[#333] font-medium tracking-wide">
                  This is to certify that
                </p>
                <h3 className="text-[3.2vw] md:text-[13px] font-bold text-[#111] tracking-tight uppercase">
                  SKIN AURA SKILL ACADEMY
                </h3>
                <p className="text-[1.8vw] md:text-[7.5px] text-muted-foreground leading-normal max-w-[85%] mx-auto font-medium">
                  H.N. 7311, GF & Basement, behind Supermart 2, DLF Phase IV, Sector 43, Gurugram, Haryana 122009
                </p>
                
                <div className="w-[75%] h-px bg-black/5 mx-auto my-1" />

                <p className="text-[1.8vw] md:text-[7.5px] text-[#444] leading-normal font-medium max-w-[90%] mx-auto">
                  is now part of the Dun & Bradstreet Global Database and has been assigned the
                </p>
                
                <p className="text-[2.2vw] md:text-[9.5px] font-bold text-[#111] tracking-wider uppercase mt-1">
                  D&B D-U-N-S® Number: 87-422-3559
                </p>
                
                <p className="text-[1.8vw] md:text-[8px] font-bold text-[#444] mt-0.5">
                  23rd April 2024
                </p>
              </div>

              {/* Footer disclaimer */}
              <div className="z-10 w-full px-[6%] mb-[2%]">
                <p className="text-[1.2vw] md:text-[5px] text-muted-foreground leading-tight max-w-[95%] mx-auto">
                  The fact that this business is registered in the D&B database should not be construed as suggesting that credit or any other financial or business transaction should be approved, denied, restricted or delayed. It only signifies that there is sufficient information in the database to assign a D&B D-U-N-S® Number. D&B D-U-N-S® Number is a registered number of Dun & Bradstreet Corporation, USA. This is a computer generated certificate and needs no signature.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
);

export default CertificateSection;
