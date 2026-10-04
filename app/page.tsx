import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Programs } from "@/components/sections/programs";
import { Achievements } from "@/components/sections/achievements";
import { CTA } from "@/components/sections/cta";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-royal-950 font-sans selection:bg-gold-500/30">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


