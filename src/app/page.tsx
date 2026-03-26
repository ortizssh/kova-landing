import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";
import VideoDemo from "@/components/VideoDemo";
import Features from "@/components/Features";
import WidgetShowcase from "@/components/WidgetShowcase";
import VoiceCalling from "@/components/VoiceCalling";
import Integrations from "@/components/Integrations";
import ValueStack from "@/components/ValueStack";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import EarlyAccess from "@/components/EarlyAccess";
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
        <Hero />
        <Metrics />
        <HowItWorks />
        <VideoDemo />
        <Features />
        <WidgetShowcase />
        <VoiceCalling />
        <Integrations />
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
