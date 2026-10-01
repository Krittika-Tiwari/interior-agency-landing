import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IntakeForm } from "@/components/sections/IntakeForm";
import { Metrics } from "@/components/sections/Metrics";
import { MobileNav } from "@/components/sections/MobileNav";
import { Phases } from "@/components/sections/Phases";
import { Stack } from "@/components/sections/Stack";

export default function Home() {
  return (
    <div id="top" className="pb-20 md:pb-0">
      <Header />
      <main className="pt-16">
        <Hero />
        <Stack />
        <Phases />
        <Metrics />
        <IntakeForm />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
