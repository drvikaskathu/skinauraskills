import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Film, 
  Sparkles,
  Smartphone,
  Eye
} from "lucide-react";

// Import video assets
import downloadVideo from "@/assets/video/download.mp4";
import video3 from "@/assets/video/video3.mp4";
import video4 from "@/assets/video/video4.mp4";
import video5 from "@/assets/video/video5.mp4";

interface Reel {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  views: string;
}

const reelsData: Reel[] = [
  {
    id: 1,
    src: downloadVideo,
    title: "Clinical Laser Procedures",
    category: "Aesthetic Dermatology",
    description: "Witness our students getting hands-on clinical exposure with advanced laser systems under professional guidance.",
    views: "2.4k views"
  },
  {
    id: 2,
    src: video3,
    title: "Advanced Injections & Fillers",
    category: "Cosmetology Workshop",
    description: "Mentors demonstrating the precise art and science of injectable procedures on live patient models.",
    views: "1.8k views"
  },
  {
    id: 3,
    src: video4,
    title: "Operative Training Sections",
    category: "Neurosurgery Training",
    description: "Inside the surgical training theater with Dr. Vikas Kathuria, reviewing complex neuro-anatomy and procedures.",
    views: "3.2k views"
  },
  {
    id: 4,
    src: video5,
    title: "Hands-on Practical Practice",
    category: "Student Practice Lab",
    description: "Interactive practice sessions where students refine their clinical methods using the latest tools.",
    views: "1.5k views"
  }
];

// individual card component to handle local hover play/pause safely
const ReelCard = ({ 
  reel, 
  index, 
  onOpen 
}: { 
  reel: Reel; 
  index: number; 
  onOpen: (idx: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (err) {
        // Safe check for hover interruption errors
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (err) {
        // Safe check
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(index)}
      className="group relative aspect-[9/16] w-full bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg border border-black/5 cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-primary/30"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={reel.src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

      {/* Glassmorphism Category Badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white/90 uppercase tracking-wider">
        {reel.category}
      </div>

      {/* Play/View Indicator in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 1 : 0 }}
          className="p-4 rounded-full bg-primary/80 backdrop-blur-sm text-white shadow-md transition-all duration-300"
        >
          <Play className="h-6 w-6 fill-current text-white translate-x-0.5" />
        </motion.div>
      </div>

      {/* Bottom text info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 pointer-events-none">
        <div className="flex items-center gap-1.5 text-accent text-[11px] font-bold uppercase tracking-wider">
          <Film className="h-3 w-3" /> Reel Snippet
        </div>
        <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-primary transition-colors">
          {reel.title}
        </h3>
        <p className="text-white/70 text-xs line-clamp-2 mt-1">
          {reel.description}
        </p>
        
        {/* Play count */}
        <div className="flex items-center gap-1 text-[10px] text-white/40 mt-2">
          <Eye className="h-3 w-3" />
          <span>{reel.views}</span>
        </div>
      </div>

      {/* Hover top border glow */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default function ReelVideosSection() {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Sync play/pause state when modal index or play state changes
  useEffect(() => {
    if (activeReelIndex !== null && modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.play().catch(() => {
          // Handled auto play failure
        });
      } else {
        modalVideoRef.current.pause();
      }
    }
  }, [activeReelIndex, isPlaying]);

  // Handle key controls for modal (Esc, spacebar, arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeReelIndex === null) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReelIndex, isPlaying]);

  const openModal = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    setVideoProgress(0);
  };

  const closeModal = () => {
    setActiveReelIndex(null);
    setVideoProgress(0);
  };

  const handleNext = () => {
    if (activeReelIndex === null) return;
    const nextIdx = (activeReelIndex + 1) % reelsData.length;
    setActiveReelIndex(nextIdx);
    setIsPlaying(true);
    setVideoProgress(0);
  };

  const handlePrev = () => {
    if (activeReelIndex === null) return;
    const prevIdx = (activeReelIndex - 1 + reelsData.length) % reelsData.length;
    setActiveReelIndex(prevIdx);
    setIsPlaying(true);
    setVideoProgress(0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      const current = modalVideoRef.current.currentTime;
      const duration = modalVideoRef.current.duration;
      if (duration > 0) {
        setVideoProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalVideoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      modalVideoRef.current.currentTime = percentage * modalVideoRef.current.duration;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-slate-50/50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-1.5"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" /> Academy Snippets
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight"
          >
            Clinical Training in Action
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Watch a selection of quick reels from our active workshops, hands-on clinical treatments, and neural-aesthetic practice sessions.
          </motion.p>
        </div>

        {/* Reels Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reelsData.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={index}
              onOpen={openModal}
            />
          ))}
        </div>
      </div>

      {/* Modern Fullscreen Reels Modal */}
      <AnimatePresence>
        {activeReelIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Direct Close on Background Click */}
            <div className="absolute inset-0 cursor-default" onClick={closeModal} />

            {/* Immersive Phone Shell Player */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-[420px] aspect-[9/16] rounded-[2.5rem] bg-zinc-950 border-4 border-zinc-800 shadow-2xl overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal
            >
              {/* Camera Notch decoration */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-full z-30 pointer-events-none flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black mr-2" />
                <div className="w-16 h-1 bg-zinc-700 rounded-full" />
              </div>

              {/* Video Element */}
              <div className="relative flex-grow w-full h-full group bg-black">
                <video
                  ref={modalVideoRef}
                  src={reelsData[activeReelIndex].src}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlay}
                />

                {/* Progress bar overlay at bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 cursor-pointer z-30 transition-all hover:h-2.5"
                  onClick={handleProgressBarClick}
                >
                  <div 
                    className="h-full bg-primary relative transition-all"
                    style={{ width: `${videoProgress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Ambient Play/Pause Notification icon */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
                    >
                      <div className="p-5 rounded-full bg-white/10 backdrop-blur-md">
                        <Play className="h-10 w-10 fill-current text-white translate-x-0.5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Upper UI overlays */}
                <div className="absolute top-10 left-6 right-6 flex justify-between items-center z-20 pointer-events-none">
                  {/* Category badge */}
                  <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                    {reelsData[activeReelIndex].category}
                  </span>
                  
                  {/* Views count */}
                  <span className="text-[11px] font-semibold text-white/90 drop-shadow flex items-center gap-1 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <Smartphone className="h-3 w-3 text-accent" /> Live
                  </span>
                </div>

                {/* Bottom Overlay content inside the player */}
                <div className="absolute bottom-6 left-6 right-16 z-20 text-white space-y-2 pointer-events-none drop-shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-xs text-white border border-white/25">
                      SA
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide">Skin Aura Skill Academy</h4>
                      <span className="text-[10px] text-white/70">Training Academy</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base leading-snug">
                    {reelsData[activeReelIndex].title}
                  </h3>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-3">
                    {reelsData[activeReelIndex].description}
                  </p>
                </div>

                {/* Control Sidebar overlay on the right inside player */}
                <div className="absolute bottom-8 right-4 z-20 flex flex-col gap-5 items-center">
                  {/* Mute Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white border border-white/10 hover:border-white/30 transition-all active:scale-95"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>

                  {/* Play/Pause toggle */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white border border-white/10 hover:border-white/30 transition-all active:scale-95"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current translate-x-0.5" />}
                  </button>

                  {/* Close button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); closeModal(); }}
                    className="p-3 rounded-full bg-rose-500/80 hover:bg-rose-500 backdrop-blur-sm text-white border border-rose-400/20 transition-all active:scale-95"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Carousel navigation buttons outside the phone frame */}
            <div className="absolute left-4 right-4 sm:left-12 sm:right-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none max-w-4xl mx-auto w-full z-20">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 pointer-events-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 pointer-events-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>

            {/* Small instructional helper */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold tracking-wider pointer-events-none uppercase">
              Use ← / → Arrows or Space to Control
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
