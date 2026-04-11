import { LandingNavbar } from "@/components/LandingNavbar";
import { Hero } from "@/components/Hero";
import { HomeAbout } from "@/components/HomeAbout";
import { Features } from "@/components/Features";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <LandingNavbar />
      <Hero />
      <HomeAbout />
      <Features />
      <WorkSection />
    </main>
  );
}