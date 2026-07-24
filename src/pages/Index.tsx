import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import AboutSection from "@/components/AboutSection";
import ReelVideosSection from "@/components/ReelVideosSection";
import PlatformFeatures from "@/components/PlatformFeatures";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CoursesSection from "@/components/CoursesSection";
import ClinicWorkshops from "@/components/ClinicWorkshops";
import HandsOnTraining from "@/components/HandsOnTraining";
import EbookSection from "@/components/EbookSection";
import ClarityCallCTA from "@/components/ClarityCallCTA";
import StudentSuccess from "@/components/StudentSuccess";
import CertificateSection from "@/components/CertificateSection";
import ClinicExpertise from "@/components/ClinicExpertise";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCounsellingButtons from "@/components/FloatingCounsellingButtons";
import InternshipHero from "@/components/InternshipHero";
import EnrollmentForm from "@/components/EnrollmentForm";
import ProgramStructure from "@/components/ProgramStructure";
import InternshipPricing from "@/components/InternshipPricing";
import AuthorityTrust from "@/components/AuthorityTrust";
import ProgramComparison from "@/components/ProgramComparison";
import InternshipFinalCTA from "@/components/InternshipFinalCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeatureStrip />
    <ReelVideosSection />
    <AboutSection />
    <PlatformFeatures />
    <WhoShouldJoin />
    <CoursesSection />
    <ClinicWorkshops />

    {/* Internship Program Sections */}
    <InternshipHero />
    <ProgramStructure />
    <InternshipPricing />
    <AuthorityTrust />
    <ProgramComparison />
    <InternshipFinalCTA />

    <HandsOnTraining />
    <EbookSection />
    <ClarityCallCTA />
    <StudentSuccess />
    <CertificateSection />
    <ClinicExpertise />
    <CTASection />
    <EnrollmentForm />
    <Footer />
    <FloatingWhatsApp />
    <FloatingCounsellingButtons />
  </div>
);

export default Index;
