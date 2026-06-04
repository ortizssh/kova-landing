import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VoiceCalling from "@/components/VoiceCalling";
import PhotoRecommend from "@/components/PhotoRecommend";
import UseCases from "@/components/UseCases";
import VideoDemo from "@/components/VideoDemo";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WidgetShowcase from "@/components/WidgetShowcase";
import Comparison from "@/components/Comparison";
import Integrations from "@/components/Integrations";
import EarlyAccess from "@/components/EarlyAccess";
import ValueStack from "@/components/ValueStack";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import StickyBanner from "@/components/StickyBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hook de alto ticket */}
        <Hero />
        {/* Diferenciadores que importan al comprador premium */}
        <VoiceCalling />
        <PhotoRecommend />
        {/* Prueba específica del nicho */}
        <UseCases />
        <VideoDemo />
        {/* Cómo + qué incluye */}
        <HowItWorks />
        <Features />
        <WidgetShowcase />
        <Comparison />
        <Integrations />
        {/* Prueba social y ROI */}
        <EarlyAccess />
        <ValueStack />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <PromoPopup />
      <StickyBanner />
    </>
  );
}
