import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehiclesSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VehiclesSection />
      <ServicesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
