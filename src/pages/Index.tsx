import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFitness from "@/components/WhyFitness";
import TrainBanner from "@/components/TrainBanner";
import Services from "@/components/Services";
import Transformation from "@/components/Transformation";
import ContactFooter from "@/components/ContactFooter";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhyFitness />
    <TrainBanner />
    <Services />
    <Transformation />
    <ContactFooter />
  </div>
);

export default Index;
