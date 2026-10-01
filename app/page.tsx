import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { GrowthStack } from "@/components/sections/GrowthStack";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Results } from "@/components/sections/Results";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <GrowthStack />
        <HowItWorks />
        <Pricing />
        <Results />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
