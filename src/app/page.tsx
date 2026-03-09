import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";
import VideoDemo from "@/components/VideoDemo";
import Features from "@/components/Features";
import WidgetShowcase from "@/components/WidgetShowcase";
import VoiceCalling from "@/components/VoiceCalling";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import EarlyAccess from "@/components/EarlyAccess";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
        <Pricing />
        <EarlyAccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
